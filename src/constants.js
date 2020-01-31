let DEFAULT_URL = ""
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    DEFAULT_URL = `http://localhost:8000`;
} else {
    DEFAULT_URL = "http://livox-1492702205991.appspot.com";
}

export const post = async (endpoint, postData, contentType = "application/json") => {

    let data = postData;
    let responseOk;
    if (contentType === "application/json") {
      data = JSON.stringify(postData)
    }
  
    let url = DEFAULT_URL + endpoint
    if (endpoint.startsWith('http://') || endpoint.startsWith('https://')) {
      url = endpoint;
    }
  
    let headers = {
      'Content-Type': contentType,
    }
  
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: headers,
        body: data
      }).then(function (response) {
        responseOk = response.ok;
        return response.json();
      }).then(function (json) {
        if (responseOk) {
          resolve(json);
        } else {
          reject(json);
        }
      }).catch(function (error) {
        console.log("Unexpected error" + error)
        reject(error)
      });
    });
  
  }
  