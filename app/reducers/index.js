import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import OrgReducer from './reducer_organization';
import DonationReducer from './reducer_donation';

const rootReducer = combineReducers({
  organizations: OrgReducer,
  form: formReducer,
  donation: DonationReducer
});

export default rootReducer;
