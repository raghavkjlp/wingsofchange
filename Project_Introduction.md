# Wings of Change — NGO Portal

## 1. Introduction

**Wings of Change** is a full-stack web portal developed for the **Sardar Kartar Singh Jhabbar Trust (SKSJT)**, a non-governmental organization dedicated to empowering underprivileged students through education, mentorship, and financial support. The portal serves as a unified digital platform that bridges the gap between the NGO's administration, deserving students seeking assistance, and generous donors willing to contribute to the cause.

The project addresses a critical need for transparency and efficiency in NGO operations. Traditionally, student applications, donation tracking, and result management were handled through manual, paper-based processes — leading to delays, data inconsistencies, and a lack of real-time visibility for stakeholders. The Wings of Change portal digitizes and automates these workflows, enabling the trust to operate with greater accountability and reach.

### Purpose & Scope

The portal is designed to serve three distinct user roles:

- **Students** — Can register, apply for scholarships by uploading supporting documents (Aadhaar, marksheet, report card, etc.), and check their application status and exam results online.
- **Donors** — Can make secure donations, leave messages of encouragement, and receive acknowledgment for their contributions.
- **Administrators** — Can review and process student applications, manage active student records, track donations, bulk-upload exam results and active student lists via Excel files, and oversee the entire workflow from a centralized dashboard.

### Key Features

- **Student Application System** — Online registration and document upload for scholarship applicants with status tracking (Pending / Shortlisted / Selected).
- **Donation Management** — Secure donation collection with donor details, amounts, and messages.
- **Admin Dashboard** — Centralized control panel for managing students, donors, active students, and exam results.
- **Bulk Data Upload** — Excel-based bulk upload for exam results and active student lists, powered by the `xlsx` library.
- **AI Chatbot** — An OpenAI GPT-4o-mini powered chatbot that answers queries about the NGO's activities, donation process, volunteering, events, and mission.
- **Exam Results Portal** — Public-facing results page where students can look up their exam scores and status.
- **Active Students Directory** — A publicly accessible list of currently supported students.
- **Authentication & Authorization** — JWT-based secure login with role-based access control (Student / Donor / Admin) and bcrypt password hashing.

### Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 19, React Router v7, Bootstrap 5, React-Bootstrap, Axios, AOS (Animate on Scroll), EmailJS, React Icons |
| **Backend** | Node.js, Express 5, Mongoose 8, MongoDB |
| **Build Tool** | Vite 6 |
| **Authentication** | JWT (JSON Web Tokens), bcryptjs |
| **File Handling** | Multer (uploads), Cloudinary (cloud storage), XLSX (Excel parsing) |
| **AI Integration** | OpenAI GPT-4o-mini API |
| **Deployment** | Netlify (Frontend), Node.js hosting (Backend) |

### System Architecture

The application follows a **client-server architecture** with a clear separation of concerns. The React-based frontend communicates with the Express REST API through Axios HTTP calls. The backend exposes RESTful endpoints under `/api/auth`, `/api/students`, `/api/admin`, `/api/donations`, and `/api` (public routes). MongoDB serves as the persistent data store with Mongoose ODM for schema modeling. File uploads are handled via Multer and stored on Cloudinary. The AI chatbot endpoint (`/chat`) integrates with the OpenAI API to provide contextual responses about the NGO.

### Project Significance

This project demonstrates the practical application of modern web technologies to solve real-world social challenges. By digitizing the operations of the SKSJT Trust, the portal not only improves administrative efficiency but also enhances transparency and trust — key factors that encourage more donors to contribute and more students to seek assistance. The integration of an AI chatbot further modernizes the user experience, providing instant answers to visitor queries and reducing the burden on NGO staff.

In summary, **Wings of Change** represents a meaningful convergence of technology and social impact — a digital tool that empowers an NGO to scale its mission of educational empowerment.
