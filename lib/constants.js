export const LOCALES = ['en', 'uk'];
export const DEFAULT_LOCALE = 'en';

export function generateLocaleParams() {
  return LOCALES.map(locale => ({ locale }));
}
