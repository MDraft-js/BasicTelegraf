const pixKey = ''
const fetch = require('node-fetch');
module.exports = async q => {
    try {
        return fetch(encodeURI(`https://pixabay.com/api/?key=${pixKey}&q=${q}`)).then(res => res.json());
    } catch (error) {
        console.log(error);
    }
}