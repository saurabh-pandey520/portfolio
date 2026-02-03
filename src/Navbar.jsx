import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = ["home", "skills", "projects", "contact"];
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 100;
          const height = el.offsetHeight;
          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    `relative transition ${
      active === id
        ? "text-purple-400"
        : "text-gray-300 hover:text-purple-400"
    }`;

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 h-16
        transition-all duration-300
        ${
          scrolled
            ? "bg-[#0b0b0f]/95 shadow-lg border-b border-white/10"
            : "bg-[#0b0b0f]/60 backdrop-blur-xl"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">

        {/* Logo */}
        <a
  href="#home"
  className="
    text-xl font-bold
    flex items-center gap-2
  "
>
  <span
    className="
      w-9 h-9 flex items-center justify-center
      rounded-lg
      bg-gradient-to-br from-purple-500 to-pink-500
      text-black font-extrabold
      shadow-[0_0_20px_rgba(168,85,247,0.6)]
    "
  >
    SP
  </span>

</a>


        {/* Links */}
        <div className="flex gap-8 text-sm">
          {["home", "skills", "projects", "contact"].map((id) => (
            <a key={id} href={`#${id}`} className={linkClass(id)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}

              {/* Neon underline */}
              {active === id && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>
              )}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
