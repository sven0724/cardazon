const express = require("express");
const router = express.Router();

const newsController = require("../../controllers/newsController");

router.post("/", newsController.addFullz);

router.get("/", newsController.getFullz);

module.exports = router;