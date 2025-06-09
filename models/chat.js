// Chat model
const Chat = (sequelize, DataTypes) => {
  return sequelize.define("Chat", {
    message: DataTypes.TEXT,
    sender: DataTypes.ENUM("patient", "doctor"),
  });
};

export default Chat;
  