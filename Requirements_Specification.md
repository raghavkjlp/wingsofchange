# Wings of Change — Software Requirements Specification

## Functional Requirements

### FR-1: User Authentication & Authorization

| ID | Requirement |
|---|---|
| FR-1.1 | The system shall allow users to register with name, email, password, and role (Student / Donor / Admin). |
| FR-1.2 | The system shall allow registered users to log in using email and password. |
| FR-1.3 | The system shall hash passwords using bcrypt before storing them in the database. |
| FR-1.4 | The system shall issue a JWT token upon successful login for session management. |
| FR-1.5 | The system shall enforce role-based access control — Students, Donors, and Admins shall access only their authorized features. |
| FR-1.6 | The system shall prevent unauthenticated users from accessing protected routes. |

---

### FR-2: Student Application Management

| ID | Requirement |
|---|---|
| FR-2.1 | The system shall allow students to submit scholarship applications online. |
| FR-2.2 | The system shall allow students to upload supporting documents (Aadhaar, report card, marksheet, granthi proof, parent Aadhaar, CV). |
| FR-2.3 | The system shall store uploaded documents on Cloudinary cloud storage. |
| FR-2.4 | The system shall assign a default status of "Pending" to every new application. |
| FR-2.5 | The system shall allow administrators to update student status to "Shortlisted" or "Selected". |
| FR-2.6 | The system shall automatically add a student to the Active Student list when their status is updated to "Shortlisted" or "Selected". |
| FR-2.7 | The system shall prevent duplicate entries in the Active Student list. |

---

### FR-3: Donation Management

| ID | Requirement |
|---|---|
| FR-3.1 | The system shall allow donors to submit donations with name, email, contact, address, gender, amount, and message. |
| FR-3.2 | The system shall record the timestamp of each donation. |
| FR-3.3 | The system shall allow administrators to view all donation records. |
| FR-3.4 | The system shall allow administrators to delete donation records. |

---

### FR-4: Admin Dashboard

| ID | Requirement |
|---|---|
| FR-4.1 | The system shall provide a centralized admin dashboard accessible only to users with the Admin role. |
| FR-4.2 | The system shall display all student applications with their current status on the dashboard. |
| FR-4.3 | The system shall allow admins to update student application statuses. |
| FR-4.4 | The system shall display all donation records on the dashboard. |
| FR-4.5 | The system shall allow admins to delete donation records from the dashboard. |
| FR-4.6 | The system shall display the list of active students on the dashboard. |
| FR-4.7 | The system shall allow admins to delete active student records. |

---

### FR-5: Bulk Data Upload

| ID | Requirement |
|---|---|
| FR-5.1 | The system shall allow administrators to upload an Excel (.xlsx) file containing bulk exam results. |
| FR-5.2 | The system shall parse the Excel file and extract fields: name, exam, score, and status. |
| FR-5.3 | The system shall skip rows with missing required fields (name, exam, score) during bulk upload. |
| FR-5.4 | The system shall allow administrators to upload an Excel file containing bulk active student records. |
| FR-5.5 | The system shall parse the Excel file and extract fields: name, fathername, mobile, class, and school. |
| FR-5.6 | The system shall skip rows with missing name field during active student bulk upload. |
| FR-5.7 | The system shall report the count of successfully uploaded records after each bulk operation. |

---

### FR-6: Exam Results Portal

| ID | Requirement |
|---|---|
| FR-6.1 | The system shall provide a public-facing page where students can view exam results. |
| FR-6.2 | The system shall display result details including name, exam, score, and status. |

---

### FR-7: Active Students Directory

| ID | Requirement |
|---|---|
| FR-7.1 | The system shall provide a public-facing page listing all currently active students. |
| FR-7.2 | The system shall display student details including name, father's name, mobile, class, and school. |
| FR-7.3 | The system shall allow administrators to manually add individual active students. |

---

### FR-8: AI Chatbot

| ID | Requirement |
|---|---|
| FR-8.1 | The system shall provide an AI-powered chatbot interface on the website. |
| FR-8.2 | The system shall use OpenAI GPT-4o-mini to generate responses to user queries. |
| FR-8.3 | The chatbot shall only answer questions related to NGO activities, donation process, volunteering, events, and mission. |
| FR-8.4 | The system shall return an error message if the AI service is unavailable. |

---

### FR-9: Contact & Communication

| ID | Requirement |
|---|---|
| FR-9.1 | The system shall provide a contact form for visitors to send messages. |
| FR-9.2 | The system shall send contact form submissions via EmailJS to the NGO's email. |
| FR-9.3 | The system shall implement Google reCAPTCHA to prevent spam submissions. |

---

## Non-Functional Requirements

### NFR-1: Performance

| ID | Requirement |
|---|---|
| NFR-1.1 | The system shall load the homepage within 3 seconds under normal network conditions. |
| NFR-1.2 | API responses shall return within 2 seconds for standard CRUD operations. |
| NFR-1.3 | Bulk upload of up to 500 records shall complete within 10 seconds. |
| NFR-1.4 | The AI chatbot shall respond within 5 seconds of a user query. |

---

### NFR-2: Security

| ID | Requirement |
|---|---|
| NFR-2.1 | All passwords shall be hashed using bcrypt with a salt round of 10 before database storage. |
| NFR-2.2 | Authentication tokens shall be implemented using JWT with appropriate expiration. |
| NFR-2.3 | API endpoints shall enforce CORS, allowing requests only from authorized origins. |
| NFR-2.4 | File uploads shall be validated for type and size before processing. |
| NFR-2.5 | Sensitive environment variables (API keys, database URIs, JWT secrets) shall not be hardcoded and shall be stored in `.env` files. |
| NFR-2.6 | The system shall use HTTPS for all client-server communication in production. |
| NFR-2.7 | Google reCAPTCHA shall be implemented on public forms to prevent automated abuse. |

---

### NFR-3: Scalability

| ID | Requirement |
|---|---|
| NFR-3.1 | The system shall be designed with a stateless backend to support horizontal scaling. |
| NFR-3.2 | The database (MongoDB) shall support indexing on frequently queried fields (email, status) for performance at scale. |
| NFR-3.3 | File storage shall use Cloudinary (cloud-based) rather than local disk to support distributed deployments. |

---

### NFR-4: Usability

| ID | Requirement |
|---|---|
| NFR-4.1 | The UI shall be responsive and functional on desktop, tablet, and mobile screen sizes using Bootstrap 5. |
| NFR-4.2 | The system shall provide visual feedback (animations via AOS library) to enhance user experience. |
| NFR-4.3 | Navigation shall be consistent across all pages via a shared Navbar component. |
| NFR-4.4 | Error messages shall be clear and user-friendly, not exposing technical stack details. |

---

### NFR-5: Reliability & Availability

| ID | Requirement |
|---|---|
| NFR-5.1 | The frontend shall be deployed on Netlify with CDN-backed availability of 99.9%. |
| NFR-5.2 | The system shall gracefully handle API failures with appropriate error messages to the user. |
| NFR-5.3 | Database connections shall be managed with Mongoose connection pooling for reliability. |

---

### NFR-6: Maintainability

| ID | Requirement |
|---|---|
| NFR-6.1 | The codebase shall follow a modular architecture with separate folders for models, controllers, routes, and middleware. |
| NFR-6.2 | The frontend shall follow a component-based architecture with reusable components (Navbar, Footer, Hero). |
| NFR-6.3 | Environment-specific configuration shall be managed through `.env` files, not source code. |
| NFR-6.4 | The project shall use ESLint for consistent code style enforcement. |

---

### NFR-7: Compatibility

| ID | Requirement |
|---|---|
| NFR-7.1 | The frontend shall be compatible with the latest versions of Chrome, Firefox, Safari, and Edge. |
| NFR-7.2 | The REST API shall follow standard HTTP conventions, enabling integration with any HTTP client. |
| NFR-7.3 | The system shall support Excel files in `.xlsx` format for bulk upload functionality. |
