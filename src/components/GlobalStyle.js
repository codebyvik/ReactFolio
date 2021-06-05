import { createGlobalStyle } from "styled-components";
import { Colors } from "../Pages/commonStyle";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;

}

body {
  font-family: "Montserrat", sans-serif;
  overflow-x: hidden !important;
  transition: all 0.3s linear;
  ${({ darkMode }) =>
    darkMode
      ? `background : ${Colors.darkbg}; color:${Colors.white}`
      : `color : ${Colors.secondaryColor}`}
}
span {
  color : ${Colors.mainColor} ;
}
a {
  text-decoration: none;
  color:${Colors.mainColor};
  cursor: pointer;
}

.a-btn {
  font-size: 2rem;
  font-weight: bold;
  border: 2px solid ${Colors.mainColor};
  padding: 0.5rem 1rem;
  transition: 0.5s ease;
  &:hover {
    background-color:${Colors.mainColor};
    color: ${Colors.white};
  }
}

h1 {
  font-size: 4.5rem;
  font-weight: bold;
}

h3 {
  font-size: 3rem;
}

p{
        padding: 1rem 0rem;
        font-size: 1.4rem;
        line-height: 150%;
}


`;

export default GlobalStyle;
