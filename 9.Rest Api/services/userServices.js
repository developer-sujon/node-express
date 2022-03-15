import { User } from "../models/User";

export const getUser = async () => {
  try {
    const users = await User.find({});
    return users;
  } catch (error) {
    throw new Error(error);
  }
};

export const getSingleUser = async (id) => {
  try {
    const users = await User.findOne({ _id: id });
    return users;
  } catch (error) {
    throw new Error(error);
  }
};

export const createUser = async (user) => {
  try {
    const newUser = await new User(user);
    await newUser.save();
    return newUser;
  } catch (error) {
    throw new Error(error);
  }
};

export const editUser = async (id, user) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      { $set: user },
      { new: true },
    );
    return updatedUser;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteUser = async (id) => {
  try {
    const deletedUser = await User.findOneAndDelete({ _id: id });
    return deletedUser;
  } catch (error) {
    throw new Error(error);
  }
};