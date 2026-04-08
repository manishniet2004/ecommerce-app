import express from 'express';
import { addToCart, getCartItems, updateCartItem } from '../controllers/cartController.js';
import authUser from '../middleware/auth.js';
// import authMiddleware from '../middlewares/authMiddleware.js';
 const cartRoute=express.Router();

// cartRoute.use(authMiddleware);
cartRoute.post('/add', authUser, addToCart);
cartRoute.get('/get', authUser, getCartItems);
cartRoute.put('/update', authUser, updateCartItem);

export default cartRoute;