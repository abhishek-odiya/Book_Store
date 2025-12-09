# 📚 Book Store Web Application

A simple and clean Full Stack MERN project that allows users to add, view, update, and delete books. The project includes a responsive frontend built with React + Vite and a backend built with Node.js, Express, and MongoDB.

## 🚀 Features

### ✅ Frontend
* Add new books with:
   * Book Name
   * Book Title
   * Author
   * Selling Price
   * Publish Date
* Clean and responsive UI
* Table view for all added books
* Edit & delete actions with icons
* Axios used for API communication
* Deployed using Render / Vercel

### ✅ Backend
* REST API built using Node.js + Express
* MongoDB Database for storing books
* CRUD operations:
   * Create book
   * Get all books
   * Update book
   * Delete book
* Secure CORS configuration
* Fully deployed on Render

## 🛠️ Tech Stack

### Frontend
* React.js (Vite)
* Axios
* CSS (Custom UI Styling)
* React Icons

### Backend
* Node.js
* Express.js
* MongoDB (Mongoose)

## 📂 Folder Structure

```
Book_Store/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home.jsx
│   │   │   ├── Navbar.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── controller/
│   │   └── book.controller.js
│   ├── model/
│   │   └── book.model.js
│   ├── routes/
│   │   └── book.routes.js
│   ├── database.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
└── README.md
  
```

## 🔧 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/abhishek-odiya/Book_Store.git
cd Book_Store
```

### ▶️ Backend Setup

**Install backend dependencies**

```bash
cd backend
npm install
```

**Add environment variables (`.env`)**

```env
MONGO_URL=your_mongodb_connection_string
PORT=8000
```

**Run backend**

```bash
npm start
```

Backend will run on:
```
http://localhost:8000
```

### 🎨 Frontend Setup

**Install frontend dependencies**

```bash
cd frontend
npm install
```

**Run frontend**

```bash
npm run dev
```

Frontend will run on:
```
http://localhost:5173
```

## 🌐 Deployment

### Frontend Deployed On:
Render / Vercel

**Publish Directory:**
```
frontend/dist
```

**Build Command:**
```bash
cd frontend && npm install && npm run build
```

### Backend Hosted On:
Render

**Base URL example:**
```
https://book-store-2kj6.onrender.com/book
```

## 👨‍💻 Author

**Abhishek Odiya**
* GitHub: [@abhishek-odiya](https://github.com/abhishek-odiya)

---

⭐ Don't forget to star this repo if you found it helpful!
