export type Locale = 'en' | 'es';

export type LocalizedText = Record<Locale, string>;

export const translate = (value: LocalizedText, locale: Locale): string => value[locale];
