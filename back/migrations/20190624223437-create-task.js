'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Task', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      summary: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      priority: {
        type: Sequelize.ENUM('New', 'Blocker', 'High', 'Medium', 'Low')
      },
      status: {
        type: Sequelize.ENUM('New', 'In Progress', 'In Review', 'Done')
      },
      assignee: {
        type: Sequelize.INTEGER,
        references: {
          model: 'User',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'SET NULL'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tasks');
  }
};