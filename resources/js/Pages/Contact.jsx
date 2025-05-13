import { useForm } from "@inertiajs/react";
import React from "react"

function Contact() {


    const { setData, post, processing } = useForm({
        name: '',
        email: '',
        message: ''
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        post('/contact'); // envoie les données à Laravel
      };

    return (
        <div className="contacts h-full flex justify-center items-center w-full flex-col md:flex-row gap-6 w-full">
        {/* Form Section */}
        <div className="form w-full md:w-8/10 my-5">
          <form method="POST" action="/contact" onSubmit={handleSubmit} className="flex flex-col items-center w-full">
            <div className="inputs-container font-excon w-full flex flex-col justify-center items-center gap-7">
              {/* Name Input */}
              <div className="relative w-full">
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={(e) => setData('name', e.target.value)}
                  placeholder=" "
                  className="peer w-full py-2 px-9 rounded-md border-b-4 border-slate-500 bg-[var(--bacground)] text-white caret-[var(--between_text_2_color)] focus:border-[#CCE5F6] outline-none transition-all"
                />
                <label
                  htmlFor="name" 
                  className="absolute font-excon left-9 top-2.5 text-sm text-slate-500 transition-all duration-300 peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-[#CCE5F6] peer-not-placeholder-shown:top-[-10px] peer-not-placeholder-shown:text-xs"
                >
                  Nom
                </label>
              </div>
          
              {/* Email Input */}
              <div className="relative w-full">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder=" "
                  onChange={(e) => setData('email', e.target.value)}
                  required
                  className="peer text-white w-full py-2 px-9 rounded-md border-b-4 border-slate-500 bg-[var(--bacground)] text-[var(--between_text_color)] caret-[var(--between_text_2_color)] focus:border-[#CCE5F6] outline-none transition-all"
                />
                <label
                  htmlFor="email"
                  className="absolute font-excon left-9 top-2.5 text-sm text-slate-500 transition-all duration-300 peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-[#CCE5F6] peer-not-placeholder-shown:top-[-10px] peer-not-placeholder-shown:text-xs"
                >
                  Email
                </label>
              </div>
          
              {/* Message Textarea */}
              <div className="relative w-full " >
                <textarea
                  id="message"
                  name="message"
                  rows="2"
                  placeholder=" "
                  onChange={(e) => setData('message', e.target.value)}
                  required
                  className="peer text-white w-full py-2 px-9 rounded-md border-b-4 border-slate-500 bg-[var(--bacground)] text-[var(--between_text_color)] focus:border-[#CCE5F6] outline-none transition-all"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute  font-excon left-9 top-2 text-sm text-slate-500 transition-all duration-300 peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-[#CCE5F6] peer-not-placeholder-shown:top-[-10px] peer-not-placeholder-shown:text-xs"
                >
                  Message
                </label>
              </div>
            </div>
          
            {/* Submit Button */}
            <button
              type="submit"
              disabled={processing}
              className={`mt-9 w-full px-10 py-3 border-2 border-slate-500 rounded-full text-white cursor-pointer font-medium rounded-xl shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color)] focus:ring-opacity-50 ${
                processing ? 'opacity-70' : 'hover:bg-[rgba(187,177,249,0.14)] hover:text-[#0b0b0e] hover:font-bold hover:border-none transform hover:-translate-y-1'
              }`}
            >
              {processing ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Envoi en cours...
                </div>
              ) : (
                'Envoyer le Message'
              )}
            </button>
          </form>
        </div>
      </div>      
    )
}

export default Contact