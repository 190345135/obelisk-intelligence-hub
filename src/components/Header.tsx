import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#plataformas', label: 'Plataformas' },
    { href: '#soluciones', label: 'Soluciones' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl font-semibold text-muted-foreground tracking-tight">
              OBELISK
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-smooth text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-muted-foreground hover:text-foreground"
            >
              <Search size={20} />
            </Button>
            <Button 
              className="bg-background text-foreground border border-border hover:bg-muted"
            >
              Empezar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-smooth text-sm font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button 
                className="bg-background text-foreground border border-border hover:bg-muted w-full mt-4"
                onClick={() => {
                  setIsMenuOpen(false);
                  document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Empezar
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;