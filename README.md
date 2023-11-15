# TechCareer Fullstack Bootcamp Final Project

## Screenshots

![Frontend App](./project-images/frontend.png)
![Backend Swagger UI](./project-images/backend-swagger.png)
![Backend H2DB](./project-images/backend-h2-db.png)

## Tech

#### Backend

---

- Java
- Java Spring Boot

#### Frontend

---

- React
- Typescript
- Bootstrap

## Get project on your local

```bash
git clone https://github.com/emretfn/TechCareerFullstackBootcamp
```

## Usage

##### How to run backend

```bash
#Locate to server folder
cd server

# Install maven dependencies
mvn clean install

# Run Java Spring Boot App
mvn spring-boot:run
```

You can run with Intellij IDE without this commands.

##### How to run frontend

```bash
#Locate to client folder
cd client

#Install dependencies
pnpm install

#Run client app
pnpm dev
```

After running the frontend and backend, the urls of the services are as follows:

```bash
#Frontend
http://localhost:5173
#Backend
http://localhost:5000
#Swagger Docs for backend
http://localhost:5000/swagger-ui.html
#H2DB for backend
http://localhost:5000/h2-console
```
