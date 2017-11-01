import { combineReducers } from 'redux';
import SavedDataReducer from './SavedDataReducer';

export default combineReducers({
  savedData: SavedDataReducer,
});
