const express = require("express");
const router = express.Router();

const Test = async (req, res) => {
    res.status(200).json({ message: "Successfully woke up" });
}

router.get("/wake-up", Test);

module.exports = router;