import {saveSettings, readSettings} from './dataHandler';
import {store} from '../reduxHanlde/store';
import {saveSetting as saveS} from '../reduxHanlde/actions';

const saveSetting = async (ob) => {
  store.dispatch(saveS(ob));
  await saveSettings(ob);
};

const loadSettingToStore = async () => {
  const data = await readSettings();
  if (data) {
    store.dispatch(saveS(data));
  }
};

export {saveSetting, loadSettingToStore};

