const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee', {
    id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      references: {
        model: 'company',
        key: 'id'
      }
    },
    fullname: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'employee',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "employee_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
