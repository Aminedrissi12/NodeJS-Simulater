const App = require('./App')
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT || 8081

App.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`this app is run on porte http://localhost:${port}/`)
  }
})
