const {Pool} = require('pg')

const pg = new Pool ({
  user: "cassiabernardo",
  password: "",
  host: "localhost",
  port: 5432,
  database: "foodfy"
})

delete pg.native
module.exports = pg