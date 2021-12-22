// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const suma = (a, b) => a + b

const handler = async (event) => {
  try {
    const number1 = parseInt(event.queryStringParameters.num1) || 1
    const number2 = parseInt(event.queryStringParameters.num2) || 2
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `${number1} + ${number2} = ${suma(number1, number2)}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
