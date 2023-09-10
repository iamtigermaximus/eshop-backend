import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User, { IUser } from '../Models/user.model';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, initials } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user document with the hashed password
    const newUser: IUser = new User({
      name,
      email,
      password: hashedPassword, // Save the hashed password
      initials,
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
