// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const suma = (a, b) => a + b

const numeroValido = (numero) => !Number.isNaN(numero)

const handler = async (event) => {
  try {
    const number1 = parseInt(event.queryStringParameters.num1)
    const number2 = parseInt(event.queryStringParameters.num2)
    const resultado = suma(number1, number2);
    if(!numeroValido(number1)) {
      return { statusCode: 400, body: "Formato incorrecto" }
    }
    if(!numeroValido(number2)) {
      return { statusCode: 400, body: "Formato incorrecto" }
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
