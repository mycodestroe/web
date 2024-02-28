/**
 * @description: 观察者模式
 * @param {*} obj
 * @return {*}
 */
const observer = (obj) => {
  for (let key in obj) {
    let _value = obj[key];
    const funcs = [];
    Object.defineProperty(obj, key, {
      get: () => {
        const { _func } = window;
        if (_func && !funcs.includes(_func)) {
          funcs.push(_func);
        }
        return _value;
      },
      set: (val) => {
        _value = val;
        for (let i = 0; i < funcs.length; i++) {
          funcs[i]();
        }
      },
    });
  }
};

const autoFunc = (fn) => {
  window._func = fn;
  fn();
  window._func = null;
};
