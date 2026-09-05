import Navbar from "../navbar/Navbar";
import MorphText from "../ui/morph-text";

export default function Header() {
  return (
    <>
      <Navbar />

      {/* ================================================================
          Hero Section
          - حداقل ارتفاع برابر با ارتفاع صفحه
          - Responsive در تمام اندازه‌ها
          - فضای کافی برای Navbar ثابت
      ================================================================= */}

      <section
        dir="rtl"
        id="home"
        className="flex min-h-dvh w-full items-center"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-center gap-12 px-4 pb-16 pt-28 sm:px-6 sm:pt-32 md:gap-16 md:pb-20 lg:flex-row lg:justify-between lg:px-8 lg:pb-28 lg:pt-28">
          {/* ============================================================
              Right Side — Profile
          ============================================================= */}

          <div className="flex w-full flex-col items-center justify-center lg:w-1/2">
            {/* Profile Image */}
            <div className="flex h-65 w-65 items-center justify-center overflow-hidden rounded-full bg-[#263047] sm:h-80 sm:w-80 lg:h-100 lg:w-100">
              <img
                src="/img/me.webp"
                alt="تصویر پروفایل"
                className="h-full w-full object-cover "
              />
            </div>

            {/* Availability Status */}
            <a
              href="#contact"
              className="mt-6 flex items-center gap-2 text-sm font-medium text-[#36E0BF] transition-opacity duration-200 hover:opacity-80 sm:text-base"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#36E0BF]" />
              در دسترس برای پروژه های جدید
            </a>
          </div>

          {/* ============================================================
              Left Side — Hero Content
          ============================================================= */}

          <div className="flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-right">
            {/* Greeting */}
            <p className="text-lg font-bold text-[#9EABC2] sm:text-xl md:text-2xl">
              سلام من
            </p>

            {/* Main Heading */}
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.2] tracking-tight text-[#F2F7FF] sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              یک توسعه دهنده{" "}
              <span className="relative text-[#36E0BF] lg:-right-20">
                <MorphText
                  words={["frontend", "backend", "MERN stack"]}
                  interval={3000}
                  fontSize="50px"
                  fontFamily='"sans", sans-serif'
                />
              </span>{" "}
              هستم.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-150 text-base font-medium leading-8 text-[#9EABC2] sm:text-lg">
              وب اپلیکیشن های مدرن سریع و قابل اعتماد میسازم، با تمرکز روی تجربه
              کاربری عملکرد و کد تمیز.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              {/* Projects Button */}
              <a
                href="#projects"
                className="inline-flex min-h-12.5 items-center justify-center rounded-[9px] bg-[#36E0BF] px-6 py-3 text-sm font-bold text-[#090E1C] transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
              >
                مشاهده پروژه ها
              </a>

              {/* About Button */}
              <a
                href="#about"
                className="inline-flex min-h-12.5 items-center justify-center rounded-[9px] bg-[#171F33] px-6 py-3 text-sm font-bold text-[#F2F7FF] transition-all duration-200 hover:bg-[#202a42] active:scale-[0.98]"
              >
                درباره من
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
