const express = require("express");
const router = express.Router();

// הגדרת ראוטר של הרואט שנגדיר באפ
router.get("/",async(req,res) => {
  res.json({msg:"18:55 test"});
})

// export default
module.exports = router;