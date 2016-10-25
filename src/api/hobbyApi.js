class HobbyApi {
  static getAllHobbies() {
    return fetch('https://cbohara-catbook-api.herokuapp.com/api/v1/hobbies.json').then(response => {
      return response.json()
    }).catch(error => {
      return error
    });
  }
};

export default HobbyApi;
