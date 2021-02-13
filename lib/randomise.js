export function randomise(operators) {

  class Meeting {
    constructor(host, cohost, mics) {
      this._host = host;
      this._cohost = cohost;
      this._mics = mics;
    };
  
    //Getters for checking input types
    get host() {
      if (this._host != undefined) {
        return this._host;
      } else {
        return 'None assigned';
      }
    };
  
    get cohost() {
      if (this._cohost != undefined) {
        return this._cohost;
      } else {
        return 'None assigned';
      }
    };

    get mics() {
      if (this._mics != undefined) {
        return this._mics;
      } else {
        return 'None assigned';
      }
    };
  };

  
  function hasDuplicate(obj) {
    const arr = Object.values(obj);
    return arr.some((val, i) => arr.indexOf(val) !== i);
  }

  function randomIndex(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  const newInstance = new Meeting(randomIndex(operators), randomIndex(operators), randomIndex(operators));

  // return hasDuplicate(newInstance) ? randomise() : newInstance;

  if (hasDuplicate(newInstance)) {
    console.log('instance had duplicates');
    randomise();
  } else {
    return newInstance;
  };
};
