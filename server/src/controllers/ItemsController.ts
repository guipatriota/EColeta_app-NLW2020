import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
  async index(request: Request, response: Response) { // usamos o async para que o await abaixo funcione.
    const items = await knex('items').select('*'); // mesmo que: SELECT * FROM items - usamos o await pois este comando pode demorar um pouco
  
    const serializedItems = items.map(item => {
      return {
        id: item.id,
         title: item.title,
         image_url: `http://192.168.100.45:3333/uploads/${item.image}`, // não usar aspas e sim acentos agudos para que o link funcione com a variável
      };
    });

    return response.json(serializedItems);
  }
}

export default ItemsController;