// Tips model
const Tips = (sequelize, DataTypes) => {
  return sequelize.define("Tips", {
    week: DataTypes.INTEGER,
    content: DataTypes.TEXT,
  });
};

export default Tips;
  