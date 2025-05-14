import React from 'react';
import { motion } from 'framer-motion';
// import { useApp } from '../appContext';


function Projects() {

    // const data = useApp(); // Use the context to get the projects data

    const data = [
        {
            id: 1,
            name: "Arbitre",
            image: "./images/projectsScreenShots/arbitre.ma.png",
            website: "https://arbitre.ma",
            domain: "arbitre.ma",
            github: "https://github.com/Abde-Ait-bella/ArbiTre",
            description: " Conception et développement d’une application destinée à aider les arbitres de football à gérer efficacement les questions administratives liées aux matchs.",
            technologies: ["React", "Laravel"]
        },
        {
            id: 2,
            name: "MoroccoVisit",
            image: "./images/projectsScreenShots/moroccovisit.png",
            website: " http://moroccovisit.aitbella.digital",
            domain: "moroccovisit.aitbella.digital",
            github: "https://github.com/Abde-Ait-bella/moroccovisit",
            description: "Conception et développement d’une interface front-end immersive pour explorer les régions du Maroc avec des fonctionnalités avancées.",
            technologies: ["React", "Api google", "SCSS"]
        },
        {
            id: 3,
            name: "Portfolio",
            image: "./images/projectsScreenShots/portfolio.png",
            website: "https://aitbella.digital",
            domain: "aitbella.digital",
            github: "https://github.com/Abde-Ait-bella/Portfolio",
            description: " Conception et développement d’un portfolio mettant en valeur mes compétences en front-end en reproduisant YouTube.",
            technologies: ["React.js", "GSAP", "AWS"]
        }
    ]
    
    
    return (
        <div className="flex flex-col p-3 sm:p-4 md:p-5 pb-6 sm:pb-8 md:pb-10 items-center h-[70vh] overflow-auto 
                scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent
                [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:bg-transparent 
                [&::-webkit-scrollbar-thumb]:bg-gray-400/70 
                [&::-webkit-scrollbar-thumb]:rounded-full">
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full max-w-4xl">
                {data.map((project) => (
                    <motion.div
                        key={project.id}
                        className="bg-white/80 shadow-lg rounded-lg max-h-full sm:max-h-[11.5rem] overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row"
                        whileHover={{
                            scale: [null, 1.01, 1.02],
                            transition: {
                                duration: 0.5,
                                times: [0, 0.6, 1],
                                ease: ["easeInOut", "easeOut"],
                            },
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                        }}
                    >
                        {/* Image container - Full width on mobile, 1/3 on larger screens */}
                        <div className="w-full sm:w-1/3 bg-gray-300/50 overflow-hidden relative h-48 sm:h-auto">
                            <motion.img
                                src={project.image || "./images/projectsScreenShots"}
                                alt={project.name}
                                className="w-full h-full object-cover"
                                initial={{ objectPosition: "50% 50%" }}
                                whileHover={{ 
                                    objectPosition: ["50% 50%", "50% 0%", "50% 50%", "50% 100%", "50% 50%"], 
                                    transition: { 
                                        duration: 10, 
                                        repeat: Infinity, 
                                        ease: "easeInOut",
                                        repeatType: "loop"
                                    } 
                                }}
                            />
                        </div>
                        
                        {/* Content - Full width on mobile, 2/3 on larger screens */}
                        <div className="w-full sm:w-2/3 p-4 sm:p-5 md:p-6 flex flex-col">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 sm:mb-3">
                                <h2 className="text-lg sm:text-xl font-bold capitalize text-gray-800 mb-2 sm:mb-0">{project.name}</h2>
                                <div className="flex space-x-3 mb-2 sm:mb-0">
                                    <a href={project.website || "#"} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 flex items-center">
                                        <span className="mr-1 text-xs sm:text-sm overflow-hidden max-w-20 sm:max-w-30 text-ellipsis whitespace-normal">{project.domain || "Live"}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                    <a href={project.github || "#"} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black flex items-center">
                                        <span className="mr-1 text-xs sm:text-sm">Code</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 h-auto sm:h-[3rem] overflow-hidden text-ellipsis line-clamp-2 sm:line-clamp-2">{project.description}</p>

                            <div className="mt-1 sm:mt-2">
                                <div className="flex flex-wrap gap-1 sm:gap-2">
                                    {project.technologies ? project.technologies.map((tech, index) => (
                                        <span key={index} className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-200/70 text-gray-800 text-xs rounded-md">
                                            {tech}
                                        </span>
                                    )) : (
                                        <span className="text-gray-500 text-xs sm:text-sm">Not specified</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}


export default Projects;