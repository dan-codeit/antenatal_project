// Foetus model
const Foetus = (sequelize, DataTypes) => {
  return sequelize.define("Foetus", {
    week: DataTypes.INTEGER,
    developmentSummary: DataTypes.TEXT,
  });
};

export default Foetus;
  