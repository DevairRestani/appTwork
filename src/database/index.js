import Sequelize from 'sequelize';

// Models
import City from '../app/models/City';
import File from '../app/models/File';
import Job from '../app/models/Job';
import State from '../app/models/State';
import User from '../app/models/User';
import databaseConfig from '../config/database';

// Array de models
const models = [User, File, State, City, Job];

class Database {
  constructor() {
    this.init();
  }

  // Conexao com o bd e carregar os models
  init() {
    this.connection = new Sequelize(databaseConfig); // Conexao com o bd

    // Manda a conexao para cada model
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
