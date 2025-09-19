const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Compañía</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Acerca de</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Carreras</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Noticias</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Blog</a></li>
            </ul>
          </div>

          {/* Productos */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Productos</h3>
            <ul className="space-y-3">
              <li><a href="#plataformas" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Obelisk Index</a></li>
              <li><a href="#plataformas" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Obelisk Atlas</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Soluciones Personalizadas</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Servicios Profesionales</a></li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Recursos</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Documentación</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Centro de Ayuda</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Casos de Estudio</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Webinars</a></li>
            </ul>
          </div>

          {/* Soporte */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Soporte</h3>
            <ul className="space-y-3">
              <li><a href="#contacto" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Contacto</a></li>
              <li><a href="mailto:serpico.intel@protonmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Email Seguro</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Estado del Sistema</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Actualizaciones</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Términos de Servicio</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Política de Privacidad</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Compliance</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Seguridad</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-lg font-medium text-muted-foreground">
              OBELISK
            </div>
            
            <div className="text-sm text-muted-foreground">
              © {currentYear} Obelisk Intelligence Solutions. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;