"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { RoughNotation, RoughNotationGroup } from "react-rough-notation"
import { useTheme } from "next-themes"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import { useSection } from "context/section"
import useOnScreen from "hooks/useOnScreen"
import useScrollActive from "hooks/useScrollActive"
import ExperienceGroup from "../components/ExperienceGroup"

const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isSecOnScreen = useOnScreen(sectionRef)

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef)

    gsap.registerPlugin(ScrollTrigger)

    const fromAnimation = {
      y: 100,
      opacity: 0,
    }

    const toAnimation = (triggerTarget: string) => ({
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: q(`.${triggerTarget}`),
        start: "top bottom",
      },
    })

    // experience-intro
    gsap.fromTo(q(".experience-intro"), fromAnimation, toAnimation("experience-intro"))

    // exp-bg
    gsap.fromTo(q(".exp-bg"), fromAnimation, toAnimation("exp-bg"))

    // bg svg parallax effect
    gsap.fromTo(
      q(".bg-svg"),
      { y: -80 },
      {
        scrollTrigger: {
          trigger: q(".bg-svg"),
          scrub: true,
        },
        y: 65,
        duration: 3,
      },
    )
  }, [])

  const { theme } = useTheme()

  const expRef = useRef<HTMLDivElement>(null)

  // Set active link for experience section
  const experienceSection = useScrollActive(sectionRef)
  const { onSectionChange } = useSection()
  useEffect(() => {
    experienceSection ? onSectionChange!("experience") : onSectionChange!("")
  }, [experienceSection, onSectionChange])

  return (
    <div ref={sectionRef} className="experience-panel bg-white dark:bg-[#1B2731] relative">
      <section id="experience" className="section">
        <RoughNotationGroup>
          <div className="text-center">
            <RoughNotation
              type="underline"
              color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
              strokeWidth={2}
              order={1}
              show={isSecOnScreen}
            >
              <h2 className="section-heading">Experience</h2>
            </RoughNotation>
          </div>
          <div className="md:grid grid-rows-5 lg:grid-rows-6 grid-cols-5">
            <div className="col-start-1 col-end-3 row-start-1 row-end-2 lg:col-start-1 lg:col-end-6 lg:ml-8 lg:mt-auto mt-4 experience-intro">
              <p>
              I’ve had the opportunity to work on a variety of projects that have honed my skills as a developer. Here’s a brief overview of my professional journey, where I’ve tackled challenges and built impactful applications.
              </p>
            </div>

            <div
              className="col-start-1 col-end-6 row-start-2 row-end-6 lg:row-start-2 lg:row-end-7 place-content-end"
              ref={expRef}
            >
              <p className="exp-bg my-4">Here is my professional experience.</p>
              {experienceInfo.map((exp) => (
                <ExperienceGroup exp={exp} key={exp.id} />
              ))}
            </div>

        </div>
        </RoughNotationGroup>

        <svg
          width="96"
          height="21"
          viewBox="0 0 96 21"
          aria-hidden="true"
          className="bg-svg hidden lg:block fill-marrsgreen dark:fill-carrigreen absolute bottom-12 right-12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M79.2202 0.959991L62.7802 17.32L46.3301 0.959991L29.8902 17.32L13.4501 0.959991L0.410156 13.94L0.400146 17.58L13.4501 4.58999L29.8902 20.95L46.3301 4.58999L62.7802 20.95L79.2202 4.58999L93.7302 19.02L95.5402 17.19L79.2202 0.959991Z" />
        </svg>
      </section>
    </div>
  )
}

const experienceInfo = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    subTitle: "Sparklog Ventures LLP | January 2025 - June 2025",
    list: [
      "Contributed to the development and maintenance of full-stack web applications using React, Node.js, and PostgreSQL. ",
      "Designed and implemented responsive user interfaces using Tailwind CSS and Material UI for enhanced user experience.",
      "Collaborated with development and design teams to deliver high-quality features in an agile environment.",
    ],
  },
  
]


export default ExperienceSection
