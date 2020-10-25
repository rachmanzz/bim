export const _typeOf = (v, a) => typeof v === a
export const isUndef = v => _typeOf(v, 'undefined')
export const isNotUndef = v => !isUndef(v)
export const iString = v => !isUndef(v) && _typeOf(v, 'string')
export const isNumber = v => !isUndef(v) && _typeOf(v, 'number')
export const isFunc = v => !isUndef(v) && _typeOf(v, 'function')
export const isBool = v => !isUndef(v) && _typeOf(v, 'boolean')
export const isArray = v => !isUndef(v) && Array.isArray(v)
export const isObj = v => !isUndef(v) && !isArray(v) && _typeOf(v, 'object')
export const index = (v, l, opt) => isFunc(opt) ? v.map(opt).indexOf(l) : v.indexOf(l)
export const hasKey = (v, key) => !isUndef(v) && !isUndef(v[key])


export const hasIndex = (v, l, opt) => {
    if (!isFunc(opt)) return index(v, l) >= 0 ? true : false
    else return index(v, l, opt) >= 0 ? true : false
}
export const size = v => {
    if(isObj) {
        let result = 0
        for(let key in v) v.hasOwnProperty(key) && result++
        return result
    } else return !isUndef(v) && v.length
}

export const fReturn = (v, k, d) => {
    const result = {}
    if (isObj(v) && isArray(k)) {
      const size = k.length
      
      for (let i = 0 ; i < size; i++) {
          let m = k[i]
          if(!isUndef(d) && isFunc(d[m])) {
              if (!isUndef(v[m])) result[m] = d[m](v[m])
              else result[m] = d[m]()
          } else if(!isUndef(v[m])) result[m] = v[m]
      }
    }
    return result
}

export const merge = (d, d2) => {
    if (isObj(d) && isObj(d2)) {
        const result = d
        for(let key in d2) result[key] = d2[key]
        return result
    }
    return undefined
}

export const deepMerge = (d, d2) => {
    if (isObj(d) && isObj(d2)) {
        const result = d
        for(let key in d2) {
            if(isObj(result[key]) && isObj(d2[key])) result[key] = deepMerge(result[key], d2[key])
            else result[key] = d2[key]
        }
        return result
    }
    return undefined
}
export const ArrayOpr = (a, b, func) => {
    if (isArray(a) && isArray(b) && a.length == b.length) {
        const size = a.length
        const arr = []
        let _isNumber = true
        for (let i = 0; i < size; i++) {
            if (isNumber) {
                if (isNumber(a[i]) && isNumber(b[i])) arr.push(func(a[i], b[i]))
                else _isNumber = false
            }
        }
        if (_isNumber) return arr
    }
    return null
}
export const ObjectOpr = (a, b, func) => {
    if (isObj(a) && isObj(b)) {
        const obj = {}
        let _isNumber = true
        for (let key in a) {
            if (isNumber) {
                if(isNumber(a[key]) && isNumber(b[key])) obj[key] = func(a[key], b[key])
                else _isNumber = false
            }
        }
        if (_isNumber) return obj
    }
    return null
}