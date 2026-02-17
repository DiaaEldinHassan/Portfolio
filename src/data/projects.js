
import ecommerce from "../assets/ecommerce.png";

export const projects = [
  {
    title: "🌿 Smart Irrigation System – Flutter + Arduino + Firebase",
    description: "This project is a smart irrigation system built with Flutter for the mobile app frontend, Arduino for hardware control, and Firebase as the real-time backend. The system allows users to remotely monitor and control irrigation through an intuitive mobile interface.",
    image: "https://iotbusinessnews.com/WordPress/wp-content/uploads/2024/07/smart-irrigation-city.jpg",
    technologies: ["Flutter", "Dart", "Firebase", "Arduino", "IoT"],
    link: "https://github.com/DiaaEldinHassan/SIS",
    fallbackColor: "from-green-400 to-blue-500"
  },
  {
    title: "📝 Notes – Simple, Stylish, and Functional",
    description: "A full-stack notes/blog management application with user authentication, built with React and Node.js/Express.",
    image: "https://github.com/DiaaEldinHassan/Notes-App/blob/main/screenshots/dashboard.png",
    technologies: ["React", "Tailwind", "NodeJS", "Express", "JWT", "Google Authentication"],
    link: "https://github.com/DiaaEldinHassan/Notes-App.git",
    fallbackColor: "from-yellow-400 to-orange-500"
  },
  {
    title: "🌦️ Weather App – Real-Time Weather with JavaScript & EJS",
    description: "A responsive and dynamic weather application built using JavaScript, EJS (Embedded JavaScript Templates), and CSS, powered by a public Weather API.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
    technologies: ["Javascript", "EJS", "API", "NodeJs", "Express", "CSS"],
    link: "https://github.com/DiaaEldinHassan/Weather",
    fallbackColor: "from-blue-400 to-cyan-500"
  },
  {
    title: "🛒 E-Commerce Web Application",
    description: "A modern, fully responsive e-commerce web application built with React, React Router, and Tailwind CSS.",
    image: ecommerce,
    technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
    link: "https://e-commerce-gules-psi.vercel.app/",
    fallbackColor: "from-purple-400 to-pink-500"
  }
];