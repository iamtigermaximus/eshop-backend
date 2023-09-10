import { Router } from 'express';
import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from '../Controllers/user.controller';
import { registerUser } from '../Controllers/register.controller';
import { loginUser } from '../Controllers/login.controller';

const router: Router = Router();

router.post('/users', createUser);
router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

// New registration and login routes
router.post('/auth/register', registerUser);
router.post('/auth/login', loginUser);

export default router;
