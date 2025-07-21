# 🐾 Pet Center Frontend

This is the **frontend part** of the Pet Center web application — a modern, stylish, and responsive React-based interface that helps users find pets, learn more about shelters, and contact the team. It integrates with a FastAPI backend and supports full mobile responsiveness and dark/light theme switching.

---

## 🚀 Features

- 🔒 **Authentication** — Register and login pages with token-based storage.
- 🐶 **Catalog** — Paginated and filterable list of available pets with photos and age/breed info.
- 🎨 **Theme Toggle** — Light and dark mode using localStorage and system preference.
- 📰 **Home Page** — Animated sections, counts of pets, and news updates.
- 🧑‍💻 **About Page** — Describes the creators, their roles, and the mission.
- 📍 **Contact Us** — Includes a real-time map (via Leaflet), a feedback form, and social links.
- 📱 **Responsive Design** — Optimized for desktop, tablet, and mobile screens.

---

## 📸 Design: 

- [pet_center_design](https://www.figma.com/design/PmlZ2Dng1UYf5BVwiAGxUT/Pet-Shelter?node-id=9-2418&t=Gs9IR8RzjIPzbzkL-1)

---

## 📁 Folder Structure

```
frontend/
├── assets/
│   ├── home/
│   ├── about/
│   ├── footer/
├── components/
├── pages/
│   ├── HomePage.jsx
│   ├── Catalog.jsx
│   ├── About.jsx
│   ├── Contacts.jsx
│   ├── Login.jsx
│   ├── Register.jsx
├── App.jsx
├── index.js
├── styles/
│   ├── home.css
│   ├── catalog.css
│   ├── about.css
│   ├── contacts.css
│   ├── login.css
│   ├── register.css
```

---

## 🧰 Technologies Used

- **React.js** (with Hooks)
- **React Router**
- **Leaflet** for mapping
- **use-local-storage** for persistent theme
- **CSS3** with transitions & animations
- **FastAPI backend** (not included in this repo)

---

## 🛠 Setup Instructions

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run start
```

Make sure the **FastAPI backend** is running at `http://localhost:5000/swagger` for full functionality.

---

## 👤 Authors

- **Alans Arzumanjans**
- **Mark Korobkin**

Project created for fun, practice, and possibly future use in shelters ❤️
