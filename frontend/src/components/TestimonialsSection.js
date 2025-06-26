import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Анна Петрова",
      location: "Алушта",
      rating: 5,
      text: "Невероятно удобно! Бот помог выбрать идеальную стиральную машину для небольшой квартиры. Учел все нюансы, которые я даже не знала. Сэкономила и время, и деньги!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Дмитрий Волков",
      location: "Симферополь", 
      rating: 5,
      text: "Пришел сфотографировал сломанную микроволновку - бот сразу понял проблему и предложил отличные варианты замены. Очень впечатлен технологиями!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Елена Смирнова",
      location: "Ялта",
      rating: 5,
      text: "Долго выбирала холодильник, консультанты в магазинах путали. А тут за 5 минут получила точные рекомендации с учетом семьи из 4 человек. Супер!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-germes-gray to-germes-dark relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1469964062538-06fad433a132" 
          alt="Happy Home"
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
            ОТЗЫВЫ НАШИХ
            <span className="block gradient-text">КЛИЕНТОВ</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Более 10,000 довольных покупателей уже оценили удобство нашего сервиса
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-dark rounded-3xl p-8 h-full hover-glow transition-all duration-300 relative">
                <FaQuoteLeft className="text-germes-green text-3xl mb-6 opacity-50" />
                
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-germes-green text-sm" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-germes-green mb-2">10K+</div>
            <div className="text-gray-300 font-semibold">Довольных клиентов</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-germes-green mb-2">5</div>
            <div className="text-gray-300 font-semibold">Минут на подбор</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-germes-green mb-2">98%</div>
            <div className="text-gray-300 font-semibold">Точность рекомендаций</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-germes-green mb-2">24/7</div>
            <div className="text-gray-300 font-semibold">Работа без перерывов</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;