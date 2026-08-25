import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: Record<"es" | "en", SiteConfig> = {
  es: {
    title: "Andres Cabrera — Full Stack Web Developer & Digitalization",
    author: "Andres Cabrera",
    description:
      "Desarrollador Web Full Stack y estudiante de Ingeniería de Sistemas. Especializado en React, Angular, PostgreSQL y digitalización de procesos de negocio.",
    lang: "es",
    siteLogo: "/profile-photo.png",
    navLinks: [
      { text: "Experiencia", href: "#experience" },
      { text: "Proyectos", href: "#projects" },
      { text: "Sobre Mí", href: "#about" },
      { text: "Descargar CV", href: "/HV_Andres_Cabrera_Cuadro.pdf" },
    ],
    socialLinks: [
      { text: "GitHub", href: "https://github.com/AndresCabrera07" },
      { text: "WhatsApp", href: "https://wa.me/573023926920" },
      { text: "Descargar CV", href: "/HV_Andres_Cabrera_Cuadro.pdf" },
    ],
    socialImage: "/zen-og.png",
    canonicalURL: "https://astro-zen.vercel.app",
  },
  en: {
    title: "Andres Cabrera — Full Stack Web Developer & Digitalization",
    author: "Andres Cabrera",
    description:
      "Full Stack Web Developer and Systems Engineering student. Specialized in React, Angular, PostgreSQL, and business process digitalization.",
    lang: "en",
    siteLogo: "/profile-photo.png",
    navLinks: [
      { text: "Experience", href: "#experience" },
      { text: "Projects", href: "#projects" },
      { text: "About Me", href: "#about" },
      { text: "Download CV", href: "/HV_Andres_Cabrera_Cuadro.pdf" },
    ],
    socialLinks: [
      { text: "GitHub", href: "https://github.com/AndresCabrera07" },
      { text: "WhatsApp", href: "https://wa.me/573023926920" },
      { text: "Download CV", href: "/HV_Andres_Cabrera_Cuadro.pdf" },
    ],
    socialImage: "/zen-og.png",
    canonicalURL: "https://astro-zen.vercel.app/en",
  },
};

export const SITE_CONTENT: Record<"es" | "en", SiteContent> = {
  es: {
    hero: {
      name: "Andres Felipe Cabrera",
      specialty: "Desarrollador Web Full Stack | Digitalización",
      summary:
        "Desarrollador enfocado en modernización, automatización y sistematización de procesos de negocio. Experto en construir interfaces reactivas con React y Angular, APIs RESTful y gestión de bases de datos relacionales en PostgreSQL.",
      email: "candres0124@gmail.com",
    },
    experience: [
      {
        company: "Desarrollo Web & Soluciones Digitales",
        position: "Full Stack Developer (Freelance)",
        startDate: "Ene 2024",
        endDate: "Presente",
        summary: [
          "Diseño e implementación de aplicaciones web a medida para pequeños y medianos comercios, logrando la digitalización de inventarios y control de ventas.",
          "Desarrollo de arquitecturas frontend con React.js y Angular, optimizando el rendimiento de carga y garantizando diseño responsive con CSS modular.",
          "Modelado, diseño y optimización de bases de datos relacionales en PostgreSQL, construyendo APIs seguras para el procesamiento transaccional.",
        ],
      },
    ],
    projects: [
      {
        name: "StockApp — Sistema de Inventario",
        summary:
          "Plataforma web para la digitalización y seguimiento de stock en tiempo real. Desarrollada con React, PostgreSQL y CSS modular.",
        linkPreview: "https://stockapp-frontend-eight.vercel.app/",
        linkSource: "https://github.com/AndresCabrera07/stockapp-frontend.git",
        image: "/stockapp-preview.png",
      },
      {
        name: "Pokédex Web App — Explorador de Datos",
        summary:
          "Aplicación web interactiva construida con consumo asíncrono de REST API (PokéAPI), filtrado dinámico en tiempo real y diseño responsivo optimizado.",
        linkPreview: "https://prueba-pokemon-three.vercel.app/",
        linkSource: "https://github.com/AndresCabrera07/prueba-pokemon.git",
        image: "/pokemon-preview.png",
      },
    ],
    about: {
      description: `
        ¡Hola! Soy Andres Felipe Cabrera, estudiante de 9.° semestre de Ingeniería de Sistemas y Desarrollador Web Full Stack radicado en Cartagena, Colombia. Me apasiona transformar problemas manuales y operativos en soluciones de software elegantes, intuitivas y escalables.

        Cuento con formación certificada en tecnologías web (HTML5, CSS3, JavaScript ES6+) por Academlo, además de experiencia práctica construyendo proyectos con React, Angular y PostgreSQL. Mi experiencia en entornos de atención al cliente y gestión de inventarios me da una visión clara de lo que realmente necesita un usuario final en el día a día operativo.
      `,
      image: "/profile-photo.png",
    },
  },

  en: {
    hero: {
      name: "Andres Felipe Cabrera",
      specialty: "Full Stack Web Developer | Digitalization",
      summary:
        "Developer focused on modernization, automation, and systematization of business processes. Skilled in building reactive interfaces with React and Angular, RESTful APIs, and relational database management in PostgreSQL.",
      email: "candres0124@gmail.com",
    },
    experience: [
      {
        company: "Web Development & Digital Solutions",
        position: "Full Stack Developer (Freelance)",
        startDate: "Jan 2024",
        endDate: "Present",
        summary: [
          "Design and implementation of custom web applications for small and medium businesses, achieving inventory digitalization and sales tracking.",
          "Development of frontend architectures using React.js and Angular, optimizing loading speeds and ensuring responsive UI with modular CSS.",
          "Data modeling, design, and optimization of relational databases in PostgreSQL, creating secure APIs for transactional data processing.",
        ],
      },
    ],
    projects: [
      {
        name: "StockApp — Inventory Management System",
        summary:
          "Web platform for real-time stock tracking and inventory digitalization. Built with React, PostgreSQL, and modular CSS.",
        linkPreview: "https://stockapp-frontend-eight.vercel.app/",
        linkSource: "https://github.com/AndresCabrera07/stockapp-frontend.git",
        image: "/stockapp-preview.png",
      },
      {
        name: "Pokédex Web App — Data Explorer",
        summary:
          "Interactive web application consuming PokéAPI with asynchronous requests, real-time dynamic search, and an optimized responsive design.",
        linkPreview: "https://prueba-pokemon-three.vercel.app/",
        linkSource: "https://github.com/AndresCabrera07/prueba-pokemon.git",
        image: "/pokemon-preview.png",
      },
    ],
    about: {
      description: `
        Hello! I'm Andres Felipe Cabrera, a 9th-semester Systems Engineering student and Full Stack Web Developer based in Cartagena, Colombia. I love transforming manual and operational workflows into clean, intuitive, and scalable software solutions.

        I hold a certified background in modern web development (HTML5, CSS3, JavaScript ES6+) from Academlo, alongside hands-on project experience using React, Angular, and PostgreSQL. My previous customer service and inventory management roles give me strong insights into real-world user needs.
      `,
      image: "/profile-photo.png",
    },
  },
};