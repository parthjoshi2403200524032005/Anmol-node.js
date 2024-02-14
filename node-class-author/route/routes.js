const express = require("express");
const router = express.Router();
const {
  authentication,
  authorization,
  blogauthentication,
  authorizationblog,
} = require("../middleware/middleware.js");

router.get("/chrome", (req, res) => {
  res.send("hello world");
  console.log("hello world");
});

const {
  createauthorData,
  findAllauthor,
  findSingleauthor,
  updateauthor,
  deleteauthor,
  loginauthor,
} = require("../controller/authorController");

const {
  createblog,
  getsingleblog,
  findallblogs,
  updateblog,
  deleteblog,
  loginblog,
} = require("../controller/blogdataController");

const {
  createReview,
  findAllReview,
  findSingleReview,
  updateReview,
  deleteReview,
} = require("../controller/reviewController");

//author routes

router.post("/create", createauthorData);
router.get("/find", findAllauthor);
router.get("/findSingle/:id", findSingleauthor, authentication, authorization);
router.put("/update/:id", authentication, authorization, updateauthor);
router.delete("/delete/:id", deleteauthor);
router.post("/login", loginauthor);

//blog routes

router.post("/createblog", createblog);
router.get("/findblog", getsingleblog);
router.get("/findallblogs/:id", findallblogs);
router.put("/updateblog/:id",blogauthentication,authorizationblog,updateblog);
router.delete("/deleteblog/:id", deleteblog);
router.post("/loginblog", loginblog);

//review routes

router.post("/createreview", createReview);
router.get("/getAllReview", findAllReview);
router.get("/getSingleReview/:id", findSingleReview);
router.put("/updateReview/:id", updateReview);
router.delete("/deleteReview/:id", deleteReview);

module.exports = router;

// {
//   "title":"Mrs",
//   "firstName":"PARTH",
//   "lastName":"joshi",
//   "email":"parth12374.doe@example.com",
//   "password":"parth12345",
//   "mobileNumber" : 7889264260,
//   "isActive": false
//   }

// new
// {
//   "title":"Mrs",
//   "firstName":"PARTH",
//   "lastName":"joshi",
//   "email":"parth1237.doe@example.com",
//   "password":"123456",
//   "mobileNumber" : 7889264269,
//   "isActive": false
//   }

// {
//   "title":"Mrs",
//   "firstName":"PARTH",
//   "lastName":"joshi",
// "email":"parth12.doe@example.com",
// "password":"123456",
//   "mobileNumber" : 7889264259,
//   "isActive": false
//   }
