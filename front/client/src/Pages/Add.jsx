import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { postUser, fetchUsers, deleteUser } from '../redux/dataSlice/dataSlice'; // `fetchUsers` ve `deleteUser` thunk-larının doğru yolunu əlavə edin
import Header from '../layout/Header';
import './Add.scss'; // Import the SCSS file

// Validasiya sxeması
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
  image: Yup.string().url('Invalid URL').required('Image URL is required'),
  price: Yup.number().typeError('Price must be a number').required('Price is required')
});

const Add = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('name-asc'); // Default sort option
  const { users, loading } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(postUser(values))
      .then(() => {
        resetForm(); // Formu sıfırlamaq
        dispatch(fetchUsers()); // Yenidən istifadəçiləri yükləmək
      });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id)).then(() => {
      dispatch(fetchUsers()); // Silinmiş istifadəçiləri yenidən yükləmək
    });
  };

  const filteredUsers = users
    .filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === 'price-asc') {
        return a.price - b.price;
      } else if (sortOption === 'price-desc') {
        return b.price - a.price;
      } else if (sortOption === 'name-asc') {
        return a.name.localeCompare(b.name);
      } else if (sortOption === 'name-desc') {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });

  return (
    <div style={{marginTop:"90px"}}>
      <Header />
      <div className="container" style={{ marginTop: "50px" }}>
        <h2>Add New Item</h2>
        <Formik
          initialValues={{ name: '', description: '', image: '', price: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="form">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <Field type="text" id="name" name="name" placeholder='name' className="form-control" />
                <ErrorMessage name="name" component="div" className="error-message" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <Field type="text" id="description" name="description" placeholder='description' className="form-control" />
                <ErrorMessage name="description" component="div" className="error-message" />
              </div>
              <div className="form-group">
                <label htmlFor="image">Image URL:</label>
                <Field type="text" id="image" name="image" placeholder='image' className="form-control" />
                <ErrorMessage name="image" component="div" className="error-message" />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price:</label>
                <Field type="text" id="price" name="price" placeholder='price' className="form-control" />
                <ErrorMessage name="price" component="div" className="error-message" />
              </div>
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Add Item</button>
            </Form>
          )}
        </Formik>

        <div style={{ marginTop: '60px' }}>
          <h2>Items List</h2>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="form-control mb-3"
          />
          <div className="sort-options mb-3">
            <label htmlFor="sort">Sort by:</label>
            <select id="sort" value={sortOption} onChange={handleSortChange} className="form-select">
              <option value="name-asc">Name A-Z</option>
              <option value="name-desc">Name Z-A</option>
              <option value="price-asc">Price Low to High</option>
              <option value="price-desc">Price High to Low</option>
            </select>
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map(user => (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.description}</td>
                    <td><img src={user.image} alt={user.name} style={{ width: '100px' }} /></td>
                    <td>{user.price} $</td>
                    <td>
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="btn btn-danger"
                      >
                        <i className="fa-solid fa-trash"></i> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;
