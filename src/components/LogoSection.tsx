
import { motion } from "framer-motion";

const LogoSection = () => {
  const topRowLogos = [
    {
      src: `${import.meta.env.BASE_URL}images/logos/generacion-d.webp`,
      alt: "Partner Logo 1",
    },
    {
      src: `${import.meta.env.BASE_URL}images/logos/CSIC.jpg`,
      alt: "Partner Logo 2",
    },
    {
      src: `${import.meta.env.BASE_URL}images/logos/Momentum.png`,
      alt: "Partner Logo 3",
    },
  ];

  const bottomRowLogos = [
    {
      src: `${import.meta.env.BASE_URL}images/logos/NextGenerationEU.jpg`,
      alt: "Partner Logo 4",
    },
    {
      src: `${import.meta.env.BASE_URL}images/logos/GOBIERNO.jpg`,
      alt: "Partner Logo 5",
    },
    {
      src: `${import.meta.env.BASE_URL}images/logos/redes.jpg`,
      alt: "Partner Logo 6",
    },
    {
      src: `${import.meta.env.BASE_URL}images/logos/PRTR.png`,
      alt: "Partner Logo 7",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-semibold text-scienceBlue mb-4">
            Financiación
          </h2>
          <p className="text-muted-foreground">
            Este proyecto se puede llevar a cabo gracias a las siguientes instituciones, programas e iniciativas
          </p>
        </motion.div>

        {/* Top row - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center mb-12">
          {topRowLogos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={(index == 0) ? "w-full max-w-[200px] grayscale hover:grayscale-0 transition-all duration-300" : index == 1 ? "w-full max-w-[250px] grayscale hover:grayscale-0 transition-all duration-300" : "w-full max-w-[150px] grayscale hover:grayscale-0 transition-all duration-300"}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom row - 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {bottomRowLogos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={(index !== 1 && index !== 2) ? "w-full max-w-[250px] grayscale hover:grayscale-0 transition-all duration-300" : index == 1 ? "w-full max-w-[550px] grayscale hover:grayscale-0 transition-all duration-300" : "w-full max-w-[150px] grayscale hover:grayscale-0 transition-all duration-300"}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
