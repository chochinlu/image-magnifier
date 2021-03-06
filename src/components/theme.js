const theme = {
  borders: ['1px solid'],
  space: [0, '0.5rem', '1rem', '1.5rem', '2rem'],
  colors: {
    primary: '#009688',
    primaryDark: '#00796B',
    primaryLight: '#B2DFDB',
    text: '#FFFFFF',
    primaryText: '#212121',
    secondaryText: '#757575',
    divider: '#BDBDBD',
    accent: '#FFC107'
  }
};

const fontSizes = [
  '1rem',
  '1.2rem',
  '1.4rem',
  '1.6rem',
  '2rem',
  '2.4rem',
  '3.4rem',
  '4.8rem',
  '6rem',
  '9.6rem'
];

theme.fontSizes = {
  ...fontSizes,
  h1: fontSizes[9],
  h2: fontSizes[8],
  h3: fontSizes[7],
  h4: fontSizes[6],
  h5: fontSizes[5],
  h6: fontSizes[4],
  subtitle1: fontSizes[3],
  subtitle2: fontSizes[2],
  body1: fontSizes[3],
  body2: fontSizes[2],
  button: fontSizes[2],
  caption: fontSizes[1],
  overline: fontSizes[0]
};

export default theme;
