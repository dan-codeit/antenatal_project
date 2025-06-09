import { Patient } from "../../models/index.js";

export const registerPatient = async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;

  try {
    // Validate required fields
    if (!firstName || !lastName || !username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if email already exists
    const existingPatient = await Patient.findOne({ where: { email } });
    if (existingPatient) {
      return res.status(409).json({ message: "Email already in use" });
    }

    // Create patient 
    const newPatient = await Patient.create({
      firstName,
      lastName,
      username,
      email,
      password,
    });

    // Exclude password from res
    const { password: _ , lastName:__ , ...patientData } = newPatient.get({ plain: true });

    return res.status(201).json({
      message: "You are registered successfully",
      patient: patientData,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Signup failed",
      error: err.message,
    });
  }
};
