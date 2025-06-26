import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Как работает ИИ-консультант?",
      answer: "Наш искусственный интеллект анализирует ваши потребности, изучает характеристики помещения и предпочтения, затем подбирает оптимальные варианты техники из нашей базы данных более чем 10,000 моделей."
    },
    {
      question: "Можно ли доверять рекомендациям бота?",
      answer: "Да, наш ИИ обучен на данных от экспертов бытовой техники и постоянно обновляется. Точность рекомендаций составляет 98%, что подтверждают отзывы наших клиентов."
    },
    {
      question: "Какие типы файлов понимает бот?",
      answer: "Бот распознает фотографии (JPG, PNG), документы (PDF, DOC), голосовые сообщения, а также может анализировать ссылки на товары в интернет-магазинах."
    },
    {
      question: "Сколько стоят консультации?",
      answer: "Все консультации абсолютно бесплатны! Мы зарабатываем на комиссии от партнерских магазинов, поэтому клиенты получают экспертную помощь без доплат."
    },
    {
      question: "Можно ли получить скидку через бота?",
      answer: "Да! Бот имеет доступ к специальным акциям и скидкам наших партнеров. Часто можем предложить цены ниже, чем в обычных магазинах."
    },
    {
      question: "Что делать, если техника не подошла?",
      answer: "Мы гарантируем поддержку после покупки. Если техника не оправдала ожиданий, поможем с возвратом или обменом согласно гарантийным условиям."
    }
  ];

  return (
    <section className="py-20 bg-germes-dark relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            ЧАСТЫЕ
            <span className="block gradient-text">ВОПРОСЫ</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ответы на самые популярные вопросы о нашем сервисе
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="glass-dark rounded-2xl overflow-hidden border border-white/10 hover:border-germes-green/30 transition-all duration-300">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                >
                  <h3 className="text-xl font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 bg-germes-green rounded-full flex items-center justify-center">
                    {openIndex === index ? (
                      <FaMinus className="text-germes-dark text-sm" />
                    ) : (
                      <FaPlus className="text-germes-dark text-sm" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA after FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass rounded-3xl p-8 md:p-12 max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              ОСТАЛИСЬ ВОПРОСЫ?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Напишите нашему боту - он ответит на любые ваши вопросы!
            </p>
            <a
              href="https://t.me/Germes_cc_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center btn-primary text-germes-dark text-xl font-black px-10 py-4 rounded-2xl hover:scale-105 transition-all duration-300"
            >
              Задать вопрос боту
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

export default FAQSection;