'use client';

import { useState } from 'react';
import { FaShareAlt, FaTwitter, FaFacebook, FaWhatsapp, FaCopy } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ShareButton = ({ title, url }: { title: string; url: string }) => {
  const [showShareOptions, setShowShareOptions] = useState(false);

  const socialShare = [
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      url: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
    },
    {
      name: 'Facebook',
      icon: <FaFacebook />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp />,
      url: `https://api.whatsapp.com/send?text=${title} ${url}`,
    },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowShareOptions(!showShareOptions)}
        className="w-full h-full flex items-center justify-center group"
        title="Share this highlight"
      >
        <FaShareAlt className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
      </button>
      <AnimatePresence>
        {showShareOptions && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-full right-0 mb-2 w-40 md:w-48 bg-white rounded-lg shadow-xl p-2 z-50 border border-gray-200"
          >
            {socialShare.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2 text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
              >
                {social.icon}
                <span className="font-medium">{social.name}</span>
              </a>
            ))}
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-3 p-2 w-full text-left text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
            >
              <FaCopy />
              <span className="font-medium">Copy Link</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShareButton;
