import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Server, Brain } from 'lucide-react';

export const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Front-End Development",
      description: "Expertise in crafting pixel-perfect interfaces using modern tools like React, Tailwind CSS, and more."
    },
    {
      icon: Server,
      title: "Back-End Development",
      description: "Proficient in building robust server-side logic and APIs using Node.js, Express, and MongoDB."
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description: "Analytical problem-solver with experience in optimizing performance and tackling complex challenges."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <img 
                src="/lovable-uploads/e54e3e42-b3f9-461f-9c58-fd35a01da97a.png" 
                alt="Sonu Gupta"
                className="w-48 h-48 rounded-full border-4 border-primary/20 shadow-glow-primary"
              />
            </motion.div>
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-cosmic bg-clip-text text-transparent mb-4">
                Sonu Gupta
              </h2>
              <h3 className="text-2xl font-semibold text-accent mb-2">Full Stack Developer</h3>
              <p className="text-lg text-muted-foreground mb-2">BE in Computer Engineering</p>
              <p className="text-muted-foreground">A junior at IOE Purwanchal Campus, Dharan</p>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-cosmic bg-clip-text text-transparent mb-6">
            About
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            I am a dedicated and passionate developer with a keen eye for detail and a commitment to delivering high-quality, user-focused solutions. My expertise lies in creating modern, responsive, and visually appealing applications that seamlessly integrate functionality with aesthetics. Whether it's front-end design, back-end logic, or both, I strive to bring ideas to life through code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-cosmic transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <skill.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};