const express=require("express")
const router=express.Router()
const {ResController}=require("../controller/res")
router.get("/",ResController.getAll)
router.get("/:id",ResController.getById)
router.post("/",ResController.Post)
router.delete("/:id",ResController.delete)

module.exports=router