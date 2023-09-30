import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const CardComponent = ({ blogRef }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Define the API endpoint URL for your backend
    const apiUrl = 'http://localhost:3000/api/blogs'; // Updated to port 3000

    // Make the HTTP request when the component mounts
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Handle the data from the backend
        setCards(data);
      })
      .catch((error) => {
        // Handle errors
        console.error('Error:', error);
      });
  }, []);

  return (
    <div ref={blogRef}>
      <Container className="d-flex justify-content-center justify-content-between card-container position-relative">
        {/* Video Background */}
        <div className="video-container">
          <video autoPlay loop muted className="video-background">
            <source src={require('../images/submain.60a39fde50990e569913.mp4')} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text Overlay */}
        <div className="text-overlay">
          <h1 className="mb-4 p1des">THE BEST-EVER BLOG</h1>
          <p className="mb-4 p2des">
            Check out these great blogs for helpful tips, tricks, and thought leadership from the best in the biz.
          </p>
        </div>

        {/* Content Over Video */}
        <div className="content-over-video">
        {cards.map((card) => (
          <Card
            className='bardes'
            key={card.id}
            style={{
              transition: 'transform 0.3s ease', // Add transform transition for smooth scaling
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)'; // Enlarge the card on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)'; // Restore the original size on hover out
            }}
          >
      <Card.Img variant="top" src={card.image} alt={card.description} style={{ width: '100%', height: '200px' }} />
      <Card.Body>
        <Card.Title>{`${card.id}`}</Card.Title>
        <Card.Text>{card.description}</Card.Text>
        <a href={card.learnMoreLink} target="_blank" rel="noopener noreferrer"> {/* Add the URL here */}
          <Button
            className="btncard"
            style={{
              backgroundColor: 'rgba(51, 71, 91, 1)',
              color: '#fff',
              fontWeight: 'bolder',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#00a4bd';
              e.target.style.color = 'black'; // Change text color to black on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(51, 71, 91, 1)';
              e.target.style.color = '#fff'; // Restore text color on hover out
            }}
          >
            Learn More
          </Button>
        </a>
      </Card.Body>
      <Card.Footer>
        <div className="sub-images">
          {[
            card.subImage1,
            card.subImage2,
            card.subImage3,
            card.subImage4
          ].map((subImage, index) => (
            subImage && (
              <img
                key={index}
                src={subImage}
                alt={`Sub ${index + 1}`}
                style={{
                  width: '70px',  // Set the desired width
                  height: '70px', // Set the desired height
                  objectFit: 'cover', // Cover the entire space while maintaining aspect ratio
                  border: '1px solid black', // Add a black border
                }}
              />
            )
          ))}
        </div>
      </Card.Footer>
    </Card>
  ))}
</div>

      </Container>
    </div>
  );
};

export default CardComponent;
