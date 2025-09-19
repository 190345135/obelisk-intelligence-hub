import { Card } from '@/components/ui/card';
import { Quote, Shield, Award, Users } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "La capacidad de Obelisk Index para transformar datos fragmentados de la dark web en inteligencia accionable ha revolucionado nuestras investigaciones. Reducimos el tiempo de análisis en un 75% y aumentamos significativamente la precisión de nuestras operaciones.",
      author: "Oficial de Inteligencia",
      organization: "Unidad de Cibercrimen Nacional",
      role: "Policía Nacional",
      icon: Shield
    },
    {
      quote: "Obelisk Atlas nos permite consolidar información de múltiples fuentes internacionales en tiempo real. La interfaz intuitiva y los controles de acceso granulares nos dan la confianza para compartir inteligencia crítica con nuestros socios internacionales.",
      author: "Analista Senior",
      organization: "Departamento de Inteligencia Militar",
      role: "Fuerzas Armadas",
      icon: Award
    },
    {
      quote: "Como contractor privado, necesitamos herramientas que se adapten a diferentes clientes y requisitos de seguridad. La flexibilidad y robustez de las plataformas Obelisk nos ha permitido expandir nuestros servicios y mejorar la calidad de nuestros análisis.",
      author: "Director de Operaciones",
      organization: "Empresa de Seguridad Privada",
      role: "Contractor Privado",
      icon: Users
    },
    {
      quote: "La correlación automática de datos y las alertas predictivas de Obelisk Index nos han permitido anticiparnos a amenazas emergentes. Es una herramienta indispensable para cualquier unidad de inteligencia moderna.",
      author: "Comandante de Inteligencia",
      organization: "División Antiterrorista",
      role: "Policía Federal",
      icon: Shield
    },
    {
      quote: "La auditabilidad completa y los controles de acceso de Obelisk Atlas cumplen con los más altos estándares internacionales. Podemos confiar en que la información sensible está protegida mientras mantenemos la colaboración operativa necesaria.",
      author: "Oficial de Seguridad",
      organization: "Agencia de Inteligencia",
      role: "Gobierno Nacional",
      icon: Award
    },
    {
      quote: "Implementar Obelisk en nuestras operaciones ha mejorado drasticamente nuestra capacidad de respuesta. La integración fue sencilla y el soporte técnico es excepcional. Los resultados hablan por sí mismos.",
      author: "Especialista en Ciberseguridad",
      organization: "Consultora de Seguridad",
      role: "Contractor Especializado",
      icon: Users
    }
  ];

  return (
    <section className="py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/6 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/6 w-72 h-72 bg-primary-glow/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Quote className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary tracking-wide uppercase">
              TESTIMONIOS
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            <span className="hero-text">Lo que dicen</span>
            <br />
            <span className="text-foreground">nuestros socios</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oficiales de inteligencia, fuerzas del orden y contractors privados confían en 
            Obelisk para sus operaciones más críticas.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 glass border-border/30 hover:border-primary/30 transition-smooth animate-fade-in h-full flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-6">
                <Quote className="w-8 h-8 text-primary/40" />
                <testimonial.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Quote */}
              <blockquote className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-border/20 pt-6">
                <div className="font-semibold text-foreground mb-1">
                  {testimonial.author}
                </div>
                <div className="text-sm text-primary font-medium mb-1">
                  {testimonial.organization}
                </div>
                <div className="text-xs text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>

              {/* Security Badge */}
              <div className="mt-4 inline-flex items-center space-x-2 text-xs">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">Identidad Verificada</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Confidencialidad Garantizada</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-primary" />
              <span>Testimonios Verificados</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-primary" />
              <span>Socios Internacionales</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;