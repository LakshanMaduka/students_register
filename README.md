
# Students Registration Mobile Application

This mobile application allows users to save student details in a database, view a comprehensive list of registered students, and perform actions such as updating and deleting student records.

## features
- Save student details in a database.
- View a comprehensive list of registered students.
- Update existing student records.
- Delete student records from the database.
## Build with
- Flutter
- Node.js 
- Express 
- MongoDB 
## Installing Node Backend



1. Clone the repository:

   ```bash
   git clone https://github.com/LakshanMaduka/students_register.git
   ```


2. Navigate to the student_register_backend folder:
```bash
  cd student_register_backend
````

3. Install Dependencies
```bash
npm install
```
## Configuration
1. Create a .env file in the project root:
Get the mongoDB database URL and paste your URL in the .env file

MONGODB_URL=your mongodb database URL
## Run the  Backend
```bash
npm start server.js
```
The server will start running on http://localhost:3000.
## API Endpoints
- GET /student Get a list of all students.
- POST /student/add Create a new student.
- PUT /student/update/:id Update details of a specific student.
- DELETE /students/delete/:id Delete a specific student.

## Installing Flutter Application
1. Navigate to the project directory:
```bash
cd student_register
```
2. Install Dependencies
```bash
flutter pub get
```
3. Running the application 
```bash
flutter run
```
## Special Note
To work the application make sure the emulator also has your machine's IP Address and port = 3000
You can change IP addresses in

utils/const.dart

you can change the URL using the above file 

const String URI = 'http://your_ip:3000';
## Author

- [@LakshanMaduka](https://github.com/LakshanMaduka)
## Demo

![demo3](https://github.com/LakshanMaduka/students_register/assets/73058412/f68c5cda-fb43-4e20-96d6-10ab8ead6d11)

