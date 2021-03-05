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


export {addWater, removeWater};
