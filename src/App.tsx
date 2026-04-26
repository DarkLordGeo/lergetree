import ProfileCard from "./component/ProfileCard"
import Me from '../me_bg_removed.png'
import TiltedCard from "./component/TiltedCard"
import MeBgBlue from '../me_bg_blue.png'
import LogoLoop from "./component/LogoLoop";
import { FaGithub, FaPython } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, SiJavascript, SiReactquery, SiNetlify, SiGithub } from 'react-icons/si';
import { FaAws, FaDocker } from "react-icons/fa";
function App() {

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
      <div
        className="w-full flex items-center justify-center flex-col"
      >
        <div className="mt-12">
          <TiltedCard
            imageSrc={MeBgBlue}
            // altText="Lasha ergeshidze"
            // captionText=""
            // containerHeight="300px"
            // containerWidth="300px"
            // imageHeight="300px"
            // imageWidth="300px"
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

        <div className="mt-12 w-full">
          <div >
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
        </div>
        <div className="w-full items-center justify-center text-center text-white py-12">
          <h1 className="text-2xl font-medium">Social tree</h1>
        </div>
        <div className="w-full flex items-center justify-center flex-col">
          <div className="flex justify-center gap-2 items-center w-5/6 bg-[#232925] rounded-4xl py-6 px-2 cursor-pointer select-none">
            <FaGithub size={16} color="#ffff" />
            <p className="font-medium text-white">Github</p>
          </div>
        </div>


      </div>
    </>
  )
}

export default App
