'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, Github, Linkedin, Mail, Code, Smartphone, Globe, Server } from 'lucide-react'
import { motion } from 'framer-motion'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import aboutMeImage from '../app/aboutme.jpg';
import shoeappImage from  '../app/shoe_app.png';

// const BackgroundAnimation = () => (
//   <svg
//     className="absolute inset-0 w-full h-full"
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 1282 610"
//   >
//     <defs>
//       <radialGradient id="pulseGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
//         <stop offset="0%" stopColor="rgba(0, 0, 0, 0.1)" />
//         <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
//       </radialGradient>
//     </defs>
//     <g>
//       <motion.circle
//         className="animations_vPath__Hi2pJ"
//         fill="url(#pulseGradient)"
//         r="100"
//         cx="200"
//         cy="200"
//         initial={{ scale: 0.5, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{
//           duration: 2,
//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//       />
//       <motion.circle
//         className="animations_oPath__Rvk9R"
//         fill="url(#pulseGradient)"
//         r="100"
//         cx="800"
//         cy="200"
//         initial={{ scale: 0.5, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{
//           duration: 2,
//           repeat: Infinity,
//           repeatType: "reverse",
//           delay: 1,
//         }}
//       />
//       <motion.path
//         className="animations_dashed__McJPI"
//         d="M184.5 114.5H2C154.667 262.5 458 556.385 494 591C530 625.615 612.5 613 612.5 541.5V114.5H485.5V406L184.5 114.5Z"
//         stroke="black"
//         fill="none"
//         vectorEffect="non-scaling-stroke"
//         initial={{ pathLength: 0 }}
//         animate={{ pathLength: 1 }}
//         transition={{ duration: 5, repeat: Infinity }}
//       />
//       <motion.path
//         className="animations_dashed__McJPI"
//         d="M653.5 114.5H1075L774 410V1C774 1 954.5 1 1075 1C1195.5 1 1282 114.5 1282 207C1282 299.5 1282 495.5 1282 495.5H868.5L1162 207V609.5C1162 609.5 998 609.5 868.5 609.5C739 609.5 653.5 487 653.5 410C653.5 333 653.5 114.5 653.5 114.5Z"
//         stroke="black"
//         fill="none"
//         vectorEffect="non-scaling-stroke"
//         initial={{ pathLength: 0 }}
//         animate={{ pathLength: 1 }}
//         transition={{ duration: 5, repeat: Infinity, delay: 2.5 }}
//       />
//     </g>
//   </svg>
// )

const BackgroundAnimation = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1282 610"
  >
    <defs>
      <radialGradient id="pulseGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stopColor="rgba(0, 0, 0, 0.1)" />
        <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
      </radialGradient>
    </defs>
    <g>
      <motion.circle
        className="animations_vPath__Hi2pJ"
        fill="url(#pulseGradient)"
        r="100"
        cx="200"
        cy="200"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.circle
        className="animations_oPath__Rvk9R"
        fill="url(#pulseGradient)"
        r="100"
        cx="800"
        cy="200"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />
   
<motion.path
  className="animations_dashed__McJPI"
  d="M184.5 114.5H2C154.667 262.5 458 556.385 494 591C530 625.615 612.5 613 612.5 541.5V114.5H485.5V406L184.5 114.5Z"
  stroke="transparent" 
  fill="none"
  strokeWidth="0.1"
  vectorEffect="non-scaling-stroke"
  initial={{ pathLength: 0, stroke: "transparent" }}
  animate={{ pathLength: 1, stroke: "black" }}
  transition={{ duration: 5, repeat: Infinity, delay: 2.5 }}
/>


      <motion.path
        className="animations_dashed__McJPI"
        d="M653.5 114.5H1075L774 410V1C774 1 954.5 1 1075 1C1195.5 1 1282 114.5 1282 207C1282 299.5 1282 495.5 1282 495.5H868.5L1162 207V609.5C1162 609.5 998 609.5 868.5 609.5C739 609.5 653.5 487 653.5 410C653.5 333 653.5 114.5 653.5 114.5Z"
        stroke="transparent" // Initially transparent
        fill="none"
        strokeWidth="0.1"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0, stroke: "transparent" }}
        animate={{ pathLength: 1, stroke: "black" }} // Transition to black
        transition={{ duration: 5, repeat: Infinity, delay: 2.5 }}
      />
    </g>
  </svg>
)
export function PortfolioComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const sections = document.querySelectorAll('section')
      const navLinks = document.querySelectorAll('nav a')

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 100
        const sectionBottom = sectionTop + section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          navLinks.forEach((link) => link.classList?.remove('text-primary'))
          navLinks[index]?.classList?.add('text-primary')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <BackgroundAnimation />
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">MYTHERAYAN</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#about" onClick={() => scrollTo('about')} className="hover:text-primary transition-colors">About</a>
            <a href="#skills" onClick={() => scrollTo('skills')} className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" onClick={() => scrollTo('projects')} className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" onClick={() => scrollTo('contact')} className="hover:text-primary transition-colors">Contact</a>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm">
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            <a href="#about" onClick={() => scrollTo('about')} className="text-2xl hover:text-primary transition-colors">About</a>
            <a href="#skills" onClick={() => scrollTo('skills')} className="text-2xl hover:text-primary transition-colors">Skills</a>
            <a href="#projects" onClick={() => scrollTo('projects')} className="text-2xl hover:text-primary transition-colors">Projects</a>
            <a href="#contact" onClick={() => scrollTo('contact')} className="text-2xl hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
      )}

      <main className="pt-16 relative z-10">
        <motion.section
          id="hero"
          className="min-h-screen flex items-center justify-center text-center"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <div>
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-4"
              variants={fadeInUp}
            >
              Full Stack & Mobile Developer
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl mb-8"
              variants={fadeInUp}
            >
              Crafting seamless experiences across web and mobile platforms
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button onClick={() => scrollTo('projects')}>View My Work</Button>
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          id="about" 
          className="py-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="container mx-auto px-4">
            <motion.h2 className="text-3xl font-bold mb-8" variants={fadeInUp}>About Me</motion.h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <p className="mb-4">
                Hi, I'm a passionate mobile app developer with a focus on Android and iOS platforms, as well as a web developer with 3 years of experience. 
                I specialize in building intuitive and responsive applications that deliver great user experiences on both mobile and web.
              </p>
              <p className="mb-4">
                Over the past few years, I’ve honed my skills in various frameworks and technologies, allowing me to create seamless cross-platform applications. 
                Whether it's crafting engaging user interfaces or developing robust back-end solutions, I thrive on bringing ideas to life through code.
              </p>
              <p>
                Outside of work, I’m constantly exploring new technologies, refining my skills, and working on side projects that push the boundaries of what’s possible in app and web development.
              </p>
            </motion.div>

              <motion.div className="relative h-64 md:h-auto" variants={fadeInUp}>
                <Image 
                  src={aboutMeImage}
                  alt="MYTHERAYAN" 
                  // layout="fill" 
                  // objectFit="fill" 
                  className="rounded-lg"
                />
                
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="skills" 
          className="py-20 bg-muted"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="container mx-auto px-4">
            <motion.h2 className="text-3xl font-bold mb-8" variants={fadeInUp}>Skills & Expertise</motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div className="bg-card p-6 rounded-lg shadow-lg" variants={fadeInUp}>
                <Code className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Full Stack Development</h3>
                <p>Proficient in both front-end and back-end technologies, creating cohesive web applications.</p>
              </motion.div>
              <motion.div className="bg-card p-6 rounded-lg shadow-lg" variants={fadeInUp}>
                <Smartphone className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
                <p>Experienced in building cross-platform mobile apps using React Native and native technologies.</p>
              </motion.div>
              <motion.div className="bg-card p-6 rounded-lg shadow-lg" variants={fadeInUp}>
                <Globe className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                <p>Skilled in creating responsive, accessible, and performant websites using modern web technologies.</p>
              </motion.div>
              <motion.div className="bg-card p-6 rounded-lg shadow-lg" variants={fadeInUp}>
                <Server className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Backend & DevOps</h3>
                <p>Proficient in server-side programming, API development, and cloud infrastructure management.</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="projects" 
          className="py-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          {/* <div className="container mx-auto px-4">
            <motion.h2 className="text-3xl font-bold mb-8" variants={fadeInUp}>Projects</motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "E-commerce Platform", desc: "A full-stack online store with React, Node.js, and MongoDB", type: "Web",image: "{aboutMeImage}" },
                { title: "Fitness Tracker App", desc: "Cross-platform mobile app built with React Native and Firebase", type: "Mobile",image: "{aboutMeImage}" },
                { title: "Task Management System", desc: "Collaborative project management tool using Next.js and GraphQL", type: "Web",image: "{aboutMeImage}" },
                { title: "Smart Home IoT Dashboard", desc: "Real-time IoT control panel with React and WebSockets", type: "Web",image: "{aboutMeImage}" },
                { title: "Social Media Analytics Tool", desc: "Data visualization dashboard using D3.js and Express", type: "Web",image: "{aboutMeImage}" },
                { title: "Augmented Reality Navigation", desc: "iOS app with ARKit for indoor navigation", type: "Mobile",image: "{aboutMeImage}" },
              ].map((project, index) => (
                <motion.div 
                  key={index} 
                  className="bg-card/30 backdrop-blur-md rounded-lg overflow-hidden shadow-lg transition-all hover:scale-105 hover:bg-card/50"
                  variants={fadeInUp}
                >
                  <div className="relative h-48">
                    <Image 
                      src={project.image}
                      alt={project.title} 
                      layout="fill" 
                      objectFit="cover"
                    />
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded text-sm">
                      {project.type}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-2">{project.title}</h3>
                    <p className="text-sm mb-4">{project.desc}</p>
                    <Link href="#" className="text-primary hover:underline">View Project</Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div> */}
          <div className="container mx-auto px-4">
  <motion.h2 className="text-3xl font-bold mb-8" variants={fadeInUp}>Projects</motion.h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[  
      { title: "Home Appliance", desc: "A front-End online store with Flutter and Dart", type: "Mobile", image: aboutMeImage, href: "/projects/ecommerce" },
      { title: "Nike Shoe Application", desc: "Cross-platform mobile app built with Flutter and Rest Api", type: "Mobile", image: shoeappImage, href: "/projects/fitness-tracker" },
      { title: "Task Management System", desc: "Collaborative project management tool using Next.js and GraphQL", type: "Web", image: aboutMeImage, href: "/projects/task-manager" },
      { title: "Smart Home IoT Dashboard", desc: "Real-time IoT control panel with React and WebSockets", type: "Web", image: aboutMeImage, href: "/projects/smart-home" },
      { title: "Social Media Analytics Tool", desc: "Data visualization dashboard using D3.js and Express", type: "Web", image: aboutMeImage, href: "/projects/social-media" },
      { title: "Augmented Reality Navigation", desc: "iOS app with ARKit for indoor navigation", type: "Mobile", image: aboutMeImage, href: "/projects/ar-navigation" },
    ].map((project, index) => (
      <motion.div 
        key={index} 
        className="bg-card/30 backdrop-blur-md rounded-lg overflow-hidden shadow-lg transition-all hover:scale-105 hover:bg-card/50"
        variants={fadeInUp}
      >
        <div className="relative h-48">
          <Image 
            src={project.image}
            alt={project.title} 
            fill 
            className="object-cover"
          />
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded text-sm">
            {project.type}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold mb-2">{project.title}</h3>
          <p className="text-sm mb-4">{project.desc}</p>
          <Link href={project.href} className="text-primary hover:underline">View Project</Link>
        </div>
      </motion.div>
    ))}
  </div>
</div>

        </motion.section>

        <motion.section 
          id="contact" 
          className="py-20 bg-muted"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="container mx-auto px-4">
            <motion.h2 className="text-3xl font-bold mb-8" variants={fadeInUp}>Contact Me</motion.h2>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.form className="space-y-4" variants={fadeInUp}>
                <Input type="text"   placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Textarea placeholder="Message" />
                <Button type="submit">Send Message</Button>
              </motion.form>
              <motion.div variants={fadeInUp}>
                <p className="mb-4">Feel free to reach out if you have any questions, project ideas, or if you'd like to collaborate on something exciting!</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-foreground hover:text-primary transition-colors">
                    <Github />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a href="#" className="text-foreground hover:text-primary transition-colors">
                    <Linkedin />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="#" className="text-foreground hover:text-primary transition-colors">
                    <Mail />
                    <span className="sr-only">Email</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="bg-background py-8 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Mytherayan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}