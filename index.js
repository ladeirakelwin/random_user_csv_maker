const fetch = require('node-fetch')
const fs = require('fs')

const geraUsuario = async () => {
    try {
    const response = await fetch('https://randomuser.me/api/?results=5000')
    const json = await response.json()
    const datum = json.results

    datum.forEach(({
      name,
      email,
      dob,
      gender,
      login
    }, index) => {
      const fields = "\n" + name.first + "," + name.last + "," +
        email + "," + dob.age + "," + gender + "," +
        login.username + "," + login.sha256 + ","
      fs.appendFile('dados/usuario.csv', fields, (err) => {
        if (err) throw err
      })
    })
  } catch (err) {
    console.error(err)
  }
}

geraUsuario()