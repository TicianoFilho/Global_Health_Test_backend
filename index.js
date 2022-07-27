require('dotenv').config()

const App = require('./src/App')
const port = process.env.SERVER_PORT

App.listen(port || 3000, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
