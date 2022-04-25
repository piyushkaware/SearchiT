const Details = require("../models/detailsModel");

const getDetails = async (req, res) => {
  const { q } = req.query;
  // console.log(q);
  const data = await Details.find({
    title: { $regex: `^${q}`, $options: "$i" },
  });
  // console.log(data);

  res.json(data);
};

module.exports = { getDetails };
