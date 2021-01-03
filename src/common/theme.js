const customaryStyles = {
  font: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  typography: {
    h1: '4.8rem',
    h2: '4rem',
    headline: '2.4rem',
    default: '1.8rem',
    paragraph: '1.6rem',
    medium: '1.4rem',
    small: '1.2rem',
    verySmall: '0.8rem',
  },
  breakpoints: {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
  },
}

const defaultColors = {
  colors: {
    default: '#061A40',
    grey: '#97999B',
    white: '#fafafa',
    navy: '#338AF3',
    black: '#000000',
    red: '#c70000',
    green: '#82C91E',
    error: '#DD1C1A',
    warning: '#FFA023',
    success: '#3ac69d',
    info: '#8DC6FF',
  },
}

const theme = { ...defaultColors, ...customaryStyles }

const attrSpreader = (obj, attrPrefix) => {
  let spreadedAttrs = ''

  for (const attr in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, attr)) {
      spreadedAttrs += `${attrPrefix}${attr}:${obj[attr]};`
    }
  }
  return spreadedAttrs
}

export const cssVariables = `
:root{
  ${attrSpreader(theme.colors, '--color-')}
  ${attrSpreader(theme.font, '--font-')}
  ${attrSpreader(theme.typography, '--typography-')}
  ${attrSpreader(theme.breakpoints, '--media-')}
}
`

export default theme
