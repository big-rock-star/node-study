const express = require("express");
const moment = require("moment");
// 导入路由
const router = require("./route");

const app = express();

// 全局中间件
app.use((req, res, next) => {
  // 获取请求时间戳
  req.start_time = moment().valueOf();
  next();
});

// 注册路由 （为路由模块添加前缀）
app.use("/api", router);

// 监听端口
app.listen(3000, () => {
  // 启动成功
  console.log("启动成功");
});
