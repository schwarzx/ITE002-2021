// utilizar a class Routes do express
import { Router } from "express";

const routes = Router();
//criando rota GET raíz
routes.get('/', (req, res) => {
    // o que será retornado para o usuario em JSON
    return res.json({
        message: "It's working!"
    })
})


export default routes;