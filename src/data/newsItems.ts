import { env } from "@/lib/env";

// Función para construir la URL completa de la imagen
const getImageUrl = (path: string) => `${env.imageServer}/${path}`;

// aqui se añade una noticia nueva con su texto e imagen - IBS y ya esta habilitado que se abra una nueva pagina con la noticia ampliada 

export const newsItems = [
    {
      id: 1,
      title: "Arranque de proyecto",
      date: "05 de febrero, 2025",
      summary: "Tras la preparación del ensayo de uno de los escenarios piloto, toca revisar que todo va como previsto.",
      content: "Especies de arvenses han sido sembradas para llevar a cabo la caracterización de recursos florales para cuantificar la potencialidad de atracción de polinizadores y otros insectos beneficiosos",
      text: null,
      img: getImageUrl("DSC04571.JPG"),
      alt: "definicion foto"

    },
/*     {
      id: 1,
      title: "Avance significativo en tecnología de sensores",
      date: "15 de mayo, 2024",
      summary: "Nuestro equipo ha conseguido desarrollar un nuevo tipo de sensor que mejora la precisión en un 35%.",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. esto ha sido añadido después",
      text: "dfgdfghdfg",
      img: getImageUrl("Captura.PNG"),
      alt: "definicion foto"

    },
    {
      id: 2,
      title: "Colaboración internacional con la Universidad de Cambridge",
      date: "2 de abril, 2024",
      summary: "Hemos iniciado una nueva colaboración con investigadores del departamento de Física Aplicada.",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      text: "dfgdfghdfg",
      img: getImageUrl("sensores-avanzados.jpg"),
      alt: ""
    },
    {
      id: 3,
      title: "Publicación en Nature Scientific Reports",
      date: "28 de marzo, 2024",
      summary: "Nuestro último estudio ha sido aceptado por una de las revistas científicas más prestigiosas.",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      text: "dfgdfghdfg",
      img: getImageUrl("sensores-avanzados.jpg"),
      alt: ""
    }, */
  ];
  