var express = require("express");
var router = express.Router();
const courseModel = require("./courses");
const facilitiesModel = require("./facilities");
const testimonialModel = require("./testimonials");

var courses = [];
var facilities = [];
var testimonials = [];
/* GET home page. */
router.get("/", async function (req, res, next) {
  courses = await courseModel.find();
  facilities = await facilitiesModel.find();
  testimonials = await testimonialModel.find();
  res.render("index", {
    courses: courses,
    facilities: facilities,
    testimonials: testimonials,
  });
  console.log(courses);
});

router.get("/create", async (req, res) => {
  await testimonialModel.create({
    words:
      "My journey at IIT Vishrambagh has been nothing short of transformative. The institution's commitment to academic excellence and innovation has not only broadened my knowledge but has also fueled my passion for learning",
    name: "Avishkar Pawar",
  });
  res.send("Ban gya");
});

module.exports = router;
