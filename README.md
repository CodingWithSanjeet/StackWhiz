# 🚀 StackWhiz.dev - Node.js Blog

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)

**A modern, responsive blog platform built with Node.js, Express, and MongoDB**

[🌐 Live Demo](#) • [📖 Documentation](#installation) • [🐛 Report Bug](#contributing) • [✨ Request Feature](#contributing)

</div>

---

## 📸 Screenshots

<div align="center">

| Home Page | Admin Dashboard | Blog Post |
|-----------|-----------------|-----------|
| ![Home Page](https://github.com/user-attachments/assets/e2d690e1-4359-4a2d-b846-ce2e317d9c74) | ![Admin Dashboard](https://github.com/user-attachments/assets/88caf6a7-7513-48c9-85ee-c6e361aa9621) | ![Blog Post](https://github.com/user-attachments/assets/efcfbcee-d305-47bc-93d2-f1e0d9279a1c) |
| Modern hero section with tech badges | Comprehensive admin panel | Beautiful post layout |

| Search Results | About Page | Contact Page |
|----------------|------------|-------------|
| ![Search Results](https://github.com/user-attachments/assets/e27c6c41-9776-4a2a-93db-645ab1cf0169) | ![About Page](https://github.com/user-attachments/assets/e46c372f-e3a9-4984-9567-fb7c37f7b17c) | ![Contact Page](https://github.com/user-attachments/assets/457eaf73-acc3-4535-a0ae-7e2d7605e15f) |
| Enhanced search with highlighting | Professional about section | Beautiful contact form |

</div>

---

## ✨ Features

### 🎨 **Modern UI/UX**
- **Responsive Design** - Perfect on all devices
- **Glass Morphism Effects** - Modern visual aesthetics
- **Smooth Animations** - Enhanced user experience
- **Dark/Light Theme Support** - Coming soon

### 📝 **Content Management**
- **Rich Text Editor** - Write beautiful articles
- **Image Upload Support** - Visual content management
- **SEO Optimized** - Better search engine visibility
- **Categories & Tags** - Organized content structure

### 🔐 **Authentication & Security**
- **Secure Admin Panel** - Protected content management
- **Session Management** - Secure user sessions
- **Input Validation** - XSS and injection protection
- **CSRF Protection** - Enhanced security

### 🔍 **Advanced Features**
- **Real-time Search** - Fast content discovery
- **Pagination** - Optimized content loading
- **Reading Time Estimation** - Better user experience
- **Social Sharing** - Integrated sharing buttons

---

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Node.js** | Runtime Environment | 18+ |
| **Express.js** | Web Framework | 4.x |
| **MongoDB** | Database | 5+ |
| **Mongoose** | ODM | 7.x |
| **EJS** | Template Engine | 3.x |
| **bcryptjs** | Password Hashing | 2.x |
| **express-session** | Session Management | 1.x |

---

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher)
- **MongoDB** (v5 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/nodejs-blog.git
   cd nodejs-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` file:
   ```env
   # Database
   MONGODB_URI=mongodb://localhost:27017/nodejs-blog
   
   # Session
   SESSION_SECRET=your-super-secret-session-key
   
   # Server
   PORT=3000
   NODE_ENV=development
   
   # Admin Credentials
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=your-secure-password
   ```

4. **Start MongoDB service**
   ```bash
   # On macOS with Homebrew
   brew services start mongodb-community
   
   # On Ubuntu/Debian
   sudo systemctl start mongod
   
   # On Windows
   net start MongoDB
   ```

5. **Run the application**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

6. **Open your browser**
   ```
   http://localhost:3000
   ```

---

## 📁 Project Structure

```
nodejs-blog/
├── 📂 server/
│   ├── 📂 config/          # Database configuration
│   ├── 📂 controllers/     # Route controllers
│   ├── 📂 middlewares/     # Custom middlewares
│   ├── 📂 models/          # MongoDB models
│   └── 📂 routes/          # Route definitions
├── 📂 views/
│   ├── 📂 layouts/         # EJS layouts
│   ├── 📂 partials/        # Reusable components
│   └── 📂 admin/           # Admin panel views
├── 📂 public/
│   ├── 📂 css/             # Stylesheets
│   ├── 📂 js/              # Client-side JavaScript
│   └── 📂 images/          # Static images
├── 📄 app.js               # Application entry point
├── 📄 package.json         # Dependencies
└── 📄 README.md            # Project documentation
```

---

## 🎯 Usage

### 📝 **Creating Posts**

1. Navigate to `/admin` and login with your credentials
2. Click "Add New Post" button
3. Fill in the post details:
   - **Title** - Your post title
   - **Content** - Rich text content
   - **Category** - Post category
   - **Tags** - Comma-separated tags
4. Click "Publish" to make it live

### 🔍 **Search Functionality**

- Use the search icon in the header
- Search by title, content, or tags
- Results are highlighted and paginated

### 👤 **Admin Panel**

Access the admin panel at `/admin`:
- **Dashboard** - Overview of posts and stats
- **Posts Management** - Create, edit, delete posts
- **User Management** - Coming soon

---

## 🎨 Customization

### **Styling**

The project uses custom CSS with CSS variables for easy theming:

```css
:root {
  --primary-color: #FF6B6B;
  --secondary-color: #4ECDC4;
  --background-color: #FAF5EE;
  --text-color: #1C1C1C;
  --gray: #7E7E7E;
}
```

### **Adding New Pages**

1. Create a new EJS template in `views/`
2. Add route in appropriate route file
3. Create controller function
4. Update navigation if needed

---

## 🔧 Scripts

```bash
# Start development server with nodemon
npm run dev

# Start production server
npm start

# Run tests (coming soon)
npm test

# Lint code (coming soon)
npm run lint
```

---

## 🌐 Deployment

### **Heroku Deployment**

1. **Install Heroku CLI**
2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create Heroku app**
   ```bash
   heroku create your-blog-name
   ```

4. **Set environment variables**
   ```bash
   heroku config:set MONGODB_URI=your-mongodb-atlas-uri
   heroku config:set SESSION_SECRET=your-session-secret
   ```

5. **Deploy**
   ```bash
   git push heroku main
   ```

### **MongoDB Atlas Setup**

1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get connection string
4. Update `MONGODB_URI` in your environment variables

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### **Development Guidelines**

- Follow existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation if needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Sanjeet Kumar**
- 💼 Senior Software Engineer at Adobe
- 🌐 Portfolio: [https://sanjeet-kumar-portfolio.netlify.app/](#)
- 📧 Email: [sanjeet.kumar.nitt@gmail.com](#)
- 💼 LinkedIn: [https://www.linkedin.com/in/sanjeet-kumar-5a33b77b/](#)

---

## 🙏 Acknowledgments

- **Express.js** team for the amazing web framework
- **MongoDB** for the flexible database solution
- **EJS** for the simple templating engine
- **Adobe** and **Oracle** for the professional experience
- Open source community for inspiration and resources

---

## 📊 Project Stats

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/your-username/nodejs-blog?style=social)
![GitHub forks](https://img.shields.io/github/forks/your-username/nodejs-blog?style=social)
![GitHub issues](https://img.shields.io/github/issues/your-username/nodejs-blog)
![GitHub license](https://img.shields.io/github/license/your-username/nodejs-blog)

**Made with ❤️ by Sanjeet Kumar**

</div> 
