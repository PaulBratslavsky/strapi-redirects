import { useRef, useEffect } from "react";
import { Alien } from "@strapi/icons";
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const PLUGIN_ID = "strapi-redirects";
const getTranslation = (id) => `${PLUGIN_ID}.${id}`;
const Initializer = ({ setPlugin }) => {
  const ref = useRef(setPlugin);
  useEffect(() => {
    ref.current(PLUGIN_ID);
  }, []);
  return null;
};
const index = {
  register(app) {
    app.addMenuLink({
      to: `/plugins/${PLUGIN_ID}`,
      icon: Alien,
      intlLabel: {
        id: `${PLUGIN_ID}.plugin.name`,
        defaultMessage: PLUGIN_ID
      },
      Component: async () => {
        return await import(
          /* webpackChunkName: "[request]" */
          "./index-C6fEuSn6.mjs"
        );
      }
    });
    app.registerPlugin({
      id: PLUGIN_ID,
      initializer: Initializer,
      isReady: true,
      name: PLUGIN_ID
    });
  },
  async registerTrads(app) {
    const { locales } = app;
    const importedTranslations = await Promise.all(
      locales.map((locale) => {
        return __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./translations/de.json": () => import("./de-BPKFnvBy.mjs"), "./translations/en.json": () => import("./en-sUdmIF6Z.mjs"), "./translations/fr.json": () => import("./fr-CUBjt0pD.mjs") }), `./translations/${locale}.json`).then(({ default: data }) => {
          return {
            data: getTranslation(data),
            locale
          };
        }).catch(() => {
          return {
            data: {},
            locale
          };
        });
      })
    );
    return importedTranslations;
  }
};
export {
  PLUGIN_ID as P,
  index as i
};
//# sourceMappingURL=index-B8hp5SUT.mjs.map
