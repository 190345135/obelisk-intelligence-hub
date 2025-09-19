import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    organizacion: '',
    cargo: '',
    tipoOrganizacion: '',
    pais: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real implementation, you would send this to serpico.intel@protonmail.com
      console.log('Form data to be sent to serpico.intel@protonmail.com:', formData);
      
      toast({
        title: "Solicitud enviada exitosamente",
        description: "Nos pondremos en contacto contigo pronto.",
      });

      // Reset form
      setFormData({
        nombre: '',
        email: '',
        organizacion: '',
        cargo: '',
        tipoOrganizacion: '',
        pais: '',
        telefono: '',
        asunto: '',
        mensaje: ''
      });
    } catch (error) {
      toast({
        title: "Error al enviar la solicitud",
        description: "Por favor intenta nuevamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contacto" className="py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-6">
            Hay mucho por construir
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solicita acceso especializado para discutir tus necesidades 
            de inteligencia y seguridad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Solicitar Demo</h3>
              <p className="text-muted-foreground mb-6">
                Conecta con nuestro equipo para una demostración personalizada 
                de nuestras plataformas de inteligencia.
              </p>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Solicitar Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Empezar a Construir</h3>
              <p className="text-muted-foreground mb-6">
                Comienza con nuestras plataformas y transforma tus capacidades 
                de inteligencia operacional.
              </p>
              <Button variant="outline">
                Empezar a Construir
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-muted/30 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nombre">Nombre *</Label>
                  <Input
                    id="nombre"
                    value={formData.nombre}
                    onChange={(e) => handleChange('nombre', e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="organizacion">Organización *</Label>
                  <Input
                    id="organizacion"
                    value={formData.organizacion}
                    onChange={(e) => handleChange('organizacion', e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cargo">Cargo *</Label>
                  <Input
                    id="cargo"
                    value={formData.cargo}
                    onChange={(e) => handleChange('cargo', e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>
              </div>

              <div>
                <Label>Tipo de Organización *</Label>
                <Select onValueChange={(value) => handleChange('tipoOrganizacion', value)} required>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Seleccionar tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="policia">Policía Nacional</SelectItem>
                    <SelectItem value="militar">Fuerzas Armadas</SelectItem>
                    <SelectItem value="inteligencia">Agencia de Inteligencia</SelectItem>
                    <SelectItem value="privado">Contractor Privado</SelectItem>
                    <SelectItem value="gobierno">Entidad Gubernamental</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="mensaje">Mensaje *</Label>
                <Textarea
                  id="mensaje"
                  value={formData.mensaje}
                  onChange={(e) => handleChange('mensaje', e.target.value)}
                  className="mt-2 min-h-[120px]"
                  placeholder="Describe tus necesidades específicas..."
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;