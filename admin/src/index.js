import { getTranslation } from './utils/getTranslations';
import { PLUGIN_ID } from './pluginId';
import { Initializer } from './components/Initializer';
import { Alien } from '@strapi/icons';

export default {
  
  register(app) {
    app.addMenuLink({
      to: `/plugins/${PLUGIN_ID}`,
      icon: Alien,
      intlLabel: {
        id: `${PLUGIN_ID}.plugin.name`,
        defaultMessage: PLUGIN_ID,
      },
      Component: async () => {
        return await import(/* webpackChunkName: "[request]" */ './screens/Redirect');
      }
    });

    app.registerPlugin({
      id: PLUGIN_ID,
      initializer: Initializer,
      isReady: true,
      name: PLUGIN_ID,
    });
  },


  async registerTrads(app) {
    const { locales } = app;

    const importedTranslations = await Promise.all(
      locales.map((locale) => {
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: getTranslation(data),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return importedTranslations;
  },
};
