# 📝 Blog App (MERN Stack)

A full-stack **Blog Application** built with  the **MERN stack (MongoDB, Express, React, Node.js)**.  
Users can sign up, log in, and manage their blog posts. Admins can view all users.

---

## 🚀 Features
- **Authentication** (Signup / Login using JWT)
- **User**: Create, Read, Update, Delete (CRUD) blog posts
- **Admin**: View all users
- **Responsive UI** built with React
- **REST API** built with Express & MongoDB

---

## 📂 Project Structure
Blog-App/
│── blogapp-backend/ # Backend (Node.js, Express, MongoDB)
│ ├── models/ # Mongoose models
│ ├── routes/ # Express routes
│ ├── index.js # Entry point
│ └── .env # Environment variables
│
│── blogapp-frontend/ # Frontend (React)
│ ├── src/ # React components & pages
│ └── package.json
│
└── README.md

yaml
Copy code

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repo
```bash
git clone https://github.com/aswin24012004/Blog-App.git
cd Blog-App
2️⃣ Backend setup
bash
Copy code
cd blogapp-backend
npm install
Create a .env file in blogapp-backend/:

env
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
Run the backend:

bash
Copy code
npm start
3️⃣ Frontend setup
bash
Copy code
cd blogapp-frontend
npm install
npm start
🌐 API Endpoints
Method	Endpoint	Description
POST	/auth/signup	Register a new user
POST	/auth/login	Login user
GET	/notes	Get all notes (user)
POST	/notes	Create new note (user)
PUT	/notes/:id	Update a note (user)
DELETE	/notes/:id	Delete a note (user)
GET	/admin/users	Get all users (admin)

🛠️ Tech Stack
Frontend: React, Axios

Backend: Node.js, Express.js

Database: MongoDB, Mongoose

Authentication: JWT, bcryptjs

📸 Screenshots (Optional)
Add screenshots of your app UI here

🤝 Contributing
Contributions are welcome! Please open an issue or submit a pull request.

📜 License
This project is licensed under the MIT License.

yaml
Copy code

---

### 🚀 How to Add It
1. In your repo root (`Blog-App/`), create a file named `README.md`.
2. Copy–paste the above template.
3. Run:

```bash
git add README.md
git commit -m "Add README file"
git push origin main
