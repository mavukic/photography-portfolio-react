import React from "react";
import Navbar from "../components/Navbar"; // Navbar is already added in App.js
import Gallery from "./Gallery";
import cat from "../images/cat.jpg";

const Home = () => {
  const images = [
    { src: cat, alt: 'photo 1' },
    { src: cat, alt: 'photo 2' },
    { src: cat, alt: 'photo 3' },
    { src: cat, alt: 'photo 4' },
    { src: cat, alt: 'photo 5' },
    { src: cat, alt: 'photo 6' },
    { src: cat, alt: 'photo 7' },
    { src: cat, alt: 'photo 8' },
    { src: cat, alt: 'photo 9' },
    { src: cat, alt: 'photo 10' },
    { src: cat, alt: 'photo 11' },
    { src: cat, alt: 'photo 12' }, 
     { src: cat, alt: 'photo 9' },
    { src: cat, alt: 'photo 10' },
    { src: cat, alt: 'photo 11' },
    { src: cat, alt: 'photo 12' },
  ];

  return (
    <div>
      <Gallery images={images} />
    </div>
  );
};

export default Home;
