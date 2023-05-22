import User from "../Models/User.js";
import mongoose from "mongoose";
import { createError } from "../utils/utility.js";

export const adminOnly = async (req, res, next) => {
  const { userId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(userId))
    return next(createError({ status: 400, message: "Id is not valid" }));

  try {
    const user = await User.findById(userId);

    if (!user)
      return next(createError({ status: 400, message: "User not exist" }));

    if (!user.isAdmin)
      return next(createError({ message: "You are not authorized" }));

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
