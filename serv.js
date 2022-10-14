const App = require('./App')
const dotenv = require('dotenv')
dotenv.config()
const porte = process.env.PORTE

App.listen(porte, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`this app is run on porte http://localhost:${porte}/`)
  }
})
