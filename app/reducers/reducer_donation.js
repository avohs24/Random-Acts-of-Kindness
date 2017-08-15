import { GENERATE_DONATION } from '../actions/index'

export default function(state =  [], action){
  switch(action.type){
    case GENERATE_DONATION:
      return [ action.payload.data ]
  }
  return state;
}
