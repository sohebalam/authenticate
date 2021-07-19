import catchAsyncErrors from "../middlewares/catchAsyncErrors"
import User from "../models/userModel"

import bcrypt from "bcryptjs"

export const registerUser = catchAsyncErrors(async (req, res) => {
  const { name, email, password } = req.body
  const salt = await bcrypt.genSalt(12)
  const user = await User.create({
    name,
    email,
    password: await bcrypt.hash(password, salt),
  })

  res.status(200).json({
    success: true,
    message: "Account Registered successfully",
  })
})
