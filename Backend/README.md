# CareerConnect Backend

Spring Boot REST API for the CareerConnect job portal application.

## Folder Structure

```
Backend/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/jobportal/
│   │   │       ├── controllers/     # REST Controllers
│   │   │       ├── models/          # Entity Models
│   │   │       ├── repositories/    # Data Repositories
│   │   │       ├── services/        # Business Logic
│   │   │       ├── config/          # Configuration Classes
│   │   │       └── utils/           # Utility Classes
│   │   └── resources/
│   │       ├── application.properties
│   │       ├── application-dev.properties
│   │       └── application-prod.properties
│   └── test/                        # Test Cases
├── target/                          # Build Output
├── .mvn/                           # Maven Wrapper
├── Dockerfile                      # Docker Configuration
├── pom.xml                         # Maven Dependencies
└── README.md                       # This file
```

## Technologies Used

- **Framework**: Spring Boot 3.3.2
- **Database**: MongoDB with Spring Data MongoDB
- **Security**: Spring Security + JWT Authentication
- **Build Tool**: Maven
- **Java Version**: 17
- **Email**: Spring Mail (Gmail SMTP)

## How to Use

### Prerequisites
- Java 17 or higher
- Maven 3.6+ (or use included wrapper)
- MongoDB Atlas account (or local MongoDB)

### Setup & Run

1. **Clone the repository**
   ```bash
   cd Backend
   ```

2. **Configure Database**
   - Update MongoDB URI in `application-dev.properties`
   - Set your email credentials for notifications

3. **Install Dependencies**
   ```bash
   ./mvnw clean install
   ```

4. **Run the Application**
   ```bash
   ./mvnw spring-boot:run
   ```

5. **Access the API**
   - Base URL: `http://localhost:8080`
   - Health Check: `http://localhost:8080/actuator/health`

### Docker Deployment

1. **Build Docker Image**
   ```bash
   docker build -t careerconnect-backend .
   ```

2. **Run Container**
   ```bash
   docker run -p 8080:8080 careerconnect-backend
   ```

## Environment Variables

- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT tokens
- `EMAIL_USERNAME`: Gmail username for notifications
- `EMAIL_PASSWORD`: Gmail app password
- `CORS_ORIGINS`: Allowed frontend URLs

## API Endpoints

- **Authentication**: `/auth/*`
- **Jobs**: `/jobs/*`
- **Users**: `/users/*`
- **Applications**: `/applications/*`
- **Health Check**: `/actuator/health`

## Profiles

- **Development**: `dev` (default)
- **Production**: `prod` (for deployment)