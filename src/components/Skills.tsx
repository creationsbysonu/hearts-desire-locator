import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export const Skills = () => {
  const skills = [
    {
      name: "React.js",
      description: "Building dynamic UIs and SPAs.",
      color: "#61DAFB"
    },
    {
      name: "Node.js",
      description: "Server-side development and APIs.",
      color: "#339933"
    },
    {
      name: "MongoDB",
      description: "NoSQL database management.",
      color: "#47A248"
    },
    {
      name: "Tailwind CSS",
      description: "Modern, responsive styling.",
      color: "#06B6D4"
    },
    {
      name: "MySQL",
      description: "Handling database through use of PhpMyAdmin in built in XAMPP.",
      color: "#4479A1"
    },
    {
      name: "Git & GitHub",
      description: "Version control and collaboration.",
      color: "#F05032"
    },
    {
      name: "Python",
      description: "Data analysis and scripting.",
      color: "#3776AB"
    },
    {
      name: "Problem Solving",
      description: "Algorithms and logical reasoning.",
      color: "#8B5CF6"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-cosmic bg-clip-text text-transparent mb-6">
            Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-cosmic transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div 
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${skill.color}20`, border: `2px solid ${skill.color}` }}
                  >
                    <div 
                      className="w-8 h-8 rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};