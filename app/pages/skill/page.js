'use client'

import { useEffect, useRef, useState } from 'react'

const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React.js', level: 95 },
    { name: 'Next.js', level: 80 },
    { name: 'Tailwind CSS', level: 70 },
]

export default function Skill() {
    const sectionRef = useRef(null)
    const [progress, setProgress] = useState(skills.map(() => 0))
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true)
                }
            },
            { threshold: 0.4 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [hasAnimated])

    useEffect(() => {
        if (!hasAnimated) return

        const intervals = skills.map((skill, i) => {
            return setInterval(() => {
                setProgress(prev => {
                    const updated = [...prev]
                    if (updated[i] < skill.level) {
                        updated[i] += 1
                    } else {
                        clearInterval(intervals[i])
                    }
                    return updated
                })
            }, 15)
        })

        return () => intervals.forEach(clearInterval)
    }, [hasAnimated])

    return (
        <div className='p-4'>
            <h2 className="text-3xl font-bold mb-4 relative inline-block border-b-4 border-blue-500 pb-1">
                Skills
            </h2>
            <div ref={sectionRef} className='p-4' >

                <div className="grid gap-8
                  grid-cols-1 
                  sm:grid-cols-2 
                  md:grid-cols-3
                  lg:grid-cols-3
                  px-6">
                    {skills.map((skill, i) => (
                        <div key={skill.name} className="mb-6">
                            <div className="flex justify-between mb-1">
                                <span className="text-lg font-medium text-gray-800">{skill.name}</span>
                                <span className="text-sm font-semibold text-gray-700">{progress[i]}%</span>
                            </div>
                            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                                <div
                                    className="h-3 bg-blue-500 rounded-full transition-all duration-300"
                                    style={{ width: `${progress[i]}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
