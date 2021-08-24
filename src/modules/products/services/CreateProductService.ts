import { getCustomRepository } from "typeorm";
import ProductRepository from "../typeorm/repositories/ProductRepository";

interface IRequest {
    name: string,
    price: number,
    quantity: number
}

class CreateProductService {
    public async execute({name, price, quantity}: IRequest): Promise<Product> {

        let productRepository = getCustomRepository(ProductRepository)
        let productExists = await productRepository.findByName(name)
        if (productExists) {
            console.log('Produto já existe');
            
        }

        // cria produto para inserção
        let newProduct = productRepository.create({
            name, price, quantity
        })

        // insere produto
        await productRepository.save
        
        return newProduct;
    }
}


export default CreateProductService;