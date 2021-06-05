// Animation
import { motion } from "framer-motion";
import { fadeRightAnim, LineAnim, fadeLeftAnim } from "../Animation";
// components
import { useScroll } from "../components/useScroll";
// styles
import styled from "styled-components";
import { Colors, Div, Line } from "./commonStyle";

const Contact = ({ darkMode }) => {
  const [element, controls] = useScroll();

  return (
    <StyledContact
      ref={element}
      variants={fadeLeftAnim}
      animate={controls}
      initial="hidden"
      id="contact"
    >
      <div>
        <h3>Contact</h3>
        <Line variants={LineAnim} />
      </div>
      <Details>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          variants={fadeRightAnim}
          darkMode={darkMode}
        >
          <label>Name :</label>
          <input type="text" name="name" placeholder="" required />
          <label>Email :</label>
          <input type="email" name="email" placeholder="" required />
          <label>Message :</label>
          <textarea name="message" placeholder="" required />
          <button type="submit" className="a-btn">
            Send
          </button>
        </Form>
      </Details>
    </StyledContact>
  );
};

const StyledContact = styled(Div)`
  padding: 4.5rem 1rem 1rem 1rem;
  margin-top: 2rem;
  @media (max-width: 1030px) {
    height: auto;
  }
`;

const Details = styled(motion.div)`
  width: 50%;
  border-radius: 10px;
  @media (max-width: 1030px) {
    width: 90%;
  }
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  label {
    font-size: 1.2rem;
  }

  input {
    width: 100%;
    height: 3rem;
    margin: 2rem;
    padding: 0.5rem 1rem;
    outline: none;
    border: 1px solid ${Colors.mainColor};
    border-radius: 0.5rem;
    background: #0fe6c221;
    font-size: 1.5rem;
    transition: all 0.5s ease;
    ${({ darkMode }) => (darkMode ? `color: ${Colors.white} ;` : "")}
    &:focus {
      box-shadow: 0px 0px 10px 0px ${Colors.mainColor};
      border: none;
    }
  }

  textarea {
    width: 100%;
    height: 10rem;
    margin: 2rem;
    padding: 0.5rem 1rem;
    outline: none;
    border: 1px solid ${Colors.mainColor};
    border-radius: 0.5rem;
    background: #0fe6c221;
    font-size: 1.5rem;
    transition: all 0.5s ease;
    resize: none;
    overflow-y: scroll;
    ${({ darkMode }) => (darkMode ? `color: ${Colors.white} ;` : "")}
    &:focus {
      box-shadow: 0px 0px 10px 0px ${Colors.mainColor};
      border: none;
    }

    &::-webkit-scrollbar {
      width: 0.3rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${Colors.mainColor};
    }

    &::-webkit-scrollbar-track {
      background: ${Colors.secondaryColor};
    }
  }
  button {
    background: transparent;
  }
  .a-btn {
    margin: 2rem 0rem;
    font-size: 1.7rem;
    padding: 0.7rem 3rem;
    color: #03b3b0;
    cursor: pointer;
    border-radius: 0.2rem;
    &:hover {
      color: ${Colors.white};
    }
  }

  @media (max-width: 1030px) {
    input {
      margin: 1rem 0;
    }
    textarea {
      margin: 1rem 0;
    }
    .a-btn {
      margin: 1rem 0rem;
      font-size: 1.1rem;
    }
  }
`;

export default Contact;
