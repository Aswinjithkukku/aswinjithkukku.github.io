import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
  FaGitlab,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMysql,
  SiVisualstudiocode,
  SiTailwindcss,
  SiJquery,
  SiDjango,
  SiGithub,
  SiCpanel,
  SiPostgresql,
  SiBootstrap,
  SiHeroku,
  SiGnubash,
} from "react-icons/si";
import { BsBraces } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

function Section3() {
  const data = [
    {
      Icon: <SiDjango />,
      name: "Django",
    },
    {
      Icon: <FaPython />,
      name: "Python",
    },
    {
      Icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      Icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      Icon: <FaGitAlt />,
      name: "Git",
    },
    {
      Icon: <SiGithub />,
      name: "GitHub",
    },
    {
      Icon: <FaGitlab />,
      name: "Gitlab",
    },
    {
      Icon: <SiMysql />,
      name: "MySQL",
    },
    {
      Icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      Icon: <FaCss3Alt />,
      name: "CSS3",
    },
    {
      Icon: <SiJavascript />,
      name: "JavaScript",
    },
    {
      Icon: <SiHeroku />,
      name: "Heroku",
    },
    {
      Icon: <SiCpanel />,
      name: "c-Panel",
    },
    {
      Icon: <SiBootstrap />,
      name: "Bootstrap",
    },
    {
      Icon: <SiVisualstudiocode />,
      name: "VS Code",
    },
    {
      Icon: <SiJquery />,
      name: "jQuery",
    },
    {
      Icon: <BsBraces />,
      name: "RESTapi",
    },
    {
      Icon: <SiGnubash />,
      name: "Bash",
    },
  ];

  return (
    <div>
      <div className="bg-black pb-20 md:pb-32">
        <div className="relative max-w-screen-xl md:mx-auto mx-3">
          <div className="absoluteSection3 flex absolute text-5xl md:text-9xl tracking-widest opacity-30">
            TOOL KIT <IoSettingsOutline />
          </div>
          <div className="section3title tracking-widest text-3xl md:text-6xl pt-20 md:pt-32 opacity-100 ">
            Here is some of my tools in my tool kit
          </div>
          <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4 md:gap-8 lg:gap-14 mt-20">
            {data.map((item) => (
              <div key={item.name}>
                <div className=" bg-yellow-500 mx-10 p-4 text-5xl text-center hover:text-white hover:translate-x-3 hover:-translate-y-3 duration-500">
                  {item.Icon}
                </div>
                <span className="itemText text-lg flex justify-center pt-1 font-light">{item.name} </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
