import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof service !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !service.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { message: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    if (
      name.length > 150 ||
      email.length > 254 ||
      (typeof phone !== "string" && phone != null) ||
      (typeof phone === "string" && phone.length > 40) ||
      service.length > 100 ||
      message.length > 5000 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      return NextResponse.json(
        { message: "Please check your submitted details." },
        { status: 400 },
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASSWORD;
    const recipient = process.env.CONTACT_TO_EMAIL;

    if (!host || !user || !pass || !recipient) {
      console.error("Contact email environment variables are missing.");

      return NextResponse.json(
        { message: "Email service is not configured." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    await transporter.sendMail({
      from: `"NDO ANNAI SERVICE" <${user}>`,
      to: recipient,
      replyTo: email.trim(),
      subject: `Website Enquiry: ${service.trim()}`,
      text: [
        "New enquiry received from the NDO ANNAI SERVICE website.",
        "",
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        `Phone: ${typeof phone === "string" ? phone.trim() : "Not provided"}`,
        `Service: ${service.trim()}`,
        "",
        "Message:",
        message.trim(),
      ].join("\n"),
    });

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form email error:", error);

    return NextResponse.json(
      { message: "Unable to send your enquiry. Please try again later." },
      { status: 500 },
    );
  }
}
