import styled from "styled-components";
import { Key } from "../mnemonics";
import buttons from "../../keypad.json";

export default function Keypad() {
  const buttonOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, "clear", 0, "delete"];
  return (
    <KeypadContainer>
      <ButtonLayout>
        {buttonOrder.map((item) => (
          <Key face={item} letters={buttons[item]} index={item} key={item} />
        ))}
      </ButtonLayout>
    </KeypadContainer>
  );
}

const KeypadContainer = styled.div`
  width: 50%;
  height: 400px;
  -webkit-box-shadow: 0px 2px 10px 5px rgba(0, 0, 0, 0.15);
  box-shadow: 5px 3px 5px 2px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 630px) {
    width: 100%;
  }
`;

const ButtonLayout = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
`;
