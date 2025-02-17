import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, InputGroup, Container, Button, Card } from "react-bootstrap";
import { FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaHome, FaInfoCircle, FaEnvelope, FaCog, FaCaretDown } from 'react-icons/fa';
import { FaUser,  FaBell,  FaChartPie, FaBriefcase } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }
  return (
    <>
      <Navbar bg="white" variant="light" expand="lg" className="p-3">
        <Container>
          <Navbar.Brand href="#">
            <img src="/logo.png" alt="Logo" className="logo" /> LGO
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Services</Nav.Link>
              <Nav.Link href="#">Portfolio</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <InputGroup className="search-cart-box">
                <FaSearch className="search-icon" />
                <FormControl type="text" placeholder="Search" className="search-input" />
                <InputGroup.Text className="cart-icon-box">
                  <FaShoppingCart className="cart-icon" />
                </InputGroup.Text>
              </InputGroup>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Top-right rectangle: 3 words and heart icon */}
      <div className="info-section-wrapper" style={{ position: "relative", padding: "20px", backgroundColor: "#f0f0f0", borderRadius: "10px", width: "100%", maxWidth: "1200px", margin: "20px 50px" }}>
  
  {/* Product Text with Z-Index */}
  <div className="info-section" style={{ position: "relative", padding: "20px", textAlign: "left", width: "50%", marginRight: "300px", zIndex: 2 }}>
    <h1 style={{ fontSize: "50px", fontWeight: "bold", margin: 0 }}>Health Care &</h1>
    <h2 style={{ fontSize: "60px", fontWeight: "bold", margin: 0 }}>Cleaning Products</h2>
    <p style={{ fontSize: "14px", maxWidth: "500px", margin: "30px 10px", lineHeight: "1.6", textAlign: "left" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
      Nulla quis lorem ut libero malesuada feugiat.<br />
      Curabitur aliquet quam id dui posuere blandit.
    </p>
    <Button style={{ backgroundColor: "black", border: "none", color: "white", borderRadius: "50px", width: "150px" }}>Click</Button>
  </div>

  {/* Small white rectangles with content */}
  <div className="white-rectangles" style={{ position: "absolute", top: "250px", right: "630px", display: "flex", gap: "10px", zIndex: 1 }}>
    {/* Rectangle 1: Image */}
    <div style={{ width: "120px", height: "120px", backgroundColor: "white", borderRadius: "8px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img src="sp2.png" alt="Product" style={{ width: "100px", height: "auto" }} />
    </div>

    {/* Rectangle 2: Product Name, Price, and Buy Now */}
    <div style={{ width: "80px", backgroundColor: "white", borderRadius: "8px", padding: "5px", textAlign: "center" ,height:"100px"}}>
  <h4 style={{ fontSize: "10px", fontWeight: "bold" }}>Product Name</h4>
  <p style={{ fontSize: "12px", color: "#000", fontWeight: "bold" }}>$99.99</p>
  <Button style={{ backgroundColor: "#000", border: "none", color: "white", width: "100%", borderRadius: "50px", fontSize: "8px" }}>
    Buy Now
  </Button>
</div>

  </div>

  {/* Image with rounded background, positioned below the product content */}
  <div className="overlay-image" style={{ position: "absolute", top: "30px", right: "400px", zIndex: 0 }}>
    <img 
      src="sp2.png" 
      alt="Product Image" 
      style={{ width: "335px", height: "auto", borderRadius: "50%", backgroundColor: "orange", padding: "20px" }} 
    />
  </div>
  <div style={{ position: "absolute", top: "10px", right: "10px", zIndex: 3, width: "120px", backgroundColor: "white", borderRadius: "8px", padding: "10px" }}>
        <div style={{ textAlign: "center", fontSize: "14px" }}>
          <p>Quality</p>
          <p>Assurance</p>
          <p>Products</p>
        </div>
        <div style={{ position: "absolute", top: "5px", right: "5px" }}>
          <FaHeart style={{ fontSize: "20px", color: "#ff0000" }} />
        </div>
      </div>

      <div style={{ position: "absolute", top: "200px", right: "350px", zIndex: 3, width: "120px", backgroundColor: "white", borderRadius: "8px", padding: "10px" }}>
        <div style={{ textAlign: "center", fontSize: "14px" }}>
          <p>Quality</p>
          <p>Assurance</p>
          <p>Products</p>
        </div>
      </div>
</div>
{/* New Small Grey Div */}
<div style={{ position: "relative", width: "250px", height: "380px", backgroundColor: "#f0f0f0", borderRadius: "10px", padding: "10px", display: "flex", justifyContent: "center", alignItems: "flex-start", margin: "-400px 1330px" }}>

  {/* White Rectangle with Three Titles */}
  <div style={{ position: "absolute", top: "10px", width: "90%", backgroundColor: "white", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
    <p style={{ fontSize: "14px", fontWeight: "bold", margin: "5px 0" }}>Title 1</p>
    <p style={{ fontSize: "14px", fontWeight: "bold", margin: "5px 0" }}>Title 2</p>
    <p style={{ fontSize: "14px", fontWeight: "bold", margin: "5px 0" }}>Title 3</p>
  </div>
</div>


<div style={{ position:"absolute", width: "50%",height:"266px", maxWidth: "273px", margin: "133px 1268px", padding: "20px", backgroundColor: "white", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      
      {/* Header Section */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>Product</h2>
        <button style={{ backgroundColor: "black", color: "white", border: "none", padding: "8px 16px", borderRadius: "5px", cursor: "pointer" }}>View</button>
      </div>

      {/* Product Cards Container (Single Div) */}
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>

        {/* Card 1 */}
        <div style={{ width: "200px", textAlign: "center", position: "relative" }}>
          {/* Heart Icon */}
          <FaHeart style={{ position: "absolute", top: "10px", right: "10px", color: "red", fontSize: "20px" }} />
          <Card.Img variant="top" src="product1.png" style={{ width: "100%", borderRadius: "10px", padding: "10px" }} />
          <h4 style={{ fontSize: "16px", fontWeight: "bold", margin: "10px 0" }}>Product Name 1</h4>
          <p style={{ fontSize: "14px", fontWeight: "bold", color: "#000" }}>$99.99</p>
        </div>

        {/* Card 2 */}
        <div style={{ width: "200px", textAlign: "center", position: "relative" }}>
          {/* Heart Icon */}
          <FaHeart style={{ position: "absolute", top: "10px", right: "10px", color: "red", fontSize: "20px" }} />
          <Card.Img variant="top" src="product2.png" style={{ width: "100%", borderRadius: "10px", padding: "10px" }} />
          <h4 style={{ fontSize: "16px", fontWeight: "bold", margin: "10px 0" }}>Product Name 2</h4>
          <p style={{ fontSize: "14px", fontWeight: "bold", color: "#000" }}>$79.99</p>
        </div>

      </div>
    </div>









    <div className="new-navbar mx-auto fw-bold">
      <ul className="new-navbar-items">
        <li className="new-navbar-item">
          <FaHome className="new-navbar-icon" />
          Home
        </li>
        <li className="new-navbar-item">
          <FaInfoCircle className="new-navbar-icon" />
          About
        </li>
        <li className="new-navbar-item">
          <FaInfoCircle className="new-navbar-icon" />
          About
        </li>
        <li className="new-navbar-item">
          <FaInfoCircle className="new-navbar-icon" />
          About
        </li>
        <li className="new-navbar-item">
          <FaInfoCircle className="new-navbar-icon" />
          About
        </li>
        <li className="new-navbar-item">
          <FaInfoCircle className="new-navbar-icon" />
          About
        </li>
        <li className="new-navbar-item">
          <FaEnvelope className="new-navbar-icon" />
          Contact
        </li>
        <li className="new-navbar-item dropdown">
          <FaCog className="new-navbar-icon" />
          Settings
          <div className="dropdown-menu">
            <div className="dropdown-item">Option 1</div>
            <div className="dropdown-item">Option 2</div>
            <div className="dropdown-item">Option 3</div>
          </div>
          <FaCaretDown className="new-navbar-icon" />
        </li>
      </ul>
    </div>



    <div className="layout-container">
      {/* Sidebar */}
      <div className="sidebarnew">
        <div className="sidebar-title">Categories</div>
        <ul className="sidebar-list">
          <li className="sidebar-item"><FaHome className="sidebar-icon" /> Home</li>
          <li className="sidebar-item"><FaUser className="sidebar-icon" /> Profile</li>
          <li className="sidebar-item"><FaCog className="sidebar-icon" /> Settings</li>
          <li className="sidebar-item"><FaBell className="sidebar-icon" /> Notifications</li>
          <li className="sidebar-item"><FaEnvelope className="sidebar-icon" /> Messages</li>
        </ul>

        <div className="sidebar-title">More Categories</div>
        <ul className="sidebar-list">
          <li className="sidebar-item"><FaChartPie className="sidebar-icon" /> Analytics</li>
          <li className="sidebar-item"><FaShoppingCart className="sidebar-icon" /> Orders</li>
          <li className="sidebar-item"><FaBriefcase className="sidebar-icon" /> Business</li>
        </ul>
      </div>

      {/* Product Cards */}
      <div className="product-cards">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="product-card">
            <div className="product-card-image">
              <button className="product-favorite-button">
                <FaHeart />
              </button>
            </div>
            <div className="product-card-title">Product {index + 1}</div>
            <div className="product-card-description">Quality product</div>
            <div className="product-card-price">$ {20 + index * 5}</div>
          </div>
        ))}
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <div className="sidebar-title">Customer Reviews</div>
        <div className="review-card">"Great product! Highly recommend." - John</div>
        <div className="review-card">"Amazing quality, will buy again!" - Lisa</div>
        <div className="review-card">"Fast shipping, great service!" - David</div>
      </div>
    </div>



    </>
  );
};

export default App;
