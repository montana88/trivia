const mix = require('laravel-mix')

mix.setPublicPath('dist')

  .js('src/index.js', 'dist')

  .sass('src/assets/scss/app.scss', 'dist/css')

  .sourceMaps(true)

  .webpackConfig({
    devtool: 'inline-source-map',
    output: {
      publicPath: '/dist/'
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: false,
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve('src')
      }
    }
  })

  .version()

  .options({
    processCssUrls: false
  })

;
