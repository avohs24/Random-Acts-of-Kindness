import axios from 'axios';

const API_KEY = '58c5806d11fbc6c7da9b796db4f9a77c';
const ROOT_URL = `http://data.orghunter.com/v1/charitysearch?user_key=${API_KEY}`

export const FETCH_ORG = 'FETCH_ORG';
export const CREATE_USER = 'CREATE_USER';
export const LOGIN_USER = 'LOGIN_USER';

export function fetchOrganization(term){

  function getOrganizations() {
    return axios.get('/api/get-organizations/'+ term) // triggers a server side route
      .then(function (response) {
        const orgs = JSON.parse(response.data.body);
        return orgs
      })
  }
  const request = getOrganizations();
  return{
    type: FETCH_ORG,
    payload: request
  }
}

export function createUser(values, callback){
  const request = axios.post(`/api/signup`, values)
    .then(()=>callback())
  return{
    type: CREATE_USER,
    payload: request
  }
}

export function loginUser(values, callback){
  const request = axios.post(`/api/login`, values)
    .then(()=>callback())
  return{
    type: LOGIN_USER,
    payload: request
  }
}
