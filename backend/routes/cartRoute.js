import express from 'express';
import { addToCart, updateCart, getUserCart } from '../controllers/cartController.js';
import authUser from '../middleware/auth.js';
// import authMiddleware from '../middlewares/authMiddleware.js';
 const cartRoute=express.Router();

// cartRoute.use(authMiddleware);
cartRoute.post('/add', authUser, addToCart);
cartRoute.get('/get', authUser, getUserCart);
cartRoute.put('/update', authUser, updateCart);

export default cartRoute;