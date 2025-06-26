import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaRubleSign, FaThumbsUp, FaMedal } from 'react-icons/fa';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: FaClock,
      title: "Экономия времени",
      description: "Никаких долгих походов по магазинам. Подбор за 5 минут в удобном мессенджере",
      stat: "5 минут",
      statLabel: "на подбор техники"
    },
    {
      icon: FaRubleSign,
      title: "Лучшие цены",
      description: "ИИ сравнивает цены в нашем магазине и находит самые выгодные предложения для вас",
      stat: "до 30%",
      statLabel: "экономии средств"
    },
    {
      icon: FaThumbsUp,
      title: "Точные рекомендации",
      description: "Анализ ваших потребностей и характеристик помещения для идеального выбора",
      stat: "98%",
      statLabel: "довольных клиентов"
    },
    {
      icon: FaMedal,
      title: "Экспертные знания",
      description: "База знаний нашего ИИ обновляется ежедневно с учетом новинок и отзывов покупателей",
      stat: "10 000+",
      statLabel: "моделей в базе"
    }
  ];

  return (
    <section className="py-20 bg-germes-gray relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1655708021078-f5050752f7fa" 
          alt="Modern Appliance"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-germes-gray via-transparent to-germes-gray"></div>
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
            ПОЧЕМУ ВЫБИРАЮТ
            <span className="block gradient-text">GERMES.CC?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Преимущества собственной разработки ИИ для выбора бытовой техники
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-dark rounded-3xl p-8 h-full hover-glow transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-germes-green to-primary-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="text-2xl text-germes-dark" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {benefit.description}
                    </p>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-black text-germes-green">
                        {benefit.stat}
                      </span>
                      <span className="text-sm text-gray-400 uppercase tracking-wide">
                        {benefit.statLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-germes-dark to-germes-gray rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-3xl md:text-4xl font-black text-white text-center mb-12">
            КАК ЭТО РАБОТАЕТ?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-germes-green rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black text-germes-dark group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Напишите боту</h4>
              <p className="text-gray-300">Опишите, что вам нужно, или пришлите фото</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-germes-green rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black text-germes-dark group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Получите рекомендации</h4>
              <p className="text-gray-300">ИИ подберет идеальные варианты с ценами</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-germes-green rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black text-germes-dark group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Покупайте с уверенностью</h4>
              <p className="text-gray-300">Выберите лучший вариант и оформите заказ</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;