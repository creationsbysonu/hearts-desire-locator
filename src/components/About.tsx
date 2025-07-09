import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Palette, Rocket, Zap } from 'lucide-react';

const skills = [
  'React', 'TypeScript', 'Three.js', 'Node.js', 'Python', 'WebGL',
  'Framer Motion', 'Tailwind CSS', 'Next.js', 'GraphQL', 'Docker', 'AWS'
];

const features = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'End-to-end web applications with modern technologies and best practices.'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that users love to interact with.'
  },
  {
    icon: Rocket,
    title: '3D Experiences',
    description: 'Immersive 3D worlds and interactive experiences using Three.js and WebGL.'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimized, fast-loading applications with smooth animations and interactions.'
  }
];

export const About = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer who loves bringing ideas to life through code. 
            With expertise in modern web technologies and 3D graphics, I create digital 
            experiences that are both beautiful and functional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Started as a curious kid tinkering with HTML, now crafting complex 
                3D web experiences. I believe in the power of technology to tell 
                stories and create meaningful connections between users and digital products.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or creating digital art.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/30"
              >
                <div className="p-2 rounded-lg bg-gradient-primary">
                  <feature.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8">Skills & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Badge 
                  variant="secondary" 
                  className="px-4 py-2 text-sm bg-gradient-accent text-accent-foreground hover:shadow-glow-accent transition-all duration-300"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};