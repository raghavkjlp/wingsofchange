# Wings of Change — System Specification

## 1. System Overview

The Wings of Change portal is a web-based application following a **client-server architecture**. Users access the system through a web browser (frontend), which communicates with a backend server over HTTP/HTTPS. The backend connects to a MongoDB database for persistent storage and to external services (Cloudinary, OpenAI, EmailJS) for file storage, AI responses, and email delivery.

---

## 2. System Architecture

```
┌──────────────┐       HTTP/HTTPS        ┌──────────────┐       ┌──────────────┐
│              │  ──────────────────►     │              │       │              │
│   Frontend   │  ◄──────────────────    │   Backend    │──────►│   MongoDB    │
│  (React +    │       Axios             │  (Node.js +  │       │  Database    │
│   Vite)      │                         │   Express)   │       │              │
│              │                         │              │       └──────────────┘
└──────────────┘                         │              │
                                         │              │──────► Cloudinary (File Storage)
                                         │              │
                                         │              │──────► OpenAI API (Chatbot)
                                         │              │
                                         │              │──────► EmailJS (Contact Form)
                                         └──────────────┘
```

---

## 3. Hardware Requirements

### 3.1 Development Machine

| Component | Minimum Requirement |
|---|---|
| **Processor** | Intel Core i3 / AMD Ryzen 3 or equivalent |
| **RAM** | 4 GB minimum (8 GB recommended) |
| **Hard Disk** | 10 GB free space (for Node.js, dependencies, and project files) |
| **Internet** | Required (for npm install, API calls, and Cloudinary uploads) |

### 3.2 Production Server (Backend Hosting)

| Component | Minimum Requirement |
|---|---|
| **Processor** | 1 vCPU |
| **RAM** | 512 MB minimum (1 GB recommended) |
| **Hard Disk** | 1 GB free space |
| **Internet** | Required (continuous, with public IP or domain) |

### 3.3 Frontend Hosting

- Hosted on **Netlify** (cloud-based CDN) — no dedicated server hardware required.
- Netlify handles build, CDN distribution, and SSL automatically.

---

## 4. Software Requirements

### 4.1 Development Environment

| Software | Version | Purpose |
|---|---|---|
| **Operating System** | Windows 10/11, macOS 12+, or Ubuntu 20.04+ | Development platform |
| **Node.js** | v18.x or later | JavaScript runtime for both frontend and backend |
| **npm** | v9.x or later (comes with Node.js) | Package manager |
| **Git** | v2.x or later | Version control |
| **Code Editor** | VS Code (recommended) | Source code editing |
| **Web Browser** | Chrome / Firefox / Edge / Safari (latest) | Testing the frontend |

### 4.2 Frontend Stack

| Software / Library | Version | Purpose |
|---|---|---|
| **React** | v19.0.0 | UI framework |
| **React DOM** | v19.0.0 | DOM rendering |
| **React Router DOM** | v7.9.1 | Client-side routing |
| **Vite** | v6.2.0 | Build tool and dev server |
| **Bootstrap** | v5.3.8 | CSS framework for responsive UI |
| **React-Bootstrap** | v2.10.10 | Bootstrap components for React |
| **Axios** | v1.12.2 | HTTP client for API calls |
| **AOS** | v2.3.4 | Scroll animations |
| **EmailJS Browser** | v4.4.1 | Contact form email delivery |
| **OpenAI** | v6.21.0 | AI chatbot integration (frontend) |
| **React Icons** | v5.5.0 | Icon library |
| **React Google reCAPTCHA** | v3.1.0 | Spam prevention on forms |

### 4.3 Backend Stack

| Software / Library | Version | Purpose |
|---|---|---|
| **Express** | v5.1.0 | Web framework / REST API server |
| **Mongoose** | v8.18.1 | MongoDB ODM for data modeling |
| **bcryptjs** | v3.0.2 | Password hashing |
| **jsonwebtoken** | v9.0.2 | JWT token generation and verification |
| **Multer** | v2.0.2 | File upload handling |
| **Cloudinary** | v2.7.0 | Cloud file storage for uploaded documents |
| **xlsx** | v0.18.5 | Excel file parsing for bulk uploads |
| **csv-parser** | v3.2.0 | CSV file parsing |
| **OpenAI** | v6.21.0 | AI chatbot integration (backend) |
| **dotenv** | v17.2.2 | Environment variable management |
| **cors** | v2.8.5 | Cross-origin request handling |
| **nodemon** | v3.1.10 (dev) | Auto-restart server during development |

### 4.4 Database

| Software | Version | Purpose |
|---|---|---|
| **MongoDB** | v6.0+ (Atlas or local) | Primary database for all application data |

**Collections:**
- `users` — name, email, hashed password, role (student/donator/admin)
- `students` — name, email, education, documents (Cloudinary URLs), status
- `activestudents` — name, fathername, mobile, class, school
- `donations` — name, email, contact, address, gender, amount, message
- `results` — name, exam, score, status

---

## 5. External Services

| Service | Purpose | Required Key |
|---|---|---|
| **MongoDB Atlas** | Cloud-hosted MongoDB database | Connection URI |
| **Cloudinary** | Cloud storage for student documents and images | Cloud name, API key, API secret |
| **OpenAI API** | GPT-4o-mini chatbot responses | API key |
| **EmailJS** | Sending contact form emails | Public key, service ID, template ID |
| **Google reCAPTCHA** | Spam prevention on forms | Site key, secret key |
| **Netlify** | Frontend hosting and CDN | No key needed (connected via Git) |

---

## 6. Network Requirements

| Requirement | Detail |
|---|---|
| **Protocol** | HTTP/HTTPS |
| **Frontend Port** | 5173 (Vite dev server) / 443 (Netlify production) |
| **Backend Port** | 5000 (default, configurable via `PORT` env variable) |
| **CORS** | Backend allows requests only from authorized origins |
| **SSL** | Required in production (Netlify provides auto SSL; backend should use HTTPS) |

---

## 7. Environment Configuration

All sensitive configuration is managed through `.env` files (never committed to version control).

### Backend `.env`

```
PORT=5000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/ngo_portal
JWT_SECRET=<your_jwt_secret>
CLOUDINARY_CLOUD_NAME=<cloud_name>
CLOUDINARY_API_KEY=<api_key>
CLOUDINARY_API_SECRET=<api_secret>
OPENAI_API_KEY=<openai_key>
```

### Frontend `.env`

```
VITE_RECAPTCHA_SITE_KEY=<recaptcha_site_key>
VITE_EMAILJS_PUBLIC_KEY=<emailjs_public_key>
VITE_EMAILJS_SERVICE_ID=<emailjs_service_id>
VITE_EMAILJS_TEMPLATE_ID=<emailjs_template_id>
```

---

## 8. Deployment Summary

| Component | Platform | Method |
|---|---|---|
| **Frontend** | Netlify | Auto-deploy from Git repository; `vite build` produces static files |
| **Backend** | Node.js hosting (e.g., Railway, Render, VPS) | `node server.js` or `npm start` |
| **Database** | MongoDB Atlas | Cloud-managed MongoDB cluster |
| **File Storage** | Cloudinary | Cloud-based, no local disk dependency |
