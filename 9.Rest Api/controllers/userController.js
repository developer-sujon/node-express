import {
  getUser,
  getSingleUser,
  createUser,
  editUser,
  deleteUser,
} from "../services/userServices";

export const getAllUserController = async (req, res, next) => {
  const users = await getUser();
  users ? res.send(users) : res.status(404).send("users not found");
};

export const getSingleUserController = async (req, res, next) => {
  const user = await getSingleUser(req.params.id);
  user ? res.send(user) : res.status(404).send("users not found");
};

export const createUserController = async (req, res, next) => {
  try {
    const user = await createUser(req.body);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error);
  }
};

export const editUserController = async (req, res, next) => {
  try {
    const updatedUser = await editUser(req.params.id, req.body);
    res.send(updatedUser);
  } catch (error) {
    res.send(error.message);
  }
};

export const deleteUserController = async (req, res, next) => {
  try {
    const deletedUser = await deleteUser(req.params.id);
    res.send(deletedUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
