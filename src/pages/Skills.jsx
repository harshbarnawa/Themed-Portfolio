// pages/Skills.jsx

import Layout from "../components/Layout"

function Skills() {

  const skills = [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind",
    "JavaScript",
    "TypeScript",
    "Python",
    "C++",
    "SQL",
    "Git",
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

            <div className="mb-12">

              <h2
                className={`text-[11px] uppercase tracking-[3px] mb-6 ${
                  darkMode
                    ? "text-[#7a7a7a]"
                    : "text-[#8a8a8a]"
                }`}
              >
                Skills
              </h2>

            </div>
<p
  className={`text-[13px] mt-10 leading-[1.9] ${
    darkMode
      ? "text-[#666]"
      : "text-[#8a8a8a]"
  }`}
>
  still learning and rebuilding things along the way.
</p>
            <div className="flex flex-wrap gap-3">

              {skills.map((skill) => (

                <div
                  key={skill}
                  className={`border rounded-full px-4 py-2 text-[13px] transition duration-300 cursor-default ${
                    darkMode
                      ? "border-[#2b2b2b] bg-[#171717]/70 text-[#cfcfcf] hover:bg-[#1e1e1e]"
                      : "border-[#d4d4d4] bg-[#f2f2f2]/70 text-[#4a4a4a] hover:bg-[#ebebeb]"
                  }`}
                >
                  {skill}
                </div>

              ))}

            </div>

            <div className="mt-16">

              <p
                className={`text-[11px] uppercase tracking-[3px] mb-5 ${
                  darkMode
                    ? "text-[#7a7a7a]"
                    : "text-[#8a8a8a]"
                }`}
              >
                currently exploring
              </p>

              <div className="flex flex-wrap gap-3">

                {[
                  "ai tools",
                  "backend",

                ].map((item) => (

                  <div
                    key={item}
                    className={`border rounded-full px-4 py-2 text-[13px] ${
                      darkMode
                        ? "border-[#262626] text-[#8f8f8f]"
                        : "border-[#d6d6d6] text-[#666]"
                    }`}
                  >
                    {item}
                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>

      )}

    </Layout>

  )
}

export default Skills