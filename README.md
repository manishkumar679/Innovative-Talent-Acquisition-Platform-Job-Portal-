# Innovative-Talent-Acquisition-Platform-Job-Portal-
An innovative talent acquisition platform enabling seamless job search, candidate management, and recruiter hiring workflows. Built with React, Redux, Tailwind CSS, Spring Boot, REST APIs, and MongoDB, delivering a fast, secure, and scalable end-to-end job portal experience.

---

### 🎯 Mission
To revolutionize the job search and recruitment process by providing a seamless, efficient, and user-friendly platform that benefits both job seekers and employers.

---

## ✨ Key Features

### 🔍 **For Job Seekers**
- 🔎 **Smart Job Search** - Advanced filtering by location, salary, experience, and skills
- 📄 **Resume Builder** - Integrated resume management and profile building
- 📊 **Application Tracking** - Real-time status updates on job applications
- 🔔 **Instant Notifications** - Email alerts for new opportunities and application updates
- 🏢 **Company Insights** - Detailed company profiles and culture information

### 💼 **For Employers**
- 📝 **Easy Job Posting** - Rich text editor with draft and publish options
- 👥 **Talent Discovery** - Advanced candidate search and filtering
- 📈 **Analytics Dashboard** - Track job performance and application metrics
- ⚡ **Quick Actions** - Streamlined candidate review and selection process
- 🎯 **Targeted Recruitment** - Skill-based candidate matching

### 🔒 **Security & Admin**
- 🛡️ **JWT Authentication** - Secure login with role-based access control
- 🔐 **Data Protection** - Encrypted sensitive information storage
- 👤 **Multi-Role Support** - Applicant, Employer, and Admin roles
- 📧 **Email Verification** - OTP-based account verification system
- 🔄 **Session Management** - Secure token refresh and logout mechanisms

---

## 🛠️ Technology Stack

### Frontend
- **React 18.3.1** - Modern UI framework
- **Mantine 7.13.0** - Component library
- **Tailwind CSS 3.4.7** - Utility-first styling
- **Redux Toolkit 2.2.7** - State management
- **React Router 6.26.0** - Navigation

### Backend
- **Spring Boot 3.3.2** - Java framework
- **Java 17** - Programming language
- **MongoDB** - NoSQL database
- **JWT 0.11.5** - Authentication
- **Spring Security** - Security framework
- **Maven** - Dependency management

---

### 🗂️ Detailed Structure

```
jobnest/
├── Backend/                     # Spring Boot Application
│   ├── src/main/java/com/jobportal/
│   │   ├── api/                    # REST Controllers
│   │   ├── entity/                 # JPA Entities
│   │   ├── service/                # Business Logic
│   │   ├── repository/             # Data Access Layer
│   │   ├── jwt/                    # JWT Security
│   │   └── config/                 # Configuration
│   ├── src/main/resources/
│   ├── pom.xml
│
├── Frontend/                       # React Application
│   ├── src/
│   │   ├── Components/             # React Components
│   │   ├── Pages/                  # Main Pages
│   │   ├── Services/               # API Services
│   │   ├── Slices/                 # Redux State
│   │   └── Data/                   # Constants
│   ├── public/
│   ├── package.json
│   └── tailwind.config.js
│
└── README.md
```

---

### 🔄 Quick Setup

<details>
<summary><b>1️⃣ Clone Repository</b></summary>

```bash
# Clone the repository
git clone https://github.com/Anuj-er/careerconnect-platform.git

# Navigate to project directory
cd Job-Portal
```

</details>

<details>
<summary><b>2️⃣ Backend Setup</b></summary>

```bash
# Navigate to backend directory
cd Backend

# Create configuration file
cp src/main/resources/application.properties.example src/main/resources/application.properties

# Edit configuration with your MongoDB URI and other settings
nano src/main/resources/application.properties

# Build and run the application
./mvnw clean install
./mvnw spring-boot:run
```

**Backend will be available at:** `http://localhost:8080`

</details>

<details>
<summary><b>3️⃣ Frontend Setup</b></summary>

```bash
# Navigate to frontend directory
cd Frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

**Frontend will be available at:** `http://localhost:5173`

</details>

<details>
<summary><b>4️⃣ Environment Configuration</b></summary>

Create `.env` file in Frontend directory:
```env
REACT_APP_API_URL=http://localhost:8080/api
REACT_APP_ENVIRONMENT=development
```

</details>

---

## 🔧 Configuration

### Backend Configuration

<details>
<summary><b>📄 application.properties</b></summary>

```properties
# Server Configuration
server.port=8080
server.servlet.context-path=/api

# MongoDB Configuration
spring.data.mongodb.uri=mongodb+srv://<username>:<password>@cluster.mongodb.net/<database>

# JWT Configuration
jwt.secret=your-secret-key-here
jwt.expiration=86400000

# Email Configuration
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=your-email@gmail.com
spring.mail.password=your-app-password
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true

# Application Configuration
app.name=JobNest
app.version=1.0.0
app.frontend.url=http://localhost:5173
```

</details>
