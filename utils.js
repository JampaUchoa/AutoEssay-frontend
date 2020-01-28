export const get = async (endpoint, type = "json") => {

    let url = DEFAULT_URL + endpoint
    if (endpoint.startsWith('http://') || endpoint.startsWith('https://')) {
      url = endpoint;
    }
    /*
    const headers = {}
    if (getUserLogin()) {
      headers['Authorization'] = `JWT ${window.localStorage.getItem("token")}`;
    }
    */
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "GET",
        headers
      }).then(function (response) {
        if (response.status === 200) {
          if (type === "blob") {
            return response.blob();
          }
          return response.json();
        } else {
          console.error(response.statusText + " at " + url);
          reject(response.status);
        }
      }).then(function (json) {
        resolve(json);
      }).catch(function (error) {
        console.error("Error: could not retrieve " + url);
        reject(error)
      });
    });
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
      'Content-Type': contentType
    }
    /*
    if (getUserLogin()) {
      headers['Authorization'] = `JWT ${window.localStorage.getItem("token")}`;
    }
    */
  
    // Form data bug, that if specified will break the uploading
    // https://github.com/github/fetch/issues/505
    if (contentType === "multipart/form-data") {
      delete headers['Content-Type'];
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
          toast.error(json.message);
          reject(json);
        }
      }).catch(function (error) {
        console.log("Unexpected error" + error)
        reject(error)
      });
    });
  
  }