import en from "./lang/en.json";
import id from "./lang/id.json";
import ar from "./lang/ar.json";
import es from "./lang/es.json";
import hi from "./lang/hi.json";
import ja from "./lang/ja.json";
import ko from "./lang/ko.json";
import nl from "./lang/nl.json";
import ru from "./lang/ru.json";
import uz from "./lang/uz.json";
import zh from "./lang/zh.json";

export default defineI18nConfig(() => {
  return {
    legacy: false,
    locale: "en",
    messages: {
      en,
      id,
      ar,
      es,
      hi,
      ja,
      ko,
      nl,
      ru,
      uz,
      zh,
    },
    fallbackLocale: "en",
  };
});
