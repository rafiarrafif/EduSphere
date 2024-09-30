import en from "./lang/en.json";
import id from "./lang/id.json";
import es from "./lang/es.json";
import ja from "./lang/ja.json";
import ko from "./lang/ko.json";
import ru from "./lang/ru.json";
import zh from "./lang/zh.json";

export default defineI18nConfig(() => {
  return {
    legacy: false,
    locale: "en",
    messages: {
      en,
      id,
      es,
      ja,
      ko,
      ru,
      zh,
    },
    fallbackLocale: "en",
  };
});
