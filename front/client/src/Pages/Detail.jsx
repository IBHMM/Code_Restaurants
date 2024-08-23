import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/dataSlice/dataSlice'; // `fetchUsers` thunk-ının doğru yolunu əlavə edin
import './Detail.scss';

const Detail = () => {
    const { id } = useParams(); // URL-dən ID-ni əldə et
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector(state => state.users); // `state.users` doğru yol olmalıdır

    const [item, setItem] = useState(null);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    useEffect(() => {
        if (users.length > 0) {
            const foundItem = users.find(user => user._id === id);
            setItem(foundItem);
        }
    }, [users, id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="container" style={{ marginTop: "50px" }}>
            {item ? (
                <div className="detail">
                    <h2>{item.name}</h2>
                    <img src={item.image} alt={item.name} className="detail-img" />
                    <p>{item.description}</p>
                    <p className="price">{item.price} $</p>
                </div>
            ) : (
                <div>Item not found</div>
            )}
        </div>
    );
};

export default Detail;
