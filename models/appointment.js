// Appointment model
const Appointment = (sequelize, DataTypes) => {
  return sequelize.define("Appointment", {
    date: DataTypes.DATE,
    type: DataTypes.STRING,
    status: DataTypes.ENUM("pending", "completed", "cancelled"),
  });
};

export default Appointment;
  