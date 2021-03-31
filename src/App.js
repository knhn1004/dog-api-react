import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Row } from 'react-bootstrap';
import axios from 'axios';

import './App.css';

import Header from './components/Header';
import DogCard from './components/DogCard';

function App() {
  const [image, setImage] = useState(null);
  const [houndImages, setHoundImages] = useState(null);
  const [title, setTitle] = useState('React Dogs (modified)');

  const fetch = async () => {
    try {
      const res = await axios.get('https://dog.ceo/api/breeds/image/random');
      // const res = await axios.get('test');
      const { message: dogImage } = res.data;
      if (!dogImage) {
        throw new Error('image not found');
      }
      setImage(dogImage);
    } catch (e) {
      alert('failed');
      console.error(e);
    }
  };

  const fetchHounds = async () => {
    try {
      const res = await axios.get('https://dog.ceo/api/breed/hound/images');
      const { message: images } = res.data;
      if (!images) {
        throw new Error('images not found');
      }
      const imagesToRender = images.slice(0, 9);
      setHoundImages(imagesToRender);
    } catch (e) {
      alert('failed');
      console.error(e);
    }
  };

  useEffect(() => {
    // fetch();
    fetchHounds();
  }, []);

  return (
    <div className="App">
      <Header />
      <h1>{title}</h1>
      <div className="container pt-5">
        {/*
        <DogCard image={image} />
	*/}
        <Row>
          {houndImages?.map((img, index) => (
            <DogCard
              key={index}
              image={img}
              setTitle={setTitle}
              index={index}
            />
          ))}
        </Row>
      </div>
    </div>
  );
}

export default App;
