import React from "react";

function Section4() {
  return (
    <div className="relative max-w-screen-xl md:mx-auto mx-3">
      <div className="absoluteSection4Heading absolute text-7xl md:text-9xl opacity-20 md:-top-20 -top-12 ">EXP & EDU</div>
      <div className="mt-20 md:mt-36">
        <label className="infoTitle text-4xl md:text-6xl tracking-widest font-bold">
          Work Experience and Education
        </label>
        <div className="mt-8 mb-20 md:mb-28 ">
          <div className="flex flex-wrap md:px-4">
            <div className="w-full">
              <div className="md:mx-4">
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex items-center justify-center w-8 h-8 border-2  border-yellow-500 rounded-full text-yellow-500">
                        <svg
                          className="w-4  animate-bounce"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <line
                            fill="none"
                            strokeMiterlimit="10"
                            x1="12"
                            y1="2"
                            x2="12"
                            y2="22"
                          />
                          <polyline
                            fill="none"
                            strokeMiterlimit="10"
                            points="19,15 12,22 5,15"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-px h-full bg-yellow-500" />
                  </div>
                  <div className="pt-1 pb-8 ">
                    <p className=" text-xl md:text-2xl font-bold ">Software Tester</p>
                    <p className=" font-medium">company name</p>
                    <p className="  mb-2">05/2022 </p>
                    <ul className="md:text-lg  leading-6 ">
                      <li>
                        Worked on various projects and maintained the codebase
                      </li>
                      <li>
                        Worked on various projects and maintained the codebase
                      </li>
                      <li>Still leaerning new technologies and techniques</li>
                    </ul>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex items-center justify-center w-8 h-8 border-2 border-yellow-500 rounded-full text-yellow-500">
                        <svg
                          className="w-4  animate-bounce"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <line
                            fill="none"
                            strokeMiterlimit="10"
                            x1="12"
                            y1="2"
                            x2="12"
                            y2="22"
                          />
                          <polyline
                            fill="none"
                            strokeMiterlimit="10"
                            points="19,15 12,22 5,15"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-px h-full bg-yellow-500" />
                  </div>
                  <div className="pt-1 pb-8 ">
                    <p className=" text-xl md:text-2xl font-bold ">
                      Freelance Web Developer
                    </p>
                    <p className="  font-medium ">Dolab.io</p>
                    <p className="  mb-2">04/2021 - 04/2022</p>
                    <ul className="md:text-lg  leading-6 ">
                      <li>
                        Developed both static and dynamic websites for
                        buisnesses.
                      </li>
                      <li>Also developed some college projects</li>
                      <li>
                        Freelancing helpes me lot in learning deployements.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex  md:mb-16">
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex items-center justify-center w-8 h-8 border-2 border-yellow-500 rounded-full text-yellow-500">
                        <svg
                          className="w-4 animate-bounce"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <line
                            fill="none"
                            strokeMiterlimit="10"
                            x1="12"
                            y1="2"
                            x2="12"
                            y2="22"
                          />
                          <polyline
                            fill="none"
                            strokeMiterlimit="10"
                            points="19,15 12,22 5,15"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-px h-full bg-yellow-500" />
                  </div>
                  <div className="pt-1 ">
                    <p className="text-xl md:text-2xl font-bold ">
                      Amal College of Advanced Studies
                    </p>
                    <p className="  font-medium text-lg">
                      B.Sc Computer Science
                    </p>
                    <p className="  mb-2">2019 - 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
