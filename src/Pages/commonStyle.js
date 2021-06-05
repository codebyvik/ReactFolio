import styled from "styled-components";
import { motion } from "framer-motion";

export const Colors = {
  mainColor: "#03b3b0",
  secondaryColor: "#272341",
  darkbg: "#222",
  white: "white",
};

export const Line = styled(motion.div)`
  background: ${Colors.mainColor};
  width: 100%;
  height: 0.5rem;
  border-radius: 10px;
`;

export const Div = styled(motion.div)`
  width: 100vw;
  height: calc(100vh - 4.5rem);
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
