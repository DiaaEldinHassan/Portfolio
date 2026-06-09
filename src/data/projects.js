import social from "../assets/Mock Social.png"
export const projects = [
  {
    title: "🍽️ Food Order - Full Stack Online Food Ordering App 🍽️",
    description:
      "A full-stack online food ordering platform built with **React 19**, **Express 5**, and **MongoDB**. Users can browse restaurants, order food, track deliveries, and manage their profile — with admin controls for restaurants and menu items.",
    image:
      "https://raw.githubusercontent.com/DiaaEldinHassan/Online-Food-Order-App/refs/heads/main/Screenshots/mainPage.png",
    technologies: [
      "nodejs",
      "express",
      "react",
      "mongodb",
      "tailwindcss",
      "s3",
      "aws",
      "jwt",
      "zod",
    ],
    link: "https://github.com/DiaaEldinHassan/Online-Food-Order-App.git",
    fallbackColor: "from-orange-400 to-white-500",
  },
  ,
  {
    title: "🛒 E-Commerce Web Application - A Full Stack App",
    description:
      "A full-stack e-commerce application built with a GraphQL + REST hybrid API, React, MongoDB, and AWS S3. It supports three user roles — Customer, Seller, and Admin — each with their own dedicated experience.",
    image: "https://github.com/DiaaEldinHassan/Ecommerce/blob/main/Screenshots/HomePage.png?raw=true",
    technologies: ["nodejs","graphql", "express", "reactjs", "s3", "multer", "tailwindcss"],
    link: "https://github.com/DiaaEldinHassan/Ecommerce.git",
    fallbackColor: "from-purple-400 to-pink-500",
  },
  ,
  {
    title: "💻 Social Media App - A Full Stack App",
    description:
      "A full-stack social media platform built with the MERN stack that allows users to connect, share posts, interact with others, and communicate in real time. The application provides a modern and responsive user experience with features inspired by popular social media platforms.",
    image: social,
    technologies: ["nodejs" ,"jwt", "express" ,"typescript", "mongodb", "reactjs", "mongoose", "aws-s3" ,"multer" ,"googleauth", "tailwindcss" ,"vite" ,"bcrypt", "zod", "socketio"],
    link: "https://github.com/DiaaEldinHassan/Social-Media-App.git",
    fallbackColor: "from-purple-400 to-pink-500",
  },
  {
    title: "💬 Sarahah Anonymous Messaging App – A Full Stack Web App",
    description:
      "A full-stack anonymous messaging application where users can receive honest, anonymous messages from anyone. Built with React on the frontend and Node.js/Express on the backend.",
    image:
      "https://raw.githubusercontent.com/DiaaEldinHassan/Anonymous-Messages/refs/heads/main/Screenshots/Landing%20Page.png",
    technologies: [
      "nodejs",
      "express",
      "react",
      "mongodb",
      "tailwindcss",
      "2fa",
    ],
    link: "https://github.com/DiaaEldinHassan/SIS",
    fallbackColor: "from-green-400 to-blue-500",
  },
  {
    title:
      "🌿 Smart Irrigation System – Flutter + Arduino + Firebase - Graduation Project",
    description:
      "This project is a smart irrigation system built with Flutter for the mobile app frontend, Arduino for hardware control, and Firebase as the real-time backend. The system allows users to remotely monitor and control irrigation through an intuitive mobile interface.",
    image:
      "https://iotbusinessnews.com/WordPress/wp-content/uploads/2024/07/smart-irrigation-city.jpg",
    technologies: ["Flutter", "Dart", "Firebase", "Arduino", "IoT"],
    link: "https://github.com/DiaaEldinHassan/SIS",
    fallbackColor: "from-green-400 to-blue-500",
  }
];
