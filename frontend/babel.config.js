module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@': './', // raíz del frontend
            '@screens': './screens',
            '@components': './components',
            '@assets': './assets',
            '@styles': './styles',
            '@hooks': './hooks',
            '@services': './services',
            '@navigation': './navigation',
            '@contexts': './contexts',
            '@utils': './utils'
          }
        }
      ]
    ]
  };
};
