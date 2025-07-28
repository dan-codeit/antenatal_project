# 🩺 Antenatal App

A digital platform designed to assist expectant mothers and healthcare providers in managing antenatal (pregnancy) care. The system supports scheduling, tracking progress, monitoring key health metrics, and maintaining communication between patients and medical professionals.

---

## Features

### For Patients (Expectant Mothers)
- Register and manage antenatal profiles
- Track pregnancy stages and appointments
- Receive reminders for check-ups, supplements, and scans
- View personalized health tips and educational content

### For Healthcare Providers
- Manage patient records and visit notes
- Create, reschedule, and view appointments
- Send reminders and messages to patients
- Monitor risk factors and high-risk pregnancies

###  Admin Panel
- Manage user roles (patients, providers, staff)
- View platform activity and metrics
- Configure health tips, risk alerts, and reminders

---

## Tech Stack

- **Node.js** + **Express** – Backend API
- **PostgreSQL** – Relational database
- **JWT / bcrypt** – Secure authentication
- **Multer / Cloudinary** – For file uploads (e.g. medical records, scans)
- **Swagger** – API documentation

---

## Setup Instructions

```bash
# Clone the repository
git clone https://github.com/dan-codeit/antenatal_project.git
cd antenatal_project

# Create your environment file
cp .env.example .env

# Install dependencies
npm install

# Start development server
npm run dev
```
