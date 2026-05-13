function SocialDock({ darkMode }) {

  return (

    <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-4">

      {[
        {
          icon: "/assets/github.png",
          link: "https://github.com/harshbarnawa",
          alt: "github"
        },
        {
          icon: "/assets/linkedin.png",
          link: "https://www.linkedin.com/in/harsh-barnawa/",
          alt: "linkedin"
        },
        {
          icon: "/assets/twitter.png",
          link: "https://x.com/harshbarnawa",
          alt: "twitter"
        },
        {
          icon: "/assets/codeforces.png",
          link: "https://codeforces.com/profile/harshbarnawa.info",
          alt: "codeforces"
        }
      ].map((item) => (

        <a
          key={item.alt}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className={`group w-12 h-12 rounded-full border flex items-center justify-center backdrop-blur-md transition duration-300 ${
            darkMode
              ? "border-[#2b2b2b] bg-[#161616]/80 hover:bg-[#1f1f1f]"
              : "border-[#d8d8d8] bg-[#f3f3f3]/80 hover:bg-white"
          }`}
        >

          <img
            src={item.icon}
            alt={item.alt}
            className={`w-5 h-5 object-contain opacity-60 group-hover:opacity-100 transition duration-300 ${
              darkMode
                ? "invert group-hover:invert-0"
                : ""
            }`}
          />

        </a>

      ))}

    </div>

  )
}

export default SocialDock