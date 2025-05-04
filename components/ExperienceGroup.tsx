"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface ExperienceProps {
  exp: {
    id: number
    title: string
    subTitle: string
    list: string[]
  }
}

const ExperienceGroup: React.FC<ExperienceProps> = ({ exp }) => {
  const [isOpen, setIsOpen] = useState(exp.id === 1)

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div>
          <h3 className="text-xl font-semibold text-marrsgreen dark:text-carrigreen">{exp.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{exp.subTitle}</p>
        </div>
        <button
          className="h-8 w-8 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-700"
          aria-label={isOpen ? "Collapse" : "Expand"}
        >
          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="mt-3 ml-4">
          <ul className="list-disc pl-4 space-y-2">
            {exp.list.map((item, i) => (
              <li key={i} className="text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ExperienceGroup
