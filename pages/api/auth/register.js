import nc from "next-connect"
import connectDB from "../../../connectDB"

import { registerUser } from "../../../contollers/authCont"

import onError from "../../../middlewares/errors"

const router = nc({ onError })

connectDB()

router.post(registerUser)

export default router
