
export const tools = [
  // Frontend Tools
  {
    name: "VS Code",
    icon: "fa-solid fa-code",
    category: "Editor",
    description: "Primary code editor with extensions for React, Tailwind, and more"
  },
  {
    name: "Git",
    icon: "fa-brands fa-git-alt",
    category: "Version Control",
    description: "Version control for tracking changes and collaboration"
  },
  {
    name: "GitHub",
    icon: "fa-brands fa-github",
    category: "Version Control",
    description: "Hosting code repositories and managing projects"
  },
  {
    name: "Figma",
    icon: "fa-brands fa-figma",
    category: "Design",
    description: "Design and prototyping for UI/UX collaboration"
  },
  {
    name: "Chrome DevTools",
    icon: "fa-brands fa-chrome",
    category: "Debugging",
    description: "Debugging and optimizing web applications"
  },
  {
    name: "Postman",
    icon: "fa-solid fa-network-wired",
    category: "API Testing",
    description: "Testing and documenting REST APIs"
  },
  {
    name: "Terminal",
    icon: "fa-solid fa-terminal",
    category: "CLI",
    description: "Command line interface for development tasks"
  },
  {
    name: "npm/yarn",
    icon: "fa-brands fa-npm",
    category: "Package Manager",
    description: "Managing project dependencies and scripts"
  },
  {
    name: "Vite",
    icon: "fa-solid fa-bolt",
    category: "Build Tool",
    description: "Fast development server and build tool"
  },
  {
    name: "ESLint",
    icon: "fa-solid fa-check-double",
    category: "Linting",
    description: "Code quality and style checking"
  },
  {
    name: "Prettier",
    icon: "fa-solid fa-paint-roller",
    category: "Formatting",
    description: "Consistent code formatting"
  },
  {
    name: "React DevTools",
    icon: "fa-brands fa-react",
    category: "Debugging",
    description: "Debugging React component hierarchy"
  },
  
  // Backend Tools
  {
    name: "Node.js",
    icon: "fa-brands fa-node",
    category: "Runtime",
    description: "JavaScript runtime for building scalable server-side applications"
  },
  {
    name: "Express.js",
    icon: "fa-solid fa-server",
    category: "Framework",
    description: "Fast, unopinionated web framework for Node.js"
  },
  {
    name: "MongoDB",
    icon: "fa-solid fa-database",
    category: "Database",
    description: "NoSQL database for modern applications"
  },
  {
    name: "Mongoose",
    icon: "fa-solid fa-leaf",
    category: "ODM",
    description: "Elegant MongoDB object modeling for Node.js"
  },
  {
    name: "JWT",
    icon: "fa-solid fa-lock",
    category: "Authentication",
    description: "JSON Web Tokens for secure authentication"
  },
  {
    name: "Bcrypt",
    icon: "fa-solid fa-shield-halved",
    category: "Security",
    description: "Password hashing and encryption"
  },
  {
    name: "REST APIs",
    icon: "fa-solid fa-cloud",
    category: "API",
    description: "Building RESTful web services"
  },
  {
    name: "Joi",
    icon: "fa-solid fa-check-circle",
    category: "Validation",
    description: "Powerful schema validation for JavaScript"
  },
  {
    name: "Dotenv",
    icon: "fa-solid fa-gear",
    category: "Configuration",
    description: "Environment variable management"
  },
  {
    name: "CORS",
    icon: "fa-solid fa-globe",
    category: "Security",
    description: "Cross-Origin Resource Sharing middleware"
  },
  {
    name: "MySQL",
    icon: "fa-solid fa-table",
    category: "Database",
    description: "Relational database management system"
  },
  {
    name: "Firebase",
    icon: "fa-solid fa-fire",
    category: "Backend-as-a-Service",
    description: "Platform for building web and mobile applications"
  }
];

export const toolCategories = [
  "All",
  "Editor",
  "Version Control",
  "Design",
  "Debugging",
  "API Testing",
  "CLI",
  "Package Manager",
  "Build Tool",
  "Linting",
  "Formatting",
  "Runtime",
  "Framework",
  "Database",
  "ODM",
  "Authentication",
  "Security",
  "API",
  "Validation",
  "Configuration",
  "Development",
  "Logging",
  "Process Manager",
  "Containerization",
  "Caching",
  "Backend-as-a-Service",
  "Real-time",
  "Documentation",
  "Testing"
];

// Grouped by category for easier reference
export const toolsByCategory = {
  frontend: tools.filter(tool => 
    ["Editor", "Design", "Build Tool", "Linting", "Formatting"].includes(tool.category)
  ),
  backend: tools.filter(tool => 
    ["Runtime", "Framework", "Database", "ODM", "Authentication", "Security", 
     "API", "Validation", "Configuration", "Process Manager", "Containerization", 
     "Caching", "Backend-as-a-Service", "Real-time", "Logging"].includes(tool.category)
  ),
  devops: tools.filter(tool => 
    ["Version Control", "CLI", "Containerization", "Process Manager"].includes(tool.category)
  ),
  testing: tools.filter(tool => 
    ["Testing", "API Testing", "Debugging"].includes(tool.category)
  )
};

// Popular backend stack
export const backendStack = [
  "Node.js",
  "Express.js", 
  "MongoDB",
  "Mongoose",
  "JWT",
  "Bcrypt",
  "REST APIs",
  "Joi",
  "Socket.io",
  "Redis"
];

// Database tools
export const databaseTools = tools.filter(tool => 
  ["Database", "ODM", "Caching"].includes(tool.category)
);

// Authentication & Security tools
export const securityTools = tools.filter(tool => 
  ["Authentication", "Security", "Validation"].includes(tool.category)
);