module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  i18n: {
    localeDetection: true,
    locales: ['ru', 'en', 'catchAll'],
    defaultLocale: 'catchAll',
  },
  images: {
    domains: ['courses-top.ru']
  },
  webpack(config, options) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [{ removeViewBox: false }],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    });

    return config;
  },
};