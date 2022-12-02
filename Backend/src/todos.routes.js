
const express = require("express");
const oracledb = require("oracledb")
const bodyParser = require("body-parser");
const { application, json } = require("express");
const tarefa = [{nome: "aaaa",status:false}]
const todosRoutes = express.Router();
const cors = require("cors")
//
todosRoutes.post("/cadastrar", (request, response) => {
      async function conceclientes() {
     try {
         const conn = await oracledb.getConnection({
             user: 'HR',
             password: '123',
             connectionString: 'localhost/xe'
         });
         application.use(cors());
         application.use(express.json())
         application.use(bodyParser.urlencoded({ extended: true }))
         const nome = request.body.nome;
         const sobrenome = request.body.sobrenome;
         const cidade = request.body.cidade;
         const estado = request.body.estado;
         
         
         const sql = "INTO TO CLIENTES VALUES (:nome,:sobrenome, :cidade, :estado)";
         const result = await conn.execute(sql, { nome, sobrenome, cidade, estado });
         return result;
         
     } catch (error) {
        
     }
    }
    conceclientes()
        .then(dbRes => {
        response.send(dbRes)
        })
        .catch(err => {
        response.send(err)
    })  
})
todosRoutes.get("/todos", (request, response) => {   
    async function conceclientes() {
     try {
         const conn = await oracledb.getConnection({
             user: 'HR',
             password: '123',
             connectionString: 'localhost/xe'
         });
         const result = await conn.execute('SELECT*FROM hr.clientes');
         return result.rows;
     } catch (error) {
        
     }
    }
    conceclientes()
        .then(dbRes => {
        response.send(dbRes)
        })
        .catch(err => {
        response.send(err)
    })
})
module.exports = todosRoutes;