module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('users', 'cnpj'),
      queryInterface.removeColumn('users', 'cpf'),
      queryInterface.addColumn('users', 'cpf_cnpj', {
        type: Sequelize.STRING,
        allowNull: false,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('users', 'cnpj', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn('users', 'cpf', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.removeColumn('users', 'cpf_cnpj'),
    ]);
  },
};
