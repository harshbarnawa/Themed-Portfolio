// pages/Contact.jsx

import Layout from "../components/Layout"

function Contact() {

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

            <h2
              className={`text-[11px] uppercase tracking-[3px] mb-8 ${
                darkMode
                  ? "text-[#7a7a7a]"
                  : "text-[#8a8a8a]"
              }`}
            >
              Contact
            </h2>

            <div className="mb-10 space-y-3">

              <a
                href="mailto:harshbarnawa.info@gmail.com"
                className={`block transition break-all ${
                  darkMode
                    ? "text-[#a1a1a1] hover:text-white"
                    : "text-[#5f5f5f] hover:text-[#2f2f2f]"
                }`}
              >
                harshbarnawa.info@gmail.com
              </a>

              <a
                href="https://wa.me/916264232915"
                target="_blank"
                rel="noreferrer"
                className={`block transition ${
                  darkMode
                    ? "text-[#a1a1a1] hover:text-white"
                    : "text-[#5f5f5f] hover:text-[#2f2f2f]"
                }`}
              >
                +91 62642 32915
              </a>

            </div>

            <div className="flex items-center flex-wrap gap-5">

              <a
                href="https://github.com/harshbarnawa"
                target="_blank"
                rel="noreferrer"
              >

                <img
                  src="/assets/github.png"
                  alt=""
                  className={`w-10 h-10 object-contain opacity-60 hover:opacity-100 transition duration-300 ${
                    darkMode
                      ? "invert hover:invert-0"
                      : ""
                  }`}
                />

              </a>

              <a
                href="https://www.linkedin.com/in/harsh-barnawa/"
                target="_blank"
                rel="noreferrer"
              >

                <img
                  src="/assets/linkedin.png"
                  alt=""
                  className={`w-10 h-10 object-contain opacity-60 hover:opacity-100 transition duration-300 ${
                    darkMode
                      ? "invert hover:invert-0"
                      : ""
                  }`}
                />

              </a>

              <a
                href="https://x.com/harshbarnawa"
                target="_blank"
                rel="noreferrer"
              >

                <img
                  src="/assets/twitter.png"
                  alt=""
                  className={`w-10 h-10 object-contain opacity-60 hover:opacity-100 transition duration-300 ${
                    darkMode
                      ? "invert hover:invert-0"
                      : ""
                  }`}
                />

              </a>

              <a
                href="https://codeforces.com/profile/harshbarnawa.info"
                target="_blank"
                rel="noreferrer"
              >

                <img
                  src="/assets/codeforces.png"
                  alt=""
                  className={`w-12 h-12 object-contain opacity-60 hover:opacity-100 transition duration-300 ${
                    darkMode
                      ? "invert hover:invert-0"
                      : ""
                  }`}
                />

              </a>

            </div>

          </div>

        </section>

      )}

    </Layout>

  )
}

export default Contact