import React from "react";
import demo1 from "../images/demo1.jpg";
import demo2 from "../images/demo2.jpg";

function section2() {
  return (
    <div className="bg-black relative">
        <div className=" absoluteSection2div absolute md:ml-10">
          <h1 className=" absoluteSection2heading font-extrabold text-5xl md:text-9xl">Some cool stuffs I have made</h1>
        </div>
      <div className="relative max-w-screen-xl md:mx-auto mx-3">
        <div className="md:pt-36 pt-20 pb-10">
            <h2 className="section2heading md:text-6xl text-3xl tracking-widest">Some cool stuffs I have made</h2>
        </div>
        <div className="relative block py-4">
          <div className="md:flex">

          <div className="box md:w-2/6  my-14 md:mr-10">
            <img className="opacity-50 scale-90 hover:scale-105 hover:opacity-100 duration-700" src={demo1} alt="demo" />

          </div>
          <div className="md:flex items-center md:w-1/2 md:ml-10 my-14">
            <p className="text-slate-600 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              et elit sed ante tincidunt semper. Cras sem turpis, dictum at nunc
              nec, aliquam congue sem. Aliquam ultricies accumsan lectus et
              porta. Phasellus eget ligula sit amet dui maximus interdum ac eu
              lectus. Quisque vitae faucibus mauris. Nunc bibendum, eros
              vehicula maximus tincidunt, diam lacus ornare metus, eget posuere
              odio eros et arcu. Nam ornare porta enim, vel aliquet nulla
              condimentum a. Sed convallis felis in erat pharetra tincidunt.
              Donec maximus felis orci, eget tincidunt ex faucibus sed
            </p>
          </div>
          </div>
          <div className="md:flex md:flex-row-reverse">
          <div className="box md:w-2/6  my-14 md:ml-10">
            <img className="opacity-50 scale-90 hover:scale-105 hover:opacity-100 duration-700" src={demo2} alt="demo" />
          </div>
          <div className="md:flex items-center md:w-1/2 md:mr-10 my-14">
            <p className="text-slate-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              et elit sed ante tincidunt semper. Cras sem turpis, dictum at nunc
              nec, aliquam congue sem. Aliquam ultricies accumsan lectus et
              porta. Phasellus eget ligula sit amet dui maximus interdum ac eu
              lectus. Quisque vitae faucibus mauris. Nunc bibendum, eros
              vehicula maximus tincidunt, diam lacus ornare metus, eget posuere
              odio eros et arcu. Nam ornare porta enim, vel aliquet nulla
              condimentum a. Sed convallis felis in erat pharetra tincidunt.
              Donec maximus felis orci, eget tincidunt ex faucibus sed
            </p>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default section2;
