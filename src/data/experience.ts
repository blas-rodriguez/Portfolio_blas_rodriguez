import type { LocalizedText } from './types';

export interface Experience {
  company: string;
  period: string;
  role: LocalizedText;
  description: LocalizedText;
  highlights?: LocalizedText[];
  technologies: string[];
  website?: string;
  featured?: boolean;
}

export const experiences: Experience[] = [
  {
    company: 'San Nicolás SRL',
    period: '2024 — Present',
    role: { en: 'Custom Software Developer', es: 'Desarrollador de software a medida' },
    description: {
      en: 'Development and maintenance of internal systems and service-management platforms for appointment-based businesses.',
      es: 'Desarrollo y mantenimiento de sistemas internos y plataformas de gestión de servicios para negocios que trabajan con turnos.',
    },
    highlights: [
      {
        en: 'Scheduling, customers, employees, availability and reservations',
        es: 'Turnos, clientes, empleados, disponibilidad y reservas',
      },
      { en: 'APIs and communication integrations', es: 'APIs e integraciones de comunicación' },
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'REST APIs', 'WhatsApp'],
  },
  {
    company: 'InstaPOS',
    period: '2023',
    role: { en: 'Full-Stack / SaaS Developer', es: 'Desarrollador Full-Stack / SaaS' },
    description: {
      en: 'Built a multi-branch SaaS platform for agencies and points of sale, covering business logic, database architecture and electronic invoicing.',
      es: 'Desarrollé una plataforma SaaS multi-sucursal para agencias y puntos de venta, incluyendo lógica de negocio, arquitectura de base de datos y facturación electrónica.',
    },
    highlights: [
      { en: 'Multi-branch POS and commercial management', es: 'POS multi-sucursal y gestión comercial' },
      {
        en: 'Electronic invoicing with ARCA integration',
        es: 'Facturación electrónica con integración ARCA',
      },
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'REST APIs', 'ARCA'],
    website: 'https://instapos.com.ar/',
  },
  {
    company: 'ComercioPro',
    period: '2022',
    role: { en: 'Full-Stack / SaaS Developer', es: 'Desarrollador Full-Stack / SaaS' },
    description: {
      en: 'Developed the complete SaaS platform for a Buenos Aires company, from database and backend to customer-facing interfaces.',
      es: 'Desarrollé la plataforma SaaS completa para una empresa de Buenos Aires, desde la base de datos y el backend hasta las interfaces de usuario.',
    },
    highlights: [
      { en: 'Sales, branches and referral system', es: 'Ventas, sucursales y sistema de referidos' },
      {
        en: 'Business administration and multi-branch POS',
        es: 'Administración comercial y POS multi-sucursal',
      },
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'SaaS', 'POS'],
    website: 'https://comerciopro.com.ar/',
  },
  {
    company: 'Parque Eólico Arauco SAPEM',
    period: '2021 — Present',
    role: { en: 'Software Developer / Technical Lead', es: 'Desarrollador de software / Líder técnico' },
    description: {
      en: 'Designed the architecture connecting multiple educational games with a centralized student scoring platform and administrative tablet application.',
      es: 'Diseñé la arquitectura que conecta múltiples videojuegos educativos con una plataforma centralizada de puntajes y una aplicación administrativa para tablets.',
    },
    highlights: [
      {
        en: 'Central database and REST API architecture',
        es: 'Base de datos central y arquitectura de API REST',
      },
      {
        en: 'Technical coordination across game developers',
        es: 'Coordinación técnica entre desarrolladores de videojuegos',
      },
      {
        en: 'Client/server synchronization and tablet app',
        es: 'Sincronización cliente/servidor y aplicación para tablets',
      },
    ],
    technologies: ['REST API', 'Database Architecture', 'Tablet App', 'Client / Server'],
    featured: true,
  },
  {
    company: 'Sooft Technology',
    period: '2020 — 2021',
    role: { en: 'Laravel Developer', es: 'Desarrollador Laravel' },
    description: {
      en: 'Maintenance and development of a web platform for a Swiss company.',
      es: 'Mantenimiento y desarrollo de una plataforma web para una empresa suiza.',
    },
    technologies: ['PHP', 'Laravel', 'Vue.js'],
  },
  {
    company: 'OYD',
    period: '2020',
    role: { en: 'Laravel Developer', es: 'Desarrollador Laravel' },
    description: {
      en: 'Maintenance and feature development for an international web platform.',
      es: 'Mantenimiento y desarrollo de funcionalidades para una plataforma web internacional.',
    },
    technologies: ['PHP', 'Laravel', 'Vue.js'],
  },
  {
    company: 'Soldiers Skatehouse',
    period: '2015 — 2020',
    role: { en: 'Software Developer', es: 'Desarrollador de software' },
    description: {
      en: 'Developed and maintained software for sales, inventory, stock, commercial operations and internal management, including legacy system modernization.',
      es: 'Desarrollé y mantuve software de ventas, inventario, stock, operaciones comerciales y gestión interna, incluyendo modernización de sistemas legacy.',
    },
    technologies: ['Visual FoxPro 9', 'DBF', 'Legacy Modernization'],
  },
];
