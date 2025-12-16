# Backend Setup Guide

## Prerequisites

- Java 17 or higher
- Maven 3.6 or higher
- MongoDB (local installation or MongoDB Atlas account)

## Configuration

1. **Database Setup**:
   - For local MongoDB: Install MongoDB and start the service
   - For MongoDB Atlas: Create a cluster and get the connection string

2. **Application Configuration**:
   ```bash
   # Copy the example configuration file
   cp src/main/resources/application.properties.example src/main/resources/application.properties
   
   # Edit the configuration file with your actual values
   # Update MongoDB URI, JWT secret, and email settings
   ```

3. **Environment-specific Configuration** (Optional):
   ```bash
   # For development
   cp src/main/resources/application-dev.properties.example src/main/resources/application-dev.properties
   
   # For production
   cp src/main/resources/application-prod.properties.example src/main/resources/application-prod.properties
   ```

## Running the Application

```bash
# Run with default profile
./mvnw spring-boot:run

# Run with development profile
./mvnw spring-boot:run -Dspring.profiles.active=dev

# Run with production profile (after proper configuration)
./mvnw spring-boot:run -Dspring.profiles.active=prod
```

## API Documentation

Once the application is running, you can access:
- Application: http://localhost:8080
- Health Check: http://localhost:8080/actuator/health

## Docker Setup

```bash
# Build the Docker image
docker build -t careerconnect-backend .

# Run the container
docker run -p 8080:8080 careerconnect-backend
```

## Environment Variables (for Production)

Set these environment variables in your production environment:
- `JWT_SECRET`: Strong secret key for JWT token signing
- `MAIL_HOST`: SMTP server host
- `MAIL_PORT`: SMTP server port
- `MAIL_USERNAME`: Email username
- `MAIL_PASSWORD`: Email password or app password
- `MONGODB_URI`: Production MongoDB connection string