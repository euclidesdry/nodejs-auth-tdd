const { sequelize } = require("../../src/app/models");

module.exports = () => {
  Object.keys(sequelize.models).map((key) => {
    return sequelize.models[key].destroy({
      truncate: true,
      force: true,
    });
  });
};
