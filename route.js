// 创建路由
let express = require("express");
let router = express.Router();

router.get(
  "/user/list",
  (req, res, next) => {
    // 局部中间件
    console.log("局部中间件");
    next();
  },
  (req, res) => {
    res.send("get user list" + req.start_time);
  }
);

router.post("/user/add", (req, res) => {
  res.send("add user");
});

// 到处找到路由
module.exports = router;
