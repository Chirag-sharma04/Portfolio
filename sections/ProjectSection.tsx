import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import game from "public/projects/game.png"
import currency_convert from "public/projects/currency_convert.png"
import mapping from "public/projects/mind-mapping.png"
import Task_Manager from "public/projects/Task_Manager.png"

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [onSectionChange, projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
        Other projects can be explored in{" "}
        <a
          href="https://github.com/Chirag-sharma04"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my github profile
        </a>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Stone-Paper-Scissors",
    type: "Frontend",
    image: (
      <Image
        src={game}
        sizes="100vw"
        fill
        alt="Game"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A simple Stone-Paper-Scissors game built with HTML, CSS, and JavaScript. Users can play against the computer with real-time score tracking and interactive UI.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://stone-paper-scissor-flame.vercel.app/",
    codeUrl: "https://github.com/Chirag-sharma04/Stone-paper-scissor",
    bgColor: "bg-[#9FD0E3]"
  },
  {
    title: "Currency Convertor",
    type: "Frontend",
    image: (
      <Image
        src={currency_convert}
        sizes="100vw"
        fill
        alt="Currrency Convertor"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A simple and responsive currency converter web app built with HTML, CSS, and JavaScript. It fetches real-time exchange rates using the ExchangeRate-API and allows users to convert between multiple currencies instantly.",
    tags: ["JavaScript", "HTML", "CSS","ExchangeRate-API"],
    liveUrl: "https://currency-convertor-delta-lilac.vercel.app",
    codeUrl: "https://github.com/Chirag-sharma04/Currency_convertor",
    bgColor: "bg-[#B4BEE0]",
  },
  {
    title: "Personal Task Manager",
    type: "Full-Stack",
    image: (
      <Image
        src={Task_Manager}
        sizes="100vw"
        fill
        alt="Personal Task Manager"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "The Task Manager is a MERN stack web app that lets users manage tasks with secure JWT-based authentication. It uses React.js and Tailwind CSS on the frontend, Node.js, Express.js, and MongoDB on the backend, with Mongoose for database handling and Axios for API communication.",
    tags: ["React.js","Tailwind CSS","Axios","Node.js","Express.js","MongoDB"],
    liveUrl: "https://task-manager-smoky-five.vercel.app/",
    codeUrl: "https://github.com/Chirag-sharma04/Task-Manager",
    bgColor: "bg-[#A6CECE]",
  },
  {
    title: "Yt2mindmap",
    type: "Full-Stack",
    image: (
      <Image
        src={mapping}
        sizes="100vw"
        fill
        alt="Mind mappinng"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A full-stack tool that converts YouTube videos into interactive mind maps using AI. Built with Next.js, Tailwind CSS, and TypeScript, it fetches video transcripts, summarizes them, and visualizes the structure for better learning and retention.",
    tags: ["NextJS", "TypeScript", "OpenAI", "TailwindCSS","React","JavaScript"],
    liveUrl: "https://yt2mindmap-v2.vercel.app/",
    codeUrl: "https://github.com/Chirag-sharma04/yt2mindmap-v2",
    bgColor: "bg-[#C5E4E7]",
  },
];

export default ProjectSection;
