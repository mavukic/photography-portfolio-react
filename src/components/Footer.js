import styled from "styled-components";
import cameraImage from '../images/AdobeStock_857141292_Preview.jpeg';

const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
  color: black;
  background-color: white; /* Dodaj boju pozadine po potrebi */
  bottom: 0;
  width: 100%;
 margin-top:5%;
`;

const StyledImage = styled.img`
  width: 80px; /* Prilagodi veličinu */
  height: auto;
  border-radius: 20px; /* Zaobljeni uglovi */
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p> &copy; 2024 Mateja's Photography Portfolio</p>
      <StyledImage src={cameraImage} alt="Camera" />
    </FooterContainer>
  );
};

export default Footer;
