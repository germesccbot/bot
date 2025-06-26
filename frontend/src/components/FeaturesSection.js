import React from 'react';
import { motion } from 'framer-motion';
import { FaImage, FaFileAlt, FaMicrophone, FaGlobe, FaLightbulb, FaHeadset } from 'react-icons/fa';

const FeaturesSection = () => {
  const features = [
    {
      icon: FaImage,
      title: "Понимает фотографии",
      description: "Пришлите фото нужной техники или поломки - бот мгновенно поймет, что вам нужно"
    },
    {
      icon: FaFileAlt,
      title: "Читает документы",
      description: "Загрузите инструкцию, чек или гарантийный талон - ИИ найдет всю нужную информацию"
    },
    {
      icon: FaMicrophone,
      title: "Слышит голосовые сообщения",
      description: "Просто расскажите голосом, что вам нужно - бот поймет и поможет с выбором"
    },
    {
      icon: FaGlobe,
      title: "Просматривает интернет",
      description: "Находит актуальные цены, отзывы и характеристики техники в реальном времени"
    },
    {
      icon: FaLightbulb,
      title: "Умные рекомендации",
      description: "Анализирует ваши потребности и предлагает идеальные варианты техники"
    },
    {
      icon: FaHeadset,
      title: "24/7 поддержка",
      description: "Консультант работает круглосуточно без выходных и перерывов"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-germes-dark to-germes-gray relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1518291344630-4857135fb581" 
          alt="Kitchen Background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            ВОЗМОЖНОСТИ НАШЕГО
            <span className="block gradient-text">ИИ-КОНСУЛЬТАНТА</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Современный искусственный интеллект, который понимает ваши потребности 
            лучше обычного продавца-консультанта
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="glass-dark rounded-3xl p-8 h-full hover-glow transition-all duration-300 hover:border-germes-green/30">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-germes-green to-primary-400 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="text-2xl text-germes-dark" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
              ПОПРОБУЙТЕ ПРЯМО СЕЙЧАС!
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Откройте Telegram и начните общение с нашим ИИ-консультантом
            </p>
            <a
              href="https://t.me/Germes_cc_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center btn-primary text-germes-dark text-xl font-black px-10 py-4 rounded-2xl hover:scale-105 transition-all duration-300"
            >
              Открыть в Telegram
              <motion.span
                className="ml-3"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;