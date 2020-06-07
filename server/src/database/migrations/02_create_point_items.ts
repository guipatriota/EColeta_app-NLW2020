import Knex, { KnexTimeoutError } from 'knex';

export async function up(knex: Knex) {
  // UTILIZADO PARA CRIAR A TABELA
  return knex.schema.createTable('point_items', table => {
    table.increments('id').primary();
    table.string('point_id')
      .notNullable()
      .references('id')
      .inTable('points');
    table.string('item_id')
      .notNullable()
      .references('id')
      .inTable('items');
  })
}

export async function down(knex: Knex) {
  // UTILIZADO PARA VOLTAR ATRAS (DELETAR A TABELA)
  return knex.schema.dropTable('point_items');
}