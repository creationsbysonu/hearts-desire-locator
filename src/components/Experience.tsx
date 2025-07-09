import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, GraduationCap, User } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      type: 'work',
      icon: Briefcase,
      title: "Software Developer Intern",
      company: "Digital Pathshala",
      period: "Dec 2024 - Current",
      description: "Developed and optimized web applications using React and Node.js, improving performance by 25%. Collaborated with cross-functional teams to deliver scalable solutions."
    },
    {
      type: 'work',
      icon: User,
      title: "Freelance Developer",
      company: "Self-Employed",
      period: "Jul 2022 - Dec 2024",
      description: "Designed and implemented responsive websites for clients, integrating APIs and ensuring excellent user experience."
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: "Bachelor of Computer Engineering",
      company: "Tribhuvan University",
      period: "2021 - 2025",
      description: "Studying BE in Computer Engineering. Completed projects in AI, machine learning, and web development, showcasing technical expertise and innovative problem-solving."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-cosmic bg-clip-text text-transparent mb-6">
            Experiences
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-cosmic transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        exp.type === 'work' ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'
                      }`}>
                        <exp.icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                          <p className="text-accent font-medium">{exp.company}</p>
                        </div>
                        <span className="text-sm text-muted-foreground mt-1 md:mt-0">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};