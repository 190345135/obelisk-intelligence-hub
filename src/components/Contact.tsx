import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send, Shield, Clock, CheckCircle } from 'lucide-react';

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
    mensaje: '',
    nivelUrgencia: 'media'
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
        description: "Nuestro equipo se pondrá en contacto contigo dentro de las próximas 24 horas.",
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
        mensaje: '',
        nivelUrgencia: 'media'
      });
    } catch (error) {
      toast({
        title: "Error al enviar la solicitud",
        description: "Por favor intenta nuevamente o contactanos directamente.",
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
    <section id="contacto" className="py-32 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-glow/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Mail className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary tracking-wide uppercase">
              CONTACTO SEGURO
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            <span className="hero-text">Solicita</span>
            <br />
            <span className="text-foreground">Acceso Especializado</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conecta con nuestro equipo de especialistas para discutir tus necesidades 
            de inteligencia y seguridad.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Cards */}
            <Card className="p-6 glass border-border/30">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email Seguro</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Comunicación cifrada para consultas confidenciales
                  </p>
                  <a 
                    href="mailto:serpico.intel@protonmail.com" 
                    className="text-primary hover:text-primary-glow transition-smooth text-sm font-medium"
                  >
                    serpico.intel@protonmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 glass border-border/30">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Tiempo de Respuesta</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Consultas urgentes: 2-4 horas
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Consultas estándar: 24-48 horas
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 glass border-border/30">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Seguridad</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Todas las comunicaciones están cifradas
                  </p>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-xs text-muted-foreground">NDA Disponible</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 glass border-border/30">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="nombre" className="text-foreground">Nombre Completo *</Label>
                    <Input
                      id="nombre"
                      value={formData.nombre}
                      onChange={(e) => handleChange('nombre', e.target.value)}
                      className="mt-2 bg-input/50 border-border/50"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground">Email Corporativo *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="mt-2 bg-input/50 border-border/50"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="organizacion" className="text-foreground">Organización *</Label>
                    <Input
                      id="organizacion"
                      value={formData.organizacion}
                      onChange={(e) => handleChange('organizacion', e.target.value)}
                      className="mt-2 bg-input/50 border-border/50"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="cargo" className="text-foreground">Cargo/Posición *</Label>
                    <Input
                      id="cargo"
                      value={formData.cargo}
                      onChange={(e) => handleChange('cargo', e.target.value)}
                      className="mt-2 bg-input/50 border-border/50"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-foreground">Tipo de Organización *</Label>
                    <Select onValueChange={(value) => handleChange('tipoOrganizacion', value)} required>
                      <SelectTrigger className="mt-2 bg-input/50 border-border/50">
                        <SelectValue placeholder="Seleccionar tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="policia">Policía Nacional</SelectItem>
                        <SelectItem value="militar">Fuerzas Armadas</SelectItem>
                        <SelectItem value="inteligencia">Agencia de Inteligencia</SelectItem>
                        <SelectItem value="privado">Contractor Privado</SelectItem>
                        <SelectItem value="gobierno">Entidad Gubernamental</SelectItem>
                        <SelectItem value="internacional">Organización Internacional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="pais" className="text-foreground">País/Región</Label>
                    <Input
                      id="pais"
                      value={formData.pais}
                      onChange={(e) => handleChange('pais', e.target.value)}
                      className="mt-2 bg-input/50 border-border/50"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="telefono" className="text-foreground">Teléfono Seguro</Label>
                    <Input
                      id="telefono"
                      value={formData.telefono}
                      onChange={(e) => handleChange('telefono', e.target.value)}
                      className="mt-2 bg-input/50 border-border/50"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <Label className="text-foreground">Nivel de Urgencia</Label>
                    <Select 
                      value={formData.nivelUrgencia}
                      onValueChange={(value) => handleChange('nivelUrgencia', value)}
                    >
                      <SelectTrigger className="mt-2 bg-input/50 border-border/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="baja">Baja - Consulta General</SelectItem>
                        <SelectItem value="media">Media - Evaluación de Plataforma</SelectItem>
                        <SelectItem value="alta">Alta - Implementación Urgente</SelectItem>
                        <SelectItem value="critica">Crítica - Emergencia Operacional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="asunto" className="text-foreground">Asunto *</Label>
                  <Input
                    id="asunto"
                    value={formData.asunto}
                    onChange={(e) => handleChange('asunto', e.target.value)}
                    className="mt-2 bg-input/50 border-border/50"
                    placeholder="Solicitud de acceso a Obelisk Index/Atlas"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="mensaje" className="text-foreground">Descripción de Necesidades *</Label>
                  <Textarea
                    id="mensaje"
                    value={formData.mensaje}
                    onChange={(e) => handleChange('mensaje', e.target.value)}
                    className="mt-2 bg-input/50 border-border/50 min-h-[120px]"
                    placeholder="Describe tus requisitos específicos de inteligencia, casos de uso, y cualquier consideración de seguridad..."
                    required
                  />
                </div>

                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>
                    Todos los datos se transmiten de forma segura y se tratan con la máxima confidencialidad.
                  </span>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-dark text-primary-foreground glow-primary"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Enviando Solicitud Segura...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Solicitud Segura
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;