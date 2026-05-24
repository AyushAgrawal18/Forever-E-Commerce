# Forever E-Commerce 🛍️

A robust, full-stack e-commerce platform built with the MERN stack (MongoDB, Express, React, Node.js). This project includes a fully functional user-facing storefront, a secure administrative dashboard, and a highly scalable backend API.

## 🚀 Features

* **Modern Frontend:** Built with React & Vite for lightning-fast loading and smooth user experiences.
* **Admin Dashboard:** A dedicated portal for adding, managing, and tracking products and orders.
* **Secure Payments:** Fully integrated with **Stripe** and **Razorpay** to process live and test transactions securely.
* **Media Management:** Automatic image uploads and optimization powered by **Cloudinary**.
* **Cloud Database:** Data persistence managed through **MongoDB Atlas**.
* **Containerized Deployment:** Fully Dockerized architecture (multi-stage builds) ready for 1-click deployments to AWS EC2 or any other cloud provider.

---

## 🛠️ Tech Stack

**Client (Frontend & Admin)**
* React.js (Vite)
* Tailwind CSS
* React Router
* Axios
* Context API

**Server (Backend)**
* Node.js & Express.js
* MongoDB (Mongoose)
* JSON Web Tokens (JWT) for Authentication
* Stripe & Razorpay Node SDKs

**DevOps**
* Docker & Docker Compose
* Nginx (for serving static frontend builds)
* Amazon Web Services (EC2)

---

## 📂 Project Structure

The repository is structured into three main microservices:

```text
Forever-E-Commerce/
├── frontend/           # The main storefront for customers (React/Vite)
├── admin/              # The secure dashboard for shop managers (React/Vite)
├── backend/            # The RESTful API and business logic (Node/Express)
├── docker-compose.yml  # Root orchestration file for deployments
└── README.md
```

---

## 💻 Local Development Setup

To run this project locally on your machine, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/AyushAgrawal18/Forever-E-Commerce.git
cd Forever-E-Commerce
```

### 2. Install Dependencies
You will need to install the Node dependencies for all three folders. Open three separate terminal windows:
```bash
# Terminal 1: Backend
cd backend && npm install

# Terminal 2: Frontend
cd frontend && npm install

# Terminal 3: Admin
cd admin && npm install
```

### 3. Environment Variables
Create a `.env` file inside `frontend`, `admin`, and `backend`. 

**Backend (`backend/.env`)**
```env
JWT_SECRET="your_secret_key"
ADMIN_EMAIL="admin@example.com"
ADMIN_PASSWORD="your_password"
MONGODB_URI="your_mongodb_atlas_url"
CLOUDINARY_API_KEY="your_cloudinary_key"
CLOUDINARY_SECRET_KEY="your_cloudinary_secret"
CLOUDINARY_NAME="your_cloudinary_name"
STRIPE_SECRET_KEY="your_stripe_secret"
RAZORPAY_KEY_ID="your_razorpay_key_id"
RAZORPAY_KEY_SECRET="your_razorpay_key_secret"
```

**Frontend (`frontend/.env`) & Admin (`admin/.env`)**
```env
VITE_BACKEND_URL="http://localhost:4000"
VITE_RAZORPAY_KEY_ID="your_razorpay_key_id"
```

### 4. Start the Development Servers
Run these commands in their respective terminal windows:
```bash
# Backend
npm start

# Frontend & Admin
npm run dev
```

---

## 🐳 Docker Deployment (Production)

This project is fully configured for production deployment using Docker. 

1. Clone the repository on your production server (e.g., AWS EC2).
2. Manually recreate the `.env` files in the `frontend`, `backend`, and `admin` directories. *Make sure to change `VITE_BACKEND_URL` to your server's Public IP address.*
3. Run Docker Compose:

```bash
sudo docker compose up -d --build
```
This will spin up the backend API on port `4000`, the frontend website on port `80` (mapped to `5173`), and the admin panel on port `80` (mapped to `5174`).

---

## 🛡️ License & Copyright
This project is proprietary. All rights reserved.
