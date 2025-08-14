import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Mail, Briefcase, Code } from 'lucide-react';

const About: React.FC = () => {
  const personalInfo = [
    { icon: User, label: 'Identity', value: 'Manish Zalte' },
    { icon: MapPin, label: 'Location', value: 'Pune, IND' },
    { icon: Calendar, label: 'Experience', value: '4+ Years' },
    { icon: Mail, label: 'Signal', value: 'manishzalte@gmail.com' },
  ];

  const workExperience = [
    {
      company: 'Zensar Technologies',
      role: 'Software Engineer',
      duration: '2023 - Present',
      description: 'Leading web development initiatives with Python, React, and DevOps practices.'
    },
    {
      company: 'Zensar Technologies',
      role: 'Junior Software Engineer',
      duration: '2021 - 2023',
      description: 'Developed scalable web applications and maintained cloud infrastructure.'
    }
  ];

  const sideProjects = [
    {
      title: 'Web Slinger API',
      description: 'A RESTful API for managing web-slinging routes and crime-fighting data.',
      tech: ['Python', 'FastAPI', 'PostgreSQL']
    },
    {
      title: 'Spider-Sense Dashboard',
      description: 'Real-time monitoring dashboard for threat detection and response.',
      tech: ['React', 'TypeScript', 'WebSocket']
    },
    {
      title: 'Venom Tracker',
      description: 'Mobile app for tracking and analyzing patterns in the city.',
      tech: ['React Native', 'Node.js', 'MongoDB']
    }
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-spiderman font-bold text-spiderman-red spiderman-text-glow mb-4">
            THE WEB-SLINGER
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-spiderman-red to-spiderman-red-dark mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="spiderman-card p-8"
          >
            <h3 className="text-2xl font-spiderman font-semibold text-spiderman-red mb-8">
              Secret Identity
            </h3>
            <div className="space-y-6">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-12 h-12 bg-spiderman-red/20 rounded-lg flex items-center justify-center group-hover:bg-spiderman-red/30 transition-colors duration-300">
                    <info.icon className="w-6 h-6 text-spiderman-red" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="font-medium text-white">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="spiderman-card p-8"
          >
            <h3 className="text-2xl font-spiderman font-semibold text-spiderman-red mb-8">
              The Story
            </h3>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Just like the legendary Spider-Man, I swing through the digital realm with my web of code, 
                protecting the internet from bugs and creating extraordinary user experiences. With 4 years 
                of experience under my belt, I've mastered the art of web development.
              </p>
              <p>
                My journey began with Python, where I learned the fundamentals of programming and backend 
                development. Then I discovered React, and like discovering my spider powers, it opened up 
                a whole new world of possibilities for creating dynamic, interactive web applications.
              </p>
              <p>
                In DevOps, I found my spider-sense - the ability to anticipate issues before they happen 
                and deploy solutions with lightning speed. Whether it's building APIs, crafting user interfaces, 
                or managing cloud infrastructure, I'm always ready to answer the call of duty.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-spiderman font-semibold text-spiderman-red spiderman-text-glow mb-8 text-center">
            Work Experience
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="electric-card p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Briefcase className="w-6 h-6 text-spiderman-blue" />
                  <h4 className="text-xl font-semibold text-white">{job.role}</h4>
                </div>
                <p className="text-spiderman-blue font-medium mb-2">{job.company}</p>
                <p className="text-gray-400 text-sm mb-4">{job.duration}</p>
                <p className="text-gray-300">{job.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Side Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-spiderman font-semibold text-spiderman-red spiderman-text-glow mb-8 text-center">
            Side Projects
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {sideProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="venom-card p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Code className="w-6 h-6 text-spiderman-purple" />
                  <h4 className="text-lg font-semibold text-white">{project.title}</h4>
                </div>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-spiderman-purple/20 text-spiderman-purple px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
