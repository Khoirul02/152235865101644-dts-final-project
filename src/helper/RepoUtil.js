const RepoUtil = {
  StoreAsObject: (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      localStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error 
      console.log('Saving Error');
    }
  },

  GetAsObject: (key) => {
    try {
      const jsonValue = localStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  },

  RemoveValue: async (key) => {
    try {
      await localStorage.removeItem(key);
    } catch (e) {
      // remove error
    }

    console.log('Done.');
  },

  ClearAllKeys: async () => {
    try {
      await localStorage.clear();
    } catch (e) {
      // clear error
    }
  },
};

export default RepoUtil;
