const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  post_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'posts',
      id: 'id'
    }
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      id: 'id'
    }
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }


},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments',
  }
);

module.exports = Comment


