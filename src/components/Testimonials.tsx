const Testimonials = () => {
  const testimonials = [
    {
      quote: "La capacidad de Obelisk Index para transformar datos fragmentados de la dark web en inteligencia accionable ha revolucionado nuestras investigaciones.",
      author: "Oficial de Inteligencia",
      organization: "Unidad de Cibercrimen Nacional"
    },
    {
      quote: "Obelisk Atlas nos permite consolidar información de múltiples fuentes internacionales en tiempo real con controles de acceso granulares.",
      author: "Analista Senior", 
      organization: "Departamento de Inteligencia Militar"
    },
    {
      quote: "Como contractor privado, la flexibilidad y robustez de las plataformas Obelisk nos ha permitido expandir nuestros servicios significativamente.",
      author: "Director de Operaciones",
      organization: "Empresa de Seguridad Privada"
    },
    {
      quote: "La correlación automática de datos y las alertas predictivas nos han permitido anticiparnos a amenazas emergentes de manera efectiva.",
      author: "Comandante de Inteligencia",
      organization: "División Antiterrorista"
    }
  ];

  return (
    <section className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-light mb-4">
            Qué dicen nuestros socios sobre nosotros
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-background p-8 shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <blockquote className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div>
                <div className="font-medium text-foreground">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.organization}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;