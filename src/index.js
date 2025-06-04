const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const collection = require("./config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.use(express.static("public"));  // Ensure this line is present to serve static files

// Root route directing to login page
app.get("/", (req, res) => {
    res.render("login");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup", { message: null }); // Pass message as null initially
});

app.get("/home", (req, res) => {
    res.render("home");
});

app.get("/shows", (req, res) => {
    res.render("shows");
});

app.get("/movies", (req, res) => {
    res.render("movies");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/player", (req, res) => {
    res.render("player");
});


app.post("/signup", async (req, res) => {
    const data = {
        name: req.body.username,
        password: req.body.password
    };

    const existingUser = await collection.findOne({ name: data.name });
    if (existingUser) {
        return res.json({ success: false, message: "This user exists, please pick another one" });
    } else {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);
        data.password = hashedPassword;

        const userdata = await collection.insertMany(data);
        console.log(userdata);
        // Return success message as JSON
        return res.json({ success: true, message: "User registered successfully!" });
    }
});

app.post("/login", async (req, res) => {
    try {
        const check = await collection.findOne({ name: req.body.username });
        if (!check) {
            return res.json({ success: false, message: "User name cannot be found" });
        }

        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if (isPasswordMatch) {
            return res.json({ success: true, message: "Login successful!" });
        } else {
            return res.json({ success: false, message: "Wrong password" });
        }
    } catch {
        return res.json({ success: false, message: "Wrong details" });
    }
});

const port = 5500;
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
