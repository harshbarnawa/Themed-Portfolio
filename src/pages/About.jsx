// pages/About.jsx

import Layout from "../components/Layout"

function About() {
  const achievements = [
    {
      title: "Google Student Ambassador",
      date: "2025",
    },
    {
      title: "Google Cloud Arcade",
      date: "Participant",
    },
    {
      title: "Google Developer Group",
      date: "Learner",
    },
    {
      title: "GRID SAIT",
      date: "Coordinator",
    },
  ]

  return (
    <Layout>
      {(darkMode) => (
        <section
          className={`relative z-10 border-t min-h-screen ${
            darkMode
              ? "border-[#262626]"
              : "border-[#d8d8d8]"
          }`}
        >
          <div className="max-w-3xl mx-auto px-5 md:px-6 pt-40 pb-24">

            <div className="mb-14">

              <h2
                className={`text-[11px] uppercase tracking-[3px] mb-8 ${
                  darkMode
                    ? "text-[#7a7a7a]"
                    : "text-[#8a8a8a]"
                }`}
              >
                Achievements
              </h2>

             <p
  className={`text-[15px] md:text-[17px] leading-[2] tracking-[-0.01em] ${
    darkMode
      ? "text-[#b5b5b5]"
      : "text-[#5a5a5a]"
  }`}
>
  Mostly spending time around dev communities, random projects and tech events.

</p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {achievements.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-[24px] border p-6 transition-all duration-300 hover:-translate-y-1 ${
                    darkMode
                      ? "border-[#262626] bg-[#151515]/70"
                      : "border-[#d8d8d8] bg-[#efefef]/70"
                  }`}
                >

                  <div
                    className={`w-10 h-10 rounded-full mb-5 flex items-center justify-center text-[14px] ${
                      darkMode
                        ? "bg-[#202020] text-[#d1d1d1]"
                        : "bg-white text-[#444]"
                    }`}
                  >
                    ✦
                  </div>

                  <h3
                    className={`text-[18px] leading-[1.4] tracking-[-0.03em] mb-2 ${
                      darkMode
                        ? "text-[#f5f5f5]"
                        : "text-[#111111]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-[14px] ${
                      darkMode
                        ? "text-[#777]"
                        : "text-[#8a8a8a]"
                    }`}
                  >
                    {item.date}
                  </p>

                </div>
              ))}

            </div>

          </div>
        </section>
      )}
    </Layout>
  )
}

export default About