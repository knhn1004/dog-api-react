import React from 'react';
import { Card, Button } from 'react-bootstrap';

const DogCard = ({ image, setTitle, index }) => {
  const handleChangeTitle = () => {
    if (index !== 0) {
      return alert('you are not allowed to change the title!');
    }
    setTitle('This worked!');
  };

  return (
    <Card style={{ width: '18rem', margin: 10 }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={handleChangeTitle}>
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
};

export default DogCard;
