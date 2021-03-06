const baseImage = 'w-100 rounded-top mx-auto'
const baseBox = 'mt-1 px-1 pt-2 text-center h-100'
const baseBoxMain = 'my-1 p-5  text-center h-100'
const styleMap = {
  dark: {
    image: `${baseImage} bg-light`,
    box: `${baseBox} text-white bg-dark`
  },
  light: {
    image: `${baseImage} bg-dark`,
    box: `${baseBox} bg-light`
  },
  lightMain: {
    image: `${baseImage} bg-dark`,
    box: `${baseBoxMain} bg-light`
  },
  darkMain: {
    image: `${baseImage} bg-light`,
    box: `${baseBoxMain} text-white bg-dark`
  },
  undefined: {
    image: `${baseImage} bg-dark`,
    box: `${baseBox} bg-light`
  },
  null: {
    image: `${baseImage} bg-dark`,
    box: `${baseBox} bg-light`
  }
}

export default styleMap
