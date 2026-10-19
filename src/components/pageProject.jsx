"use client";

import { useMemo, useState } from "react";

import { FaGithub } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

import { projectsDB } from "../data.js";

/* ==========================================================================
   Filter Data
============================================================================ */

const filters = [
  {
    id: "all",
    label: "همه پروژه ها",
  },

  {
    id: "mini",
    label: "مینی پروژه ها",
  },

  {
    id: "large",
    label: "پروژه های بزرگ",
  },
];

/* ==========================================================================
   Projects Page
============================================================================ */

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  /* ------------------------------------------------------------------------
     Filter Projects
  ------------------------------------------------------------------------ */

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projectsDB;
    }

    return projectsDB.filter(
      (project) => project.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <main
      dir="rtl"
      className="min-h-dvh w-full bg-[#090E1C]"
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-4
          py-16
          sm:px-6
          md:py-20
          lg:px-8
          lg:py-28
        "
      >

        {/* ================================================================
            Page Header
        ================================================================= */}

        <header className="text-center">

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

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              font-medium
              leading-7
              text-[#9EABC2]
              sm:text-base
              sm:leading-8
            "
          >
            مجموعه‌ای از پروژه‌هایی که با استفاده از تکنولوژی‌های مختلف
            طراحی و توسعه داده‌ام.
          </p>

        </header>

        {/* ================================================================
            Filters
        ================================================================= */}

        <div
          className="
            mt-10
            flex
            flex-wrap
            items-center
            justify-center
            gap-3
          "
          role="tablist"
          aria-label="فیلتر پروژه‌ها"
        >

          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;

            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                aria-selected={isActive}
                role="tab"
                className={`
                  rounded-[9px]
                  px-5
                  py-3
                  text-sm
                  font-bold
                  transition-all
                  duration-200

                  ${
                    isActive
                      ? "bg-[#36E0BF] text-[#090E1C]"
                      : "bg-[#111729] text-[#9EABC2] hover:bg-[#171F33] hover:text-[#F2F7FF]"
                  }
                `}
              >
                {filter.label}
              </button>
            );
          })}

        </div>

        {/* ================================================================
            Projects Grid
            ----------------------------------------------------------------
            Desktop : 4 columns
            Tablet  : 3 columns
            Mobile  : 2 columns
        ================================================================= */}

        <div
          className="
            mt-12
            grid
            grid-cols-2
            gap-4
            sm:grid-cols-3
            sm:gap-5
            min-[993px]:grid-cols-4
            min-[993px]:gap-6
          "
        >

          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="
                group
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-[12px]
                bg-[#111729]
                p-3
                transition-transform
                duration-300
                hover:-translate-y-1
                sm:p-4
              "
            >

              {/* ==========================================================
                  Project Image
              =========================================================== */}

              <div
                className="
                  overflow-hidden
                  rounded-[9px]
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
                    group-hover:scale-[1.04]
                  "
                />
              </div>

              {/* ==========================================================
                  Project Content
              =========================================================== */}

              <div
                className="
                  flex
                  flex-1
                  flex-col
                  pt-4
                "
              >

                {/* Project Title */}

                <h2
                  className="
                    text-base
                    font-extrabold
                    text-[#F2F7FF]
                    sm:text-lg
                  "
                >
                  {project.title}
                </h2>

                {/* Project Description */}

                <p
                  className="
                    mt-2
                    line-clamp-3
                    text-xs
                    font-medium
                    leading-6
                    text-[#9EABC2]
                    sm:text-sm
                    sm:leading-7
                  "
                >
                  {project.description}
                </p>

                {/* ========================================================
                    Technologies
                ========================================================= */}

                <div className="mt-4 flex flex-wrap gap-1.5">

                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-[6px]
                        bg-[#090E1C]
                        px-2
                        py-1.5
                        text-[10px]
                        font-medium
                        text-[#F2F7FF]
                        sm:text-xs
                      "
                    >
                      {technology}
                    </span>
                  ))}

                </div>

                {/* ========================================================
                    Project Links
                ========================================================= */}

                <div
                  className="
                    mt-auto
                    flex
                    items-center
                    gap-2
                    pt-5
                  "
                >

                  {/* Live Project */}

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`مشاهده ${project.title}`}
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-[8px]
                      bg-[#36E0BF]
                      text-[#090E1C]
                      transition-all
                      duration-200
                      hover:scale-105
                      hover:opacity-90
                      active:scale-95
                      sm:h-10
                      sm:w-10
                    "
                  >
                    <FiEye size={18} />
                  </a>

                  {/* GitHub */}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Repository پروژه ${project.title}`}
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-[8px]
                      bg-[#171F33]
                      text-[#F2F7FF]
                      transition-all
                      duration-200
                      hover:scale-105
                      hover:bg-[#202A42]
                      active:scale-95
                      sm:h-10
                      sm:w-10
                    "
                  >
                    <FaGithub size={19} />
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>

        {/* ================================================================
            Empty State
        ================================================================= */}

        {filteredProjects.length === 0 && (
          <div
            className="
              mt-12
              rounded-[12px]
              bg-[#111729]
              px-5
              py-12
              text-center
            "
          >
            <p className="text-sm font-medium text-[#9EABC2]">
              پروژه‌ای در این دسته‌بندی وجود ندارد.
            </p>
          </div>
        )}

      </div>
    </main>
  );
}