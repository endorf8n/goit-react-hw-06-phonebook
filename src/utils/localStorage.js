export const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log('error message:', e);
  }
};

export const load = key => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    console.log('error message:', e);
  }
};
