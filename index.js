const fetch = require('node-fetch')
const fs = require('fs')

const geraUsuario = async () => {
  const response = await fetch('https://randomuser.me/api/?results=10')
  const json = await response.json()
  const data = json.results

  data.forEach((user, index) => console.log(user))
}

geraUsuario()