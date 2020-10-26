(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.bimn = {}));
}(this, (function (exports) { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  var _typeOf = function _typeOf(v, a) {
    return _typeof(v) === a;
  };
  var isUndef = function isUndef(v) {
    return _typeOf(v, 'undefined');
  };
  var isNotUndef = function isNotUndef(v) {
    return !isUndef(v);
  };
  var iString = function iString(v) {
    return !isUndef(v) && _typeOf(v, 'string');
  };
  var isNumber = function isNumber(v) {
    return !isUndef(v) && _typeOf(v, 'number');
  };
  var isFunc = function isFunc(v) {
    return !isUndef(v) && _typeOf(v, 'function');
  };
  var isBool = function isBool(v) {
    return !isUndef(v) && _typeOf(v, 'boolean');
  };
  var isArray = function isArray(v) {
    return !isUndef(v) && Array.isArray(v);
  };
  var isObj = function isObj(v) {
    return !isUndef(v) && !isArray(v) && _typeOf(v, 'object');
  };
  var index = function index(v, l, opt) {
    return isFunc(opt) ? v.map(opt).indexOf(l) : v.indexOf(l);
  };
  var hasKey = function hasKey(v, key) {
    return !isUndef(v) && !isUndef(v[key]);
  };
  var hasIndex = function hasIndex(v, l, opt) {
    if (!isFunc(opt)) return index(v, l) >= 0 ? true : false;else return index(v, l, opt) >= 0 ? true : false;
  };
  var size = function size(v) {
    if (isObj) {
      var result = 0;

      for (var key in v) {
        v.hasOwnProperty(key) && result++;
      }

      return result;
    } else return !isUndef(v) && v.length;
  };
  var fReturn = function fReturn(v, k, d) {
    var result = {};

    if (isObj(v) && isArray(k)) {
      var _size = k.length;

      for (var i = 0; i < _size; i++) {
        var m = k[i];

        if (!isUndef(d) && isFunc(d[m])) {
          if (!isUndef(v[m])) result[m] = d[m](v[m]);else result[m] = d[m]();
        } else if (!isUndef(v[m])) result[m] = v[m];
      }
    }

    return result;
  };
  var merge = function merge(d, d2) {
    if (isObj(d) && isObj(d2)) {
      var result = d;

      for (var key in d2) {
        result[key] = d2[key];
      }

      return result;
    }

    return undefined;
  };
  var deepMerge = function deepMerge(d, d2) {
    if (isObj(d) && isObj(d2)) {
      var result = d;

      for (var key in d2) {
        if (isObj(result[key]) && isObj(d2[key])) result[key] = deepMerge(result[key], d2[key]);else result[key] = d2[key];
      }

      return result;
    }

    return undefined;
  };
  var ArrayOpr = function ArrayOpr(a, b, func) {
    if (isArray(a)) {
      var _size2 = a.length;
      var arr = [];
      var _isNumber = true;

      for (var i = 0; i < _size2; i++) {
        if (isNumber) {
          if (isFunc(b) && isUndef(func)) arr.push(b(a[i]));
          if (isArray(b) && a.length == b.length && isNumber(a[i]) && isNumber(b[i])) arr.push(func(a[i], b[i]));else _isNumber = false;
        }
      }

      if (_isNumber) return arr;
    }

    return null;
  };
  var ObjectOpr = function ObjectOpr(a, b, func) {
    if (isObj(a)) {
      var obj = {};
      var _isNumber = true;

      for (var key in a) {
        if (isNumber) {
          if (isFunc(b) && isUndef(func)) obj[key] = b(a[key]);
          if (isObj(b) && isNumber(a[key]) && isNumber(b[key])) obj[key] = func(a[key], b[key]);else _isNumber = false;
        }
      }

      if (_isNumber) return obj;
    }

    return null;
  };

  function isArgNumber(a, b) {
    return isNumber(a) && isNumber(b);
  }

  function isArgArray(a, b) {
    return isArray(a) && isArray(b);
  }

  function isArgObject(a, b) {
    return isObj(a) && isObj(b);
  }

  function multiple(a, b) {
    if (isArgNumber(a, b)) return a * b;
    if (isArgArray(a, b)) return ArrayOpr(a, b, function (a1, b1) {
      return a1 * b1;
    });
    if (isArgObject(a, b)) return ObjectOpr(a, b, function (a1, b1) {
      return a1 * b1;
    });
    if (isArray(a) && isNumber(b)) return ArrayOpr(a, function (a1) {
      return a1 * b;
    });
    if (isObj(a) && isNumber(b)) return ObjectOpr(a, function (a1) {
      return a1 * b;
    });
    return null;
  }
  function divide(a, b) {
    if (isArgNumber(a, b)) return a / b;
    if (isArgArray(a, b)) return ArrayOpr(a, b, function (a1, b1) {
      return a1 / b1;
    });
    if (isArgObject(a, b)) return ObjectOpr(a, b, function (a1, b1) {
      return a1 / b1;
    });
    if (isArray(a) && isNumber(b)) return ArrayOpr(a, function (a1) {
      return a1 / b;
    });
    if (isObj(a) && isNumber(b)) return ObjectOpr(a, function (a1) {
      return a1 / b;
    });
    return null;
  }
  function modulus(a, b) {
    if (isArgNumber(a, b)) return a % b;
    if (isArgArray(a, b)) return ArrayOpr(a, b, function (a1, b1) {
      return a1 % b1;
    });
    if (isArgObject(a, b)) return ObjectOpr(a, b, function (a1, b1) {
      return a1 % b1;
    });
    if (isArray(a) && isNumber(b)) return ArrayOpr(a, function (a1) {
      return a1 % b;
    });
    if (isObj(a) && isNumber(b)) return ObjectOpr(a, function (a1) {
      return a1 % b;
    });
    return null;
  }
  function add(a, b) {
    if (isArgNumber(a, b)) return a + b;
    if (isArgArray(a, b)) return ArrayOpr(a, b, function (a1, b1) {
      return a1 + b1;
    });
    if (isArgObject(a, b)) return ObjectOpr(a, b, function (a1, b1) {
      return a1 + b1;
    });
    if (isArray(a) && isNumber(b)) return ArrayOpr(a, function (a1) {
      return a1 + b;
    });
    if (isObj(a) && isNumber(b)) return ObjectOpr(a, function (a1) {
      return a1 + b;
    });
    return null;
  }
  function subtraction(a, b) {
    if (isArgNumber(a, b)) return a - b;
    if (isArgArray(a, b)) return ArrayOpr(a, b, function (a1, b1) {
      return a1 - b1;
    });
    if (isArgObject(a, b)) return ObjectOpr(a, b, function (a1, b1) {
      return a1 - b1;
    });
    if (isArray(a) && isNumber(b)) return ArrayOpr(a, function (a1) {
      return a1 - b;
    });
    if (isObj(a) && isNumber(b)) return ObjectOpr(a, function (a1) {
      return a1 - b;
    });
    return null;
  }
  function opr(a, b, oprt) {
    if (isNotUndef(oprt) && iString(oprt)) {
      if (oprt === "*") return multiple(a, b);
      if (oprt === "/") return divide(a, b);
      if (oprt === "%") return modulus(a, b);
      if (oprt === "-") return subtraction(a, b);
      if (oprt === "+") return add(a, b);
    }

    return null;
  }

  exports.ArrayOpr = ArrayOpr;
  exports.ObjectOpr = ObjectOpr;
  exports._typeOf = _typeOf;
  exports.add = add;
  exports.deepMerge = deepMerge;
  exports.divide = divide;
  exports.fReturn = fReturn;
  exports.hasIndex = hasIndex;
  exports.hasKey = hasKey;
  exports.iString = iString;
  exports.index = index;
  exports.isArray = isArray;
  exports.isBool = isBool;
  exports.isFunc = isFunc;
  exports.isNotUndef = isNotUndef;
  exports.isNumber = isNumber;
  exports.isObj = isObj;
  exports.isUndef = isUndef;
  exports.merge = merge;
  exports.modulus = modulus;
  exports.multiple = multiple;
  exports.opr = opr;
  exports.size = size;
  exports.subtraction = subtraction;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
