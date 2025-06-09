import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./config/db.js";
import { Patient } from "./models/index.js";

const testModels = async () => {
  try {
    await connectDB();

    // mock new patient 
    const newPatient = await Patient.create({
      firstName: "Jane",
      lastName: "Doe",
      username: "janedoe",
      email: "jane@example.com",
      password: "yourhashedpasswordhere",
    });

    console.log("Created patient:", newPatient.firstName);

    // All patients
    const patients = await Patient.findAll();
    patients.forEach((p) => console.log("Patient:", p.firstName));
  } catch (err) {
    console.error("Test failed:", err);
  }
};

testModels();
