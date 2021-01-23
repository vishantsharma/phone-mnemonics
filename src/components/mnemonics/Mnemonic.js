import styled from "styled-components";
import { useSpring, animated } from "react-spring";

/**
 * A singular mnemonic tile to be rendered within a virtualized
 * react-window list.
 *
 * @param {string} word - The word to be displayed on the mnemonic tile.
 * @param {Object} style - The styling of the parent element to be wrapped
 *                         around the tile. This is used by react-window
 *                         for rendering.
 */
export default function Mnemonic({ word, style }) {
  const props = useSpring({
    transform: "scaleX(1)",
    from: { transform: "scaleX(0)" },
  });

  return (
    <animated.div style={{ ...style, ...props }}>
      <Tile>{word}</Tile>
    </animated.div>
  );
}

const Tile = styled.div`
  text-align: left;
  font-size: 1.5rem;
  color: white;
  margin: 5px;
  height: 40px;
  background: black;
  -webkit-box-shadow: 0px 2px 10px 5px rgba(0, 0, 0, 0.15);
  box-shadow: 5px 3px 5px 2px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding-left: 5px;
`;
