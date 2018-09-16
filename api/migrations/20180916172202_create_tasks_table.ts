exports.up = function (knex) {
    return knex.schema.createTable('tasks', (table) => {
        table.increments()
        table.string('title')
        table.text('description').nullable()
        table.string('type')
        table.string('priority')
        table.enum('status', ['new', 'develop', 'testing', 'end'])
        
        table.integer('sprint_id').nullable().unsigned()
        table.integer('reporter_id').unsigned()
        table.integer('assignee_id').unsigned()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('tasks')
};
