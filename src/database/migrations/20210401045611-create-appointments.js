'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('appointments', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE', // caso for modificado na tabela de users, modifica automaticamente aqui tbm
        onDelete: 'SET NULL', // se for deleatado na tabela de files, o campo é colocado como null
        allowNull: true,
      },
      provider_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE', // caso for modificado na tabela de users, modifica automaticamente aqui tbm
        onDelete: 'SET NULL', // se for deleatado na tabela de files, o campo é colocado como null
        allowNull: true,
      },
      canceled_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('appointments');
  },
};
