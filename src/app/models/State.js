import Sequelize, { Model } from 'sequelize';

class State extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        initials: Sequelize.STRING(2),
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.City, { foreignKey: 'state_id', as: 'state' });
  }
}

export default State;
