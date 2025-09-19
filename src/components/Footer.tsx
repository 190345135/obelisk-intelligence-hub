import { Shield, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border/30 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="text-3xl font-bold hero-text tracking-tight">
                OBELISK
              </div>
              <Shield className="w-6 h-6 text-primary" />
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Soluciones avanzadas de inteligencia de amenazas que transforman datos complejos 
              en inteligencia accionable para fuerzas del orden y agencias de seguridad nacional.
            </p>

            <div className="flex items-center space-x-4">
              <a 
                href="mailto:serpico.intel@protonmail.com"
                className="flex items-center space-x-2 text-primary hover:text-primary-glow transition-smooth"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">Contacto Seguro</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Plataformas */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Plataformas</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="#plataformas" 
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  Obelisk Index
                </a>
              </li>
              <li>
                <a 
                  href="#plataformas" 
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  Obelisk Atlas
                </a>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">Soluciones Personalizadas</span>
              </li>
            </ul>
          </div>

          {/* Sectores */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Sectores</h3>
            <ul className="space-y-4">
              <li><span className="text-muted-foreground text-sm">Fuerzas del Orden</span></li>
              <li><span className="text-muted-foreground text-sm">Inteligencia Militar</span></li>
              <li><span className="text-muted-foreground text-sm">Agencias Gubernamentales</span></li>
              <li><span className="text-muted-foreground text-sm">Contractors Privados</span></li>
              <li><span className="text-muted-foreground text-sm">Organizaciones Internacionales</span></li>
            </ul>
          </div>
        </div>

        {/* Security Notice & Copyright */}
        <div className="border-t border-border/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>Conexión Segura</span>
              </div>
              <span>•</span>
              <span>Todas las comunicaciones cifradas</span>
              <span>•</span>
              <span>Cumplimiento internacional</span>
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