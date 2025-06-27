# 🎓 Student Record CRUD API

This project provides a RESTful API for managing student records, including creating, reading, updating, and deleting student data.

Built with **Node.js**, **Express**, and **MongoDB** (via Mongoose).

---

## ✨ Features

- **Create** a new student record
- **Retrieve** all student records with pagination and optional search by last name
- **Update** an existing student record by ID
- **Delete** a student record by ID
- **Get total count** of student records

---

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://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@github.com/Brightsky2394/TechyJaunt-firstAssigment.git
   cd TechyJaunt-firstAssigment

   ```

2. Install dependencies
   ```
    npm install
   ```
3. Set up your environment variables
   Create a .env file in the root directory and add:
   ```
    DB_URI=your_mongodb_connection_string
    PORT="your-port-number"
   ```
4. Run the server
   ```
    npm run dev
   ```
   The API will be available at:
   ```
    http://localhost:8090
   ```

📚 API Endpoints
➕ Create Student
POST /students
Request Body:

```
 {
"firstName": "John",
"lastName": "Doe",
"email": "john.doe@example.com",
"age": 21
}
```

Responses:

- 201 Created – Student created successfully
- 400 Bad Request – Missing fields
- 409 Conflict – Email already exists

📖 Get All Students
GET /students
Query Parameters:

- page (optional) – Page number (default: 1)
- limit (optional) – Records per page (default: 10)
- lastName (optional) – Search by last name (case-insensitive)
  Example:

```
GET /students?page=2&limit=5&lastName=Smith
```

Responses:

- 200 OK – Returns paginated list of students
- 404 Not Found – No students found

✏️ Update Student
PUT /students/:id
Request Body:

```
 {
 "firstName": "Jane",
 "lastName": "Smith",
 "email": "jane.smith@example.com",
 "age": 22
}
```

Responses:

- 200 OK – Student updated successfully
- 404 Not Found – Student not found

🗑️ Delete Student
DELETE /students/:id
Responses:

- 200 OK – Student deleted successfully
- 404 Not Found – Student not found

🔢 Get Student Count
GET /students/count
Responses:

- 200 OK – Returns count of all students
- 400 Bad Request – No student records exist

⚙️ Project Structure

```
 ./src/ ├── controllers │   └── student.controller.js ├── models │   └── student.schema.js ├── routes │   └── student.routes.js ├── ./index.js ├── ./.env └── .gitignore
```

💡 Notes

- All endpoints return JSON responses
- Remember to secure your .env file by adding it to .gitignore.
- Ensure MongoDB is running and accessible.

📄 License
This project is licensed under the MIT License.

🤝 Contributing
Feel free to open issues or submit pull requests for improvements.

```

---

### 🔑 Quick Reminder
If you want, I can help you:

✅ Add example `curl` requests
✅ Write the **student schema (`student.schema.js`)**
✅ Generate `.gitignore` and `.env.example`

Just let me know!
```

# Postman Documentation

- URL : https://documenter.getpostman.com/view/30928807/2sB2xFenoh
