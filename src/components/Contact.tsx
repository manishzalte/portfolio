import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Spider-Signal',
      value: 'manishzalte@gmail.com',
      description: 'Send web-slinging signals'
    },
    {
      icon: Phone,
      title: 'Emergency Line',
      value: '+91 9146850242',
      description: 'Direct communication line'
    },
    {
      icon: MapPin,
      title: 'Pune HQ',
      value: 'PUNE, IND',
      description: 'Primary web-slinging territory'
    }
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-spiderman font-bold text-spiderman-red spiderman-text-glow mb-4">
            SEND THE SIGNAL
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-spiderman-red to-spiderman-red-dark mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="spiderman-card p-8">
              <h3 className="text-2xl font-spiderman font-semibold text-spiderman-red mb-8">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="w-12 h-12 bg-spiderman-red/20 rounded-lg flex items-center justify-center group-hover:bg-spiderman-red/30 transition-colors duration-300">
                      <info.icon className="w-6 h-6 text-spiderman-red" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">{info.title}</h4>
                      <p className="text-spiderman-red font-semibold mb-1">{info.value}</p>
                      <p className="text-sm text-gray-400">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="spiderman-card p-8">
              <h3 className="text-2xl font-spiderman font-semibold text-spiderman-red mb-6">
                Mission Statement
              </h3>
              <p className="text-gray-300 leading-relaxed">
                "With great power comes great responsibility. I'm here to help protect the digital realm 
                and create amazing web experiences. Whether you need a web-slinging developer for your 
                next project or just want to discuss the latest in web technology, I'm ready to answer 
                the call."
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="spiderman-card p-8"
          >
            <h3 className="text-2xl font-spiderman font-semibold text-spiderman-red mb-8">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Identity
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-spiderman-black-light border border-spiderman-red/30 rounded-lg px-4 py-3 text-white 
                             placeholder-gray-400 focus:outline-none focus:border-spiderman-red focus:ring-1 focus:ring-spiderman-red
                             transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Signal Frequency
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-spiderman-black-light border border-spiderman-red/30 rounded-lg px-4 py-3 text-white 
                             placeholder-gray-400 focus:outline-none focus:border-spiderman-red focus:ring-1 focus:ring-spiderman-red
                             transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Mission Type
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-spiderman-black-light border border-spiderman-red/30 rounded-lg px-4 py-3 text-white 
                           placeholder-gray-400 focus:outline-none focus:border-spiderman-red focus:ring-1 focus:ring-spiderman-red
                           transition-all duration-300"
                  placeholder="Enter subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Emergency Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full bg-spiderman-black-light border border-spiderman-red/30 rounded-lg px-4 py-3 text-white 
                           placeholder-gray-400 focus:outline-none focus:border-spiderman-red focus:ring-1 focus:ring-spiderman-red
                           transition-all duration-300 resize-none"
                  placeholder="Describe your mission..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn-spiderman flex items-center justify-center gap-3"
              >
                <Send size={24} />
                Send the Signal
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

