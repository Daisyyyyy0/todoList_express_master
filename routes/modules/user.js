//載入 Express 和 express.Router
const express = require('express')
const router = express.Router()

//路由設定清單，這裡我們先簡單加入一條「登入表單頁面」的路由
router.get('/login', (req, res) => {
  res.render('login')
})

//匯出路由模組
module.exports = router