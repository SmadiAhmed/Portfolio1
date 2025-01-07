import React from 'react'
import image from "../assets/background.png"
import Navbar from "../components/Navbar"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCode, faDatabase } from '@fortawesome/free-solid-svg-icons'; 
import { faJs, faReact, faNodeJs, faGithub, faHtml5, faCss3Alt,faNode } from '@fortawesome/free-brands-svg-icons'; 
import { BiLogoPostgresql  } from "react-icons/bi";
import {SiRedux} from "react-icons/si"
import {SiMongodb} from "react-icons/si"
import {SiTypescript} from "react-icons/si"
import {SiReact} from "react-icons/si"
import {SiNodedotjs} from "react-icons/si"
import {SiPostgresql} from "react-icons/si"
import {SiJavascript} from "react-icons/si"
import {SiPostman} from "react-icons/si"
import {SiJquery} from "react-icons/si"
import {SiTailwindcss} from "react-icons/si"
import {SiBootstrap} from "react-icons/si"
import {SiMui} from "react-icons/si"
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navgaite=useNavigate()
  return (
    <>
   
    <div className='h-screen bg-cover bg-center bg-no-repeat flex flex-col' style={{backgroundImage: `url(${image})`}}>
    
    <div className='relative h-30 w-32  '>
          <div className="absolute inset-y-60 left-0 w-12 ">
          <div className='bg-white'>
            <ul className='py-4 mx-1 '><FaGithub size={32} onClick={()=>{window.open('https://github.com/SmadiAhmed?tab=repositories/')}} /></ul>
            <ul className='py-4 mx-1'><FaLinkedin size={32} onClick={()=>{window.open('https://www.linkedin.com/in/ahmed-smadi/')}}/></ul>
            <ul className='py-4 mx-1'><TbFileCv  size={36} onClick={()=>{window.open('https://drive.google.com/file/d/1OjzEr5IA2BBAhhKXGszxx9nwB955RoZu/view?usp=sharing')}}/></ul>
            
            </div>
         
          </div>
         </div>
    <div className='h-screen bg-cover bg-center flex flex-col items-center justify-center '>
    <h1 className='text-center text-6xl font-serif'>HEY , I'M AHMED SMADI</h1>
    <br/>
    <h3 className='text-2xl font-serif'>Im a Full Stack Web Developer with experience building websites from scratch,<br/>
         proficient in both front-end and back-end Eager to learn and apply new technologies  </h3>
         <br/>
         <button onClick={()=>{navgaite("/Projects")}} className='bg-amber-500 text-2xl text-black font-mono py-3 px-12 '>PROJECTS</button>
         <div className="flex flex-col items-center">
  {/* <h1 className='text-2xl text-black font-mono mb-4 self-start  '>Skills</h1> */}
  <div className="grid grid-cols-7 gap-12 ease-in duration-300 mt-10">
    <SiJavascript size="75px" title="JavaScript" style={{ color: "#F7DF1E" }} className="transition-all duration-300 ease-in-out hover:translate-y-2 hover:rotate-12 hover:shadow-lg hover:shadow-yellow-500/50" />
    <SiTypescript size="75px" title="TypeScript" style={{ color: "#3178C6" }} className="transition-all duration-300 ease-in-out hover:translate-y-2 hover:rotate-12 hover:shadow-lg"/>
    <SiReact size="75px" title="React" style={{ color: "#043962" }} className="transition-all duration-300 ease-in-out hover:translate-y-2 hover:rotate-12 hover:shadow-lg" />
    <SiNodedotjs size="75px" title="Node.js" style={{ color: "#5FA04E" }} className="transition-all duration-300 ease-in-out hover:translate-y-2 hover:rotate-12 hover:shadow-lg"/>
    <SiTailwindcss size="75px" title="Tailwind" style={{ color: "#06B6D4" }} className="transition-all duration-300 ease-in-out hover:translate-y-2 hover:rotate-12 hover:shadow-lg"/>
    <FontAwesomeIcon icon={faHtml5} size="5x" title="HTML5" style={{ color: "#e06c00" }} className="transition-all duration-300 ease-in-out hover:translate-y-2 hover:rotate-12 hover:shadow-lg"/>
    <FontAwesomeIcon icon={faCss3Alt} size="5x" title="CSS3" style={{ color: "#74C0FC" }} className="transition-all duration-300 ease-in-out hover:translate-y-2 hover:rotate-12 hover:shadow-lg"/>
    <SiPostgresql size="75px" title="PostgreSQL" style={{ color: "#4169E1" }} className="transition-all duration-300 ease-in-out hover:translate-y-2 hover:rotate-12 hover:shadow-lg"/>
    <SiRedux size="75px" title="Redux" style={{ color: "#764ABC" }} className="transition-all duration-300 ease-in-out hover:translate-y-2 hover:rotate-12 hover:shadow-lg"/>
    <SiMongodb size="75px" title="MongoDB" style={{ color: "#47A248" }}className="transition-all duration-300 ease-in-out hover:translate-y-2 hover:rotate-12 hover:shadow-lg" />
    <SiPostman size="75px" title="Postman" style={{ color: "#FF6C37" }}className="transition-all duration-300 ease-in-out hover:translate-y-2 hover:rotate-12 hover:shadow-lg" />
    <SiJquery size="75px" title="jQuery" style={{ color: "#0769AD" }} className="transition-all duration-300 ease-in-out hover:translate-y-2 hover:rotate-12 hover:shadow-lg"/>
    <SiBootstrap size="75px" title="Bootstrap" style={{ color: "#7952B3" }}className="transition-all duration-300 ease-in-out hover:translate-y-2 hover:rotate-12 hover:shadow-lg" />
    <SiMui title="MUI" size="75px" style={{ color: "#007FFF" }}className="transition-all duration-300 ease-in-out hover:translate-y-2 hover:rotate-12 hover:shadow-lg" />
  </div>
</div>
         </div>
         
         
    </div>
    
    </>
    
  )
}

export default Home 
