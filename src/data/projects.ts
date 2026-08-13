import type { LocalizedText } from './types';
import retailPriceCheckerOne from '../assets/Retail_Price_Checkers/WhatsApp Video 2026-08-13 at 19.31.16.mp4';
import retailPriceCheckerTwo from '../assets/Retail_Price_Checkers/WhatsApp Video 2026-08-13 at 19.31.17.mp4';
import retailPriceCheckerPosterOne from '../assets/Retail_Price_Checkers/retail-price-checker-1-poster.webp';
import retailPriceCheckerPosterTwo from '../assets/Retail_Price_Checkers/retail-price-checker-2-poster.webp';

export interface ProjectVideo {
  source: string;
  poster: string;
  title: LocalizedText;
}

export interface Project {
  title: string;
  subtitle: LocalizedText;
  description: LocalizedText;
  stack: string[];
  url?: string;
  visual: 'commerce' | 'pos' | 'data' | 'calendar' | 'retail' | 'education';
  featured?: boolean;
  videos?: ProjectVideo[];
}

export const projects: Project[] = [
  {
    title: 'ComercioPro',
    subtitle: { en: 'Multi-Branch SaaS & POS Platform', es: 'Plataforma SaaS y POS multi-sucursal' },
    description: {
      en: 'Complete SaaS platform for commercial businesses with multi-branch management, POS, sales and referral functionality.',
      es: 'Plataforma SaaS completa para comercios, con gestión multi-sucursal, punto de venta, ventas y sistema de referidos.',
    },
    stack: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'SaaS'],
    url: 'https://comerciopro.com.ar/',
    visual: 'commerce',
    featured: true,
  },
  {
    title: 'InstaPOS',
    subtitle: {
      en: 'Multi-Branch POS & Electronic Invoicing',
      es: 'POS multi-sucursal y facturación electrónica',
    },
    description: {
      en: 'SaaS solution for agencies and businesses featuring point of sale, business management and electronic invoicing integrated with ARCA.',
      es: 'Solución SaaS para agencias y comercios con punto de venta, gestión empresarial y facturación electrónica integrada con ARCA.',
    },
    stack: ['Laravel', 'PHP', 'MySQL', 'REST APIs', 'ARCA'],
    url: 'https://instapos.com.ar/',
    visual: 'pos',
    featured: true,
  },
  {
    title: 'CompuComercio',
    subtitle: {
      en: 'SaaS POS for Latin American Businesses',
      es: 'POS SaaS para comercios latinoamericanos',
    },
    description: {
      en: 'Web-based management system for sales, inventory, cash flow, customers, employees, analytics, branches and sales representatives.',
      es: 'Sistema web de gestión para ventas, inventario, caja, clientes, empleados, analítica, sucursales y representantes comerciales.',
    },
    stack: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'POS'],
    url: 'https://compucomercio.com/',
    visual: 'data',
  },
  {
    title: 'Appointment Management',
    subtitle: { en: 'Service Operations Platform', es: 'Plataforma de operaciones de servicios' },
    description: {
      en: 'Appointment and service management for salons and service businesses, including teams, schedules, availability and customers.',
      es: 'Gestión de turnos y servicios para salones y comercios, incluyendo equipos, horarios, disponibilidad y clientes.',
    },
    stack: ['Laravel', 'PHP', 'MySQL', 'WhatsApp'],
    url: 'https://sannicolasprestaciones.com.ar/turnos',
    visual: 'calendar',
  },
  {
    title: 'Retail Price Checkers',
    subtitle: { en: 'In-store & Mobile Solutions', es: 'Soluciones en tienda y mobile' },
    description: {
      en: 'Price-checking solutions for clothing and footwear stores, designed for in-store terminals and mobile devices.',
      es: 'Soluciones de consulta de precios para tiendas de indumentaria y calzado, diseñadas para terminales y dispositivos móviles.',
    },
    stack: ['Web', 'Mobile', 'APIs', 'Retail'],
    visual: 'retail',
    videos: [
      {
        source: retailPriceCheckerOne,
        poster: retailPriceCheckerPosterOne.src,
        title: { en: 'Retail price checker — demonstration 1', es: 'Consultor de precios — demostración 1' },
      },
      {
        source: retailPriceCheckerTwo,
        poster: retailPriceCheckerPosterTwo.src,
        title: { en: 'Retail price checker — demonstration 2', es: 'Consultor de precios — demostración 2' },
      },
    ],
  },
  {
    title: 'Educational Gaming Platform',
    subtitle: { en: 'Centralized Integration Architecture', es: 'Arquitectura centralizada de integración' },
    description: {
      en: 'Backend and API connecting educational videogames with centralized student scores and an administrative tablet application.',
      es: 'Backend y API que conectan videojuegos educativos con puntajes centralizados y una aplicación administrativa para tablets.',
    },
    stack: ['REST API', 'Database', 'Tablet App', 'Integration'],
    visual: 'education',
  },
];

export const demos = [
  {
    title: { en: 'SaaS Analytics', es: 'Analítica SaaS' },
    type: 'Dashboard',
    visual: 'data' as const,
  },
  {
    title: { en: 'Modern POS', es: 'POS moderno' },
    type: 'Interface',
    visual: 'pos' as const,
  },
  {
    title: { en: 'Service Landing', es: 'Landing de servicios' },
    type: 'Landing page',
    visual: 'commerce' as const,
  },
  {
    title: { en: 'Operations Hub', es: 'Centro de operaciones' },
    type: 'Web app',
    visual: 'calendar' as const,
  },
] satisfies Array<{ title: LocalizedText; type: string; visual: Project['visual'] }>;
