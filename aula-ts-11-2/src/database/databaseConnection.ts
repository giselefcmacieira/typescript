import pg from "pg"

const {Pool} = pg

const connection = new Pool ({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "Sidney8416#",
    database: "exe11"
})

export {connection}