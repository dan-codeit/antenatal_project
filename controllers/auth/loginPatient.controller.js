
import { comparePassword } from "../../utils/comparePassword.js";
import { Patient } from "../../models/index.js";

export const loginPatient = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check email already exists
    const existingPatient = await Patient.findOne({ where: { email } });
    if (!existingPatient) {
      return res.status(409).json({ message: "Email not found" });
    }

    // Verify password
    const isPasswordValid = await comparePassword(password, existingPatient.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // login successful
    //const { password: _, ...patientData } = existingPatient.get({ plain: true });
    return res.status(200).json({
      message: "You are logged in successfully",
      patient: Patient.username,
    });
  
  } catch (err) {
    return res.status(500).json({
      message: "Login failed",
      error: err.message,
    });
  }
};