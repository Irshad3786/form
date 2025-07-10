import express from "express"
import { formController } from "../Controllers/formController.js"

const router = express.Router()
router.route("/").post(formController)

export default router