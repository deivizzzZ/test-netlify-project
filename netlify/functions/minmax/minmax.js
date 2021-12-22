// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
function minmax(array) {
  array.sort((a, b) => a - b)
  const min = array[0]
  const max = array[array.length - 1]
  return { "mínimo" : min, "máximo" : max}
}

const handler = async (event) => {
  try {
    // minmax?param=1&param=2&param=450
    const numeros = event.queryStringParameters.param
    const list = numeros.split(", ")
    return {
      statusCode: 200,
      body: JSON.stringify({ message: minmax(list)}),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
