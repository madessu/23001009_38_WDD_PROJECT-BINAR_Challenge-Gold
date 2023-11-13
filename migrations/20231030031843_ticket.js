/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
        return knex.schema.createTable('ticket', table => {
        table.increments('id').primary()
        table.integer("id_user").unsigned().references("user.id")
        table.timestamp("tgl_ticket") 
        table.timestamp("jam") 
        })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("ticket")
};
