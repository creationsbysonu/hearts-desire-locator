import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useRef } from 'react';
import * as THREE from 'three';

const FloatingOrb = ({ position, color, scale = 1 }: { position: [number, number, number], color: string, scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
    </mesh>
  );
};

const Scene3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />
      
      <FloatingOrb position={[-2, 1, 0]} color="#8B5CF6" scale={0.8} />
      <FloatingOrb position={[2, -1, -1]} color="#06B6D4" scale={0.6} />
      <FloatingOrb position={[0, 2, -2]} color="#A855F7" scale={0.4} />
      <FloatingOrb position={[-1, -2, 1]} color="#0EA5E9" scale={0.5} />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};

export const Hero3D = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80 z-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-cosmic bg-clip-text text-transparent mb-6">
            Creative
            <br />
            Developer
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Crafting immersive digital experiences with cutting-edge technology, 
          beautiful design, and interactive 3D worlds.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button variant="default" size="lg" className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            Download CV
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center gap-6"
        >
          <Button variant="ghost" size="icon" className="hover:text-primary hover:shadow-glow-primary transition-all duration-300">
            <Github className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-accent hover:shadow-glow-accent transition-all duration-300">
            <Linkedin className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-primary hover:shadow-glow-primary transition-all duration-300">
            <Mail className="w-6 h-6" />
          </Button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center text-muted-foreground">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};