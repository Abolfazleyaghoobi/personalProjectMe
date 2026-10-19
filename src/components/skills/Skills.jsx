"use client";

import { useEffect, useState } from "react";

/* ==========================================================================
   Skills Data
   --------------------------------------------------------------------------
   برای اضافه کردن، حذف یا تغییر مهارت‌ها فقط این قسمت را ویرایش کن.
============================================================================ */

const skillCategories = [
  {
    title: "FRONTEND",
    skills: [
      "React",
      "JavaScript",
      "HTML / CSS",
      "Tailwind CSS",
      "TypeScript",
    ],
  },

  {
    title: "BACKEND",
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "Authentication",
      "JWT",
      "API Design",
    ],
  },

  {
    title: "DATABASE",
    skills: [
      "MongoDB",
      "MySQL",
    ],
  },

  {
    title: "TOOLS",
    skills: [
      "Git / GitHub",
      "Vite",
      "Postman",
      "Linux",
      "Docker",
    ],
  },
];

/* ==========================================================================
   Skills Component
============================================================================ */

export default function Skills() {
  /*
   * وضعیت باز یا بسته بودن هر کارت
   */
  const [openItems, setOpenItems] = useState(
    skillCategories.map(() => false)
  );

  /* ==========================================================================
     Responsive Behavior
     --------------------------------------------------------------------------
     بالای 992px:
       تمام کارت‌ها باز هستند.

     992px و پایین‌تر:
       تمام کارت‌ها بسته هستند.
  ========================================================================== */

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth > 992;

      setOpenItems(skillCategories.map(() => isDesktop));
    };

    // اجرای اولیه
    handleResize();

    // بررسی تغییر اندازه صفحه
    window.addEventListener("resize", handleResize);

    // پاک کردن Event Listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* ==========================================================================
     Toggle Card
     --------------------------------------------------------------------------
     فقط در موبایل و تبلت اجازه باز و بسته شدن کارت وجود دارد.
  ========================================================================== */

  const toggleItem = (index) => {
    // روی دسکتاپ کارت‌ها همیشه باز هستند.
    if (window.innerWidth > 992) {
      return;
    }

    setOpenItems((prev) =>
      prev.map((isOpen, itemIndex) =>
        itemIndex === index ? !isOpen : isOpen
      )
    );
  };

  return (
    <section
      id="skills"
      dir="rtl"
      className="flex min-h-dvh w-full items-center"
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-7xl
          flex-col
          px-4
          py-16
          sm:px-6
          md:py-20
          lg:px-8
          lg:py-28
        "
      >

        {/* ================================================================
            Section Header
        ================================================================= */}

        <div className="text-center">

          {/* عنوان اصلی */}
          <h1
            className="
              text-3xl
              font-extrabold
              text-[#F2F7FF]
              sm:text-4xl
              md:text-5xl
            "
          >
            مهارت ها و تکنولوژی ها
          </h1>

          {/* توضیحات */}
          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              font-medium
              leading-8
              text-[#9EABC2]
              sm:text-lg 
            "
          >
            ابزارهایی که با آن ها ایده را به محصول تبدیل میکن.
          </p>

        </div>

        {/* ================================================================
            Skills Cards
        ================================================================= */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            min-[993px]:grid-cols-4
            lg:mt-20
          "
          dir="ltr"
        >

          {skillCategories.map((category, index) => {
            const isOpen = openItems[index];

            return (
              <div
                key={category.title}
                className="
                  overflow-hidden
                  rounded-[14px]
                  bg-[#111729]
                  transition-all
                  duration-300

                  /* ======================================================
                     موبایل:
                     کارت وقتی بسته است ارتفاع اضافه ندارد.
                  ====================================================== */

                  min-h-0

                  /* ======================================================
                     دسکتاپ:
                     کارت‌ها بزرگ و استاندارد هستند.
                  ====================================================== */

                  min-[993px]:min-h-[360px]
                  min-[993px]:px-6
                  min-[993px]:py-7
                "
              >

                {/* ========================================================
                    Card Header
                ========================================================= */}

                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  aria-controls={`skills-${index}`}
                  className="
                    flex
                    min-h-[68px]
                    w-full
                    items-center
                    justify-between
                    px-5
                    py-4
                    text-right

                    min-[993px]:cursor-default
                    min-[993px]:px-0
                    min-[993px]:py-0
                  "
                >

                  {/* عنوان دسته */}
                  <h2
                    className="
                      text-base
                      font-extrabold
                      tracking-wide
                      text-[#36E0BF]
                      min-[993px]:text-lg
                    "
                  >
                    {category.title}
                  </h2>

                  {/* ======================================================
                      Arrow
                      فقط موبایل و تبلت
                  ======================================================= */}

                  <span
                    className={`
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-[#090E1C]
                      text-sm
                      text-[#F2F7FF]
                      transition-transform
                      duration-300
                      min-[993px]:hidden

                      ${isOpen ? "rotate-180" : "rotate-0"}
                    `}
                    aria-hidden="true"
                  >
                    ↓
                  </span>

                </button>

                {/* ========================================================
                    Card Content
                    ----------------------------------------------------------------
                    این قسمت همان چیزی است که روی موبایل باز و بسته می‌شود.
                ========================================================= */}

                <div
                  id={`skills-${index}`}
                  className={`
                    grid
                    transition-all
                    duration-300
                    ease-in-out

                    min-[993px]:grid-rows-[1fr]

                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0 min-[993px]:grid-rows-[1fr] min-[993px]:opacity-100"
                    }
                  `}
                >

                  <div className="min-h-0 overflow-hidden">

                    {/* ====================================================
                        Skills List
                    ===================================================== */}

                    <div
                      className="
                        max-h-[270px]
                        overflow-y-auto
                        px-5
                        pb-6
                        pt-4

                        min-[993px]:px-0
                        min-[993px]:pt-7

                        [scrollbar-width:none]
                        [&::-webkit-scrollbar]:hidden
                      "
                    >

                      {/* ==================================================
                          Skills
                      =================================================== */}

                      <div
                        className="
                          flex
                          flex-col
                          items-center
                          gap-3
                        "
                      >

                        {category.skills.map((skill) => (
                          <p
                            key={skill}
                            className="
                              flex
                              min-h-[48px]
                              w-full
                              items-center
                              justify-center
                              rounded-[9px]
                              bg-[#090E1C]
                              px-4
                              py-3
                              text-center
                              text-sm
                              font-medium
                              leading-5
                              text-[#F2F7FF]
                              transition-colors
                              duration-200
                              hover:bg-[#171F33]

                              min-[993px]:min-h-[52px]
                              min-[993px]:text-[15px]
                            "
                          >
                            {skill}
                          </p>
                        ))}

                      </div>

                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}