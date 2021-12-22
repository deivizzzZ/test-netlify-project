// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const suma = (a, b) => a + b

function numeroValido(numero) {
  if(numero !== 'number' || numero === NaN) {
    return false
  }
  return true
}

const handler = async (event) => {
  try {
    const number1 = parseInt(event.queryStringParameters.num1) || 1
    const number2 = parseInt(event.queryStringParameters.num2) || 2
    const resultado = suma(number1, number2);
    if(!numeroValido(number1)) {
      return { statusCode: 400, body: `${number1} no es un formato adecuado` }
    }
    if(!numeroValido(number2)) {
      return { statusCode: 400, body: `${number2} no es un formato adecuado` }
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `${number1} + ${number2} = ${resultado}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
