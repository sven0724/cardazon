const express = require("express");
const router = express.Router();

const fullzController = require("../../controllers/FullzController");

router.post("/", fullzController.addFullz);

router.put("/:id", fullzController.updateFullz);

router.get("/get", fullzController.getFullz);

module.exports = router;