# 🏠 Airbnb Clone — Full-Stack Web Application
A full-stack Airbnb-inspired web application built using Node.js, Express.js, MongoDB and EJS. The project demonstrates practical implementation of CRUD operations, MVC architecture, database integration, middleware, image uploads and dynamic web pages.

## 🚀 Project Overview
This project is a web-based property listing application where users can browse property listings and manage listing-related information.

The application follows an MVC-style architecture with separate routes, controllers, models and views, providing a structured and maintainable approach to full-stack development.

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript, EJS, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, MongoDB Atlas, Mongoose
- **Other:** Git, GitHub, Cloudinary, Multer, Joi, Render

## ✨ Features
- 🏠 Browse property listings
- 🔍 View detailed property information
- ➕ Create new listings
- ✏️ Edit existing listings
- 🗑️ Delete listings
- 📷 Upload property images
- 🗄️ MongoDB database integration
- 🔄 CRUD operations
- 🌐 Dynamic pages using EJS
- 🛡️ Data validation and middleware
- ☁️ Cloud-based image storage
- 🚀 Deployment-ready configuration

## 📂 Project Structure
Airbnb-clone_site/
│
├── controllers/       # Application business logic
├── init/              # Initial/sample data
├── models/            # Mongoose data models
├── public/            # CSS, JavaScript and static files
├── routes/            # Application routes
├── uploads/           # Uploaded files/images
├── utils/             # Utility/helper functions
├── views/             # EJS templates
│
├── app.js             # Main application file
├── cloudconfig.js     # Cloud service configuration
├── middleware.js      # Custom middleware
├── schema.js          # Data validation schema
├── package.json       # Project dependencies and scripts
└── README.md


⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/p-k2/Airbnb-clone_site.git
2. Navigate to the project
cd Airbnb-clone_site
3. Install dependencies
npm install
4. Configure Environment Variables

Create a .env file and add the required configuration for MongoDB, cloud storage and application secrets.

MONGO_URL=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
SECRET=your_session_secret

Note: Never upload passwords, API keys, database credentials or other sensitive information to GitHub.

5. Run the application
npm start

Or:

node app.js
6. Open in browser
http://localhost:8080


📸 Screenshots
Home Page
<img width="1912" height="913" alt="Screenshot 2026-04-27 192904" src="https://github.com/user-attachments/assets/1e451edd-3104-498e-9e9f-0b24021384f5" />
Listings
<img width="1307" height="745" alt="Screenshot 2026-04-27 193154" src="https://github.com/user-attachments/assets/9158d635-3fdb-4f68-b61b-7faad325f7f3" />
Reviews
<img width="1716" height="890" alt="Screenshot 2026-04-27 193207" src="https://github.com/user-attachments/assets/a9dca5eb-2ef9-445a-a6fd-2053e36006e0" />

🧠 Key Concepts
Full-stack web development
MVC architecture
RESTful routing
CRUD operations
Node.js and Express.js
MongoDB and Mongoose
Server-side rendering with EJS
Middleware
Schema validation
Image upload handling
Cloud service integration
Git/GitHub
Application deployment
🔮 Future Improvements
User authentication and authorization
Advanced search and filtering
Property booking functionality
Reviews and ratings
User profiles
Wishlist functionality
Payment gateway integration
Location-based search
Automated testing
👩‍💻 Author

Palakdeep Kaur

B.Tech Computer Science & Engineering

Technical Skills:
Java | Python | JavaScript | Node.js | Express.js | MongoDB | SQL | HTML | CSS

🔗 Repository

GitHub: https://github.com/p-k2/Airbnb-clone_site
