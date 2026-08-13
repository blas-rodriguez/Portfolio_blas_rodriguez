import type { LocalizedText } from './types';

export interface Video {
  title: LocalizedText;
  language: string;
  type: 'youtube' | 'vimeo' | 'mp4' | 'placeholder';
  source?: string;
}

export const introVideos: Video[] = [
  {
    title: { en: 'English introduction', es: 'Presentación en inglés' },
    language: 'EN',
    type: 'placeholder',
  },
  {
    title: { en: 'Spanish introduction', es: 'Presentación en español' },
    language: 'ES',
    type: 'placeholder',
  },
];
