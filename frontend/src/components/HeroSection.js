import React from 'react';
import { motion } from 'framer-motion';
import { FaTelegramPlane, FaRobot, FaClock } from 'react-icons/fa';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1665093313889-f936ed2f7cef" 
          alt="Smart Home Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-germes-dark/90 via-germes-dark/80 to-germes-dark"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-germes-green/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-6xl mx-auto"
        >
          {/* Logo */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <div className="w-20 h-20 bg-germes-green rounded-lg flex items-center justify-center mr-4 shadow-2xl">
                  <span className="text-germes-dark text-3xl font-black">G</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-400 rounded-full animate-bounce-slow"></div>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white">
                GERMES<span className="text-germes-green">.CC</span>
              </h1>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-7xl lg:text-8xl font-black leading-tight mb-8"
          >
            <span className="block text-white">НАШ ОНЛАЙН</span>
            <span className="block gradient-text">КОНСУЛЬТАНТ</span>
            <span className="block text-white">ПОДБЕРЕТ</span>
            <span className="block text-germes-green">БЫТОВУЮ ТЕХНИКУ</span>
            <span className="block text-white text-3xl md:text-5xl lg:text-6xl mt-4">
              ЗА 5 МИНУТ ПРЯМО В ТЕЛЕГРАМ
            </span>
          </motion.h2>

          {/* Features Row */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20">
              <FaRobot className="text-germes-green text-2xl mr-3" />
              <span className="text-white font-semibold">ИИ-консультант</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20">
              <FaClock className="text-germes-green text-2xl mr-3" />
              <span className="text-white font-semibold">Быстрый подбор</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20">
              <FaTelegramPlane className="text-germes-green text-2xl mr-3" />
              <span className="text-white font-semibold">В Telegram</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="mb-12">
            <a
              href="https://t.me/Germes_cc_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-germes-green to-primary-400 text-germes-dark text-xl md:text-2xl font-black px-12 py-6 rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-germes-green/30 group"
            >
              <FaTelegramPlane className="mr-4 text-3xl group-hover:animate-bounce" />
              НАЖМИТЕ СЮДА
              <motion.div
                className="ml-4 w-8 h-8 border-2 border-germes-dark rounded-full flex items-center justify-center"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.div>
            </a>
          </motion.div>

          {/* Phone Mockups */}
          <motion.div 
            variants={itemVariants}
            className="relative max-w-4xl mx-auto"
          >
            <div className="flex justify-center items-end space-x-4 md:space-x-8">
              <motion.div
                className="relative transform rotate-12 hover:rotate-6 transition-transform duration-500"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-48 md:w-64 h-96 md:h-128 bg-germes-gray rounded-3xl border-8 border-gray-800 shadow-2xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-germes-dark to-germes-gray p-4">
                    <div className="text-germes-green text-sm font-semibold mb-2">Germes.cc - Онлайн консультант</div>
                    <div className="text-white text-xs leading-relaxed">
                      Добро пожаловать в магазин бытовой техники germes.cc! Я здесь, чтобы помочь вам выбрать идеальную технику для вашего дома 🏠
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="relative transform -rotate-12 hover:rotate-6 transition-transform duration-500"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-48 md:w-64 h-96 md:h-128 bg-germes-gray rounded-3xl border-8 border-gray-800 shadow-2xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-germes-dark to-germes-gray p-4">
                    <div className="text-germes-green text-sm font-semibold mb-2">What can this bot do?</div>
                    <div className="text-white text-xs leading-relaxed mb-4">
                      Добро пожаловать в магазин бытовой техники germes.cc! Я здесь, чтобы помочь вам выбрать идеальную технику для вашего дома 🏠
                    </div>
                    <div className="bg-primary-600 text-white text-xs px-4 py-2 rounded-lg">
                      Start
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;