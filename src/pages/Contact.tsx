import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';  // falta activar esto, hay que hacer la cuenta e incluir aqui la info, ya hecho cuenta y añadido variables
import ReCAPTCHA from "react-google-recaptcha"; // 👉 NUEVO

const socialNetworks = [
  { 
    name: "LinkedIn", 
    url: "https://www.linkedin.com/company/ecodigital-proyecto-momentum/posts/?feedView=all",
    variant: "outline" 
  },
  { 
    name: "Twitter", 
    url: "https://x.com/tec4agro",
    variant: "outline" 
  },
  /* { 
    name: "ResearchGate", 
    url: "https://www.researchgate.net/profile/portalcientifico",
    variant: "outline" 
  }, */
  /* { 
    name: "YouTube", 
    url: "https://www.youtube.com/channel/portalcientifico",
    variant: "outline" 
  }, */
  { 
    name: "Website", 
    url: "https://www.ica.csic.es/investigacion/departamento-de-proteccion-vegetal/tecnologias-geoespaciales-y-de-precision-para-una-agricultura-sostenible",
    variant: "outline" 
  }
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null); // 👉 NUEVO

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptchaChange = (value: string | null) => { // 👉 NUEVO
    setCaptchaValue(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try { 
      // esta parte envía el mensaje del formulario
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Reemplazar con tu Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Reemplazar con tu Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Reemplazar con tu Public Key
      );
      /* // 2. Enviar auto-reply al usuario
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_REPLY, // plantilla de respuesta al usuario
        {
          to_name: formData.name,
          to_email: formData.email,
          message: formData.message, // opcional
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ); */

      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactar. Responderemos a la brevedad posible.",
      });
      setFormData({ name: "", email: "", message: "" });
      setCaptchaValue(null); // 👉 limpiamos captcha al enviar
    } catch (error) {
      console.error('Error al enviar el email:', error);
      toast({
        title: "Error",
        description: `No se pudo enviar el mensaje: ${JSON.stringify(error)}`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="section-header">Contacto</h1>
        <p className="section-subheader mx-auto">
          ¿Tienes preguntas o quieres colaborar con nosotros? Contáctanos
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="glass-panel h-full">
            <CardHeader>
              <CardTitle>Envíanos un mensaje</CardTitle>
              <CardDescription>Completa el formulario y te responderemos a la brevedad</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange} 
                    placeholder="Tu nombre" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tucorreo@ejemplo.com" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="¿En qué podemos ayudarte?" 
                    rows={5} 
                    required 
                  />
                </div>

                {/* 👇 AÑADIMOS CAPTCHA AQUÍ */}
                <div className="flex justify-center">
                  <ReCAPTCHA
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} // tu Site Key
                    //sitekey="6LdgTyUrAAAAAI2ZJQ3i2ccuZ6MYzAg2fh0ZZd8Z"
                    onChange={handleCaptchaChange}
                  />
                </div>

                <Button type="submit" disabled={isSubmitting || !captchaValue} className="w-full">
                  {isSubmitting ? "Enviando..." : (
                    <>
                      Enviar mensaje <Send size={16} className="ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="glass-panel h-full">
            <CardHeader>
              <CardTitle>Información de contacto</CardTitle>
              <CardDescription>Otras formas de comunicarte con nosotros</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-scienceBlue mt-0.5" />
                  <div>
                    <h3 className="font-medium">Dirección</h3>
                    <p className="text-muted-foreground">
                      Instituto de Ciencias Agrarias - CSIC<br />
                      Departamento de Protección Vegetal. Grupo Tech4Agro<br />
                      Calle Serrano 115 Dup.<br />
                      28006 Madrid, España
                    </p>
                  </div>
                </div>
                
                {/* <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-scienceBlue mt-0.5" />
                  <div>
                    <h3 className="font-medium">Correo electrónico</h3>
                    <p className="text-muted-foreground">info@portalcientifico.org</p>
                    <p className="text-muted-foreground">colaboraciones@portalcientifico.org</p>
                  </div>
                </div> */}
                
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-scienceBlue mt-0.5" />
                  <div>
                    <h3 className="font-medium">Teléfono</h3>
                    <p className="text-muted-foreground">+34 913333093</p>
                    {/* <p className="text-muted-foreground">Lunes a Viernes, 9:00 - 18:00</p> */}
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <h3 className="font-medium mb-3">Síguenos en redes sociales</h3>
                <div className="flex gap-4">
                {socialNetworks.map((network) => (
                    <Button 
                      key={network.name} 
                      variant={network.variant as "outline"} 
                      size="sm"
                      onClick={() => window.open(network.url, '_blank')}
                    >
                      {network.name}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
