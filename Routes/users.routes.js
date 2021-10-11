const router =require("express").Router()

const service=require("../services/users.service")

router.post("/register",service.register)

router.post("/login",service.login)

module.exports=router