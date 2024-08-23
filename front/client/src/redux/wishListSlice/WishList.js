// redux/wishListSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Load wishlist from localStorage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('wishlist');
    if (serializedState === null) return [];
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

// Save wishlist to localStorage
const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('wishlist', serializedState);
  } catch (err) {
    console.error('Could not save wishlist', err);
  }
};

const wishListSlice = createSlice({
  name: 'wishlist',
  initialState: loadFromLocalStorage(),
  reducers: {
    addToWishList: (state, action) => {
      const item = action.payload;
      // Check if the item is already in the wishlist
      if (!state.find(product => product._id === item._id)) {
        state.push(item);
        saveToLocalStorage(state);
      }
    },
    removeFromWishList: (state, action) => {
      const itemId = action.payload;
      const newState = state.filter(product => product._id !== itemId);
      saveToLocalStorage(newState);
      return newState;
    }
  }
});

export const { addToWishList, removeFromWishList } = wishListSlice.actions;
export default wishListSlice.reducer;
