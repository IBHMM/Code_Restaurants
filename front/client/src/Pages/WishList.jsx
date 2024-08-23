import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishList } from '../redux/wishListSlice/WishList'; // `wishListSlice`-in doğru yolunu əlavə edin
import Header from '../layout/Header';
// import './WishList.scss';

const WishList = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist);

  const handleRemoveFromWishList = (id) => {
    dispatch(removeFromWishList(id));
  };

  return (
    <>
      <Header  />
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          {wishlist.map(item => (
            <div className="col-lg-6" key={item._id}> {/* Use _id here */}
              <div className="menus d-flex ftco-animate fadeInUp ftco-animated snipcss-IfLf1">
                <div className="menu-img style-oOqeT" id="style-oOqeT">
                  <img src={item.image} alt="" />
                </div>
                <div className="text d-flex">
                  <div className="one-half">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className="one-forth">
                    <p className="price">{item.price} $</p>
                    <button 
                      style={{ background: "transparent", border: "none" }}
                      onClick={() => handleRemoveFromWishList(item._id)} // Use _id here
                    >
                      <i style={{ color: "red", fontSize: "23px" }} className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </>
  );
};

export default WishList;
