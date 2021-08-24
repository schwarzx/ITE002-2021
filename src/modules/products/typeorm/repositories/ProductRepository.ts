import { Repository } from "typeorm";
import Product from "../entities/product";

class ProductRepository extends Repository<Product> {
    // esta classe vai herdar todos os métodos de inserir, remover, consultar e atualizar do TypeORM
    // além disso, podemos criar outros métodos
    // async -> método é assincrono, quem chama pode realizar atividades em paralelo sem necessidade de esperar response
    public async findByName(name: string): Promise<Product | undefined> {
        let product = this.findOne({ // procura pelo produto com determinado nome e retorna o primeiro encontrado
            where: {
                name
            }
        })
        return product;
    }


}

export default ProductRepository;