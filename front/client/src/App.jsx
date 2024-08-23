import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import WishList from './Pages/WishList';
import { Provider } from 'react-redux';
import store from './redux';
import Add from './Pages/Add';
import Detail from './Pages/Detail';
function App() {
  return (
       <>
    <Provider store={store}>
      
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/add" element={<Add />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
    </Provider>
       </>
  );
}

export default App;
