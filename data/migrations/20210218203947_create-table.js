
exports.up = function(knex) {
  return knex.schema.createTable('characters', tbl =>{
      tbl.increments();
      tbl.string('name',128).notNullable();
      tbl.string('class',128).notNullable();
      tbl.string('specialization',128).notNullable()
      tbl.integer('item level');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('characters');
};
