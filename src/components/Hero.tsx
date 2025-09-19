import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Database, Target } from 'lucide-react';
import heroDashboard from '@/assets/hero-dashboard.jpg';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-left animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary tracking-wide uppercase">
                INTELIGENCIA DE AMENAZAS
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="hero-text">Inteligencia</span>
              <br />
              <span className="text-foreground">Accionable</span>
              <br />
              <span className="text-muted-foreground">a Gran Escala</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              Transformamos información de la dark web en inteligencia estratégica para fuerzas del orden, 
              con plataformas que consolidan y analizan datos a escala nacional e internacional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-primary-foreground glow-primary animate-glow-pulse group"
                onClick={() => document.getElementById('plataformas')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explorar Plataformas
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Solicitar Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <Database className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoreo</div>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Seguro</div>
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative animate-slide-up">
            <div className="relative glow-card">
              <img 
                src={heroDashboard} 
                alt="Obelisk Intelligence Dashboard" 
                className="w-full h-auto rounded-lg border border-border shadow-2xl"
              />
              <div className="absolute inset-0 bg-primary/5 rounded-lg"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium animate-pulse">
              En tiempo real
            </div>
            <div className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-lg text-sm font-medium">
              Datos cifrados
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-transparent via-primary to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;