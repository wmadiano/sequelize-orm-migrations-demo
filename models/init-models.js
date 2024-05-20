var DataTypes = require("sequelize").DataTypes;
var _SequelizeMeta = require("./SequelizeMeta");
var _company = require("./company");
var _employee = require("./employee");
var _transaction = require("./transaction");

function initModels(sequelize) {
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var company = _company(sequelize, DataTypes);
  var employee = _employee(sequelize, DataTypes);
  var transaction = _transaction(sequelize, DataTypes);

  employee.belongsTo(company, { as: "company", foreignKey: "company_id"});
  company.hasMany(employee, { as: "employees", foreignKey: "company_id"});
  transaction.belongsTo(employee, { as: "employee", foreignKey: "employee_id"});
  employee.hasMany(transaction, { as: "transactions", foreignKey: "employee_id"});

  return {
    SequelizeMeta,
    company,
    employee,
    transaction,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
