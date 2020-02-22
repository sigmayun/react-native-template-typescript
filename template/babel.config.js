module.exports = {
  presets: ['module:metro-react-native-babel-preset', 'mobx'],
  plugins: ['@babel/plugin-transform-flow-strip-types', ['import', { libraryName: '@ant-design/react-native' }]],
  env: {
    production: {
      plugins: [['transform-remove-console', { exclude: ['info'] }]],
    },
  },
}
