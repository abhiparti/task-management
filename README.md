# task-management
Approach
Setup and Configuration:
Database Configuration: Utilized MySQL as the relational database management system, configured through Docker for containerization. Sequelize was used as the ORM to handle database operations.
Backend Framework: Node.js with Express.js was chosen for building the RESTful API. This allows for efficient request handling and routing.
Dockerization: The application and database services are containerized using Docker. A docker-compose.yml file is used to orchestrate the containers, ensuring a consistent development environment.

API Development:
User Authentication: Implemented using JWT for secure access control. Users can register, login, and perform operations based on their authentication status.
CRUD Operations: Created endpoints for creating, reading, updating, and deleting tasks. This includes handling task attributes such as title, description, priority, status, and due date.

Filtering and Searching:
Filtering: Added functionality to filter tasks by status (e.g., pending, completed), priority (e.g., high, medium, low), and due date.
Searching: Implemented a search feature to allow users to search tasks by title or description.

Error Handling and Logging:
Integrated error handling mechanisms to catch and respond to errors gracefully.
Used logging to monitor application performance and troubleshoot issues.

Testing:
Performed unit and integration testing to ensure the reliability and correctness of the API endpoints and functionalities.
Documentation:
API Documentation: Provided API documentation using Swagger or a Postman collection, detailing endpoint functionalities, request/response formats, and error codes.
Assumptions Made
Database Schema:
Assumed a basic schema for tasks including fields such as id, title, description, status, priority, and due_date.
Assumed that the database is set up with the necessary tables and relationships.
Authentication:
Assumed that JWT tokens are securely handled and managed. The API requires users to be authenticated for certain operations.
Environment:
Assumed the development environment includes Docker and Node.js. The setup assumes familiarity with Docker and Docker Compose for local development and testing.
User Interface:
Assumed that there is no frontend implementation included in this scope. The focus is on backend functionality and API endpoints.
Error Handling:
Assumed standard error handling practices, including returning appropriate HTTP status codes and error messages.
