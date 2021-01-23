import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  addNumber,
  clearNumber,
  removeLastNumber,
  setWarning,
} from "../../redux/actions";

export default function Key({ value, data }) {
  const dispatch = useDispatch();
  const { number } = useSelector(({ keypad }) => keypad);
  const { warning } = useSelector(({ status }) => status);

  return value >= 0 ? (
    <KeyButton
      onClick={() =>
        number >= 100000
          ? dispatch(setWarning(true))
          : dispatch(addNumber(value))
      }
      aria-label={`${value} ${data.join(" ")}`}
      id={`${value}-key`}
    >
      <KeyContent>{value}</KeyContent>
      <KeyContent>{data.join(" ")}</KeyContent>
    </KeyButton>
  ) : value === "clear" ? (
    <ActionKey
      onClick={() => {
        dispatch(clearNumber());
        dispatch(setWarning(false));
      }}
      id={`${value}-key`}
      aria-label="clear"
    >
      {'Reset'}
    </ActionKey>
  ) : (
    <ActionKey
      onClick={() => {
        dispatch(removeLastNumber());
        warning && dispatch(setWarning(false));
      }}
      id={`${value}-key`}
      aria-label="delete"
    >
      {'Back'}
    </ActionKey>
  );
}

const KeyButton = styled.button`
  border: none;
  background: none;
  font-size: 1rem;
  color: black;
  height: 80px;
  width: 90px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  border: 1px solid black;

  &:nth-child(-n + 3) {
    border-top: none;
  }
  &:nth-child(n - 3) {
    border-bottom: none;
  }
  &:nth-child(3n + 1) {
    border-left: none;
  }
  &:nth-child(3n + 3) {
    border-right: none;
  }

  &:hover {
    color: white;
    background: black;
    transition: 0.3s ease-in-out;
  }
`;

const ActionKey = styled(KeyButton)`
  justify-content: center;
  align-items: center;
  svg {
    width: 40%;
    fill: black;
  }
  &:hover svg {
    fill: white;
  }
`;

const KeyContent = styled.p`
  margin: 10px;
`;
