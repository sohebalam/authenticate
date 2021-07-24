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

export const currentUserProfile = catchAsyncErrors(async (req, res) => {
  const user = await User.findById(req.user._id)
  res.status(200).json({
    success: true,
    user,
  })
})

export const updateProfile = async (req, res) => {
  console.log(req.user._id)
  const user = await User.findById(req.user._id)

  if (user) {
    ;(user.name = req.body.name), (user.email = req.body.email)
    if (req.body.password) {
      user.password = req.body.password
    }
  }
  await user.save()
  res.status(200).json({
    success: true,
  })
}
