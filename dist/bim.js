"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var bim = {};

bim.isUndef = function (v) {
  return typeof v === 'undefined';
};

bim.isNotUndef = function (v) {
  return !bim.isUndef(v);
};

bim.typeOf = function (v, a) {
  return _typeof(v) === a;
};

bim.iString = function (v) {
  return !bim.isUndef(v) && bim.typeOf(v, 'string');
};

bim.isNumber = function (v) {
  return !bim.isUndef(v) && bim.typeOf(v, 'number');
};

bim.isFunc = function (v) {
  return !bim.isUndef(v) && bim.typeOf(v, 'function');
};

bim.isBool = function (v) {
  return !bim.isUndef(v) && bim.typeOf(v, 'boolean');
};

bim.isArray = function (v) {
  return !bim.isUndef(v) && Array.isArray(v);
};

bim.isObj = function (v) {
  return !bim.isUndef(v) && !bim.isArray(v) && bim.typeOf(v, 'object');
};

bim.index = function (v, l, opt) {
  return bim.isFunc(opt) ? v.map(opt).indexOf(l) : v.indexOf(l);
};

bim.hasKey = function (v, key) {
  return !bim.isUndef(v) && !bim.isUndef(v[key]);
};

bim.hasIndex = function (v, l, opt) {
  if (!bim.isFunc(opt)) return bim.index(v, l) >= 0 ? true : false;else return bim.index(v, l, opt) >= 0 ? true : false;
};

bim.size = function (v) {
  if (bim.isObj) {
    var result = 0;

    for (var key in v) {
      v.hasOwnProperty(key) && result++;
    }

    return result;
  } else return !bim.isUndef(v) && v.length;
};
/**
 * @param  {object} v
 * @param  {Array} k
 * @param  {object} d
 */


bim.fReturn = function (v, k, d) {
  var result = {};

  if (bim.isObj(v) && bim.isArray(k)) {
    var size = k.length;

    for (var i = 0; i < size; i++) {
      var m = k[i];

      if (!bim.isUndef(d) && bim.isFunc(d[m])) {
        if (!bim.isUndef(v[m])) result[m] = d[m](v[m]);else result[m] = d[m]();
      } else if (!bim.isUndef(v[m])) result[m] = v[m];
    }
  }

  return result;
};

bim.merge = function (d, d2) {
  if (bim.isObj(d) && bim.isObj(d2)) {
    var result = d;

    for (var key in d2) {
      result[key] = d2[key];
    }

    return result;
  }

  return undefined;
};

bim.deepMerge = function (d, d2) {
  if (bim.isObj(d) && bim.isObj(d2)) {
    var result = d;

    for (var key in d2) {
      if (bim.isObj(result[key]) && bim.isObj(d2[key])) result[key] = bim.deepMerge(result[key], d2[key]);else result[key] = d2[key];
    }

    return result;
  }

  return undefined;
};

module.exports = bim;