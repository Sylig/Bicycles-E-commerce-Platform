import React from "react";
import "./TotalPrice.css";

// The component takes a single prop `totalPrice` which represents the total price to be displayed
const TotalPrice = ({ total }) => {
  // Return an h3 element with the total price, applying a CSS class for right-aligned text
  return <h2 className="text-right">Total price: £{total.toFixed(2)}</h2>;
};

// Export the TotalPrice component to be used in other parts of the application
export default TotalPrice;
