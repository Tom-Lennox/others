require('dotenv').config()
const env = process.env

const { Client } = require('pg')
const client = new Client({
    user: env.ENV_USER,
    host: env.ENV_HOST,
    database: env.ENV_DB,
    password: env.ENV_PASSWORD,
    port: env.ENV_PORT,
})
client.connect()

// ## ▼ 1.select now
client.query('SELECT NOW()', (err, res) => {
    // console.log(err, res)
    // console.log("■err", err)
    // console.log("■res", res)
    console.log("■res.rows[0]",res.rows[0])
    client.end()
})

// ## ▼ 2.select where
// const sql = `
//     select
//     *
//     from
//     Rank
//     where
//     name like $1
//     `
// const values = ['satoko']
// client.query(sql, values)
//     .then(res => {
//         console.log("■res.rows[0]", res.rows[0])
//         client.end()
//     })
//     .catch(e => console.error(e.stack))

// // ## ▼ 3.insert
// const sql = "INSERT INTO Rank (id, hands, name, level) VALUES ($1, $2, $3, $4)"
// const values = [2, 2, 'satoko', 3]
// client.query(sql, values)
//     .then(res => {
//         console.log("■res", res)
//         client.end()
//     })
//     .catch(e => console.error(e.stack))
