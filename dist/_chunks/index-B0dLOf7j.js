"use strict";
const react = require("react");
const icons = require("@strapi/icons");
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
  const ref = react.useRef(setPlugin);
  react.useEffect(() => {
    ref.current(PLUGIN_ID);
  }, []);
  return null;
};
const index = {
  register(app) {
    app.addMenuLink({
      to: `/plugins/${PLUGIN_ID}`,
      icon: icons.Alien,
      intlLabel: {
        id: `${PLUGIN_ID}.plugin.name`,
        defaultMessage: PLUGIN_ID
      },
      Component: async () => {
        return await Promise.resolve().then(() => require(
          /* webpackChunkName: "[request]" */
          "./index-Id0aCr2g.js"
        ));
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
        return __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./translations/de.json": () => Promise.resolve().then(() => require("./de-C7gZWFXz.js")), "./translations/en.json": () => Promise.resolve().then(() => require("./en-BZqSoRmX.js")), "./translations/fr.json": () => Promise.resolve().then(() => require("./fr-Al2Fr1Th.js")) }), `./translations/${locale}.json`).then(({ default: data }) => {
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
exports.PLUGIN_ID = PLUGIN_ID;
exports.index = index;
//# sourceMappingURL=index-B0dLOf7j.js.map
