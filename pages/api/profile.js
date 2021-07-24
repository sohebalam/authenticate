import nc from "next-connect"
import connectDB from "../../connectDB"

import { currentUserProfile } from "../../controllers/authCont"
import { isAuthenticated } from "../../middlewares/auth"

import onError from "../../middlewares/errors"

const handler = nc({ onError })

connectDB()

handler.use(isAuthenticated).get(currentUserProfile)

export default handler
