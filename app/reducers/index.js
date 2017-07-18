import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import OrgReducer from './reducer_organization';

const rootReducer = combineReducers({
  organizations: OrgReducer,
  form: formReducer
});

export default rootReducer;
