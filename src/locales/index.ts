import { createI18n } from "vue-i18n"

import en from "./en"
import ja from "./ja"

export const DEFAULT_LOCALE = "en"

export const i18n = createI18n({
  locale: DEFAULT_LOCALE,
  fallbackLocale: "en",
  messages: {
    en: en.messages,
    ja: ja.messages
  }
})
