"use client";

import type { FC } from "react";
import {
  getLocaleName,
  getLocalizedUrl,
  Locales,
} from "intlayer";
import { useLocale, useLocaleCookie } from "next-intlayer";
import { useRouter } from "next/navigation";

export const LocaleSwitcher: FC = () => {
  const { locale, pathWithoutLocale, availableLocales } = useLocale();
  const { setLocaleCookie } = useLocaleCookie();
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = event.target.value as Locales;
    setLocaleCookie(selectedLocale);
    const newUrl = getLocalizedUrl(pathWithoutLocale, selectedLocale);
    router.push(newUrl);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 20,
        right: 20,
        zIndex: 1000,
      }}
    >
      <select
        value={locale}
        onChange={handleChange}
        style={{
          padding: "6px 12px",
          fontSize: "14px",
          color: "#000", // black text
          backgroundColor: "#fff", // white background
          border: "1px solid #ccc",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {availableLocales.map((localeItem) => (
          <option value={localeItem} key={localeItem}>
            {getLocaleName(localeItem, locale)}
          </option>
        ))}
      </select>
    </div>
  );
};
