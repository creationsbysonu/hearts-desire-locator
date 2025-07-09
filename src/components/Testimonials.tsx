import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Chanda Gupta",
      role: "Optometrist and M.Sc. student at University of IndianaPollis",
      content: "Working with Sonu was an incredible experience. The level of professionalism and attention to detail was unparalleled. Highly recommend!",
      rating: 5
    },
    {
      name: "Dipesh Yadav",
      role: "Chartered Accountant",
      content: "Amazing work! The website you created exceeded all expectations. It was exactly what we needed, and the design was beautiful. Thank you for your dedication!",
      rating: 5
    },
    {
      name: "Ritesh Sahani",
      role: "Bachelors in Computer Engineering at IOE Purwanchal Campus, Dharan",
      content: "The team at Sonu brought our vision to life. The attention to detail and user experience focus made the project a huge success. Looking forward to work more with him.",
      rating: 5
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
            What People Say About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-cosmic transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-8 h-8 text-primary/50" />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="border-t border-border/50 pt-4">
                    <h4 className="font-semibold mb-1">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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