import nc from "next-connect"
import connectDB from "../../../../connectDB"

import { resetPassword } from "../../../../controllers/authCont"

import onError from "../../../../middlewares/errors"

const router = nc({ onError })

connectDB()

router.post(resetPassword)

export default router
