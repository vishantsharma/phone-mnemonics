import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  addNumber,
  clearNumber,
  removeLastNumber,
  setWarning,
} from "../../redux/actions";

/**
 * An individual key to be rendered as part of a keypad. Accept a "face" value to
 * determine what to display on the key, as well as an array of letters to be displayed
 * underneath.
 *
 * @param {letter | number} face - The primary item to be displayed on the button. Usually
 *                                 a number, though 'clear' and 'delete' can be provided
 *                                 for functional keys
 * @param {string[]} letters - The letters to be shown under the face text. If providing a
 *                           functional key without a number - can be left undefined.
 */
export default function Key({ face, letters }) {
  const dispatch = useDispatch();
  const { number } = useSelector(({ keypad }) => keypad);
  const { warning } = useSelector(({ status }) => status);

  return face >= 0 ? (
    <KeyButton
      onClick={() =>
        number >= 100000
          ? dispatch(setWarning(true))
          : dispatch(addNumber(face))
      }
      aria-label={`${face} ${letters.join(" ")}`}
      id={`${face}-key`}
    >
      <KeyContent>{face}</KeyContent>
      <KeyContent>{letters.join(" ")}</KeyContent>
    </KeyButton>
  ) : face === "clear" ? (
    <ActionKey
      onClick={() => {
        dispatch(clearNumber());
        dispatch(setWarning(false));
      }}
      id={`${face}-key`}
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
      id={`${face}-key`}
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
