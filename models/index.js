// models/index.js
import {sequelize, DataTypes} from "../config/db.js";
// import { Sequelize } from "sequelize";

// Import model factories
import PatientModel from "./patient.js";
import DoctorModel from "./doctor.js";
import PregnancyModel from "./pregnancy.js";
import FoetusModel from "./foetus.js";
import AppointmentModel from "./appointment.js";
import ChatModel from "./chat.js";
import TipsModel from "./tips.js";

// Initialize models
const Patient = PatientModel(sequelize, DataTypes);
const Doctor = DoctorModel(sequelize, DataTypes);
const Pregnancy = PregnancyModel(sequelize, DataTypes);
const Foetus = FoetusModel(sequelize, DataTypes);
const Appointment = AppointmentModel(sequelize, DataTypes);
const Chat = ChatModel(sequelize, DataTypes);
const Tips = TipsModel(sequelize, DataTypes);

// Associations — after all models are defined
Patient.hasMany(Pregnancy, { foreignKey: "patientId" });
Pregnancy.belongsTo(Patient, { foreignKey: "patientId" });

Pregnancy.hasOne(Foetus, { foreignKey: "pregnancyId" });
Foetus.belongsTo(Pregnancy, { foreignKey: "pregnancyId" });

Patient.hasMany(Appointment, { foreignKey: "patientId" });
Appointment.belongsTo(Patient, { foreignKey: "patientId" });

Doctor.hasMany(Appointment, { foreignKey: "doctorId" });
Appointment.belongsTo(Doctor, { foreignKey: "doctorId" });

Patient.hasMany(Chat, { foreignKey: "patientId" });
Doctor.hasMany(Chat, { foreignKey: "doctorId" });
Chat.belongsTo(Patient, { foreignKey: "patientId" });
Chat.belongsTo(Doctor, { foreignKey: "doctorId" });

Pregnancy.hasMany(Tips, { foreignKey: "pregnancyId" });
Tips.belongsTo(Pregnancy, { foreignKey: "pregnancyId" });

// Export all models
export {
  sequelize,
  Patient,
  Doctor,
  Pregnancy,
  Foetus,
  Appointment,
  Chat,
  Tips,
};
