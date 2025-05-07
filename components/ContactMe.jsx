import React, { useState } from 'react';
import logo from '../Images/Logo.PNG';
import YT from '../Images/YT_logo.png';
import INSTA from '../Images/Insta_logo.png';
import FB from '../Images/facebook_logo.png';
import LINKEDIN from '../Images/LinkedIn_logo.png';

const ContactMe = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Message from website');
    const body = encodeURIComponent(`From: ${email}\n\n${message}`);
    window.location.href = `mailto:samratnur20@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="shadow-md rounded-2xl overflow-hidden">
      <div className="flex flex-col md:flex-row gap-6">
        
        
        <div className="flex flex-col px-6 py-4 w-full md:w-1/2 font-primary items-center justify-center">
          
          <div className="flex items-center gap-4 mb-4">
            <img src={logo} className="w-auto h-[60px]" alt="Logo" />
            <p className="font-bold text-lg md:text-2xl">Samrat Nur</p>
          </div>

        
          <div className="flex gap-4 mt-2">
            <a href="https://www.linkedin.com/in/samratnurs/" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f0eae6] hover:scale-120 transition-transform duration-200">
                <img src={LINKEDIN} alt="LinkedIn" className="w-5 h-5" />
              </div>
            </a>
            <a href="https://www.youtube.com/@samratnurs" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f0eae6] hover:scale-120 transition-transform duration-200">
                <img src={YT} alt="YouTube" className="w-5 h-5" />
              </div>
            </a>
            <a href="https://www.instagram.com/samratnurs/" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f0eae6] hover:scale-120 transition-transform duration-200">
                <img src={INSTA} alt="Instagram" className="w-5 h-5" />
              </div>
            </a>
            <a href="https://www.facebook.com/samratnurr" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f0eae6] hover:scale-120 transition-transform duration-200">
                <img src={FB} alt="Facebook" className="w-5 h-5" />
              </div>
            </a>
          </div>
        </div>

        <div className="flex-1 p-6 bg-backGround font-primary">
          <h2 className="text-xl font-bold mb-4">Contact Me</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="example@email.com"
              required
              className="px-4 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={5}
              placeholder="Your message..."
              required
              className="px-4 py-2 border border-gray-300 bg-white rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="mt-2 bg-yellow-300 hover:bg-yellow-400 py-2 rounded-md transition"
            >
              Send via Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
