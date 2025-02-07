"use client";

import { useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ValentineApp() {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [accepted, setAccepted] = useState(false);
  const [nextPage, setNextPage] = useState(false);

  const moveNoButton = () => {
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;
    setNoPosition({ x: randomX, y: randomY });
  };

  const handleAccept = () => {
    setAccepted(true);
  };

  const goToNextPage = () => {
    setNextPage(true);
  };

  return (
    <>
      {accepted && !nextPage && <Confetti />}
      <div className="flex flex-col items-center justify-center h-screen bg-pink-200 text-center">
        {!accepted ? (
          <>
            <h1 className="text-3xl font-bold mb-6">Will you be my Valentine? 💖</h1>
            <div className="flex space-x-4">
              <Button
                className="bg-red-500 text-white px-6 py-3 text-lg w-32"
                onClick={handleAccept}
              >
                Yes 💕
              </Button>
              <motion.button
                className="bg-black text-white px-6 py-3 text-lg w-32 relative"
                style={{ position: "relative", left: noPosition.x, top: noPosition.y }}
                onMouseEnter={moveNoButton}
                onMouseOver={moveNoButton}
                onFocus={moveNoButton}
                onClick={moveNoButton}
              >
                No 🥹
              </motion.button>
            </div>
          </>
        ) : !nextPage ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold">Yay! 🎉💖</h1>
            <p className="text-lg mt-4">I knew you&apos;d say yes! 😊</p>
            <Button
              className="bg-blue-500 text-white px-6 py-3 text-lg mt-4"
              onClick={goToNextPage}
            >
              Here&apos;s a song for you 🎶
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center h-screen w-screen"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/2Vv-BfVoq4g?autoplay=1"
              title="Ed Sheeran - Perfect"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </motion.div>
        )}
      </div>
    </>
  );
}
