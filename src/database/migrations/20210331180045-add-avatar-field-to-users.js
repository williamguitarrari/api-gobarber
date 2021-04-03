'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'avatar_id',
      {
        type: Sequelize.INTEGER,
        references: { model: 'files', key: 'id' },
        onUpdate: 'CASCADE', // caso for modificado na tabela de users, modifica automaticamente aqui tbm
        onDelete: 'SET NULL', // se for deleatado na tabela de files, o campo é colocado como null
        allowNull: true,
      });
  },

  down: async (queryInterface) => {
    return queryInterface.removeColumn('users', 'avatar_id');
  }
};
