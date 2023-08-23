import mysql from 'mysql2/promise'

const conexao = await mysql.createConnection({
    host: process.env. MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DATABASE
})

console.log('Banco de Dados conectado!');
export {conexao};