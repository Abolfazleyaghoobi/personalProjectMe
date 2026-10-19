"use client";

import { useState } from "react";

import {
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
  FaInstagram,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

/* ==========================================================================
   Contact Information
   --------------------------------------------------------------------------
   اطلاعات تماس و لینک شبکه‌های اجتماعی را فقط از این قسمت تغییر بده.
============================================================================ */

const contactInfo = {
  email: "ay2005@gmail.com",
  phone: "+989917891296",

  socialLinks: [
    {
      name: "GitHub",
      href: "https://github.com/Abolfazleyaghoobi",
      icon: FaGithub,
    },

    {
      name: "LinkedIn",
      href: "www.linkedin.com/in/abolfazle-yaghoobi-a99638348",
      icon: FaLinkedinIn,
    },

    {
      name: "Telegram",
      href: "https://t.me/h0meCode",
      icon: FaTelegramPlane,
    },

    {
      name: "Instagram",
      href: "https://www.instagram.com/abolfazle_dev?stkn=cXNuMHVvYWR6N24z",
      icon: FaInstagram,
    },
  ],
};

/* ==========================================================================
   Contact Component
============================================================================ */

export default function Contact() {
  /* ------------------------------------------------------------------------
     Form State
  ------------------------------------------------------------------------ */

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  /* ------------------------------------------------------------------------
     UI State
  ------------------------------------------------------------------------ */

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  /* ==========================================================================
     Handle Input Change
  ========================================================================== */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* ==========================================================================
     Handle Form Submit
     --------------------------------------------------------------------------
     اینجا بعداً API بک‌اند خودت را قرار می‌دهی.
  ========================================================================== */

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      /*
       * آدرس API بک‌اند خودت را اینجا قرار بده.
       *
       * مثال:
       * /api/contact
       *
       * یا:
       * https://api.example.com/contact
       */

      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("ارسال پیام با خطا مواجه شد.");
      }

      /* --------------------------------------------------------------
         ارسال موفق
      -------------------------------------------------------------- */

      setStatus({
        type: "success",
        message: "پیام شما با موفقیت ارسال شد.",
      });

      /* پاک کردن فرم */

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message: "ارسال پیام انجام نشد. لطفاً دوباره تلاش کنید.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      dir="rtl"
      className="w-full px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-28"
    >
      {/* ====================================================================
          Contact Container
          --------------------------------------------------------------------
          عمداً از max-w-6xl استفاده شده تا این بخش نسبت به کل سایت
          کمی عرض کمتری داشته باشد.
      ===================================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-6xl
          overflow-hidden
          rounded-[14px]
          bg-[#111729]
          p-5
          sm:p-7
          md:p-9
          lg:p-12
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-8
            lg:grid-cols-2
            lg:gap-12
          "
        >
          {/* ================================================================
              Left Side
          ================================================================= */}

          <div
            className="
              flex
              flex-col
              justify-center
            "
          >
            {/* Title */}

            <h2
              className="
                text-2xl
                font-extrabold
                leading-tight
                text-[#F2F7FF]
                sm:text-3xl
                md:text-4xl
              "
            >
              بیایید چیزی عالی بسازیم.
            </h2>

            {/* Contact Description */}

            <p
              className="
                mt-5
                max-w-md
                text-sm
                font-medium
                leading-7
                text-[#9EABC2]
                sm:text-base
                sm:leading-8
              "
            >
              اگر برای یک پروژه جدید، همکاری یا ایده‌ای که در ذهن دارید
              دنبال یک توسعه‌دهنده هستید، می‌توانید از طریق ایمیل یا شماره
              تماس با من در ارتباط باشید.
            </p>

            {/* ==============================================================
                Email
            =============================================================== */}

            <a
              href={`mailto:${contactInfo.email}`}
              className="
                mt-7
                w-fit
                text-sm
                font-medium
                text-[#36E0BF]
                transition-opacity
                duration-200
                hover:opacity-80
                sm:text-base
              "
            >
              {contactInfo.email}
            </a>

            {/* ==============================================================
                Phone
            =============================================================== */}

            <a
              href={`tel:${contactInfo.phone}`}
              className="
                mt-3
                w-fit
                text-sm
                font-medium
                text-[#F2F7FF]
                transition-colors
                duration-200
                hover:text-[#36E0BF]
                sm:text-base
              "
            >
              {contactInfo.phone}
            </a>

            {/* ==============================================================
                Social Links
            =============================================================== */}

            <div className="mt-7 flex flex-wrap items-center gap-3">
              {contactInfo.socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-[9px]
                      bg-[#090E1C]
                      text-[#F2F7FF]
                      transition-all
                      duration-200
                      hover:bg-[#36E0BF]
                      hover:text-[#090E1C]
                      hover:-translate-y-1
                    "
                  >
                    <Icon size={19} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ================================================================
              Right Side — Contact Form
          ================================================================= */}

          <div
            className="
              rounded-[12px]
              bg-[#090E1C]
              p-5
              sm:p-6
              md:p-7
            "
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              {/* ============================================================
                  Name
              ============================================================= */}

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-name"
                  className="text-sm font-semibold text-[#F2F7FF]"
                >
                  نام
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="نام شما"
                  required
                  autoComplete="name"
                  className="
                    h-12
                    w-full
                    rounded-[9px]
                    border
                    border-white/5
                    bg-[#111729]
                    px-4
                    text-sm
                    text-[#F2F7FF]
                    outline-none
                    placeholder:text-[#66738B]
                    transition-all
                    duration-200
                    focus:border-[#36E0BF]/50
                    focus:ring-2
                    focus:ring-[#36E0BF]/10
                  "
                />
              </div>

              {/* ============================================================
                  Email
              ============================================================= */}

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-email"
                  className="text-sm font-semibold text-[#F2F7FF]"
                >
                  ایمیل
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  required
                  autoComplete="email"
                  className="
                    h-12
                    w-full
                    rounded-[9px]
                    border
                    border-white/5
                    bg-[#111729]
                    px-4
                    text-sm
                    text-[#F2F7FF]
                    outline-none
                    placeholder:text-[#66738B]
                    transition-all
                    duration-200
                    focus:border-[#36E0BF]/50
                    focus:ring-2
                    focus:ring-[#36E0BF]/10
                  "
                />
              </div>

              {/* ============================================================
                  Message
              ============================================================= */}

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-semibold text-[#F2F7FF]"
                >
                  پیام شما
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="پیام خود را بنویسید..."
                  required
                  rows={6}
                  className="
                    min-h-[150px]
                    w-full
                    resize-none
                    rounded-[9px]
                    border
                    border-white/5
                    bg-[#111729]
                    px-4
                    py-3
                    text-sm
                    leading-7
                    text-[#F2F7FF]
                    outline-none
                    placeholder:text-[#66738B]
                    transition-all
                    duration-200
                    focus:border-[#36E0BF]/50
                    focus:ring-2
                    focus:ring-[#36E0BF]/10
                  "
                />
              </div>

              {/* ============================================================
                  Status Message
              ============================================================= */}

              {status.message && (
                <p
                  role="status"
                  className={`
                    rounded-[9px]
                    px-4
                    py-3
                    text-sm
                    font-medium
                    ${
                      status.type === "success"
                        ? "bg-[#36E0BF]/10 text-[#36E0BF]"
                        : "bg-red-500/10 text-red-400"
                    }
                  `}
                >
                  {status.message}
                </p>
              )}

              {/* ============================================================
                  Submit Button
              ============================================================= */}

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  mt-1
                  flex
                  min-h-12
                  w-full
                  items-center
                  justify-center
                  rounded-[9px]
                  bg-[#36E0BF]
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-[#090E1C]
                  transition-all
                  duration-200
                  hover:opacity-90
                  active:scale-[0.99]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {isSubmitting ? "در حال ارسال..." : "ارسال پیام"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}