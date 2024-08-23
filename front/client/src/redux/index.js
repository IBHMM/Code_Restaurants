import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './dataSlice/dataSlice';
import wishListReducer from '../redux/wishListSlice/WishList'; // `wishListSlice`-in doğru yolunu əlavə edin

const store = configureStore({
  reducer: {
    users: usersReducer,
    wishlist: wishListReducer, // Wishlist reducer-i burada əlavə edin
  },
});

export default store;
