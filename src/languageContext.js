import { createContext } from "react";

export const LanguageContext = createContext({
  language: 'ua',
  setLanguage: () => {}
});