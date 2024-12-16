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
import profileImage from '../app/rb_17049.png'
import shoeappImage from  '../app/shoe_app.png';
import food1 from '../app/food1.png'
import food2 from '../app/food2.png'
import food3 from '../app/food3.png'
import food4 from '../app/food4.png'
import food5 from '../app/food5.png'
import food6 from '../app/food6.png'
import project1 from  '../app/Capture.png';
import {MarqueeDemo} from  '@/components/comments';
import Iphone15Pro from "@/components/ui/iphone-15-pro";
import RetroGrid from "@/components/ui/retro-grid";


import { Dock, DockIcon } from "@/components/ui/dock";
import { CalendarIcon, HomeIcon, MailIcon, PencilIcon, SunMedium } from "lucide-react";
import Meteors from "@/components/ui/meteors";

export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  calendar: (props: IconProps) => <CalendarIcon {...props} />,
  home: (props: IconProps) => <HomeIcon {...props} />,
  pencile: (props: IconProps) => <PencilIcon {...props} />,
  email: (props: IconProps) => <MailIcon {...props} />,  
  sun: (props: IconProps) => <SunMedium {...props} />,
  linkedin: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>LinkedIn</title>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  ),
  x: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>X</title>
      <path
        fill="currentColor"
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      />
    </svg>
  ),
  youtube: (props: IconProps) => (
    <svg
      width="32px"
      height="32px"
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>youtube</title>
      <path d="M29.41,9.26a3.5,3.5,0,0,0-2.47-2.47C24.76,6.2,16,6.2,16,6.2s-8.76,0-10.94.59A3.5,3.5,0,0,0,2.59,9.26,36.13,36.13,0,0,0,2,16a36.13,36.13,0,0,0,.59,6.74,3.5,3.5,0,0,0,2.47,2.47C7.24,25.8,16,25.8,16,25.8s8.76,0,10.94-.59a3.5,3.5,0,0,0,2.47-2.47A36.13,36.13,0,0,0,30,16,36.13,36.13,0,0,0,29.41,9.26ZM13.2,20.2V11.8L20.47,16Z" />
    </svg>
  ),
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  notion: (props: IconProps) => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
        fill="#000"
      />
    </svg>
  ),
  googleDrive: (props: IconProps) => (
    <svg viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
        fill="#0066da"
      />
      <path
        d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
        fill="#00ac47"
      />
      <path
        d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
        fill="#ea4335"
      />
      <path
        d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
        fill="#00832d"
      />
      <path
        d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
        fill="#2684fc"
      />
      <path
        d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
        fill="#ffba00"
      />
    </svg>
  ),
  whatsapp: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 175.216 175.552"
      {...props}
    >
      <defs>
        <linearGradient
          id="b"
          x1="85.915"
          x2="86.535"
          y1="32.567"
          y2="137.092"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#57d163" />
          <stop offset="1" stopColor="#23b33a" />
        </linearGradient>
        <filter
          id="a"
          width="1.115"
          height="1.114"
          x="-.057"
          y="-.057"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="3.531" />
        </filter>
      </defs>
      <path
        fill="#b3b3b3"
        d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
        filter="url(#a)"
      />
      <path
        fill="#fff"
        d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
      />
      <path
        fill="url(#linearGradient1780)"
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
      />
      <path
        fill="url(#b)"
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
      />
    </svg>
  ),
};

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

  const images = [
    "https://raw.githubusercontent.com/TheAlphamerc/flutter_ecommerce_app/refs/heads/master/screenshots/screenshot_ios_1.png",
    "https://raw.githubusercontent.com/TheAlphamerc/flutter_ecommerce_app/refs/heads/master/screenshots/screenshot_ios_2.png",
    "https://raw.githubusercontent.com/TheAlphamerc/flutter_ecommerce_app/refs/heads/master/screenshots/screenshot_ios_3.png",
  ];
  
  const food_app = [
    "../app/food1.png",
    "../app/food2.png",
    "../app/food3.png",
    "../app/food4.png",
    "../app/food5.png",
    "../app/food6.png"
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => { const interval = setInterval(() => setCurrentImageIndex(i => (i + 1) % images.length), 2000); return () => clearInterval(interval); }, []);
  

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <BackgroundAnimation />
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">MYTHERAYAN</h1>
          <nav className="hidden md:flex space-x-4">
          <a href="#home" onClick={() => scrollTo('home')} className="hover:text-primary transition-colors">Home</a>
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
          <a href="#home" onClick={() => scrollTo('home')} className="text-2xl hover:text-primary transition-colors">Home</a>
            <a href="#about" onClick={() => scrollTo('about')} className="text-2xl hover:text-primary transition-colors">About</a>
            <a href="#skills" onClick={() => scrollTo('skills')} className="text-2xl hover:text-primary transition-colors">Skills</a>
            <a href="#projects" onClick={() => scrollTo('projects')} className="text-2xl hover:text-primary transition-colors">Projects</a>
            <a href="#contact" onClick={() => scrollTo('contact')} className="text-2xl hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
      )}

      <main className="pt-16 relative z-10">
        <motion.section
          id="home"
          className="min-h-screen flex items-center justify-center text-center"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
           {/* <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"> */}
          
          {/* <RetroGrid /> */}
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
            <RetroGrid />
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
                  src={profileImage}
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
          <div className="relative mx-auto px-4">
          {/* <div className="relative flex  w-full mx-auto px-4"> */}
          
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
            <Meteors number={20} />
          </div>
        </motion.section>
     <div className="container mx-auto px-4">
     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <Iphone15Pro
        className="size-full"
        src={images[currentImageIndex]}
      />
       <Iphone15Pro
        className="size-full"
        src="https://github.com/adeeteya/FlutterFurnitureApp/raw/master/images/add_to_cart.gif"
      />
       <Iphone15Pro
        className="size-full"
        src={food_app[currentImageIndex]}
      />
       <Iphone15Pro
        className="size-full"
        src={images[currentImageIndex]}
      />

      </div>
    </div>


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
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        <div className="relative h-[450px]">
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
        <MarqueeDemo/>
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
      <div className="fixed bottom-8 left-0 right-0 z-50">
  <div className="relative">
    <Dock direction="middle" className="flex justify-center items-center py-4 bg-background/80 backdrop-blur-sm">
    <DockIcon>
        <Icons.home className="size-6 text-primary" />
      </DockIcon>
      <DockIcon>
        <Icons.pencile className="size-6 text-primary" />
      </DockIcon>
      <div
        className="h-Full min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"
      ></div>
      <DockIcon>
        <Icons.gitHub className="size-6 text-primary" />
      </DockIcon>
      {/* <DockIcon>
        <Icons.googleDrive className="size-6 text-primary" />
      </DockIcon>
      <DockIcon>
        <Icons.notion className="size-6 text-primary" />
      </DockIcon>
      <DockIcon>
        <Icons.whatsapp className="size-6 text-primary" />
      </DockIcon> */}
      <DockIcon>
        <Icons.linkedin className="size-6 text-primary" />
      </DockIcon>
      <DockIcon>
        <Icons.x className="size-6 text-primary" />
      </DockIcon>
      <DockIcon>
        <Icons.youtube className="size-6 text-primary" />
      </DockIcon>
      <div
        className="h-Full min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"
      ></div>
      <DockIcon>
        <Icons.sun className="size-6 text-primary" />
      </DockIcon>
      
    </Dock>
    
  </div>
</div>


    </div>

    
  )
}