import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Database, Shield, Zap, Globe, Lock, BarChart3, Users } from 'lucide-react';
import TextType from '@/components/TextType';
import obeliskIndex from '@/assets/obelisk-index.jpg';
import obeliskAtlas from '@/assets/obelisk-atlas.jpg';

const Platforms = () => {
  const platforms = [
    {
      name: 'Obelisk Index',
      title: 'Plataforma de Inteligencia de Amenazas',
      description: 'Convierte información de la dark web en inteligencia accionable para investigaciones policiales. Análisis avanzado de amenazas, correlación de datos y alertas en tiempo real.',
      image: obeliskIndex,
      features: [
        { icon: Search, text: 'Monitoreo Dark Web' },
        { icon: Zap, text: 'Alertas Tiempo Real' },
        { icon: BarChart3, text: 'Análisis Predictivo' },
        { icon: Shield, text: 'Inteligencia Accionable' }
      ],
      color: 'from-primary to-primary-glow'
    },
    {
      name: 'Obelisk Atlas',
      title: 'Plataforma Segura de Datos',
      description: 'Consolida y organiza información a gran escala en una vista unificada y confiable. Búsqueda rápida, correlación y análisis de datasets nacionales e internacionales.',
      image: obeliskAtlas,
      features: [
        { icon: Database, text: 'Consolidación Masiva' },
        { icon: Globe, text: 'Alcance Internacional' },
        { icon: Lock, text: 'Controles de Acceso' },
        { icon: Users, text: 'Colaboración Segura' }
      ],
      color: 'from-primary-dark to-primary'
    }
  ];

  return (
    <section id="plataformas" className="py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Database className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary tracking-wide uppercase">
              NUESTRAS PLATAFORMAS
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            <TextType
              text={["Obelisk Index", "Obelisk Atlas"]}
              typingSpeed={75}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="|"
              className="hero-text"
            />
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dos soluciones especializadas que transforman datos complejos en inteligencia estratégica 
            para la toma de decisiones críticas en seguridad nacional.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="space-y-32">
          {platforms.map((platform, index) => (
            <div 
              key={platform.name}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-fade-in`}>
                <div className="flex items-center space-x-2 mb-6">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary tracking-wide uppercase">
                    {platform.name}
                  </span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
                  {platform.title}
                </h3>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {platform.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {platform.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${platform.color} bg-opacity-20`}>
                        <feature.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary-dark text-primary-foreground glow-primary"
                    onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Solicitar Acceso
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Ver Demo
                  </Button>
                </div>
              </div>

              {/* Platform Preview */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} animate-slide-up`}>
                <Card className="overflow-hidden glow-card bg-card/50 border-border/50">
                  <div className="relative">
                    <img 
                      src={platform.image} 
                      alt={`${platform.name} Interface`}
                      className="w-full h-auto"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} opacity-10`}></div>
                    
                    {/* Overlay Badge */}
                    <div className="absolute top-4 right-4 glass px-3 py-1 rounded-lg">
                      <span className="text-xs font-medium text-primary">{platform.name}</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platforms;