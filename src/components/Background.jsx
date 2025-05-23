import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { SiLinkedin, SiGithub } from "react-icons/si";
import cityImage from "../assets/city.png";

export default function Background() {
  function handleScrollClick() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }

  function handleLinkClick(link) {
    window.open(link, "_blank");
  }

  return (
    <div className="relative min-h-screen w-screen">
      <img
        src={cityImage}
        alt="background"
        className="w-full object-cover saturate-80"
        style={{ height: "100vh" }}
      />
      <h2
        className=" absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-white bg-slate-800 rounded-2xl bg-opacity-70 p-2 border-slate-800 border-2 "
        style={{ top: "50vh" }}
      >
        Milosz Wrobel
      </h2>

      <div
        className="absolute left-1/2 transform -translate-x-1/2 flex gap-6"
        style={{ top: "75vh" }}
      >
        <button
          onClick={() =>
            handleLinkClick("https://www.linkedin.com/in/milosz-w/")
          }
          className="p-4 bg-slate-800 text-white rounded-full hover:bg-slate-900"
        >
          <SiLinkedin className="w-6 h-6 text-white" /> {/* LinkedIn Icon */}
        </button>

        <button
          onClick={() => handleLinkClick("https://github.com/MiloszWrobel")}
          className="p-4 bg-slate-800 text-white rounded-full hover:bg-slate-900"
        >
          <SiGithub className="w-6 h-6 text-white" /> {/* GitHub Icon */}
        </button>
      </div>

      <button
        onClick={handleScrollClick}
        className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-slate-800 text-white rounded-full hover:bg-slate-900"
        style={{ top: "85vh" }}
      >
        <ChevronDownIcon className="w-6 h-4 text-white" />
      </button>
    </div>
  );
}
