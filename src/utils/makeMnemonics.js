const makeMnemonics = (number, buttons, max = 6) => {
    const numbers = Array.from(String(number), Number);
    if (numbers.length > max) 
    return false;
    const letters = numbers.map((number) => [number, ...buttons[number]]);
    return letters.reduce(
      (acc, curr) => {
        const mnemonicArr = [];
        acc.forEach((stem) =>
          curr.forEach((next) => mnemonicArr.push(`${stem}${next}`))
        );
        return mnemonicArr;
      },
      [[]]
    );
  };
  
  module.exports = makeMnemonics;
  