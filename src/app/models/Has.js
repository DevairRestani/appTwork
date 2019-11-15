import Sequelize, { Model } from 'sequelize';

class Has extends Model {
  static init(sequelize) {
    super.init(
      {
        nota: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
  static associate(models) {
    this.belongsTo(models.Acting, { foreignKey: 'id_acting' });
    this.belongsTo(models.Entity, { foreignKey: 'id_entity' });
  }
}

export default Has;
