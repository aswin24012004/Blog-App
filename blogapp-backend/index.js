const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");

const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  methods: "GET,POST,PUT,DELETE",
  credentials: true, // Allow credentials if needed
}
));
app.use(cookieParser())

mongoose
  .connect("mongodb://localhost:27017/blogDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"));

app.use("/api/users", userRoutes);
app.use("/api/blogs", blogRoutes);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
