import React from 'react';
import { motion } from 'framer-motion';
import { FaTelegramPlane, FaRobot, FaClock, FaShieldAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black to-germes-dark relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1664526937033-fe2c11f1be25" 
          alt="Technology Background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      {/* Main CTA Section */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight">
              НАЧНИТЕ ЭКОНОМИТЬ
              <span className="block gradient-text">ВРЕМЯ И ДЕНЬГИ</span>
              <span className="block text-white">УЖЕ СЕГОДНЯ!</span>
            </h2>
            
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Присоединяйтесь к 10,000+ довольных клиентов, которые выбирают технику 
              с помощью нашего ИИ-консультанта
            </p>

            <motion.a
              href="https://t.me/Germes_cc_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center btn-primary text-germes-dark text-2xl md:text-3xl font-black px-16 py-8 rounded-3xl hover:scale-105 transition-all duration-300 shadow-2xl group mb-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTelegramPlane className="mr-6 text-4xl group-hover:animate-bounce" />
              ПОПРОБОВАТЬ БЕСПЛАТНО
              <motion.div
                className="ml-6 w-10 h-10 border-3 border-germes-dark rounded-full flex items-center justify-center"
                animate={{ x: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.div>
            </motion.a>

            <div className="flex flex-wrap justify-center gap-6 text-gray-400">
              <div className="flex items-center">
                <FaRobot className="mr-2 text-germes-green" />
                <span>ИИ-технологии</span>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-2 text-germes-green" />
                <span>Результат за 5 минут</span>
              </div>
              <div className="flex items-center">
                <FaShieldAlt className="mr-2 text-germes-green" />
                <span>100% бесплатно</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 py-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-12 h-12 bg-germes-green rounded-lg flex items-center justify-center mr-4">
                <span className="text-germes-dark text-xl font-black">G</span>
              </div>
              <div>
                <h3 className="text-xl font-black text-white">GERMES<span className="text-germes-green">.CC</span></h3>
                <p className="text-gray-400 text-sm">ИИ-консультант по бытовой технике</p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-2">
                © 2025 Germes.cc. Все права защищены.
              </p>
              <p className="text-gray-500 text-xs">
                Сервис работает на базе современного искусственного интеллекта
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-germes-green/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;