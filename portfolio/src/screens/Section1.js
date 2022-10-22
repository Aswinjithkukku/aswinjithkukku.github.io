import React from 'react'
import character from "../images/character.png"
import resume from '../Aswin_T_Resume.pdf'

function Section1() {
  return (
    <div className=" relative mx-3">
        <div className="blurname">
          <h1 className="heading text-9xl ">ASWIN JITH KUKKU</h1>
        </div>
        <div className="relative max-w-screen-xl mx-auto ">
          <div className="firstSection lg:flex">
            <section className="data md:w-8/12">
              <h1 className="infoName text-3xl md:text-4xl">Hey It's meh.... <span className='block md:inline'> AswinJith Kukku</span></h1>
              <h1 className="infoTitle pt-5 tracking-widest font-black text-4xl md:text-6xl">Im a Web Devoloper</h1>
              <p className="text-lg md:text-xl pt-4">Passionate developer based in India, constantly experimenting with new technologies and techniques, striving to become a better myself as a developer and I love what I do.</p>
              <p className="text-lg md:text-xl pt-4">Currently I'm working freelance as a frontend Developer and MERN full stack Developer.</p>
              <p className="text-lg md:text-xl pt-4">Is there any prospect for me? Reach me at my <a href="mailto:aswinjitht5@gmail.com" className='text-yellow-600'>e-mail</a></p>
              <a href={resume}><button className="text-lg md:text-xl mt-5 py-2 px-4 rounded-lg bg-black text-white border hover:bg-yellow-500">Download my CV</button></a>
            </section>
            <section className="character ">
              <img src={character} alt='character md:w-4/12' />
            </section>
          </div>
        </div>
      </div>
  )
}

export default Section1