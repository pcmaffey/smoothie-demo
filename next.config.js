const path = require('path')

const dev = process.env.NODE_ENV !== 'production'

const config = {
  reactStrictMode: true,
  poweredByHeader: false,
  env: {
    NEXT_TELEMETRY_DISABLED: 1,
  },
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: dev ? '[path][name]__[local]' : '[local]___[hash:base64:5]',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `
        /// prepended to every single scss file.
        @import "styles/mixins.scss";
      `,
  },
}

module.exports = config
