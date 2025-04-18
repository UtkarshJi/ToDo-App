# 📝 Full Stack ToDo App

A simple and modern full-stack ToDo list application built using **React (Vite)** for the frontend and **Spring Boot** for the backend, with PostgreSQL as the database.

## 🚀 Features

- Add, view, and delete tasks
- Responsive and user-friendly interface
- RESTful API integration
- PostgreSQL backend storage
- Deployed frontend on [Vercel](https://vercel.com)
- Backend deployment-ready for platforms like Heroku, Render, or Railway

---

## 📁 Project Structure

```
TodoApp/
│
├── backend/            # Spring Boot backend (Java + PostgreSQL)
│   └── src/            # Java source files
│
├── frontend/           # React frontend using Vite
│   └── src/            # React components and hooks
│
├── .gitignore          # Git ignored files
├── README.md           # This file
└── ...
```

---

## ⚙️ Technologies Used

### Frontend
- React (Vite)
- Axios
- Tailwind CSS (optional, if used)
- Vercel (for deployment)

### Backend
- Spring Boot
- Spring Web
- Spring Data JPA
- PostgreSQL
- Maven
- Heroku / Render (for deployment)

---

## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd TodoApp
```

### 2. Backend Setup

```bash
cd backend
```

- Make sure PostgreSQL is installed and running.
- Configure your database credentials in `application.properties`.

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/todo_db
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

- Build and run the backend:

```bash
./mvnw spring-boot:run
```

Your backend should now be running on `http://localhost:8080`.

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

Your frontend will run on `http://localhost:5173`.

---

## 🌍 Deployment

### Frontend

The frontend is deployed on Vercel.

🔗 [Live Demo](https://your-vercel-app-url.vercel.app)

### Backend

Deploy your Spring Boot app on:

- [Heroku](https://heroku.com)
- [Render](https://render.com)
- [Railway](https://railway.app)

Update the frontend `.env` to point to your live backend:

```env
REACT_APP_API_URL=https://your-live-backend-url.com
```

---

## 📬 API Endpoints

| Method | Endpoint       | Description        |
|--------|----------------|--------------------|
| GET    | `/api/todos`   | Fetch all todos    |
| POST   | `/api/todos`   | Add new todo       |
| DELETE | `/api/todos/{id}` | Delete a todo by ID |

---

## 💻 Screenshots

> *(Add screenshots here)*

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss what you would like to change.

---

## 🙌 Acknowledgements

Thanks to Spring Boot, React, and the open source community.

---