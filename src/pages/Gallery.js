import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 40px; 
  height:100vh;
`;

const GalleryImage = styled(motion.img)`
  width: 100%;
  height: auto;
  border-radius: 10px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const Gallery = ({ images }) => {
  return (
    <GalleryContainer>
      {images.map((image, index) => (
        <GalleryImage
          key={index}
          src={image.src}
          alt={image.alt}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </GalleryContainer>
  );
};

export default Gallery;
