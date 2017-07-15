import axios from 'axios';

const API_KEY = '58c5806d11fbc6c7da9b796db4f9a77c';
const ROOT_URL = `http://data.orghunter.com/v1/charitysearch?user_key=${API_KEY}`

export const FETCH_ORG = 'FETCH_ORG'

export function fetchOrganization(term){

  function getOrganizations() {
    return axios.get('/api/get-organizations/'+ term) // triggers a server side route
      .then(function (response) {

        const orgs = JSON.parse(response.data.body);
        (console.log(orgs));
        return orgs
      })
  }
  const request = getOrganizations();

  return{
    type: FETCH_ORG,
    payload: request
  }
}

// TODO: address CORS error: https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
// https://www.codeschool.com/discuss/t/how-to-solve-no-access-control-allow-origin-header-is-present-on-the-requested-resource-origin-null-is-therefore-not-allowed-access-in-angular-js/28989
