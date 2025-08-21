import React from "react"
import Navbar from "../Components/Navbar"
import About from "../Assets/about.jpg"
import LandingPage from "../Assets/Landing.png";
import Profile from "../Assets/profile.jpg.jpg"
import {FaHtml5, FaCss3Alt, FaReact, FaPython, FaGithub, FaExternalLinkAlt, FaEnvelope, FaWhatsapp, FaPhoneAlt} from "react-icons/fa";
import {SiJavascript, SiDjango} from "react-icons/si";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Main(){
 let phoneNumber= "254102621153";
    let email="nduryamuhammad6@gmail.com";
    
    return(
        <>
        <Navbar/>
        <div className="hero-section" id="hero">
            <div className="hero-text">
                <h3>Hi, i'm Muhammad<br/>
                a fullstack developer.</h3>
                <p style={{fontSize:30, color:"black"}}>Let's connect:</p>

                <div className="socials">
                    <a href="" target="_blank" rel="noopener noreferrer"> 
                        <FaGithub color="black" title="Github" size={30}/>
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer"> 
                        <FaTwitter color="black" title="X" size={30}/>
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer"> 
                        <FaInstagram color="#E4405F" title="Instagram" size={30}/>
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer"> 
                        <FaFacebook  title="Facebook" color="#1877F2" size={30}/>
                    </a>
                    
                    
                </div>
            </div>
            <div className="hero-image">
                <img src={Profile} alt="profile image" style={{width:300, height:300}}/>
            </div>
        </div>

         <div className="tech-stack">
                <h1>Tools||</h1>
               <FaHtml5 color="#E34F26" title="HTML5" size={45}/>
               <FaCss3Alt color="#1572B6" title="CSS3" size={45}/>
               <SiJavascript color="#F7DF1E" title="JAVASCRIPT" size={45}/>
               <FaReact color="61DAFB" title="REACT" size={45}/>
               <FaPython color="#3776AB" title="PYTHON" size={45}/>
               <SiDjango color="lightgreen" title="DJANGO" size={45}/>
            </div>

        <div className="About" id="about">
            <div className="about-img">
                <img src={About}alt="about image" style={{width:300, height:300}}/>
            </div>

           
            <div className="about-text">
                <h1>About Me</h1>
                <p>Hi, i'm a fullstack  developer specializing in building responsive, user-friendly and SEO-optimized landing pages, mobile  and web applications that solve real-world problems and create meaningful impact.<br/>
I posses strong skills in React.js, HTML5, CSS3, Javascript, on-page and meta-tags  search engine optimization (SEO).<br/>

i'm currently at Kisii University pursuing my Bachelor's degree in Software engineering and actively upskilling through multiple online courses and summits. i'm exploring Cyber Security, AI and Automation...<br/>

I'm currently working on amazing objects and remain open to new opportunities for collaboration and innovation in the tech space

</p>
            </div>
        </div>

        <div className="work" id="work">
          <h1 style={{color:"lightgreen"}}>Each project is a unique piece of development</h1>  
          <div className="project-wrapper">
            <div className="project-image">
                <img src={About} style={{height:200, width:400}}/>
            </div>

            <div className="project-text">
                <h4>Pata Makazi Marketplace</h4>
                <p>developed a full-stack housing marketplace app. Applied clean design concept, web responsiveness and ensured future scaling is easy. Applied on-page and meta-tag seo together with site indexing.<br/>
                Used: <b>React.js</b> |<b>Django</b></p>
                <div className="project-urls">
                   <a href=""> <h3>Code <FaGithub/></h3></a>

                    <a href=""><h3>Live Demo  <FaExternalLinkAlt/></h3></a>
                </div>
            </div>
          </div>

          <div className="project-wrapper" >
           

            <div className="project-text">
                <h4>Campaign Landing page</h4>
                <p>developed a campaign landing page for dr David Maraga(a presidential candidate). it's a simple website about him and his contributions in his career.<br/>
                Used: <b>HTML5</b> |<b>CSS3</b></p>
                <div className="project-urls">
                   <a href="https://github.com/Ndurya1/LandingPage"> <h3>Code <FaGithub/></h3></a>

                    <a href="https://ndurya1.github.io/LandingPage/"><h3>Live Demo  <FaExternalLinkAlt/></h3></a>
                </div>
            </div>
             <div className="project-image">
                <img src={LandingPage} style={{width:400, height:200}}/>
            </div>
          </div>
        </div>

        <div className="contact-section" id="contacts">
            <p>Got a question, proposal, work or want collaboration on a project?<br/>Lets discuss it:</p>

            <div className="links">
            <h2><FaEnvelope/><a href={`mailto:${email}`}>EMAIL |</a></h2>
            <h2><FaWhatsapp/><a href={`https://wa.me/${phoneNumber}`}>WHATSAPP |</a></h2>
           
            </div>
        </div>
        <div className="footer">
            &copy; 2025. all rights reserved.
        </div>
        </>

    )
}

export default Main