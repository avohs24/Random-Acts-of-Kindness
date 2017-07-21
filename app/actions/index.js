import axios from 'axios';
import _ from 'lodash'

const API_KEY = '58c5806d11fbc6c7da9b796db4f9a77c';
const ROOT_URL = `http://data.orghunter.com/v1/charitysearch?user_key=${API_KEY}`

export const FETCH_ORG = 'FETCH_ORG';
export const CREATE_USER = 'CREATE_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const GENERATE_DONATION = 'GENERATE_DONATION';

export function Donation(criteria, donation_amount){
  this.criteria = criteria;
  this.donation_amount = donation_amount;
}

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

export function generateDonation(values, callback){
  // const request = axios.post(`/api/donation`, values)
  //   .then(()=>callback())
  // request should be list of orgs
  // clean values to separate into donation amount and search Criteria
  //right now the object comes back where the keys are the categories. lets just
  //those little keys in an array.
  //use search criteria to make an org hunter request.
  //return one org from that request
  //make that request again each time a new org is needed.
  console.log('values:', values);
    const donation_criteria = _.keys(values);
    _.remove(donation_criteria,(key)=> { return key === 'donation-amount'});
    console.log('criteria',donation_criteria);
    const donation_amount = _.findKey('donation-amount');
    var donation = new Donation(donation_criteria, donation_amount);
    console.log('donation:', donation);
    const request = values;
    return{
      type: GENERATE_DONATION,
      payload: request
    }
  }
