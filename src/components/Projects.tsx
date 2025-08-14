import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Spider-Man Web Tracker',
      description: 'A comprehensive web application for tracking crime patterns and managing patrol routes across the city.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500',
      tags: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
      featured: true,
      color: 'red',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Electric Spider Dashboard',
      description: 'Real-time monitoring dashboard with electric powers visualization and threat detection.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500',
      tags: ['React', 'TypeScript', 'WebSocket', 'D3.js'],
      featured: false,
      color: 'blue',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Venom Analytics Platform',
      description: 'Advanced analytics platform for tracking and analyzing patterns in the digital realm.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500',
      tags: ['Python', 'Django', 'MongoDB', 'Redis'],
      featured: false,
      color: 'purple',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Spider-Sense Mobile App',
      description: 'Mobile application for real-time alerts and communication between web-slingers.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
      tags: ['React Native', 'Node.js', 'Socket.io', 'Firebase'],
      featured: false,
      color: 'red',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Web Infrastructure Manager',
      description: 'DevOps platform for managing web infrastructure and deployment pipelines.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500',
      tags: ['Docker', 'Kubernetes', 'AWS', 'Terraform'],
      featured: false,
      color: 'blue',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Spider Network API',
      description: 'RESTful API for managing the spider network and coordinating web-slinging activities.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500',
      tags: ['FastAPI', 'PostgreSQL', 'Redis', 'Celery'],
      featured: false,
      color: 'purple',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

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

  const getButtonClass = (color: string) => {
    switch (color) {
      case 'red':
        return 'btn-spiderman';
      case 'blue':
        return 'btn-electric';
      case 'purple':
        return 'btn-venom';
      default:
        return 'btn-spiderman';
    }
  };

  const getSecondaryButtonClass = (color: string) => {
    switch (color) {
      case 'red':
        return 'btn-spiderman-secondary';
      case 'blue':
        return 'bg-transparent border-2 border-spiderman-blue text-spiderman-blue font-bold py-2 px-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-spiderman-blue/10 hover:shadow-lg hover:shadow-spiderman-blue/30 active:scale-95';
      case 'purple':
        return 'bg-transparent border-2 border-spiderman-purple text-spiderman-purple font-bold py-2 px-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-spiderman-purple/10 hover:shadow-lg hover:shadow-spiderman-purple/30 active:scale-95';
      default:
        return 'btn-spiderman-secondary';
    }
  };

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-spiderman font-bold text-spiderman-red spiderman-text-glow mb-4">
            MY MISSIONS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-spiderman-red to-spiderman-red-dark mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${getCardClass(project.color)} overflow-hidden card-3d ${
                project.featured ? 'ring-2 ring-spiderman-red' : ''
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-spiderman-red text-white px-3 py-1 rounded-full text-xs font-bold spiderman-glow">
                    FEATURED
                  </span>
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-spiderman font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/10 text-white px-2 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 ${getButtonClass(project.color)} flex items-center justify-center gap-2`}
                  >
                    <Eye size={16} />
                    Live
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 ${getSecondaryButtonClass(project.color)} flex items-center justify-center gap-2`}
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-spiderman flex items-center gap-3 mx-auto">
            <ExternalLink size={24} />
            View All Missions
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

