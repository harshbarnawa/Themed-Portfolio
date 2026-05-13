import Layout from "../components/Layout"
import { useState, useRef, useEffect } from "react"

function Home() {

  const [terminalOpen, setTerminalOpen] = useState(false)
  const [input, setInput] = useState("")
  const [history, setHistory] = useState([])

  const inputRef = useRef(null)

  useEffect(() => {
    if (terminalOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [terminalOpen])

  const quotes = [
    "Code is like humor. When you have to explain it, it's bad.",
    "First, solve the problem. Then, write the code.",
    "Programs must be written for people to read.",
    "Simplicity is the soul of efficiency.",
  ]

  const handleCommand = (cmd) => {

    const command = cmd.trim().toLowerCase()

    if (!command) return

    let output = ""

    if (command === "clear") {
      setHistory([])
      setInput("")
      return
    }

    else if (command === "github") {
      window.open("https://github.com/harshbarnawa", "_blank")
      output = "opening github..."
    }

    else if (command === "linkedin") {
      window.open("https://linkedin.com", "_blank")
      output = "opening linkedin..."
    }

    else if (command === "projects") {
      window.location.href = "/projects"
      output = "navigating to projects..."
    }

    else if (command === "skills") {
      window.location.href = "/skills"
      output = "navigating to skills..."
    }

    else if (command === "home") {
      window.location.href = "/"
      output = "already on home."
    }

    else if (command === "quote") {
      output =
        quotes[Math.floor(Math.random() * quotes.length)]
    }

    else if (command === "help") {

      output = `
home       - navigate to home
projects   - view projects
skills     - view skills
github     - open github profile
linkedin   - open linkedin
quote      - random quote
clear      - clear terminal
      `
    }

    else {
      output = `Command not found: ${command}`
    }

    setHistory((prev) => [
      ...prev,
      {
        command,
        output,
      },
    ])

    setInput("")
  }

  return (

    <Layout>

      {(darkMode) => (

        <>

          {/* terminal modal */}

          {
            terminalOpen && (
              <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm px-5">

                <div
                  className={`w-full max-w-4xl rounded-[24px] overflow-hidden border ${
                    darkMode
                      ? "border-[#2a2a2a] bg-[#111]"
                      : "border-[#d8d8d8] bg-[#f5f5f5]"
                  }`}
                >

                  {/* top bar */}

                  <div
                    className={`h-12 px-5 flex items-center justify-between border-b ${
                      darkMode
                        ? "border-[#222] bg-[#181818]"
                        : "border-[#dddddd] bg-[#ececec]"
                    }`}
                  >

                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                    </div>

                    <p
                      className={`text-[13px] ${
                        darkMode
                          ? "text-[#888]"
                          : "text-[#666]"
                      }`}
                    >
                      terminal — bash
                    </p>

                    <button
                      onClick={() => setTerminalOpen(false)}
                      className={`text-[13px] transition ${
                        darkMode
                          ? "text-[#777] hover:text-white"
                          : "text-[#888] hover:text-black"
                      }`}
                    >
                      close
                    </button>

                  </div>

                  {/* terminal body */}

                  <div
                    className={`p-6 font-mono text-[14px] leading-8 min-h-[500px] overflow-y-auto ${
                      darkMode
                        ? "text-[#d1d1d1]"
                        : "text-[#222]"
                    }`}
                  >

                    <p>Type "help" to see available commands.</p>

                    <br />

                    {history.map((item, index) => (

                      <div key={index} className="mb-4">

                        <p>
                          Harsh@portfolio:~$ {item.command}
                        </p>

                        <div className="whitespace-pre-line opacity-90">
                          {item.output}
                        </div>

                      </div>

                    ))}

                    <div className="flex items-center">

                      <span className="mr-2">
                        Harsh@portfolio:~$
                      </span>

                      <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) =>
                          setInput(e.target.value)
                        }
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleCommand(input)
                          }
                        }}
                        className="bg-transparent outline-none flex-1"
                        autoFocus
                      />

                    </div>

                  </div>

                </div>

              </div>
            )
          }

          <section className="relative z-10 max-w-3xl mx-auto px-5 md:px-6 pt-40 md:pt-52 pb-24 md:pb-28">

            {/* terminal button */}

            <div
              onClick={() => setTerminalOpen(true)}
              className={`mb-8 flex items-center justify-between rounded-[16px] border px-4 py-3 cursor-pointer transition-all duration-300 ${
                darkMode
                  ? "border-[#262626] bg-[#141414] hover:bg-[#181818]"
                  : "border-[#d8d8d8] bg-[#f3f3f3] hover:bg-[#ececec]"
              }`}
            >

              <div className="flex items-center gap-3">

                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>

                <p
                  className={`text-[13px] ${
                    darkMode
                      ? "text-[#a1a1a1]"
                      : "text-[#666]"
                  }`}
                >
                  open terminal
                </p>

              </div>

              <p
                className={`text-[12px] ${
                  darkMode
                    ? "text-[#5f5f5f]"
                    : "text-[#999]"
                }`}
              >
                bash
              </p>

            </div>

            {/* profile card */}

            <div
              className={`border rounded-[28px] p-8 md:p-10 transition ${
                darkMode
                  ? "border-[#262626] bg-[#151515]/70"
                  : "border-[#d8d8d8] bg-[#efefef]/70"
              }`}
            >

              <div className="flex items-center justify-between mb-10">

                <p
                  className={`text-[11px] uppercase tracking-[3px] ${
                    darkMode
                      ? "text-[#727272]"
                      : "text-[#8a8a8a]"
                  }`}
                >
                  harsh barnawa
                </p>

                <div className="w-15 h-15 overflow-hidden rounded-full">

                  <img
                    src="/me.jpeg"
                    alt="profile"
                    className="w-full h-full object-cover"
                  />

                </div>

              </div>

              <p
                className={`font-serif italic text-[15px] md:text-[17px] leading-[2] tracking-[-0.01em] ${
                  darkMode
                    ? "text-[#cfcfcf]"
                    : "text-[#4a4a4a]"
                }`}
              >

                I like building clean things and overthinking small details that probably don't matter that much. mostly building random projects, solving cpp problems and rebuilding things again because “something still feels off”

              </p>

            </div>

            {/* fun facts */}

            <div className="mb-10 mt-14">

              <p
                className={`text-[11px] uppercase tracking-[3px] mb-2 ${
                  darkMode
                    ? "text-[#7a7a7a]"
                    : "text-[#8a8a8a]"
                }`}
              >
                subtle fun facts about me
              </p>

              <div className="flex flex-wrap gap-3 mb-4">

                {[
                  "music",
                  "badminton",
                  "anime",
                  "editing",
                ].map((item, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full text-[13px] border ${
                      darkMode
                        ? "border-[#303030] bg-[#161616] text-[#cfcfcf]"
                        : "border-[#d5d5d5] bg-white text-[#444]"
                    }`}
                  >
                    {item}
                  </span>
                ))}

              </div>

              <p
                className={`text-[14px] leading-[1.8] ${
                  darkMode
                    ? "text-[#666]"
                    : "text-[#8a8a8a]"
                }`}
              >
                and grinding my github like this ↓
              </p>

            </div>

            {/* github graph */}

            <div
              className={`mt-10 border rounded-[24px] p-5 overflow-hidden ${
                darkMode
                  ? "border-[#262626] bg-[#151515]/70"
                  : "border-[#d8d8d8] bg-[#efefef]/70"
              }`}
            >

              <img
                src={`https://ghchart.rshah.org/${
                  darkMode ? "4a4a4a" : "2f2f2f"
                }/harshbarnawa`}
                alt="GitHub Contribution Graph"
                className="w-full opacity-80"
              />

            </div>

          </section>

        </>

      )}

    </Layout>

  )
}

export default Home