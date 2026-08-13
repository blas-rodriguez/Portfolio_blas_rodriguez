import type { LocalizedText, Locale } from './types';

export const profile = {
  name: 'Blas Rodriguez',
  shortName: 'BR',
  email: 'blasrodriguez934@gmail.com',
  location: 'Argentina',
  github: 'https://github.com/blas-rodriguez',
  linkedin: 'https://www.linkedin.com/in/blas-rodriguez-bab243227/',
  cv: {
    // The English CV will use /cv/blas-rodriguez-cv-en.pdf when it is available.
    en: '/cv/blas-rodriguez-cv-es.pdf',
    es: '/cv/blas-rodriguez-cv-es.pdf',
  } satisfies Record<Locale, string>,
  cvIsSpanishOnly: true,
};

export const seo = {
  title: {
    en: 'Blas Rodriguez | Senior Full-Stack Developer',
    es: 'Blas Rodriguez | Desarrollador Full-Stack Senior',
  },
  description: {
    en: 'Senior Full-Stack Developer from Argentina specialized in Laravel, PHP, SaaS platforms, APIs, business systems and AI-assisted development.',
    es: 'Desarrollador Full-Stack Senior de Argentina especializado en Laravel, PHP, plataformas SaaS, APIs, sistemas empresariales y desarrollo asistido por IA.',
  },
} satisfies Record<string, LocalizedText>;

export const copy = {
  nav: {
    home: { en: 'Home', es: 'Inicio' },
    about: { en: 'About', es: 'Sobre mí' },
    experience: { en: 'Experience', es: 'Experiencia' },
    projects: { en: 'Projects', es: 'Proyectos' },
    skills: { en: 'Skills', es: 'Habilidades' },
    automation: { en: 'AI & Automation', es: 'IA y automatización' },
    videos: { en: 'Videos', es: 'Videos' },
    contact: { en: 'Contact', es: 'Contacto' },
  },
  common: {
    downloadCv: { en: 'Download CV', es: 'Descargar CV' },
    spanishCv: { en: 'Spanish CV', es: 'CV en español' },
    viewWork: { en: 'View my work', es: 'Ver mi trabajo' },
    contactMe: { en: 'Contact me', es: 'Contactame' },
    liveProject: { en: 'Live project', es: 'Ver proyecto' },
    comingSoon: { en: 'Coming soon', es: 'Próximamente' },
    present: { en: 'Present', es: 'Actualidad' },
    menu: { en: 'Open navigation', es: 'Abrir navegación' },
    theme: { en: 'Change color theme', es: 'Cambiar tema de color' },
  },
  hero: {
    eyebrow: { en: 'Available for remote opportunities', es: 'Disponible para oportunidades remotas' },
    greeting: { en: "Hi, I'm Blas Rodriguez.", es: 'Hola, soy Blas Rodriguez.' },
    headline: {
      en: 'I build reliable software for real businesses.',
      es: 'Construyo software confiable para negocios reales.',
    },
    summary: {
      en: 'Senior Full-Stack Developer with 10+ years of experience building SaaS platforms, business systems, APIs, POS solutions, mobile apps and automation.',
      es: 'Desarrollador Full-Stack Senior con más de 10 años de experiencia creando plataformas SaaS, sistemas empresariales, APIs, soluciones POS, aplicaciones móviles y automatizaciones.',
    },
    location: { en: 'Argentina · Remote worldwide', es: 'Argentina · Remoto para todo el mundo' },
    photoAlt: {
      en: 'Professional portrait of Blas Rodriguez',
      es: 'Retrato profesional de Blas Rodriguez',
    },
    experienceLabel: { en: 'Years building software', es: 'Años creando software' },
  },
  about: {
    eyebrow: { en: 'About me', es: 'Sobre mí' },
    title: {
      en: 'Engineering grounded in business reality.',
      es: 'Ingeniería conectada con la realidad del negocio.',
    },
    intro: {
      en: 'I am a Full-Stack Software Developer from Argentina with more than 10 years of experience designing, developing and maintaining business-critical software.',
      es: 'Soy desarrollador de software Full-Stack de Argentina, con más de 10 años de experiencia diseñando, desarrollando y manteniendo software crítico para empresas.',
    },
    body: {
      en: 'Throughout my career, I have built SaaS platforms, point-of-sale systems, multi-branch applications, APIs, mobile apps and internal management tools. I enjoy understanding how a business operates and turning real operational problems into practical, maintainable software.',
      es: 'A lo largo de mi carrera desarrollé plataformas SaaS, puntos de venta, aplicaciones multi-sucursal, APIs, apps móviles y herramientas de gestión interna. Disfruto entender cómo funciona un negocio y transformar problemas operativos reales en software práctico y mantenible.',
    },
    ai: {
      en: 'My core stack is PHP, Laravel, MySQL and JavaScript. I also use AI-assisted development to improve research, coding, debugging, testing and documentation while keeping human technical judgment at the center.',
      es: 'Mi stack principal es PHP, Laravel, MySQL y JavaScript. También incorporo desarrollo asistido por IA para mejorar la investigación, programación, depuración, testing y documentación, manteniendo siempre el criterio técnico humano en el centro.',
    },
  },
  projects: {
    eyebrow: { en: 'Selected work', es: 'Trabajo seleccionado' },
    title: { en: 'Products built beyond the demo.', es: 'Productos que superan la etapa de demo.' },
    intro: {
      en: 'Production software shaped around daily operations, complex rules and measurable business needs.',
      es: 'Software productivo diseñado alrededor de operaciones diarias, reglas complejas y necesidades concretas del negocio.',
    },
  },
  experience: {
    eyebrow: { en: 'Experience', es: 'Experiencia' },
    title: {
      en: 'A decade of solving practical problems.',
      es: 'Una década resolviendo problemas concretos.',
    },
    intro: {
      en: 'From legacy modernization to multi-tenant SaaS architecture and technical leadership.',
      es: 'Desde modernización de sistemas legacy hasta arquitectura SaaS multi-tenant y liderazgo técnico.',
    },
  },
  expertise: {
    eyebrow: { en: 'Capabilities', es: 'Capacidades' },
    title: {
      en: 'Full-stack, from database to deployment.',
      es: 'Full-stack, desde la base de datos hasta producción.',
    },
    mobileTitle: { en: 'Mobile & PWA development', es: 'Desarrollo mobile y PWA' },
    mobileBody: {
      en: 'Experience delivering Android applications, internal iOS tools, Cordova apps, PWAs and responsive business systems designed for work on the move.',
      es: 'Experiencia desarrollando aplicaciones Android, herramientas internas para iOS, apps con Cordova, PWAs y sistemas empresariales responsive pensados para trabajar en movimiento.',
    },
    infraTitle: { en: 'Deployment & infrastructure', es: 'Despliegue e infraestructura' },
    infraBody: {
      en: 'Comfortable taking a product from source control to production across static hosting, traditional hosting, VPS and Linux environments.',
      es: 'Experiencia llevando productos desde el control de versiones hasta producción en hosting estático, hosting tradicional, VPS y entornos Linux.',
    },
  },
  integrations: {
    eyebrow: { en: 'APIs & integrations', es: 'APIs e integraciones' },
    title: { en: 'Software that connects the moving parts.', es: 'Software que conecta todas las piezas.' },
    body: {
      en: 'Experience building API integrations, automated communication workflows, external service synchronization and publishing automation.',
      es: 'Experiencia creando integraciones mediante APIs, flujos automatizados de comunicación, sincronización con servicios externos y automatización de publicaciones.',
    },
    socialTitle: { en: 'Content & social automation', es: 'Contenido y automatización social' },
    socialBody: {
      en: 'Multi-platform workflows for publishing, scheduling, AI-assisted content and automated video generation across social channels.',
      es: 'Flujos multi-plataforma para publicación, programación, contenido asistido por IA y generación automática de videos para canales sociales.',
    },
  },
  ai: {
    eyebrow: { en: 'AI-assisted development', es: 'Desarrollo asistido por IA' },
    title: {
      en: 'AI as leverage. Engineering judgment as the guide.',
      es: 'IA como acelerador. Criterio técnico como guía.',
    },
    body: {
      en: 'I use AI throughout my professional workflow to increase speed and quality without replacing engineering judgment, code review or responsibility for the result.',
      es: 'Uso IA a lo largo de mi flujo profesional para aumentar velocidad y calidad sin reemplazar el criterio de ingeniería, la revisión de código ni la responsabilidad sobre el resultado.',
    },
  },
  videos: {
    eyebrow: { en: 'Meet me', es: 'Conoceme' },
    title: { en: 'More than a résumé.', es: 'Más que un currículum.' },
    intro: {
      en: 'A short introduction to who I am and how I work. Videos will be available soon.',
      es: 'Una breve presentación sobre quién soy y cómo trabajo. Los videos estarán disponibles próximamente.',
    },
    walkthroughs: { en: 'Technical project walkthroughs', es: 'Recorridos técnicos de proyectos' },
  },
  demos: {
    eyebrow: { en: 'Demos & experiments', es: 'Demos y experimentos' },
    title: { en: 'Ideas explored in working interfaces.', es: 'Ideas exploradas en interfaces funcionales.' },
    intro: {
      en: 'A growing collection of landing pages, dashboards, SaaS concepts and POS interfaces.',
      es: 'Una colección en crecimiento de landing pages, dashboards, conceptos SaaS e interfaces POS.',
    },
  },
  contact: {
    eyebrow: { en: 'Let’s work together', es: 'Trabajemos juntos' },
    title: { en: "Let's build something useful.", es: 'Construyamos algo útil.' },
    body: {
      en: 'I am open to remote software development opportunities, SaaS projects and long-term collaborations.',
      es: 'Estoy disponible para oportunidades remotas de desarrollo, proyectos SaaS y colaboraciones de largo plazo.',
    },
    email: { en: 'Email me', es: 'Escribime' },
    availability: { en: 'Currently open to conversations', es: 'Disponible para conversar' },
  },
  footer: {
    role: { en: 'Senior Full-Stack Developer', es: 'Desarrollador Full-Stack Senior' },
    built: {
      en: 'Built with Astro and deployed on GitHub Pages.',
      es: 'Desarrollado con Astro y publicado en GitHub Pages.',
    },
  },
} as const;

export const stats = [
  { value: '10+', label: { en: 'Years of experience', es: 'Años de experiencia' } },
  { value: 'SaaS', label: { en: 'Multi-branch platforms', es: 'Plataformas multi-sucursal' } },
  { value: 'Web + Mobile', label: { en: 'Product development', es: 'Desarrollo de productos' } },
  { value: 'API', label: { en: 'Systems & integrations', es: 'Sistemas e integraciones' } },
] satisfies Array<{ value: string; label: LocalizedText }>;

export const heroTags = ['Laravel', 'PHP', 'MySQL', 'SaaS', 'REST APIs', 'JavaScript', 'AI-assisted'];
