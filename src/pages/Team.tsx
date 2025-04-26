import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Mail, Globe, ExternalLink } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Dr. José Manuel Peña",
    role: "Investigador Principal",
    bio: "Su línea de investigación consiste en explotar las ventajas de las tecnologías geoespaciales, la digitalización y los algoritmos avanzados para su aplicación en la agricultura de precisión y la gestión integrada de plagas. Pertenece al Grupo Tech4Agro del Instituto de Ciencias Agrarias del CSIC",
    image: `${import.meta.env.BASE_URL}images/JMP.jpg`,
    email: null,
    website: null,
  },
  {
    id: 2,
    name: "Dr. Pedro Antonio Gutiérrez",
    role: "Co-Investigador Principal",
    bio: "Su labor investigadora ha estado centrada en el aprendizaje automático, en concreto, en nuevos modelos de redes neuronales y de clasificación ordinal. Pertenece al Grupo de Investigación Aprendizaje y Redes Neuronales Artificiales (AYRNA) de la Universidad de Córdoba.",
    image: `${import.meta.env.BASE_URL}images/Pedro.png`,
    email: null,
    website: null,
  },
  {
    id: 3,
    name: "Dra. Irene Borra Serrano",
    role: "Postdoc contratada en el proyecto",
    bio: "Encargada de llevar a cabo los objetivos planteados en el proyecto y de realizar la formación.",
    image: `${import.meta.env.BASE_URL}images/IBS.jpg`,
    email: null,
    website: "https://irenebs.github.io/irene_borra-serrano/",
  },
  /* {
    id: 1,
    name: "Dr. Alejandro Fuentes",
    role: "Investigador Principal",
    bio: "Doctor en Física Cuántica con más de 15 años de experiencia en investigación avanzada. Ha liderado proyectos internacionales y publicado en revistas de alto impacto.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    email: "afuentes@portalcientifico.org",
    website: "alexfuentes.com",
  },
  {
    id: 2,
    name: "Dra. Lucía Mendoza",
    role: "Coordinadora de Tecnología",
    bio: "Ingeniera en Nanotecnología con especialización en dispositivos biomédicos. Experiencia en desarrollo de prototipos y transferencia tecnológica.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    email: "lmendoza@portalcientifico.org",
    website: "luciamendoza.net",
  },
  {
    id: 3,
    name: "Dr. Carlos Herrera",
    role: "Analista de Datos",
    bio: "Doctor en Estadística Aplicada. Especialista en modelos predictivos y análisis de grandes volúmenes de datos. Colaborador en proyectos de inteligencia artificial.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    email: "cherrera@portalcientifico.org",
    website: "",
  },
  {
    id: 4,
    name: "Dra. Marina López",
    role: "Investigadora Asociada",
    bio: "Doctora en Bioquímica con enfoque en técnicas analíticas avanzadas. Su investigación se centra en el desarrollo de nuevos métodos de detección molecular.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    email: "mlopez@portalcientifico.org",
    website: "marinalopez.io",
  },
  {
    id: 5,
    name: "Dr. Felipe Sánchez",
    role: "Coordinador de Colaboraciones",
    bio: "Doctor en Relaciones Internacionales con especialización en cooperación científica. Gestiona las colaboraciones con otras instituciones y proyectos.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    email: "fsanchez@portalcientifico.org",
    website: "",
  },
  {
    id: 6,
    name: "Dra. Valeria Ramírez",
    role: "Investigadora en Metodología",
    bio: "Doctora en Ingeniería con experiencia en diseño experimental. Su trabajo se enfoca en optimizar metodologías de investigación y procesos de validación.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    email: "vramirez@portalcientifico.org",
    website: "valeriaramirez.com",
  }, */
];

const Team = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="section-header">Nuestro Equipo</h1>
        <p className="section-subheader mx-auto">
          Conozca al personal investigador detrás del proyecto 
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="glass-panel card-hover h-full">
              <CardHeader className="text-center pb-2">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription className="flex items-center justify-center gap-1">
                  <GraduationCap size={16} />
                  <span>{member.role}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm text-justify">{member.bio}</p>
              </CardContent>
              <CardContent>
                <span></span>
              </CardContent>
              <CardFooter className="flex justify-center gap-4 text-sm text-muted-foreground">
                {member.email &&(
                  <div className="flex items-center gap-1">
                    <Mail size={14} />
                    <span>{member.email}</span>
                    </div>
                )}
                {member.website && (
                  <div 
                  className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors"
                  onClick={() => window.open(`${member.website}`, '_blank')}
                >
                    <Globe size={14} />
                    <span>{member.website}</span>
                  </div>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
