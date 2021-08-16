import express from 'express'

// permite dar permissões para as APIs
import cors from 'cors'


const server = express()

server.use(cors())

// servidor precisa converter em JSON o conteudo vindo do frontend
server.use(express.json())

// import routes
import routes from './routes'

server.use(routes)

server.listen(3000, ()=>{
    console.log("Server is running...");
})