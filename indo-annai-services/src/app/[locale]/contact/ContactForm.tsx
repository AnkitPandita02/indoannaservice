"use client";

import { useState } from "react";

type ContactFormProps = {
  ja: boolean;
};

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const ALLOWED_SERVICES = [
  "Travel & Tours",
  "Interpretation",
  "Accommodation",
  "Business Support",
  "Japanese Lessons",
  "Other",
];

export default function ContactForm({ ja }: ContactFormProps) {
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");
  const [loading, setLoading] = useState(false);

  const validateField = (
    name: keyof ContactFormData,
    rawValue: string
  ): string => {
    const value = rawValue.trim();

    switch (name) {
      case "name":
        if (!value) {
          return ja ? "お名前を入力してください。" : "Please enter your full name.";
        }

        if (value.length < 2 || value.length > 100) {
          return ja
            ? "お名前は2～100文字で入力してください。"
            : "Name must be between 2 and 100 characters.";
        }

        // Supports letters from different languages, spaces, apostrophes,
        // periods, and hyphens in names.
        if (!/^[\p{L}\p{M}][\p{L}\p{M}\s.'’-]*$/u.test(value)) {
          return ja
            ? "お名前に数字や使用できない記号は入力できません。"
            : "Name may contain letters, spaces, apostrophes, periods, and hyphens only.";
        }

        return "";

      case "email":
        if (!value) {
          return ja
            ? "メールアドレスを入力してください。"
            : "Please enter your email address.";
        }

        if (value.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return ja
            ? "有効なメールアドレスを入力してください。"
            : "Please enter a valid email address.";
        }

        return "";

      case "phone": {
        if (!value) {
          return ja
            ? "電話番号を入力してください。"
            : "Please enter your phone number.";
        }

        if (!/^\+?[0-9\s().-]+$/.test(value)) {
          return ja
            ? "電話番号に使用できない文字が含まれています。"
            : "Phone number contains invalid characters.";
        }

        const digits = value.replace(/\D/g, "");

        if (digits.length < 7 || digits.length > 15) {
          return ja
            ? "電話番号は7～15桁で入力してください。"
            : "Phone number must contain between 7 and 15 digits.";
        }

        if (value.startsWith("+") && !/^\+[0-9\s().-]+$/.test(value)) {
          return ja
            ? "電話番号の形式が正しくありません。"
            : "Please enter a valid phone number.";
        }

        return "";
      }

      case "service":
        if (!value) {
          return ja
            ? "ご希望のサービスを選択してください。"
            : "Please select a service.";
        }

        if (!ALLOWED_SERVICES.includes(value)) {
          return ja
            ? "有効なサービスを選択してください。"
            : "Please select a valid service.";
        }

        return "";

      case "message":
        if (!value) {
          return ja
            ? "お問い合わせ内容を入力してください。"
            : "Please enter your message.";
        }

        if (value.length < 10 || value.length > 5000) {
          return ja
            ? "お問い合わせ内容は10～5000文字で入力してください。"
            : "Message must be between 10 and 5,000 characters.";
        }

        return "";

      default:
        return "";
    }
  };

  const validateForm = (): ContactFormErrors => {
    const nextErrors: ContactFormErrors = {};

    (Object.keys(INITIAL_FORM) as (keyof ContactFormData)[]).forEach(
      (field) => {
        const error = validateField(field, form[field]);

        if (error) {
          nextErrors[field] = error;
        }
      }
    );

    return nextErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    const field = name as keyof ContactFormData;

    if (!(field in INITIAL_FORM)) return;

    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear or update the field's error as the user corrects it.
    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, value) || undefined,
    }));

    setStatus("");
    setStatusType("");
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const field = e.target.name as keyof ContactFormData;

    if (!(field in INITIAL_FORM)) return;

    const error = validateField(field, form[field]);

    setErrors((prev) => ({
      ...prev,
      [field]: error || undefined,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    const nextErrors = validateForm();
    setErrors(nextErrors);
    setStatus("");
    setStatusType("");

    if (Object.values(nextErrors).some(Boolean)) {
      setStatus(
        ja
          ? "入力内容を確認し、エラーを修正してください。"
          : "Please correct the errors below before submitting."
      );
      setStatusType("error");
      return;
    }

    setLoading(true);

    try {
      const payload: ContactFormData = {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        service: form.service,
        message: form.message.trim(),
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result.message ||
            (ja
              ? "送信に失敗しました。もう一度お試しください。"
              : "Failed to send your enquiry. Please try again.")
        );
      }

      setStatus(
        ja
          ? "お問い合わせを送信しました。ありがとうございます！"
          : "Thank you! Your enquiry has been sent successfully."
      );
      setStatusType("success");
      setForm(INITIAL_FORM);
      setErrors({});
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : ja
            ? "送信できませんでした。もう一度お試しください。"
            : "Unable to send your enquiry. Please try again."
      );
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="detail-panel contact-panel">
      <span className="eyebrow">
        {ja ? "お問い合わせフォーム" : "SEND AN ENQUIRY"}
      </span>

      <h2>{ja ? "お気軽にご相談ください" : "How can we help you?"}</h2>

      <p className="contact-form-description">
        {ja
          ? "すべての項目にご記入ください。"
          : "Please complete all fields and we'll get back to you."}
      </p>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
        noValidate
        aria-busy={loading}
      >
        <div className="contact-form-field">
          <label htmlFor="name">
            {ja ? "お名前" : "Full Name"} *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder={ja ? "お名前を入力" : "Enter your full name"}
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={100}
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p className="contact-field-error" id="name-error">
              {errors.name}
            </p>
          )}
        </div>

        <div className="contact-form-field">
          <label htmlFor="email">
            {ja ? "メールアドレス" : "Email Address"} *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={254}
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p className="contact-field-error" id="email-error">
              {errors.email}
            </p>
          )}
        </div>

        <div className="contact-form-field">
          <label htmlFor="phone">
            {ja ? "電話番号" : "Phone Number"} *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder={ja ? "+81 90-1234-5678" : "+91 98765 43210"}
            value={form.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={25}
            required
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p className="contact-field-error" id="phone-error">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="contact-form-field">
          <label htmlFor="service">
            {ja ? "ご希望のサービス" : "Service Required"} *
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="">
              {ja ? "サービスを選択" : "Select a service"}
            </option>
            <option value="Travel & Tours">
              {ja ? "旅行・ツアー" : "Travel & Tours"}
            </option>
            <option value="Interpretation">
              {ja ? "通訳サービス" : "Interpretation"}
            </option>
            <option value="Accommodation">
              {ja ? "宿泊施設" : "Accommodation"}
            </option>
            <option value="Business Support">
              {ja ? "ビジネスサポート" : "Business Support"}
            </option>
            <option value="Japanese Lessons">
              {ja ? "日本語レッスン" : "Japanese Lessons"}
            </option>
            <option value="Other">{ja ? "その他" : "Other"}</option>
          </select>
          {errors.service && (
            <p className="contact-field-error" id="service-error">
              {errors.service}
            </p>
          )}
        </div>

        <div className="contact-form-field">
          <label htmlFor="message">
            {ja ? "お問い合わせ内容" : "Your Message"} *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder={
              ja
                ? "ご希望やご質問を10文字以上でご記入ください..."
                : "Tell us about your requirements (at least 10 characters)..."
            }
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={5000}
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p className="contact-field-error" id="message-error">
              {errors.message}
            </p>
          )}
        </div>

        {status && (
          <p
            className={`contact-form-status ${
              statusType === "error" ? "is-error" : "is-success"
            }`}
            role={statusType === "error" ? "alert" : "status"}
            aria-live="polite"
          >
            {status}
          </p>
        )}

        <button
          type="submit"
          className="button button-primary contact-submit"
          disabled={loading}
        >
          {loading
            ? ja
              ? "送信中..."
              : "Sending..."
            : ja
              ? "お問い合わせを送信"
              : "Send Enquiry"}{" "}
          {!loading && "↗"}
        </button>
      </form>
    </div>
  );
}