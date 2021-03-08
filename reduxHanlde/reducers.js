import {combineReducers} from 'redux';

const defaultSettingState = {
  goal: 2000,
};

const waterReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADDWATER':
      return {...state, [action.payload.uuid]: action.payload.ob};
    case 'REMOVEWATER':
      return state;
    case 'FILLWATER':
      return action.payload;
    default:
      return state;
  };
};

const settingReducer = (state = defaultSettingState, action) => {
  switch (action.type) {
    case 'SAVESETTING':
      return action.payload;
    default:
      return state;
  };
};

export const allReducers = combineReducers({
  water: waterReducer,
  settings: settingReducer,
});


