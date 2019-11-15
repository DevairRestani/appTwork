import Sequelize, { Model } from 'sequelize';

class Job extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        level: Sequelize.INTEGER,
        salary: Sequelize.DOUBLE,
        workload: Sequelize.INTEGER,
        description: Sequelize.TEXT,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'id_company', as: 'author' });
  }
}

export default Job;
