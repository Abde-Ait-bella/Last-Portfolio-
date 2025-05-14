import React, {useEffect, useState} from 'react'
import Layout from './Layout'
import { motion } from 'framer-motion'
import {  usePage } from '@inertiajs/react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AppProvider } from '../appContext';
import toast, { Toaster } from 'react-hot-toast';

export default function Home()  {
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = React.useState("default");
    const [showEmailTooltip, setShowEmailTooltip] = useState(false);

    const props = usePage().props;
    const projects = props.projects; // Use the context to get the projects data
    const successMessage = props.success;
    const errorMessage = props.error;

    // Spring configuration for cursor following
    const springConfig = {
        damping: 25,
        stiffness: 300,
        mass: 0.8
    };

    // Function to update cursor position with spring physics
    const updateCursorPosition = (clientX, clientY) => {
        setMousePosition(prev => ({
            x: prev.x + (clientX - prev.x) * 0.2,
            y: prev.y + (clientY - prev.y) * 0.2
        }));
    };

    useEffect(() => {
        const mouseMove = (e) => {
            // Create a smoother, delayed cursor effect
            setMousePosition(prev => ({
                x: prev.x + (e.clientX - prev.x) * 0.2,
                y: prev.y + (e.clientY - prev.y) * 0.2
            }));
        };

        window.addEventListener('mousemove', mouseMove);
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            transition: {
                type: "spring",
                stiffness: 500,
                damping: 28
            }
        },
        hover: {
            x: mousePosition.x - 30,
            y: mousePosition.y - 30,
            height: 30,
            width: 30,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 28
            }
        },
        grabbing: {
            x: mousePosition.x - 25,
            y: mousePosition.y - 25,
            height: 50,
            width: 50,
            borderRadius: "8px",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            border: "2px solid white",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 28
            }
        }
    };

    const handleHover = () => setCursorVariant("hover");
    const handleLeave = () => setCursorVariant("default");
    // Display success message from props if available
    useEffect(() => {
        if (successMessage) {
        toast.success(successMessage)
        
        setTimeout(() => {
            window.location.href = '/';
        }, 1500); // Wait 1.5 seconds so user can see the toast
        }
        if (errorMessage) {
        toast.error(errorMessage)
        }
    }, [successMessage, errorMessage]);

    // Function to copy email to clipboard
    const copyEmailToClipboard = () => {
        const email = "abdessamadaitbella1998@gmail.com"; // Replace with your actual email
        navigator.clipboard.writeText(email)
            .then(() => {
                toast.success("Email copied to clipboard!");
            })
            .catch(() => {
                toast.error("Failed to copy email");
            });
    };

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const container = {
        display: windowWidth > 1024 ? "flex" : "grid",
        gridTemplateRows: windowWidth <= 768 ? "auto 1fr" : undefined,
        gap: windowWidth <= 768 ? "1rem" : undefined,
        padding: windowWidth <= 768 ? "1rem" : undefined
    };

    return (
        <AppProvider data={projects}>

            <Toaster />
            <div style={container} className='homeContainer relative overflow-hidden min-h-screen'>
                <div className={`home-left ${windowWidth > 1024 ? "w-[36%] px-7 py-6" : "w-full py-6 px-3"} grid gap-3`}>
                    <motion.div
                        className="home-left-img h-[10rem] w-[10rem] border-2 border-slate-500 rounded-full overflow-hidden"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                    >
                        <img src="/images/profile.png" alt="" className='h-full w-full rounded' />
                    </motion.div>
                    <div
                        className={`home-left-content ${windowWidth <= 1024 ? "mt-6" : ""} text-[rgb(203, 213, 225)] text-2xl text-white`}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                    >
                        Bonjour, je m'appelle <span className='text-3xl text-white'>Abdessamad Ait-bella </span>
                        Je suis un <span className='text-slate-500 font-bold'>développeur Full-Stack</span>
                    </div>
                    <div>
                        <motion.div
                            className={` ${windowWidth <= 1024 ? "mt-6" : ""} description text-slate-300 text-lg leading-relaxed max-h-[90px] overflow-y-auto custom-scrollbar scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent
                [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:bg-transparent 
                [&::-webkit-scrollbar-thumb]:bg-gray-400/70 
                [&::-webkit-scrollbar-thumb]:rounded-full`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            onMouseEnter={handleHover}
                            onMouseLeave={handleLeave}
                        >
                            <p>
                                Je suis basé à <span className="text-white font-medium">Taroudant, Maroc</span>.
                                J'ai un diplôme de technicien spécialisé en développement full-Stack de
                                <span className="text-white font-medium"> ISTA</span> (Institut des Sciences et Techniques Appliquées).
                            </p>
                            <p className="mt-2">
                                Je suis un développeur front-end junior passionné par la création d'applications web conviviales et visuellement attrayantes. J'adore
                                <span className="text-slate-500 font-bold"> Laravel</span> et
                                <span className="text-slate-500 font-bold"> React.js</span> comme frameworks full-stack,
                                <span className="text-slate-500 font-bold"> MySQL</span> pour les bases de données, et,
                                bien sûr, <span className="text-slate-500 font-bold">CSS</span>.
                            </p>
                        </motion.div>
                    </div>
                    
                    <div className='contact'>
                        <div className={`flex flex-col items-center gap-6 ${windowWidth < 900 ? "mt-5" : "mt-2"}`}>
                            <div className="flex gap-6">
                                <a href="https://github.com/Abde-Ait-bella" target="_blank" rel="noopener noreferrer"
                                    onMouseEnter={handleHover}
                                    onMouseLeave={handleLeave}
                                    className="text-slate-300 hover:text-white transition-colors duration-300 no-underline">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/in/abdessamad-ait-bella-92481a249/" target="_blank" rel="noopener noreferrer"
                                    onMouseEnter={handleHover}
                                    onMouseLeave={handleLeave}
                                    className="text-slate-300 hover:text-white transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                    </svg>
                                </a>
                                <button
                                    onClick={copyEmailToClipboard}
                                    onMouseEnter={() => {
                                        handleHover();
                                        setShowEmailTooltip(true);
                                    }}
                                    onMouseLeave={() => {
                                        handleLeave();
                                        setShowEmailTooltip(false);
                                    }}
                                    className="text-slate-300  hover:text-white transition-colors duration-300 cursor-pointer relative"
                                    aria-label="Copy email to clipboard"
                                >
                                    {showEmailTooltip && (
                                        <div className="absolute bottom-8 right-[-2.2rem] transform translate-x-[2%] bg-slate-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap">
                                            Copier l'email
                                        </div>
                                    )}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                    </svg>
                                </button>
                            </div>
                            <a
                                href="/files/ABDESSAMAD_AITBELLA_CV_03-2025.pdf"
                                download="ABDESSAMAD_AITBELLA_CV_03-2025.pdf"
                                onMouseEnter={handleHover}
                                onMouseLeave={handleLeave}
                                className="px-6 py-3 border-2 border-slate-500 rounded-full text-white font-medium rounded-lg hover:from-slate-600 hover:to-slate-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                </svg>
                                Télécharger CV
                            </a>
                        </div>
                    </div>
                </div>

                <div
                    className={`home-right overflow-auto ${windowWidth > 1024 ? "w-[74%]" : "w-full"} flex justify-center items-center ${windowWidth <= 1024 ? "p-0" : "p-10"}`}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                >
                    <Layout />
                </div>
            </div>
        </AppProvider>
    )
}
