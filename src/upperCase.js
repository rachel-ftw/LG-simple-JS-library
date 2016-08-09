const letters = "abcdefghijklmnopqrstuvwxyz"
const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]

const LETTER_MAP = letters.split('').reduce( (previous, current, index ) => {
  const upper = String.fromCharCode( letters.charCodeAt( index ) - 32 )

  previous[ current ] = upper
  previous[ upper ] = upper

  return previous
}, {})

const NUMBER_MAP = numbers.reduce( (previous, current, index) => {
    previous[ current ] = current

    return previous
}, {})


const MAP = Object.assign( {}, LETTER_MAP, NUMBER_MAP, { ' ': ' ' } )

const upperCase = input => {
  let stringified = input + ''
  let result = ""

  stringified = stringified.replace( /[^\dA-Za-z]/, ' ' )

  stringified = stringified.replace( /(\w+)([A-Z])(\w+)/, "$1 $2$3")

  stringified = stringified.replace( /([A-Za-z]+)(\d)([A-Za-z0-9]+)/, "$1 $2$3")

  stringified = stringified.trim()

  for( let i = 0; i < stringified.length; i++ ) {
    result += MAP[ stringified[ i ]]
  }

  return result
}

export {upperCase}
