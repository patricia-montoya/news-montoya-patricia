export const setColor = {
  mainBlack: '#000000',
  secondaryBlack: '#212121',
  lightBlack: '#444444',
  mainWhite: '#ffffff',
  secondaryWhite: '#eeeeee',
  mainGray: '#ededed',
  secondaryGray: '#d6d6d6',
  darkGray: '#999999',
  mainBlue: '#4a90e2',
};

export const setFont = {
  main: `font-family: 'Lato', sans-serif;`,
};

export const setShadow = {
  light: 'box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75)',
  dark: 'box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75)',
  darkest: 'box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75)',
};

export const setBorder = ({
  width = '2px',
  style = 'solid',
  color = 'black',
}) => {
  return `border: ${width} ${style} ${color}`;
};
