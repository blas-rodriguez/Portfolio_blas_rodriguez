import type { LocalizedText } from './types';

export const skillGroups: Array<{ title: LocalizedText; skills: string[] }> = [
  {
    title: { en: 'Backend', es: 'Backend' },
    skills: ['PHP', 'Laravel', 'REST APIs', 'C#', 'Visual FoxPro'],
  },
  {
    title: { en: 'Frontend', es: 'Frontend' },
    skills: ['JavaScript', 'Vue.js', 'Blade', 'Bootstrap', 'jQuery', 'HTML5', 'CSS3'],
  },
  {
    title: { en: 'Databases', es: 'Bases de datos' },
    skills: ['MySQL', 'PostgreSQL', 'SQLite', 'DBF', 'SQL'],
  },
  {
    title: { en: 'Mobile', es: 'Mobile' },
    skills: ['Apache Cordova', 'Android', 'Internal iOS apps', 'PWA'],
  },
  {
    title: { en: 'DevOps & deployment', es: 'DevOps y despliegue' },
    skills: ['Git', 'GitHub', 'Docker', 'Linux', 'Netlify', 'Vercel', 'VPS', 'Cron jobs'],
  },
  {
    title: { en: 'Business software', es: 'Software empresarial' },
    skills: ['SaaS', 'Multi-tenant', 'POS', 'Multi-branch', 'Inventory', 'Sales', 'Automation'],
  },
];

export const infrastructure = [
  'Git',
  'GitHub',
  'Docker',
  'Linux',
  'Netlify',
  'Vercel',
  'Hosting',
  'VPS',
  'Cron',
];
export const mobile = ['Cordova', 'Android', 'iOS', 'PWA', 'JavaScript'];
