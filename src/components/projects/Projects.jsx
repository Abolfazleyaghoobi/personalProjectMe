"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { FaGithub } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

import "swiper/css";
import { Link } from "react-router-dom";

/* ==========================================================================
   Projects Data
   --------------------------------------------------------------------------
   برای اضافه کردن، حذف یا تغییر پروژه‌ها فقط این قسمت را ویرایش کن.
============================================================================ */

const projects = [
  // {
  //   id: 1,

  //   title: "پروژه فروشگاه آنلاین",

  //   description:
  //     "یک فروشگاه آنلاین مدرن با رابط کاربری سریع، طراحی ریسپانسیو و ساختار قابل توسعه.",

  //   image: "/projects/project-1.png",

  //   technologies: [
  //     "React",
  //     "Node.js",
  //     "Express",
  //     "MongoDB",
  //   ],

  //   liveUrl: "https://example.com",

  //   githubUrl: "https://github.com/username/project-1",
  // },

  // {
  //   id: 2,

  //   title: "پنل مدیریت",

  //   description:
  //     "پنل مدیریت مدرن برای مدیریت کاربران، اطلاعات و داده‌های سیستم.",

  //   image: "/projects/project-2.png",

  //   technologies: [
  //     "React",
  //     "JavaScript",
  //     "Tailwind CSS",
  //     "REST API",
  //   ],

  //   liveUrl: "https://example.com",

  //   githubUrl: "https://github.com/username/project-2",
  // },

  // {
  //   id: 3,

  //   title: "وب اپلیکیشن مدیریت",

  //   description:
  //     "یک وب اپلیکیشن سریع و قابل اعتماد با تمرکز روی تجربه کاربری و عملکرد.",

  //   image: "/projects/project-3.png",

  //   technologies: [
  //     "Next.js",
  //     "Node.js",
  //     "MongoDB",
  //     "Tailwind CSS",
  //   ],

  //   liveUrl: "https://example.com",

  //   githubUrl: "https://github.com/username/project-3",
  // },

  // {
  //   id: 4,

  //   title: "پروژه چهارم",

  //   description:
  //     "یک پروژه مدرن با طراحی ریسپانسیو و ساختار مناسب برای توسعه و نگهداری.",

  //   image: "/projects/project-4.png",

  //   technologies: [
  //     "React",
  //     "Express",
  //     "MongoDB",
  //     "Tailwind CSS",
  //   ],

  //   liveUrl: "https://example.com",

  //   githubUrl: "https://github.com/username/project-4",
  // },
];

/* ==========================================================================
   Projects Component
============================================================================ */

export default function Projects() {
  return (
    <section
      id="projects"
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

        <div className="mb-12 text-center lg:mb-16">

          <h1
            className="
              text-3xl
              font-extrabold
              text-[#F2F7FF]
              sm:text-4xl
              md:text-5xl
            "
          >
            پروژه های من
          </h1>

        </div>

        {/* ================================================================
            Projects Slider
            ----------------------------------------------------------------
            Mobile  : 1 project
            Tablet  : 2 projects
            Desktop : 3 projects
        ================================================================= */}

        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop={projects.length > 3}
          speed={900}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            /* ============================================================
               Tablet
            ============================================================= */

            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            /* ============================================================
               Desktop
            ============================================================= */

            993: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="w-full"
        >

          {projects.map((project) => (
            <SwiperSlide key={project.id} className="h-auto">

              {/* ==========================================================
                  Project Card
              =========================================================== */}

              <article
                className="
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-[14px]
                  bg-[#111729]
                  p-4
                  sm:p-5
                  lg:p-6
                "
              >

                {/* ========================================================
                    Project Image
                ========================================================= */}

                <div
                  className="
                    w-full
                    overflow-hidden
                    rounded-[10px]
                  "
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      aspect-video
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      hover:scale-[1.03]
                    "
                  />
                </div>

                {/* ========================================================
                    Project Information
                ========================================================= */}

                <div
                  className="
                    flex
                    flex-1
                    flex-col
                    pt-5
                  "
                >

                  {/* Project Title */}

                  <h2
                    className="
                      text-xl
                      font-extrabold
                      text-[#F2F7FF]
                      sm:text-2xl
                    "
                  >
                    {project.title}
                  </h2>

                  {/* Project Description */}

                  <p
                    className="
                      mt-3
                      text-sm
                      font-medium
                      leading-7
                      text-[#9EABC2]
                    "
                  >
                    {project.description}
                  </p>

                  {/* ======================================================
                      Technologies
                  ======================================================= */}

                  <div className="mt-5 flex flex-wrap gap-2">

                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-[8px]
                          bg-[#090E1C]
                          px-3
                          py-2
                          text-xs
                          font-medium
                          text-[#F2F7FF]
                          transition-colors
                          duration-200
                          hover:bg-[#171F33]
                          sm:text-sm
                        "
                      >
                        {technology}
                      </span>
                    ))}

                  </div>

                  {/* ======================================================
                      Project Links
                  ======================================================= */}

                  <div className="mt-auto flex items-center gap-3 pt-6">

                    {/* ----------------------------------------------------
                        Live Project
                    ----------------------------------------------------- */}

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`مشاهده ${project.title}`}
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-[9px]
                        bg-[#36E0BF]
                        text-[#090E1C]
                        transition-all
                        duration-200
                        hover:scale-105
                        hover:opacity-90
                        active:scale-95
                      "
                    >
                      <FiEye
                        size={20}
                        strokeWidth={2}
                      />
                    </a>

                    {/* ----------------------------------------------------
                        GitHub Repository
                    ----------------------------------------------------- */}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`مشاهده Repository پروژه ${project.title}`}
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-[9px]
                        bg-[#171F33]
                        text-[#F2F7FF]
                        transition-all
                        duration-200
                        hover:scale-105
                        hover:bg-[#202A42]
                        active:scale-95
                      "
                    >
                      <FaGithub size={21} />
                    </a>

                  </div>

                </div>

              </article>

            </SwiperSlide>
          ))}

        </Swiper>

        {/* ================================================================
            All Projects Button
        ================================================================= */}

        <div className="mt-10 flex justify-center">

          <Link
  to="/projects"
  className="
    inline-flex
    min-h-12
    items-center
    justify-center
    rounded-[9px]
    bg-[#36E0BF]
    px-7
    py-3
    text-sm
    font-bold
    text-[#090E1C]
    transition-all
    duration-200
    hover:opacity-90
    active:scale-[0.98]
  "
>
  تمام پروژه ها
</Link>
        </div>

      </div>
    </section>
  );
}