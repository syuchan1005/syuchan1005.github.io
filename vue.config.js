module.exports = {
  outputDir: 'docs',
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
      swDest: 'service-worker.js',
    },
    iconPaths: {
      favicon32: 'icons/32.png',
      favicon16: 'icons/16.png',
      appleTouchIcon: 'icons/apple.png',
      maskIcon: 'safari-pinned-tab.svg',
      msTileImage: 'icons/144.png',
    },
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    name: 'syuchan1005 Portfolio',
    themeColor: '#66bb6a',
    msTileColor: '#66bb6a',
  },
};
