
const approaches = [
  {
    title: "کد تمیز",
    description: "ساختار قابل نگهداری و قابل توسعه",
  },
  {
    title: "طراحی اصولی",
    description: "ساخت رابط کاربری ساده و کاربردی",
  },
  {
    title: "عملکرد بالا",
    description: "تمرکز روی سرعت و تجربه کاربری",
  },
];

export default function Hero() {
  return (
    <section
      id="about"
      dir="rtl"
      className="flex min-h-dvh w-full items-center"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 md:py-20 lg:flex-row lg:gap-16 lg:px-8 lg:py-28">

        {/* ================================================================
            Right Side — My Approach
        ================================================================= */}

        <div className="w-full rounded-[30px] bg-[#171F33] p-6 sm:p-8 lg:w-1/2 lg:p-10">

          {/* Section Title */}
          <h2 className="text-2xl font-extrabold text-[#36E0BF] sm:text-3xl">
            رویکرد من
          </h2>

          {/* Approach Items */}
          <div className="mt-8 flex flex-col gap-7">

            {approaches.map((item) => (
              <div key={item.title}>

                {/* Approach Title */}
                <h1 className="text-[15px]! font-bold text-[#F2F7FF] sm:text-2xl">
                  {item.title}
                </h1>

                {/* Approach Description */}
                <p className="mt-2 text-base font-medium leading-7 text-[#9EABC2]">
                  {item.description}
                </p>

              </div>
            ))}

          </div>
        </div>

        {/* ================================================================
            Left Side — About Me
        ================================================================= */}

        <div className="flex w-full rounded-[30px] bg-[#171F33] flex-col p-4 sm:p-6 lg:w-1/2 lg:p-5 h-[fit-content]">

          {/* Main Title */}
          <h1 className="text-center text-3xl font-extrabold text-[#F2F7FF] sm:text-4xl md:text-5xl">
            درباره من
          </h1>

          {/* About Content */}
          <div className="mt-10">

            {/* Secondary Title */}
            <h2 className="text-2xl font-extrabold text-[#9EABC2] sm:text-3xl">
              نگاه کوتاه به من
            </h2>

            {/* First Description */}
            <p className="mt-6 text-base font-medium leading-8 text-[#F2F7FF] sm:text-lg">
              من یک توسعه دهنده نرم افزار و MERN Stack Developer هستم که در
              طراحی و پیاده سازی وب اپلیکیشن های مدرن فعالیت میکنم.
            </p>

            {/* Second Description */}
            <p className="mt-5 text-base font-medium leading-8 text-[#F2F7FF] sm:text-lg">
              با React, Express, MongoDB و Node.js به ساخت نرم افزار های سریع
              مقیاس پذیر و قابل اعتماد علاقه مندم.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}

