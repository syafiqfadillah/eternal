const express = require("express")
const { body } = require("express-validator")
const router = express.Router()

const { postJual, getJual } = require("../controllers/jual_product")

router.post("/jual/post", postJual)
router.get("/jual/data", getJual)

module.exports = router
