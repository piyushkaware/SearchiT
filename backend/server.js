const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
const data = require("./data.js");
const details = require("./models/detailsModel");

app.use(express.json());
connectDB();
app.use(cors());

app.use("/api/search", require("./routes/searchRoute"));

// ===================API for prefix search using static data==================== //
// app.get("/", (req, res) => {
//   const { q } = req.query;
//   // console.log(q);

//   const keys = ["title", "description"];

//   const search = (data) => {
//     return data.filter((item) =>
//       keys.some((key) => item[key].toLowerCase().startsWith(q))
//     );
//   };

//   res.json(search(data));
// });
// ======================================================================== //

// Sending some initial data to database
app.post("/", async (req, res) => {
  const { title, description, link } = req.body;
  // console.log(title, description, link);
  const detail = await details.create({
    title,
    description,
    link,
  });
  if (detail) {
    res.status(201).json({
      _id: detail._id,
      title: detail.title,
      description: detail.description,
      link: detail.link,
    });
  } else {
    res.status(400).json({
      status: "Failed",
      message: "Something went wrong",
    });
  }
});

app.listen(5000, () => {
  console.log(`Server 5000 is listening`);
});
