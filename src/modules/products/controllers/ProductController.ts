import { Request, Response } from "express";
import CreateProductService from "../services/CreateProductService";

class ProductController {
    public async create(req: Request, res: Response): Promise<Response> {
        // recuperar dados para insercao
        let {name, price, quantity} = req.body;
        
        let createProduct = new CreateProductService()

        let product =  await createProduct.execute({
            name, price, quantity
        })

        return res.json(product)
    }
}

export default ProductController;