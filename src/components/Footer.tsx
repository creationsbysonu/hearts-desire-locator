import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border/20 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold bg-gradient-cosmic bg-clip-text text-transparent mb-4">
            Let's Create Something Amazing
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Always excited to work on new projects and collaborate with amazing people.
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-primary hover:shadow-glow-primary transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-accent hover:shadow-glow-accent transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-primary hover:shadow-glow-primary transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="border-t border-border/20 pt-8">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500" /> using React, Three.js & Framer Motion
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              © 2024 Portfolio. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};