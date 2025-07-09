import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: '3D Portfolio Website',
    description: 'Interactive portfolio showcasing 3D graphics, smooth animations, and modern web technologies.',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop',
    technologies: ['React', 'Three.js', 'TypeScript', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    title: 'AR Visualization Tool',
    description: 'Augmented reality application for visualizing 3D models in real-world environments.',
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&h=400&fit=crop',
    technologies: ['React Native', 'ARKit', 'WebRTC', 'Three.js'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for complex data analysis with real-time updates and custom charts.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  }
];

export const Projects = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of my recent work showcasing different technologies, 
            design approaches, and problem-solving techniques.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`overflow-hidden group ${
                project.featured 
                  ? 'bg-gradient-to-br from-card/80 to-primary/5 border-primary/20' 
                  : 'bg-card/50 border-border/50'
              } backdrop-blur-sm`}>
                <div className={`grid ${project.featured ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-6 p-6`}>
                  <div className={project.featured ? 'order-2 md:order-1' : 'order-2'}>
                    <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  
                  <div className={`space-y-4 ${
                    project.featured ? 'order-1 md:order-2' : 'order-1 md:col-span-2'
                  }`}>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                      {project.featured && (
                        <Badge className="bg-gradient-primary text-primary-foreground">
                          Featured
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-accent/30 text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 pt-2">
                      <Button 
                        variant="default" 
                        size="sm" 
                        className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};