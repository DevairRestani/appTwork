import Sequelize, { Model } from 'sequelize';

class City extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'city',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.State, { foreignKey: 'state_id' });
  }
}

export default City;
