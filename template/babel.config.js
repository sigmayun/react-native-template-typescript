module.exports = {
  presets: ['module:metro-react-native-babel-preset', 'mobx'],
  env: {
    production: {
      plugins: [['transform-remove-console', { exclude: ['info'] }]],
    },
  },
}
