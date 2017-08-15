import { FETCH_ORG } from '../actions/index'

export default function(state =  [], action){
  switch(action.type){
    case FETCH_ORG:
      return [ action.payload.data, ...state]
  }
  return state;
}
