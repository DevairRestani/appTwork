import Sequelize, { Model } from 'sequelize';

class Acting extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        level: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: 'acting',
      }
    );

    return this;
  }
  static associate(models) {
    this.hasMany(models.Has, { foreignKey: 'id_acting', as: 'acting' });
  }
}

export default Acting;
