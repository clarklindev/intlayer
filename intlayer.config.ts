import { Locales, type IntlayerConfig } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [
      Locales.ENGLISH,
      Locales.CHINESE_TRADITIONAL
      // Your other locales
    ],
    defaultLocale: Locales.ENGLISH,
  },
};

export default config;