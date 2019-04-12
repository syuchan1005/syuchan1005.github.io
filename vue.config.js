const path = require('path');

module.exports = {
  outputDir: 'docs',
  productionSourceMap: false,
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
      swDest: 'service-worker.js',
    },
    iconPaths: {
      favicon32: 'icons/32.png',
      favicon16: 'icons/16.png',
      appleTouchIcon: 'icons/152.png',
      maskIcon: 'safari-pinned-tab.svg',
      msTileImage: 'icons/144.png',
    },
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    name: 'syuchan1005 Portfolio',
    themeColor: '#66bb6a',
    msTileColor: '#66bb6a',
  },
  chainWebpack(config) {
    config.plugin('copy')
      .tap(args => [
        [
          ...args[0],
          {
            toType: 'file',
            from: path.join(args[0][0].from, '../src/backgroundPainter.min.js'),
            to: path.join(args[0][0].to, 'js/backgroundPainter.js'),
          },
        ],
      ]);
    config.plugin('preload')
      .tap(args => [
        {
          ...args[0],
          include: 'allAssets',
          fileBlacklist: [
            ...args[0].fileBlacklist,
            /fonts\/(.*?)\.(woff|eot|ttf)$/,
            /fa-(.*?)\.svg$/,
          ],
        },
      ]);
  },
};
