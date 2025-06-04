
# Netflix Clone Project

## Project Summary

This project is a Netflix clone featuring user authentication with Login and Signup functionality. It is built with a Node.js backend connected to a MongoDB database. Passwords are securely encrypted before storage. Upon login, user credentials are validated against the database, and successful authentication grants access to the main website page. The app also includes JavaScript alert notifications for invalid login attempts and various UI enhancements such as hover effects and categorized movie/show tabs.

### Key Features

- User registration and login with encrypted password storage
- Real-time input validation and alert notifications
- Dynamic categorization of movies and shows
- Responsive and visually appealing UI design
- Backend powered by Node.js and MongoDB
- Frontend using HTML, EJS templates, CSS, and JavaScript

---

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (v14 or higher recommended)
- [MongoDB](https://www.mongodb.com/docs/manual/installation/) (local or cloud instance)

---

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory**

   ```bash
   cd <project-folder>
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

---

### Environment Variables Setup

Create a `.env` file in the root directory of the project to store your environment-specific variables securely.

Example `.env` file content:

```
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/netflixClone?retryWrites=true&w=majority
SESSION_SECRET=yourSecretKey
```

- `PORT` — The port number the app will run on (default is 3000).
- `MONGO_URI` — Your MongoDB connection string.
- `SESSION_SECRET` — A secret key used for encrypting sessions or tokens.

**Note:** Never commit your `.env` file to public repositories.

---

### Running the Project

Start the development server with:

```bash
npm start
```

Open your browser and visit:

```
http://localhost:3000
```

You should now see the login/signup page and be able to interact with the Netflix clone app.

---

## Usage Tips

- **Password Security:** Passwords are encrypted before storage to protect user data.
- **Validation Alerts:** Login errors trigger JavaScript alerts without redirecting to other pages.
- **Movie Categorization:** Browse different categories easily from the main page.
- **Code Comments:** Check comments in the source code for explanations on complex parts.

---

## Git Commands for Pushing Changes

After editing the code, use the following commands to commit and push your changes:

```bash
git add .
git commit -m "Describe your changes here"
git push -u origin master
```


