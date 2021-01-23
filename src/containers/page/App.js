import styled from "styled-components";
import { Keypad, ScrollBar } from "../../components/keypad/index";
import { NumberField } from "../../components/mnemonics";

export default function App() {
  return (
    <AppElement>
      <NumberField />
      <KeypadSection>
        <Keypad />
        <ScrollBar />
      </KeypadSection>
    </AppElement>
  );
}

const AppElement = styled.main`
  text-align: center;
  background-color: #FFF;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
  max-width: 800px;
  margin: 0 auto;
`;

const KeypadSection = styled.section`
  display: flex;
  width: 100%;
  @media (max-width: 630px) {
    flex-direction: column;
  }
`;
