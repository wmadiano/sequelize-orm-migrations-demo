const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transaction', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    employee_id: {
      type: DataTypes.STRING(300),
      allowNull: false,
      references: {
        model: 'employee',
        key: 'id'
      }
    },
    transaction_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(400),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'transaction',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "transaction_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
