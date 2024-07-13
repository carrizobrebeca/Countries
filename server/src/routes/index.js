const { Router } = require("express");
const { getCountry } = require("../Controllers/getCountry");

const router = Router();
router.get("/countries", getCountry)
module.exports = router;
