# 📚 Book Library Kubernetes Project

A full-stack **Book Library Dashboard** deployed using **Docker** and **Kubernetes**.

This project demonstrates how to containerize a web application and deploy it on Kubernetes with a production-style architecture including frontend, backend API, and PostgreSQL database.

---

# 🚀 Features

* Add books
* View books
* Edit books
* Delete books
* PostgreSQL database
* Docker containerization
* Kubernetes deployment
* LoadBalancer service for external access
* Reverse proxy using NGINX

---

# 🏗 Architecture

User → LoadBalancer → Frontend (NGINX) → Backend API → PostgreSQL Database

```
Browser
   │
   ▼
LoadBalancer Service
   │
   ▼
Frontend (NGINX)
   │
   ▼
Backend API
   │
   ▼
PostgreSQL Database
```

---

# 🛠 Technologies Used

* Docker
* Kubernetes
* Node.js
* Express.js
* PostgreSQL
* NGINX
* HTML / JavaScript

---

# 📁 Project Structure

```
book-library-kubernetes
│
├── frontend
│   ├── index.html
│   ├── nginx.conf
│   └── Dockerfile
│
├── backend
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
│
├── database
│   ├── init.sql
│   └── Dockerfile
│
├── k8s
│   ├── postdep.yaml
│   ├── postsvc.yaml
│   ├── apideb.yaml
│   ├── apisvc.yaml
│   ├── pj-configmap.yaml
│   ├── dbsecret.yaml
│   ├── postpvc.yaml
│   ├── postsc.yaml
│   ├── frontend-deployment.yaml
│   └── frontend-service.yaml
│
└── README.md
```

---

# ⚙️ Build Docker Images

Run the following commands:

```bash
docker build -t YOUR_DOCKER_USERNAME/book-frontend ./frontend
docker build -t YOUR_DOCKER_USERNAME/book-backend ./backend
docker build -t YOUR_DOCKER_USERNAME/book-database ./database
```

---

# 📤 Push Images to DockerHub

```bash
docker push YOUR_DOCKER_USERNAME/book-frontend
docker push YOUR_DOCKER_USERNAME/book-backend
docker push YOUR_DOCKER_USERNAME/book-database
```

---

# ☸ Deploy to Kubernetes

Apply Kubernetes manifests:

```bash
kubectl apply -f k8s/
```

Check resources:

```bash
kubectl get pods
kubectl get svc
```

---



# 📸 Application Screenshot




![image alt](https://github.com/Yousuf-Almathehaji/book-library-kubernetes/blob/32c318f40188418b95c85817c7cfd822e5d98533/app.PNG)


---

# 🎯 Project Goals

This project demonstrates practical DevOps skills including:

* Containerizing applications
* Deploying microservices on Kubernetes
* Managing services and networking
* Implementing reverse proxy architecture
* Working with persistent databases

---

# 👨‍💻 Author

Yousuf

DevOps & Cloud Enthusiast
