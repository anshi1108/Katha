import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Handicrafts/Handicraft.css'; // Import the CSS for the Handicrafts component
import all_products from '../Data/All_Prodcuts'; // Import the data
import Footer from '../../Footer/Footer';
import Header from '../../Navbar/Navbar';

const Paintings = () => {
  const navigate = useNavigate();

  // Filter products based on the "spices" category
  const handicraftsProducts = all_products.filter(
    (product) => product.category === 'paintings'
  );

  // Function to handle product click
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div>
       <Header/>
      <div className="handicrafts-container">
        <h1>Paintings</h1>
        <div className="product-list">
          {handicraftsProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                style={{ height: '240px', objectFit: 'cover' }} // Adjust these values as needed
              />
              <h2>{product.name}</h2>
              <p className="new-price">₹{product.new_price.toFixed(2)}</p>
              {product.old_price && (
                <p className="old-price">Old Price: ₹ {product.old_price.toFixed(2)}</p>
              )}
             <button onClick={() => handleProductClick(product.id)}>View Details</button>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Paintings;
