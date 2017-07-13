import { combineReducers } from 'redux';
import OrgReducer from './reducer_organization'

const rootReducer = combineReducers({
  organizations: OrgReducer
});

export default rootReducer;
