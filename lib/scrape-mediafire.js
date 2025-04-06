const axios = require('axios')

async function mediafire(url) {
  const response = await axios.post("https://shinoa.us.kg/api/download/mediafire", {
    text: url,
  }, {
    headers: {
      "accept": "*/*",
      "api_key": "kyuurzy",
      "Content-Type": "application/json"
    }
  });

  return response.data;
}

module.exports = { mediafire }