const express=require('express');
const path =require('path');
const bcrypt=require("bcryptjs");
const app= express(); 
const { collection, Appointment } = require('./config');
const session = require('express-session');

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;

// Connect to the database

app.set('view engine', 'ejs');
app.use(express.static("public"))
app.get("/", (req, res) => {
  const user = req.session.user; // Assuming you use sessions to store user info
  res.render("index", {
    userName: user ? user.fullName : null // If logged in, show username; else null
  });
});
function isAuthenticated(req, res, next) {
  if (req.session.user) {
      return next(); // If the user is logged in, allow the request to proceed
  }
  res.redirect('/loginpage'); // Redirect to login if not authenticated
}
app.get("/loginpage", (req, res) => {
  res.render("loginpage");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});
app.get("/about", (req, res)  => {
  const user = req.session.user; // Assuming you use sessions to store user info
  res.render("about", {
    userName: user ? user.fullName : null // If logged in, show username; else null
  });
});
app.get("/healthTips", (req, res)  => {
  const user = req.session.user; // Assuming you use sessions to store user info
  res.render("healthTips", {
    userName: user ? user.fullName : null // If logged in, show username; else null
  });
});
app.get("/chatbot", (req, res)  => {
  const user = req.session.user;
  res.render("chatbot", {
    userName: user ? user.fullName : null
  });
});

app.get("/appointment", isAuthenticated, (req, res) => {
  res.render("appointment");
});
app.get("/articles", (req, res) => {
  // Assuming you have user information in the session or a global variable
  const userName = req.session.userName || null; // or get user info from a database

  res.render("articles", { userName: userName }); // Pass userName to the EJS template
});
app.get("/coronaVirusMyths", (req, res) => {
  // Assuming you have user information in the session or a global variable
  const userName = req.session.userName || null; // or get user info from a database

  res.render("coronaVirusMyths", { userName: userName }); // Pass userName to the EJS template
});
app.get("/diet", (req, res) => {
  // Assuming you have user information in the session or a global variable
  const userName = req.session.userName || null; // or get user info from a database

  res.render("diet", { userName: userName }); // Pass userName to the EJS template
});
app.get("/yogaaadvice", (req, res) => {
  // Assuming you have user information in the session or a global variable
  const userName = req.session.userName || null; // or get user info from a database

  res.render("yogaaadvice", { userName: userName }); // Pass userName to the EJS template
});
app.get("/GenralPhysician", (req, res) => {
  // Assuming you have user information in the session or a global variable
  const userName = req.session.userName || null; // or get user info from a database

  res.render("GenralPhysician", { userName: userName }); // Pass userName to the EJS template
});
app.get("/Cardiologist", (req, res) => {
  // Assuming you have user information in the session or a global variable
  const userName = req.session.userName || null; // or get user info from a database

  res.render("Cardiologist", { userName: userName }); // Pass userName to the EJS template
});
app.get("/Gynocologist", (req, res) => {
  // Assuming you have user information in the session or a global variable
  const userName = req.session.userName || null; // or get user info from a database

  res.render("Gynocologist", { userName: userName }); // Pass userName to the EJS template
});
app.get("/psychiatrist", (req, res) => {
  // Assuming you have user information in the session or a global variable
  const userName = req.session.userName || null; // or get user info from a database

  res.render("psychiatrist", { userName: userName }); // Pass userName to the EJS template
});
app.get("/Dermatologist", (req, res) => {
  // Assuming you have user information in the session or a global variable
  const userName = req.session.userName || null; // or get user info from a database

  res.render("Dermatologist", { userName: userName }); // Pass userName to the EJS template
});
app.get("/Gastoenterologist", (req, res) => {
  // Assuming you have user information in the session or a global variable
  const userName = req.session.userName || null; // or get user info from a database

  res.render("Gastoenterologist", { userName: userName }); // Pass userName to the EJS template
});
app.get("/Neurologists", (req, res) => {
  // Assuming you have user information in the session or a global variable
  const userName = req.session.userName || null; // or get user info from a database

  res.render("Neurologists", { userName: userName }); // Pass userName to the EJS template
});
app.get("/Sexologist", (req, res) => {
  // Assuming you have user information in the session or a global variable
  const userName = req.session.userName || null; // or get user info from a database

  res.render("Sexologist", { userName: userName }); // Pass userName to the EJS template
});
app.get("/Pediatricians", (req, res) => {
  // Assuming you have user information in the session or a global variable
  const userName = req.session.userName || null; // or get user info from a database

  res.render("Pediatricians", { userName: userName }); // Pass userName to the EJS template
});
app.get("/Surgeon", (req, res) => {
  // Assuming you have user information in the session or a global variable
  const userName = req.session.userName || null; // or get user info from a database

  res.render("Surgeon", { userName: userName }); // Pass userName to the EJS template
});
app.get("/Orthopaedic", (req, res) => {
  // Assuming you have user information in the session or a global variable
  const userName = req.session.userName || null; // or get user info from a database

  res.render("Orthopaedic", { userName: userName }); // Pass userName to the EJS template
});
app.get("/Dentist", (req, res) => {
  // Assuming you have user information in the session or a global variable
  const userName = req.session.userName || null; // or get user info from a database

  res.render("Dentist", { userName: userName }); // Pass userName to the EJS template
});


app.get("/specialities", (req, res)  => {
  const user = req.session.user; // Assuming you use sessions to store user info
  res.render("specialities", {
    userName: user ? user.fullName : null // If logged in, show username; else null
  });
});
app.get("/madicare", (req, res)  => {
  const user = req.session.user; // Assuming you use sessions to store user info
  res.render("madicare", {
    userName: user ? user.fullName : null // If logged in, show username; else null
  });
});
app.get("/bloodpressure", (req, res)  => {
  const user = req.session.user; // Assuming you use sessions to store user info
  res.render("bloodpressure", {
    userName: user ? user.fullName : null // If logged in, show username; else null
  });
});
app.get("/BuildImmunity", (req, res)  => {
  const user = req.session.user; // Assuming you use sessions to store user info
  res.render("BuildImmunity", {
    userName: user ? user.fullName : null // If logged in, show username; else null
  });
});
app.get("/sexual", (req, res)  => {
  const user = req.session.user; // Assuming you use sessions to store user info
  res.render("sexual", {
    userName: user ? user.fullName : null // If logged in, show username; else null
  });
});
app.get("/question", (req, res)  => {
  const user = req.session.user; // Assuming you use sessions to store user info
  res.render("question", {
    userName: user ? user.fullName : null // If logged in, show username; else null
  });
});
app.post('/signup', async (req, res) => {
  if (!req.body.fullName || !req.body.email || !req.body.phoneNumber || !req.body.password) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const { fullName, email, phoneNumber, password } = req.body;

    const existingUser = await collection.findOne({ $or: [{ email }, { phoneNumber }] });
    if (existingUser) {
      return res.render("signup", {
        errorMessage: "Email or Phone Number already registered"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new collection({
      fullName,
      email,
      phoneNumber,
      password: hashedPassword
    });

    await newUser.save();
    res.redirect("/loginpage");
  } catch (error) {
    if (error.code === 11000) {
      return res.render("signup", {
        errorMessage: "Duplicate email or phone number found"
      });
    }

    res.status(500).json({ message: "Internal Server Error" });
  }
});
app.post('/loginpage', async (req, res) => {
  const { email, password } = req.body;

  console.log("Email:", email); // Debugging email submission
  const user = await collection.findOne({ email });
  if (!user) {
    return res.render("loginpage", {
      errorMessage: "No user found with this email."
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.render("loginpage", {
      errorMessage: "Incorrect password."
    });
  }

  req.session.user = user; // Store user info in session
  console.log("User logged in:", user); // Debugging session storage
  res.redirect("/"); // Redirect to home page
});
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.redirect('/');
    }
    res.redirect('/');
  });
});
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.redirect('/');
    }
    res.redirect('/'); // Redirect to home page after logging out
  });
});
app.post("/appointment", isAuthenticated, async (req, res) => {
  const { name, age, number, date, email, time, gender, symptoms, drname } = req.body;

  const newAppointment = new Appointment({
      patientName: name,
      age,
      phoneNumber: number,
      date,
      email,
      time,
      gender,
      symptoms: {
          fever: symptoms.includes('fever'),
          headache: symptoms.includes('Headache'),
          cold: symptoms.includes('cold'),
          others: symptoms.includes('other')
      },
      doctorName: drname
  });

  try {
      await newAppointment.save();
      res.render("appointment", { 
          successMessage: "Appointment booked successfully!" // Send success message to the view
      });
  } catch (error) {
      console.error("Error saving appointment:", error);
      res.status(500).render("appointment", {
          errorMessage: "Error booking appointment." // Send error message if there is an issue
      });
  }
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
