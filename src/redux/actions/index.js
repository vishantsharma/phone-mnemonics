import {
    ADD_NUMBER,
    CLEAR_NUMBER,
    DELETE_LAST_NUMBER,
    STORE_MNEMONICS,
    SHOW_WARNING,
  } from "../constants/constants";
 
  export const addNumber = (payload) => ({ type: ADD_NUMBER, payload });
  export const clearNumber = () => ({ type: CLEAR_NUMBER });
  export const removeLastNumber = () => ({
    type: DELETE_LAST_NUMBER,
  });
  export const storeMnemonics = (payload) => ({ type: STORE_MNEMONICS, payload });
  export const setWarning = (payload) => ({ type: SHOW_WARNING, payload });
  