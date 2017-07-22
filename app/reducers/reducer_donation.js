import { GENERATE_DONATION } from '../actions/index'

export default function(state =  [], action){
  console.log('action', action)
  switch(action.type){
    case GENERATE_DONATION:
      return [ action.payload.data, ...state]
  }
  console.log('Action recieved', action);
  return state;
}
