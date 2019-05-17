const bim = {}
bim.isUndef = v =>  typeof v === 'undefined'
bim.isNotUndef = v => !bim.isUndef(v) 
bim.typeOf = (v, a) => typeof v === a
bim.iString = v => !bim.isUndef(v) && bim.typeOf(v, 'string')
bim.isNumber = v => !bim.isUndef(v) && bim.typeOf(v, 'number')
bim.isFunc = v => !bim.isUndef(v) && bim.typeOf(v, 'function')
bim.isBool = v => !bim.isUndef(v) && bim.typeOf(v, 'boolean')
bim.isArray = v => !bim.isUndef(v) && Array.isArray(v)
bim.isObj = v => !bim.isUndef(v) && !bim.isArray(v) && bim.typeOf(v, 'object')

/**
 * @param  {object} v
 * @param  {Array} k
 * @param  {object} d
 */
bim.fReturn = (v, k, d) => {
    const result = {}
    if (bim.isObj(v) && bim.isArray(k)) {
      const size = k.length
      
      for (let i = 0 ; i < size; i++) {
          let m = k[i]
          if(!bim.isUndef(d) && bim.isFunc(d[m])) {
              if (!bim.isUndef(v[m])) result[m] = d[m](v[m])
              else result[m] = d[m]()
          } else if(!bim.isUndef(v[m])) result[m] = v[m]
      }
    }
    return result
}



