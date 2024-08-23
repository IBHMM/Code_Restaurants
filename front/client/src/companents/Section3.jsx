import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/dataSlice/dataSlice'; // `fetchUsers` thunk-ın doğru yolunu əlavə edin
import { addToWishList } from '../redux/wishListSlice/WishList'; // `wishListSlice`-in doğru yolunu əlavə edin
import { Link } from 'react-router-dom';
import './Section3.scss';

const Section3 = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector(state => state.users); // `state.users` doğru yol olmalıdır

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleAddToWishList = (item) => {
        dispatch(addToWishList(item));
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="container" style={{ marginTop: "50px" }}>
            <div className="row">
                {
                    users.map((item) => (
                        <div className="col-lg-6" key={item._id}>
                            <div className="menus d-flex ftco-animate fadeInUp ftco-animated snipcss-IfLf1">
                                <div className="menu-img style-oOqeT" id="style-oOqeT">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="text d-flex">
                                    <div className="one-half">
                                        <h3>
                                            <Link to={`/detail/${item._id}`} className="item-link">
                                                {item.name}
                                            </Link>
                                        </h3>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="one-forth">
                                        <p className="price">{item.price} $</p>
                                        <button 
                                            style={{ background: "transparent", border: "none" }}
                                            onClick={() => handleAddToWishList(item)}
                                        >
                                            <i style={{ color: "red", fontSize: "23px" }} className="fa-regular fa-heart"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Section3;
