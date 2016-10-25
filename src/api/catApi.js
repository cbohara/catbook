class CatApi {
  static getAllCats() {
    return fetch('https://cbohara-catbook-api.herokuapp.com/api/v1/cats.json').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default CatApi;
