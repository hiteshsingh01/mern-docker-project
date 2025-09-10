# MERN Docker Project

A full-stack MERN (MongoDB, Express, React, Node.js) application fully containerized with Docker and Docker Compose for easy development and deployment.

---

## 🛠️ Technologies Used

- **Frontend:** React  
- **Backend:** Node.js + Express  
- **Database:** MongoDB, PostgreSQL, MySQL  
- **Containerization:** Docker, Docker Compose  
- **Web Server:** Nginx (for serving frontend static files)  

---

## 📁 Project Structure

```

mern-docker-project/
├── backend/             # Node.js + Express backend
│   ├── index.js
│   └── package.json
├── frontend/            # React frontend
│   ├── public/
│   ├── src/
│   └── package.json
├── mongo-init/          # MongoDB initialization scripts
├── docker-compose.yml   # Docker Compose configuration
├── Dockerfile           # Dockerfile for backend or frontend
└── .gitignore           # Git ignore file

````

---

## ⚡ Setup & Run

### 1️⃣ Clone Repository
```bash
git clone https://github.com/hiteshsingh01/mern-docker-project.git
cd mern-docker-project
````

### 2️⃣ Add Environment Variables

Create a `.env` file in the root or backend folder (do **not** commit this file):

```env
# MongoDB
MONGO_URI=mongodb://username:password@mongo:27017/mydb?authSource=admin

# PostgreSQL
PGHOST=postgres
PGUSER=pguser
PGPASSWORD=pgpassword
PGDATABASE=mydb

# MySQL
MYSQL_HOST=mysql
MYSQL_USER=mysqluser
MYSQL_PASSWORD=mysql_password
MYSQL_DATABASE=mydb
```

### 3️⃣ Build and Run with Docker

```bash
docker compose up -d --build
```

* Frontend: [http://localhost:3010](http://localhost:3010)
* Backend API: [http://localhost:8900](http://localhost:8900)

### 4️⃣ Stop Containers

```bash
docker compose down
```

---

## 🧪 Testing Backend API

* Use **Postman** or **Insomnia** to test API endpoints
* Example: `GET http://localhost:8900/api/test`

---

## ⚠️ Notes

* **Do not push `.env` file** to GitHub
* If credentials are leaked, **rotate passwords immediately**
* Ensure Docker is installed and running on your machine

---

## ✅ Author

* **Hitesh Singh**
* GitHub: [hiteshsingh01](https://github.com/hiteshsingh01)

````
