// src/styles/globalStyles.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.page-container {
  display: grid;
  grid-template-rows: 2fr auto; /* First row takes available space, second (footer) is auto sized */
  height: 80vh; /* Ensures the container takes up full screen height */
}

.content {
  padding: 120px;
}

.footer {
  background-color: white;
  color: white;
  padding: 10px;
  text-align: center;
}

`;
