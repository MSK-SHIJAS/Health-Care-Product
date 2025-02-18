import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, InputGroup, Container, Button, Card, Row, Col } from "react-bootstrap";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaHeart, FaHome, FaInfoCircle, FaEnvelope, FaCog, FaCaretDown } from 'react-icons/fa';
import { FaUser, FaBell, FaChartPie, FaBriefcase } from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const App = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }

  const products = [
    { id: 1, name: "Product 1", description: "Quality product", price: 20, image: "1.jpeg" },
    { id: 2, name: "Product 2", description: "Quality product", price: 25, image: "2.jpeg" },
    { id: 3, name: "Product 3", description: "Quality product", price: 30, image: "3.jpg" },
    { id: 4, name: "Product 4", description: "Quality product", price: 35, image: "4.jpg" },
    { id: 5, name: "Product 5", description: "Quality product", price: 40, image: "5.jpeg" },
    { id: 6, name: "Product 6", description: "Quality product", price: 45, image: "9.png" },
  ];
  return (
    <>
      <Navbar bg="white" variant="light" expand="lg" className="p-3">
        <Container>
          <Navbar.Brand href="#">
            <img src="logo.jpg" alt="Logo" className="logo" /> LGO
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

      <Row className='m-0 p-0'>
        <Col md={9}>
          <div className=" " style={{ position: "relative", padding: "20px", backgroundColor: "#f0f0f0", borderRadius: "10px", width: "100%", }}>

            <div className="info-section" style={{ position: "relative", padding: "20px", textAlign: "left", width: "80%", marginRight: "300px", zIndex: 2 }}>
              <h1 style={{ fontSize: "70px", fontWeight: "bold", margin: 0 }}>Health Care &</h1>
              <h2 style={{ fontSize: "80px", fontWeight: "bold", margin: 0 }}>Cleaning Products</h2>
              <p style={{ fontSize: "14px", maxWidth: "500px", margin: "30px 10px", lineHeight: "1.6", textAlign: "left" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                Nulla quis lorem ut libero malesuada feugiat.<br />
                Curabitur aliquet quam id dui posuere blandit.
              </p>
              <Button style={{ backgroundColor: "black", border: "none", color: "white", borderRadius: "50px", width: "150px" }}>Click</Button>
            </div>

            <div>


              <div style={{ position: "absolute", top: "10px", right: "10px", zIndex: 3, width: "120px", backgroundColor: "white", borderRadius: "8px", padding: "10px" }}>
                <div style={{ textAlign: "center", fontSize: "14px" }}>
                  <p>Quality</p>
                  <p >Assurance</p>
                  <p>Products</p>
                </div>
                <div style={{ position: "absolute", top: "5px", right: "5px" }}>
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </div>

              <div className="test" style={{
                position: "absolute",
                bottom: "10px",
                right: " 50px",
                zIndex: 3,
                width: "120px",
                backgroundColor: "white",
                borderRadius: "8px",
                padding: "10px"
              }}>
                <div style={{ textAlign: "center", fontSize: "14px" }}>
                  <p>Quality</p>
                  <p style={{ color: "#ffc800" }}>Assurance</p>
                  <p>Products</p>
                </div>
              </div>

            </div>

          </div>

          <div className="overlay-image" style={{ position: "absolute", top: "150px", right: "500px", zIndex: 0 }}>
            <img
              src="sp2.png"
              alt="Product Image"
              style={{ width: "345px", height: "auto", borderRadius: "50%", backgroundColor: "#ffc65dcf", padding: "20px" }}
            />
          </div>


          <div className="white-rectangles" style={{ position: "absolute", display: "flex", gap: "10px", zIndex: 1 }}>
            <div style={{ width: "120px", height: "120px", backgroundColor: "white", borderRadius: "8px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img src="sp2.png" alt="Product" style={{ width: "100px", height: "auto" }} />
            </div>

            <div style={{ width: "80px", backgroundColor: "white", borderRadius: "8px", padding: "5px", textAlign: "center", height: "100px" }}>
              <h4 style={{ fontSize: "10px", fontWeight: "bold" }}>Product Name</h4>
              <p style={{ fontSize: "12px", color: "#000", fontWeight: "bold" }}>$99.99</p>
              <Button style={{ backgroundColor: "#000", border: "none", color: "white", width: "100%", borderRadius: "50px", fontSize: "8px" }}>
                Buy Now
              </Button>
            </div>
          </div>


        </Col>


        <Col md={3} className=''>

          < div className='d-flex flex-column' style={{ width: "100%", height: "380px", backgroundColor: "#f0f0f0", borderRadius: "10px", }}>

            <div style={{ margin: "10px", marginRight: "15px", backgroundColor: "white", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
              <p style={{ fontSize: "14px", fontWeight: "bold", margin: "5px 0" }}> WELCOME TO LOG</p>
              <p style={{ fontSize: "14px", margin: "5px 0" }}>you can pick your roducts from here </p>
            </div>

            <div className='mt-4 me-3' style={{ backgroundColor: "white", height: "100%" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <h2 style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>Product</h2>
                <button style={{ backgroundColor: "WHITE", color: "BLACK", border: "none", padding: "8px 16px", borderRadius: "5px", cursor: "pointer" }}>View</button>
              </div>

              <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>

                <div style={{ width: "200px", textAlign: "center", position: "relative" }}>
                  <FontAwesomeIcon icon={faHeart} style={{ position: "absolute", top: "12px", right: "12px", fontSize: "20px" }} />
                  <Card.Img variant="top" src="3.jpg" style={{ width: "100%", borderRadius: "10px", padding: "10px" }} />
                  <h4 style={{ fontSize: "16px", fontWeight: "bold", margin: "10px 0" }}>Product Name 1</h4>
                  <p style={{ fontSize: "14px", fontWeight: "bold", color: "#000" }}>$99.99</p>
                </div>

                <div style={{ width: "200px", textAlign: "center", position: "relative" }}>
                  <FontAwesomeIcon icon={faHeart} style={{ position: "absolute", top: "12px", right: "12px", fontSize: "20px" }} />
                  <Card.Img variant="top" src="9.png" style={{ width: "100%", borderRadius: "10px", padding: "10px" }} />
                  <h4 style={{ fontSize: "16px", fontWeight: "bold", margin: "10px 0" }}>Product Name 2</h4>
                  <p style={{ fontSize: "14px", fontWeight: "bold", color: "#000" }}>$79.99</p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row >


      <div className="new-navbar mx-auto fw-bold mt-3">
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
            Services
          </li>
          <li className="new-navbar-item">
            <FaInfoCircle className="new-navbar-icon" />
            Portfolio
          </li>
          <li className="new-navbar-item">
            <FaInfoCircle className="new-navbar-icon" />
            Blog
          </li>
          <li className="new-navbar-item">
            <FaInfoCircle className="new-navbar-icon" />
            Careers
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
          <button className="submit-feedback bg-dark">Submit</button>
        </div>


        <div className="product-cards">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-card-image">
                <img src={product.image} alt={product.name} />
                <button className="product-favorite-button">
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
              <div className="product-card-title">{product.name}</div>
              <div className="product-card-description">{product.description}</div>
              <div className="product-card-price">${product.price}</div>
            </div>
          ))}
        </div>


        <div className="reviews-section">
          <div className="sidebar-title">Customer Reviews</div>

          <div className="review-card">
            <img src="6.jpg" alt="John" className="review-profile-pic" />
            <div className="review-text">"Great product! Highly recommend." - John</div>
          </div>

          <div className="review-card">
            <img src="7.avif" alt="Lisa" className="review-profile-pic" />
            <div className="review-text">"Amazing quality, will buy again!" - Lisa</div>
          </div>

          <div className="review-card">
            <img src="8.jpg" alt="David" className="review-profile-pic" />
            <div className="review-text">"Fast shipping, great service!" - David</div>
          </div>


          <div className="feedback-section">
            <h3>Leave a Review</h3>
            <input type="text" placeholder="Your Name" className="feedback-input" />
            <textarea placeholder="Write your feedback..." className="feedback-textarea"></textarea>
            <button className="submit-feedback">Submit</button>
          </div>
        </div>
      </div>



    </>
  );
};

export default App;
