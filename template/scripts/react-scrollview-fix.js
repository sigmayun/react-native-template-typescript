/* eslint no-throw-literal:0 */
const fs = require('fs')

try {
  console.log('React spring scroll view fix...')
  const rootDir = process.cwd()

  const file = `${rootDir}/node_modules/react-native-spring-scrollview/SpringScrollView.js`
  const data = fs.readFileSync(file, 'utf8')
  const dataFix = 'react-native/Libraries/Components/TextInput/TextInputState'

  if (data.indexOf(dataFix) !== -1) {
    throw '> Already fixed'
  }

  const result = data.replace(/react-native\/lib\/TextInputState/g, dataFix)
  fs.writeFileSync(file, result, 'utf8')
  console.log('Fixed Done')
} catch (error) {
  console.error(error)
}
