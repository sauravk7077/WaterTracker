const addWater = (ob) => {
  return {
    type: 'ADDWATER',
    payload: ob,
  };
};


const removeWater = (id) => {
  return {
    type: 'REMOVEWATER',
    payload: id,
  };
};

const fillWater = (obs) => {
  return {
    type: 'FILLWATER',
    payload: obs,
  };
};

const saveSetting = (obs) => {
  return {
    type: 'SAVESETTING',
    payload: obs,
  };
};


export {addWater, removeWater, fillWater, saveSetting};
