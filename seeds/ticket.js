/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const currentDate = new Date()
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ticket').del()
  await knex('ticket').insert([
    {tgl_ticket: currentDate, jam: currentDate},
    {tgl_ticket: currentDate, jam: currentDate},
    {tgl_ticket: currentDate, jam: currentDate},
    {tgl_ticket: currentDate, jam: currentDate},
    
  ]);
};
