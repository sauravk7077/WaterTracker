import {combineReducers} from 'redux';

const waterReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADDWATER':
      return {...state, [action.payload.uuid]: action.payload.ob};
    case 'REMOVEWATER':
      return state;
    default:
      return state;
  };
};

const settingReducer = (state = 0, action) => {
  switch (action.type) {
    case 'SAVESETTING':
      return state + 1;
    default:
      return state;
  };
};

export const allReducers = combineReducers({
  water: waterReducer,
  settings: settingReducer,
});


