import axios from 'axios';
import _ from 'lodash'

const API_KEY = '58c5806d11fbc6c7da9b796db4f9a77c';
const ROOT_URL = `http://data.orghunter.com/v1/charitysearch?user_key=${API_KEY}`

export const FETCH_ORG = 'FETCH_ORG';
export const CREATE_USER = 'CREATE_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const GENERATE_DONATION = 'GENERATE_DONATION';

export function Donation(criteria, donation_amount) {
  this.criteria = criteria;
  this.donation_amount = donation_amount;
}
//return 20 orgnaizations
function getOrganizations(term) {
  return axios.get('/api/get-organizations/'+term). // triggers a server side route
  then(function(response) {
    const orgs = JSON.parse(response.data.body);
    return orgs
  })
}
//return a single organizations // it doesn't work
function getOrganization(term, rows) {
  return axios.get(`/api/get-organization/${term}/${rows}`). // triggers a server side route
  then(function(response) {
    const orgs = JSON.parse(response.data.body);
    return orgs
  })
}

export function fetchOrganization(term) {
  const request = getOrganizations(term);
  return {type: FETCH_ORG, payload: request}
}

export function createUser(values, callback) {
  const request = axios.post(`/api/signup`, values).then(() => callback())
  return {type: CREATE_USER, payload: request}
}

export function loginUser(values, callback) {
  const request = axios.post(`/login`, values).then(() => callback())
  return {type: LOGIN_USER, payload: request}
}

export function generateDonation(values, callback) {

  // clean values to separate into donation amount and search criteria and store
  //them on an object
  const donation_amount = (values['donation-amount']);
  const donation_criteria = _.keys(values);
  //remove donation-amount from criteria list
  _.remove(donation_criteria, (key) => {return key === 'donation-amount'});
  var donation = new Donation(donation_criteria, donation_amount);
  //choose a random criteria from the list and set the payload to the orgHunter request
  //payload is the promise/results as data on returned object.
  const random = Math.floor(Math.random() * (donation.criteria.length))
  const term = donation.criteria[random];
  const request = getOrganizations(term);
  callback();
  return {type: GENERATE_DONATION, payload: request}
}

//hook up showing results as we did in the search organizations sitch
