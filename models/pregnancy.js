// Pregnancy model
const Pregnancy = (sequelize, DataTypes) => {
  return sequelize.define("Pregnancy", {
    startDate: DataTypes.DATE,
    dueDate: DataTypes.DATE,
  });
};

export default Pregnancy;
  