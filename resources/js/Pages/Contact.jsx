import { useForm } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Contact() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Détection de la taille de l'écran
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const { setData, post, processing } = useForm({
        name: '',
        email: '',
        message: ''
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        post('/contact'); // envoie les données à Laravel
    };

    // Animations pour les champs de formulaire
    const inputVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({ 
            opacity: 1, 
            y: 0,
            transition: { 
                delay: i * 0.2,
                duration: 0.5,
                ease: "easeOut" 
            }
        })
    };

    return (
        <div className="contacts h-full flex justify-center items-center w-full flex-col md:flex-row gap-4 md:gap-6 p-4 md:px-5">
            {/* En-tête pour mobile uniquement */}
            <motion.h2 
                className="text-xl font-bold text-slate-500 mb-4 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                Contactez-moi
            </motion.h2>
            
            {/* Form Section */}
            <motion.div 
                className="form w-full md:w-9/10 my-2 sm:my-3 md:my-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <form method="POST" action="/contact" onSubmit={handleSubmit} className="flex flex-col items-center w-full">
                    <div className="inputs-container font-excon w-full flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-7">
                        {/* Name Input */}
                        <motion.div 
                            className="relative w-full"
                            custom={0}
                            initial="hidden"
                            animate="visible"
                            variants={inputVariants}
                        >
                            <input
                                id="name"
                                name="name"
                                type="text"
                                onChange={(e) => setData('name', e.target.value)}
                                placeholder=" "
                                className="peer w-full py-2 px-5 sm:px-9 rounded-md border-b-2 sm:border-b-4 border-slate-500 bg-[var(--bacground)] text-white caret-[var(--between_text_2_color)] focus:border-[#CCE5F6] outline-none transition-all text-sm sm:text-base"
                            />
                            <label
                                htmlFor="name" 
                                className="absolute font-excon left-5 sm:left-9 top-2.5 text-xs sm:text-sm text-slate-500 transition-all duration-300 peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-[#CCE5F6] peer-not-placeholder-shown:top-[-10px] peer-not-placeholder-shown:text-xs"
                            >
                                Nom
                            </label>
                        </motion.div>
                    
                        {/* Email Input */}
                        <motion.div 
                            className="relative w-full"
                            custom={1}
                            initial="hidden"
                            animate="visible"
                            variants={inputVariants}
                        >
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder=" "
                                onChange={(e) => setData('email', e.target.value)}
                                required
                                className="peer text-white w-full py-2 px-5 sm:px-9 rounded-md border-b-2 sm:border-b-4 border-slate-500 bg-[var(--bacground)] text-[var(--between_text_color)] caret-[var(--between_text_2_color)] focus:border-[#CCE5F6] outline-none transition-all text-sm sm:text-base"
                            />
                            <label
                                htmlFor="email"
                                className="absolute font-excon left-5 sm:left-9 top-2.5 text-xs sm:text-sm text-slate-500 transition-all duration-300 peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-[#CCE5F6] peer-not-placeholder-shown:top-[-10px] peer-not-placeholder-shown:text-xs"
                            >
                                Email
                            </label>
                        </motion.div>
                    
                        {/* Message Textarea */}
                        <motion.div 
                            className="relative w-full"
                            custom={2}
                            initial="hidden"
                            animate="visible"
                            variants={inputVariants}
                        >
                            <textarea
                                id="message"
                                name="message"
                                // rows={windowWidth < 640 ? "2" : "2"}
                                rows={1}
                                placeholder=" "
                                onChange={(e) => setData('message', e.target.value)}
                                required
                                className="peer text-white w-full py-2 px-5 sm:px-9 rounded-md border-b-2 sm:border-b-4 border-slate-500 bg-[var(--bacground)] text-[var(--between_text_color)] focus:border-[#CCE5F6] outline-none transition-all resize-y min-h-[80px] text-sm sm:text-base"
                            ></textarea>
                            <label
                                htmlFor="message"
                                className="absolute font-excon left-5 sm:left-9 top-2 text-xs sm:text-sm text-slate-500 transition-all duration-300 peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-[#CCE5F6] peer-not-placeholder-shown:top-[-10px] peer-not-placeholder-shown:text-xs"
                            >
                                Message
                            </label>
                        </motion.div>
                    </div>
                
                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        disabled={processing}
                        className={`mt-6 sm:mt-8 w-full px-6 sm:px-10 py-2.5 sm:py-3 border-2 border-slate-500 text-white cursor-pointer font-medium rounded-xl shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color)] focus:ring-opacity-50 text-sm sm:text-base ${
                            processing ? 'opacity-70' : 'hover:bg-[rgba(187,177,249,0.14)] hover:text-[#0b0b0e] hover:font-bold hover:border-none transform hover:-translate-y-1'
                        }`}
                        custom={3}
                        initial="hidden"
                        animate="visible"
                        variants={inputVariants}
                        whileHover={{ scale: processing ? 1 : 1.03 }}
                        whileTap={{ scale: processing ? 1 : 0.98 }}
                    >
                        {processing ? (
                            <div className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span className="text-sm sm:text-base">Envoi en cours...</span>
                            </div>
                        ) : (
                            'Envoyer le Message'
                        )}
                    </motion.button>
                </form>
            </motion.div>

        </div>      
    );
}

export default Contact;