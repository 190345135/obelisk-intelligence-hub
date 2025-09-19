import TextType from '@/components/TextType';
import obeliskIndex from '@/assets/obelisk-index.jpg';
import obeliskAtlas from '@/assets/obelisk-atlas.jpg';

const Platforms = () => {
  return (
    <section id="plataformas" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-muted-foreground text-lg mb-4">
            Nuestro software impulsa decisiones en tiempo real, impulsadas por IA en gobiernos 
            críticos y empresas comerciales en Occidente, desde las plantas de fábrica hasta las líneas del frente.
          </p>
        </div>

        {/* Platform Sections */}
        <div className="space-y-32">
          {/* Obelisk Index */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light mb-6">
                <TextType 
                  text={["Obelisk Index"]}
                  typingSpeed={80}
                  pauseDuration={3000}
                  showCursor={true}
                  cursorCharacter="|"
                  className="text-foreground"
                  startOnVisible={true}
                />
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Una plataforma de inteligencia empresarial que convierte la información de la dark web 
                en inteligencia accionable para las fuerzas del orden.
              </p>
              <p className="text-muted-foreground">
                Transforma datos complejos en investigaciones dirigidas que apoyan operaciones 
                de aplicación de la ley con información contextual clara y oportuna.
              </p>
            </div>
            <div>
              <img 
                src={obeliskIndex} 
                alt="Obelisk Index Platform" 
                className="w-full h-auto shadow-card rounded"
              />
            </div>
          </div>

          {/* Obelisk Atlas */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              <h2 className="text-4xl font-light mb-6">
                <TextType 
                  text={["Obelisk Atlas"]}
                  typingSpeed={80}
                  pauseDuration={3000}
                  showCursor={true}
                  cursorCharacter="|"
                  className="text-foreground"
                  startOnVisible={true}
                />
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Una plataforma de datos segura que consolida y organiza información a gran escala 
                en una vista única y confiable.
              </p>
              <p className="text-muted-foreground">
                Permite búsqueda rápida, correlación y análisis en conjuntos de datos nacionales 
                e internacionales, apoyando a los tomadores de decisiones con información clara y contextual.
              </p>
            </div>
            <div className="lg:order-1">
              <img 
                src={obeliskAtlas} 
                alt="Obelisk Atlas Platform" 
                className="w-full h-auto shadow-card rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platforms;