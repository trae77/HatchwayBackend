var express = require("express");

var app = express();
let url = require.JSON(("https://api.hatchways.io/assessment/blog/posts?tag=tech"));

app.get(/api/posts , async (req, res) => {
  try {
    const productData = await Product.findAll({
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get(/api/ping , async (req, res) => {
  try {
    const productData = await Product.findAll({
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});
