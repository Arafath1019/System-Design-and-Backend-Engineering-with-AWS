import { Router } from "express";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
export const router = Router();

const userRepo = AppDataSource.getRepository(User);

// GET endpoint to get all users
router.get("/users", async (req, res) => {
  const users = await userRepo.find();
  res.send(users);
});

// POST endpoint to create a new user
router.post("/user", async (req, res) => {
  const { firstName, lastName, age } = req.body;

  const user = new User();
  user.firstName = firstName;
  user.lastName = lastName;
  user.age = age;

  try {
    const savedUser = await userRepo.save(user);
    res.status(201).send(savedUser);
  } catch (error) {
    res.status(500).send("Failed to create a new student");
  }
});

// DELETE endpoint to delete a user
router.delete("/user/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
    return res.status(400).send("Invalid ID");
  }

  try {
    const result = await userRepo.delete(id);
    if (result.affected === 0) {
      return res.status(404).send("User not found");
    }
    return res.status(200).send("User deleted successfully");
  } catch (error) {
    return res.status(500).send("Failed to delete the user");
  }
});

// PUT endpoint to update a user
router.put("/user/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const { firstName, lastName, age } = req.body;
  if(!id){
    return res.status(400).send("Invalid ID");
  }
  try {
    const userToUpdate = await userRepo.findOneBy({ id: id});
    if(!userToUpdate){
      return res.status(404).send("User not found");
    }

    // Update the user properties
    userToUpdate.firstName = firstName;
    userToUpdate.lastName = lastName;
    userToUpdate.age = age;

    // Save the updated user
    const updatedUser = await userRepo.save(userToUpdate);
    return res.status(200).send(updatedUser);
  } catch (error) {
    return res.status(500).send("Failed to update the user");
  }
})
