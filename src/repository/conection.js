import mysql from 'mysql2/promise'


const conectionFormulario = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '59222502',
    database: 'feira'
})

const conectionLogin = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '59222502',
    database: 'feira'
})

const conectionLoginn = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '59222502',
    database: 'feira'
})

const conectionBuscar = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '59222502',
    database: 'feira'
})



await conectionLoginn.query("SET SESSION sql_mode=''")
await conectionFormulario.query("SET SESSION sql_mode=''");
await conectionLogin.query("SET SESSION sql_mode=''");
await conectionBuscar.query("SET SESSION sql_mode=''");
export {conectionFormulario, conectionLogin, conectionLoginn,conectionBuscar}