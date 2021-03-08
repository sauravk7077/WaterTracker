import {saveSettings} from './dataHandler';
import {store} from '../reduxHanlde/store';
import {saveSetting as saveS} from '../reduxHanlde';

const saveSetting = async (ob) => {
  store.dispatch(saveS(ob));
  await saveSettings(ob);
};

export {saveSetting};

