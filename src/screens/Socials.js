import React from "react";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";

function Socials() {
  return (
    <div className="relative bg-black py-36">
      <section className="relative max-w-screen-xl  md:mx-auto">
        <div className="absoluteSocialsheading absolute md:text-9xl text-8xl text-yellow-600 -top-16 md:left-36 ">
          Socials
        </div>
        <div className="infoTitle text-yellow-600 tracking-widest text-5xl mb-20">
          Connect me In
        </div>
        <div className="flex justify-center">
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 md:gap-4">
          <div>
            <div className="md:h-52 h-40 w-40 md:w-52">
              <a href="https://www.linkedin.com/in/aswin-t-647874241/">
                <div className="blue group relative md:h-52 h-40 w-40 md:w-52  bg-gray-700  hover:text-white border border-yellow-600 hover:border-none">
                  <div className="absolute top-1/4 flex justify-center w-40 md:w-52 text-8xl">
                    <AiFillLinkedin />
                  </div>
                  <div className=" absolute bottom-0 md:h-10 h-8 w-40 md:w-52 flex justify-center items-center bg-white font-semibold text-xl bg-opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:bg-opacity-20 -z-10 group-hover:z-10 duration-1000 ">
                    LinkedIn
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div>
            <div className="h-40 w-40 md:h-52 md:w-52">
              <a href="https://www.facebook.com/aswin.jith.779">
                <div className="blue group relative h-40 w-40 md:h-52 md:w-52  bg-gray-700  hover:text-white border border-yellow-600 hover:border-none">
                  <div className="absolute top-1/4 flex justify-center w-52 text-8xl">
                    <AiFillFacebook />
                  </div>
                  <div className=" absolute bottom-0 h-8 w-40 md:h-10 md:w-52  flex justify-center items-center bg-white text-blue-600 font-semibold text-xl  bg-opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:bg-opacity-20 -z-10 group-hover:z-10 duration-1000 ">
                    facebook
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div>
            <div className="md:h-52 md:w-52 h-40 w-40">
              <a href="https://www.instagram.com/aswinjithkukku/">
                <div className="insta group relative h-40 w-40 md:h-52 md:w-52  bg-gray-700  hover:text-white border border-yellow-600 hover:border-none">
                  <div className="absolute top-1/4 flex justify-center w-40 md:w-52 text-8xl">
                    <AiFillInstagram />
                  </div>
                  <div className=" absolute bottom-0 h-8 w-40 md:h-10 md:w-52 flex justify-center items-center bg-white text-pink-900 font-semibold text-xl  bg-opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:bg-opacity-20 -z-10 group-hover:z-10 duration-1000 ">
                    Instagram
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div>
            <div className="md:h-52 md:w-52 h-40 w-40">
              <a href="https://github.com/Aswinjithkukku">
                <div className="git group relative h-40 w-40 md:h-52 md:w-52  bg-gray-700 hover:text-white border border-yellow-600 hover:border-none">
                  <div className="absolute top-1/4 flex justify-center w-40 md:w-52 text-8xl">
                    <AiFillGithub />
                  </div>
                  <div className=" absolute bottom-0 h-8 w-40 md:h-10 md:w-52  flex justify-center items-center bg-white text-black font-semibold text-xl  bg-opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:bg-opacity-20 -z-10 group-hover:z-10 duration-1000  ">
                    GitHub
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}

export default Socials;
