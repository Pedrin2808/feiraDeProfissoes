import mysql from 'mysql2/promise'


const conectionFormulario = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'feira'
})

const conectionLogin = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'feira'
})

await conectionFormulario.query("SET SESSION sql_mode=''");
await conectionLogin.query("SET SESSION sql_mode=''");
export {conectionFormulario, conectionLogin}