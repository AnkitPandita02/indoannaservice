"use client";

import Link from "next/link";

export default function FloatingContact() {
  const whatsappNumber = "919625578934";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="floating-contact">
      {/* LINE */}
      <Link
        href="https://line.me/ti/p/Awn1mKdYQv"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-contact-btn line-btn"
        aria-label="Contact us on LINE"
        title="Chat with us on LINE"
      >
        <svg
          viewBox="0 0 48 48"
          width="28"
          height="28"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M24 5C12.95 5 4 12.3 4 21.3c0 8.05 7.15 14.75 16.8 16.05.65.1 1.55.35 1.8.8.2.4.15 1.05.05 1.65l-.3 1.7c-.1.5-.4 1.95 1.7 1.05 2.1-.9 11.3-6.65 15.4-11.4C42.3 28 44 24.8 44 21.3 44 12.3 35.05 5 24 5Z"
          />
          <g fill="#06C755">
            <path d="M13 17h2v9h-2zM18 17h2v9h-2zM23 17h2v9h-2z" />
          </g>
          <path
            fill="#fff"
            d="M14 17h2v9h-2zm5 0h2v9h-2zm5 0h2v9h-2zm5 0h2v9h-2z"
          />
        </svg>
      </Link>

      {/* WhatsApp */}
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-contact-btn whatsapp-btn"
        aria-label="Contact us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          width="29"
          height="29"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16 .5A15.3 15.3 0 0 0 2.8 23.5L1 31l7.7-2A15.3 15.3 0 1 0 16 .5Zm0 27.8a12.5 12.5 0 0 1-6.4-1.8l-.5-.3-4.6 1.2 1.2-4.5-.3-.5A12.5 12.5 0 1 1 16 28.3Zm6.9-9.4c-.4-.2-2.1-1-2.4-1.1-.3-.1-.6-.2-.8.2-.3.4-.9 1.1-1.1 1.3-.2.2-.4.3-.8.1-.4-.2-1.5-.6-2.9-1.8-1.1-1-1.8-2.2-2-2.6-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.7.1-.2 0-.5 0-.7-.1-.2-.8-2-1.1-2.7-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.1s1.3 3.5 1.5 3.7c.2.2 2.6 4 6.4 5.6.9.4 1.6.6 2.1.7.9.3 1.7.2 2.3.1.7-.1 2.1-.9 2.4-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.7-.5Z" />
        </svg>
      </Link>
    </div>
  );
}