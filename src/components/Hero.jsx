import { motion } from "framer-motion";

import { styles } from '../styles';
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="z-10">
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Alex</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>Software Engineer | Web Developer | iOS Developer</p>
          <div className="flex sm:flex-row mt-7">
                        <a
                            href="https://github.com/caowens"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mb-4 sm:mb-0 sm:mr-4 green-pink-gradient p-[2px] rounded-[10px] shadow-card"
                        >
                            <button className="bg-[#151131] text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-95">
                                GitHub
                            </button>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/alex-owens-ab868b1b6/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mb-4 sm:mb-0 sm:mr-4 green-pink-gradient p-[2px] rounded-[10px] shadow-card"
                        >
                            <button className="bg-[#151131] text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-95">
                                LinkedIn
                            </button>
                        </a>
                        <a
                            href="https://docs.google.com/document/d/1LRApc64PZ3PW48Trs1fEMalDN6QZV92nDtidLi4rPvE/edit?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mb-4 sm:mb-0 sm:mr-4 green-pink-gradient p-[2px] rounded-[10px] shadow-card"
                        >
                            <button className="bg-[#151131] text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-95">
                                Resume
                            </button>
                        </a>
                    </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero