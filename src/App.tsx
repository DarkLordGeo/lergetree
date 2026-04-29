// import ProfileCard from "./component/ProfileCard"
// import Me from '../me_bg_removed.png'
import TiltedCard from "./component/TiltedCard"
// import MeBgBlue from '../me_bg_blue.png'
import MeBordered from '../me_bg_outlined.png'
import LogoLoop from "./component/LogoLoop";
import { FaFilePdf, FaGithub, FaLinkedin, FaPython } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, SiJavascript, SiReactquery, SiNetlify, SiGithub } from 'react-icons/si';
import { FaAws, FaDocker, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router";
// import { useState } from "react";

function App() {

  // const [number, setNumber] = useState(null)

  // const copyNumber = () => {
  //   const clipBoard = navigator.clipboard
  //   clipBoard.writeText("598 60 90 70")
  // }


  const techLogos = [
    { node: <SiReact color="#ffff" />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs color="#ffff" />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiGithub color="#ffff" />, title: "Github", href: "https://github.com" },
    { node: <SiTypescript color="#ffff" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss color="#ffff" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiReactquery color="#ffff" />, title: "Tanstack query", href: "https://tanstack.com" },
    { node: <SiRedux color="#ffff" />, title: "Redux toolkit", href: "https://redux-toolkit.js.org/" },
    { node: <SiNetlify color="#ffff" />, title: "Netlify", href: "https://netlify.com" },
    { node: <FaPython color="#ffff" />, title: "Python", href: "https://python.org" },
    { node: <FaAws color="#ffff" />, title: "AWS", href: "https://aws.com" },
    { node: <FaDocker color="#ffff" />, title: "Docker", href: "https://docker.com" },
    { node: <SiJavascript color="#ffff" />, title: "Javascript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  ]

  return (
    <>
      <div className="w-full flex items-center justify-center flex-col">

        <div className="mt-12">
          <TiltedCard
            imageSrc={MeBordered}
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent
            captionText="Front end developer"
            overlayContent={
              <p className="tilted-card-demo-text bg-[#0006] m-[2em] px-[1em] py-2 text-white rounded-md font-medium select-none">
                Lasha Ergeshidze
              </p>
            }
          />
        </div>

        <div className="w-full items-center justify-center text-center text-white py-6">
          <h1 className="font-medium text-xl">Front end developer</h1>
        </div>

        <div className="py-8 w-full">
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={40}
            gap={60}
            hoverSpeed={0}
            fadeOut={true}
            fadeOutColor="#000"
          />
        </div>

        <div className="w-full items-center justify-center text-center text-white py-8">
          <h1 className="text-2xl font-medium">Social tree</h1>
        </div>

        <div className="w-full flex items-center justify-center flex-col gap-4 mb-12">
          <Link to={'https://www.linkedin.com/in/lasha-ergeshidze-6822ba2a5/'} className="flex justify-center gap-2 items-center w-5/6 bg-[#00A0DC] rounded-4xl py-6 px-2 cursor-pointer select-none shadow-2xl">
            <FaLinkedin size={25} color="#ffff" />
            <p className="font-medium text-white">Linkedin</p>
          </Link>
          <Link to={'https://github.com/DarkLordGeo/'} className="flex justify-center gap-2 items-center w-5/6 bg-[#232925] rounded-4xl py-6 px-2 cursor-pointer select-none shadow-2xl">
            <FaGithub size={25} color="#F2F5F3" />
            <p className="font-medium text-white">Github</p>
          </Link>

          <Link to={"https://wa.me/598609070"} className="flex justify-center gap-2 items-center w-5/6 bg-[#25d366] rounded-4xl py-6 px-2 cursor-pointer select-none shadow-2xl">
            <FaWhatsapp size={25} color="#ffffff" />
            <p className="font-medium text-white">Whatsapp</p>
          </Link>
          <a className="flex justify-center gap-2 items-center w-5/6 bg-[#910000] rounded-4xl py-6 px-2 cursor-pointer select-none shadow-2xl" href="_blank" download={''}>
            <FaFilePdf size={25} color="#ffffff" />
            <p className="font-medium text-white">Resume</p>
          </a>
        </div>

      </div>
    </>
  )
}

export default App
