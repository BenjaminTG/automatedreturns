// import {useTranslation} from "react-i18next";
import common from "./translations/en/common.json";

// const {t, i18n} = useTranslation('common');

// export default t

import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',  
    keySeparator: ".",                            // language to use
    resources: {
      en: {
        translation: common
      },
    },
  });

  export default i18n