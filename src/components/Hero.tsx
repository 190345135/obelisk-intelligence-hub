import TextType from '@/components/TextType';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Intelligence operations center" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-light text-white leading-tight mb-8">
            <TextType 
              text={["Inteligencia", "Accionable", "a Gran Escala"]}
              typingSpeed={100}
              pauseDuration={2000}
              showCursor={false}
              className="inline-block"
            />
          </h1>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-12 bg-white/30"></div>
      </div>
    </section>
  );
};

export default Hero;