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

export {conectionFormulario, conectionLogin}