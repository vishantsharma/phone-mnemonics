import { Mnemonic } from "../mnemonics";
import { useSelector } from "react-redux";
import { FixedSizeList } from "react-window";
import styled from "styled-components";

export default function MnemonicList() {
  const { mnemonics } = useSelector(({ keypad }) => keypad);

  const Row = ({ index, style }) => (
    <Mnemonic word={mnemonics[index]} key={mnemonics[index]} style={style} />
  );

  return (
    <ListWrapper data-name="mnemonic-list">
      <FixedSizeList
        width={"100%"}
        height={400}
        itemCount={mnemonics.length}
        itemSize={50}
      >
        {Row}
      </FixedSizeList>
    </ListWrapper>
  );
}

const ListWrapper = styled.div`
  width: 50%;
  -webkit-box-shadow: 0px 2px 10px 5px rgba(0, 0, 0, 0.15);
  box-shadow: 5px 3px 5px 2px rgba(0, 0, 0, 0.05);
  background: white;
  overflow-x: hidden;
  @media (max-width: 630px) {
    width: 100%;
  }
`;
