# 📷 Secure Photo Metadata Reader

A lightweight **Spring Boot + Svelte** app that lets users upload a JPEG photo and view its **EXIF metadata** — including a preview of the image, an interactive map if location data exists, and a nicely formatted data table.

---

## 🚀 Features

- 🔐 Secure file type and size validation
- 📷 Displays uploaded JPEG image
- 🗺 Shows a map if GPS coordinates are available
- 📊 Renders all EXIF metadata in a responsive, striped table
- 🧼 Clean Svelte UI bundled into the Spring Boot JAR

---

## 🛠 Tech Stack

- **Backend**: Java 17, Spring Boot (embedded Tomcat)
- **Frontend**: Svelte + Vite
- **Build**: Maven, Docker

---

## 📦 Build & Run Instructions

### 🎨 Build Svelte Frontend

```bash
cd svelte-frontend
npm install
npm run build

# Copy static files into Spring Boot resources
cp -r dist/* ../src/main/resources/static/
```

### 🧰 Build Spring Boot App

```bash
# Compile and package the app
mvn clean package
```
### 🐳 Build & Run Docker Container

```bash
docker build -t spring-app .
docker run -p 8080:8080 spring-app
```

# 🌐 Usage

- Go to http://localhost:8080

- Upload a .jpg or .jpeg file

- View:

    - ✅ Your uploaded photo

    - 🌍 A map if GPS EXIF data is found

    - 🧾 All EXIF metadata in a clean table