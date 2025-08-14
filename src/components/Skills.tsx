import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Web Powers',
      icon: '🕷️',
      skills: [
        { name: 'React', level: 95, color: 'red' },
        { name: 'TypeScript', level: 90, color: 'red' },
        { name: 'JavaScript', level: 92, color: 'red' },
        { name: 'HTML/CSS', level: 88, color: 'red' },
      ]
    },
    {
      title: 'Backend Strength',
      icon: '⚡',
      skills: [
        { name: 'Python', level: 95, color: 'blue' },
        { name: 'Node.js', level: 85, color: 'blue' },
        { name: 'FastAPI', level: 88, color: 'blue' },
        { name: 'Django', level: 80, color: 'blue' },
      ]
    },
    {
      title: 'DevOps Spider-Sense',
      icon: '🕸️',
      skills: [
        { name: 'Docker', level: 85, color: 'purple' },
        { name: 'AWS', level: 80, color: 'purple' },
        { name: 'CI/CD', level: 82, color: 'purple' },
        { name: 'Kubernetes', level: 75, color: 'purple' },
      ]
    }
  ];

  const otherSkills = [
    'MongoDB', 'PostgreSQL', 'Redis', 'GraphQL', 'REST APIs', 'Git', 'Linux', 'Nginx'
  ];

  const getProgressBarClass = (color: string) => {
    switch (color) {
      case 'red':
        return 'skill-progress-red';
      case 'blue':
        return 'skill-progress-blue';
      case 'purple':
        return 'skill-progress-purple';
      default:
        return 'skill-progress-red';
    }
  };

  const getCardClass = (color: string) => {
    switch (color) {
      case 'red':
        return 'spiderman-card';
      case 'blue':
        return 'electric-card';
      case 'purple':
        return 'venom-card';
      default:
        return 'spiderman-card';
    }
  };

  return (
    <section id="skills" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-spiderman font-bold text-spiderman-red spiderman-text-glow mb-4">
            MY POWERS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-spiderman-red to-spiderman-red-dark mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className={`${getCardClass(category.skills[0].color)} p-8`}
            >
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-spiderman font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-white font-bold">{skill.level}%</span>
                    </div>
                    <div className="skill-progress">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={getProgressBarClass(skill.color)}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <h3 className="text-2xl font-spiderman font-semibold text-spiderman-red mb-8 text-center">
            Additional Tools & Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-4 rounded-lg text-center hover:scale-105 transition-transform duration-300"
              >
                <span className="text-white font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

