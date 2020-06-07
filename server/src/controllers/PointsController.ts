import { Request, Response } from 'express';
import knex from '../database/connection';

class PointsController {
  async index(request: Request, response: Response) {
    // Filtros necessários:
    // city, uf, items. Pegar de Query Params.
    const { city, uf, items } = request.query;

    const parsedItems = String(items)
      .split(',')
      .map(item => Number(item.trim()));

    const points = await knex('points')
      .join('point_items', 'points.id', '=', 'point_items.point_id')
      .whereIn('point_items.item_id', parsedItems)
      .where('city', String(city))
      .where('uf', String(uf))
      .distinct()
      .select('points.*');

      const serializedPoints = points.map(point => {
        return {
          ...point,
          image_url: `http://192.168.100.45:3333/uploads/${point.image}`, // não usar aspas e sim acentos agudos para que o link funcione com a variável
        };
      });

    return response.json(serializedPoints);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;// Também podia ser - const id = request.params.id;
  
  
  const point = await knex('points').where('id', id).first();

  if (!point){
    return response.status(400).json({ message: 'Point not found'});
  }

  const serializedPoint = {
    ...point,
    image_url: `http://192.168.100.45:3333/uploads/${point.image}`, // não usar aspas e sim acentos agudos para que o link funcione com a variável
  };
  

  /**
   * SELEC * FROM items
   *    JOIN point_items ON items_id = point_items.item_id
   *    WHERE point_items.point_id = {id}
   */

  const items = await knex('items')
    .join('point_items', 'items.id', '=', 'point_items.item_id')
    .where('point_items.point_id', id)
    .select('items.title');

  return response.json({point: serializedPoint, items});
  }

  async create(request: Request, response: Response) {
    const {
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items
    } = request.body;

    const trx = await knex.transaction(); // usamos o trx e não o knex para que todas as QUERIES sejam executadas ou se uma falhar, nenhuma seja executada.

    const point = {
      image: request.file.filename,
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf
  }

    const insertedIds = await trx('points').insert(point);

    const point_id = insertedIds[0];
    
    const pointItems = items
      .split(',')
      .map((item: string) => Number(item.trim()))
      .map((item_id: number) => {
        return {
            item_id,
            point_id,
        };
    })
    
    await trx('point_items').insert(pointItems);

    await trx.commit();

    return response.json({ 
      id: point_id,
      ...point, //retorna toda a estrutura de points
    });
  }

  
}

export default PointsController;
