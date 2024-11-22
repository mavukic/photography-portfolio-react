import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center; /* Horizontal centering */
  align-items: center; /* Vertical centering */
  height: 65vh; /* Container height */
  text-align: center; /* Text alignment */
  padding: 20px;
  position: relative; /* To allow for pseudo-elements */ background: repeating-linear-gradient(45deg, transparent, transparent 5px, black 5px, black 10px);
`;

const StyledOuterBorder = styled.div`
  width: 80%;
  height: 60%;
  border: 8px solid black;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  /* Rough/sketchy edges with pseudo-elements */
  ::before,
  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
   
    opacity: 0.2;
    z-index: 1;
    transform: rotate(3deg);
    pointer-events: none;
  }
`;

const StyledParagraph = styled.div`
  font-size: 1.2rem; /* Adjust text size */
  line-height: 3.6; /* Line spacing */  
  color: purple; /* Text color */
  box-shadow: 0 4px 18px rgba(177, 153, 232, 0.5);
  border: 2px solid #ddd; /* Border */
  border-radius: 10px;
  padding: 10px;
  z-index: 2; /* Ensure text is above outer border */
`;

const About = () => {
  return (
    <StyledContainer>
      <StyledOuterBorder>
        <StyledParagraph>
          "Passionate about capturing the world through a lens, I'm a photography
          enthusiast always in search of the perfect shot. Whether it's the beauty
          of nature, the essence of human emotions, or the details often overlooked,
          I strive to tell stories through my photos. With a keen eye for composition
          and lighting, I'm constantly exploring new techniques and pushing the
          boundaries of my creativity. Photography is not just a hobby for me—it's a
          way to preserve moments, create art, and connect with the world around me."
        </StyledParagraph>
      </StyledOuterBorder>
    </StyledContainer>
  );
};

export default About;
