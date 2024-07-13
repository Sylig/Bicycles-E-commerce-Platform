//Imports
import React, { useState } from "react";
import { Card, Button, Dropdown } from "react-bootstrap";
import TotalPrice from "../../components/TotalPrice/TotalPrice";
import "./Products.css";
import NavMenu from "../../components/NavBar/NavMenu";

const products = [
  {
    id: 1,
    title: "Big Easy",
    description: "Longtail Electric Cargo Bike",
    price: 5499,
    colors: ["Red", "Blue", "Green"],
    image:
      "https://surlybikes.com/uploads/bikes/surly-big-easy-v2-04-1200x800.jpg",
  },
  {
    id: 2,
    title: "Ogre",
    description: "All-season commuter bike",
    price: 1699,
    colors: ["Yellow", "Black", "White"],
    image:
      "https://surlybikes.com/uploads/bikes/20240213_SUR_Ogre_Vanity_025.jpg",
  },
  {
    id: 3,
    title: "Grappler",
    description: "Dedicated Drop-Bar trail bike",
    price: 1899,
    colors: ["Purple", "Orange", "Gray"],
    image:
      "https://surlybikes.com/uploads/bikes/2443702_Surly_Grappler_1-1200x800.jpg",
  },
  {
    id: 4,
    title: "Steamroller",
    description: "Single Speed Urban Bike",
    price: 599,
    colors: ["Pink", "Cyan", "Magenta"],
    image: "https://surlybikes.com/uploads/bikes/steamroller3.jpg",
  },
  {
    id: 5,
    title: "Straggler",
    description: "Steel Disc Brake Bike for Pavement, Gravel or Whatever",
    price: 1699,
    colors: ["Lime", "Teal", "Lavender"],
    image:
      "https://surlybikes.com/uploads/bikes/20200908_SUR_Straggler_VanityPhotos_MY20_002_1500x1000.jpg",
  },
  {
    id: 6,
    title: "Preamble",
    description: "Steel commuter and gravel bike",
    price: 899,
    colors: ["Maroon", "Navy", "Olive"],
    image:
      "https://surlybikes.com/uploads/bikes/SUR_Preamble_CompleteBike_Blue_1.jpg",
  },
  {
    id: 7,
    title: "Midnight Special",
    description: "All Day road bike",
    price: 70,
    colors: ["Gold", "Silver", "Bronze"],
    image:
      "https://surlybikes.com/uploads/bikes/798568_SUR_MS_Side_Vanity_1500x1000_VF.jpg",
  },
  {
    id: 8,
    title: "Disk Trucker",
    description: "Disc Brake Touring Bike",
    price: 1999,
    colors: ["Ivory", "Coral", "Aqua"],
    image:
      "https://surlybikes.com/uploads/bikes/disc-trucker-pea-lime-soup-gallery_001.jpg",
  },
  {
    id: 9,
    title: "Wednesday",
    description: "Highly versatile bike",
    price: 1599,
    colors: ["Mint", "Peach", "Charcoal"],
    image:
      "https://surlybikes.com/uploads/bikes/surly-wednesday-fat-bike-green-ls-1-1200x800.jpg",
  },
  {
    id: 10,
    title: "Icecream Truck",
    description: "Trail Ready, Maximum Tire Fat Bike ",
    price: 1999,
    colors: ["Crimson", "Azure", "Indigo"],
    image:
      "https://surlybikes.com/uploads/bikes/surly-ice-cream-truck-blue_798234_044-1200x800.jpg",
  },
];

const Products = ({ totalPrice, setTotalPrice }) => {
  // Use stable to handle the Add to cart Button
  const [visible, setVisible] = useState(false);

  // State to manage selected color for each product
  const [selectedColor, setSelectedColor] = useState(
    Array(products.length).fill("Dropdown button")
  );

  // Function to handle color selection from dropdown
  const handleSelectColor = (index, color) => {
    const newSelectedColors = [...selectedColor];
    newSelectedColors[index] = color;
    setSelectedColor(newSelectedColors);
  };

  const handleBuy = (price) => {
    setTotalPrice(totalPrice + price);
    setVisible(true);
  };

  return (
    <div className="Products">
      <div className="container">
        <div className="header">
          <NavMenu />
        </div>

        {totalPrice > 0 && <TotalPrice total={totalPrice} />}

        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ height: "230px", width: "100%" }}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>£{product.price}</Card.Text>

                  <Dropdown>
                    <Dropdown.Toggle
                      variant="secondary"
                      id="Dropdown-basic"
                      data-toggle="dropdown"
                    >
                      {selectedColor[index]}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {/* Dropdown items to select color */}
                      <Dropdown.Item
                        onClick={() => handleSelectColor(index, "Red")}
                      >
                        Red
                      </Dropdown.Item>
                      <Dropdown.Item
                        class="dropdown-item"
                        onClick={() => handleSelectColor(index, "Blue")}
                      >
                        Blue
                      </Dropdown.Item>
                      <Dropdown.Item
                        class="dropdown-item"
                        onClick={() => handleSelectColor(index, "Green")}
                      >
                        Green
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Button
                    className="BuyButton"
                    variant="success"
                    onClick={() => handleBuy(product.price)}
                  >
                    Buy
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
