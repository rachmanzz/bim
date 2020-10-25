const extra = Object.create(null)
extra.isUndef = v =>  typeof v === 'undefined'
extra.isNotUndef = v => !extra.isUndef(v) 
extra.typeOf = (v, a) => typeof v === a
extra.iString = v => !extra.isUndef(v) && extra.typeOf(v, 'string')
extra.isNumber = v => !extra.isUndef(v) && extra.typeOf(v, 'number')
extra.isFunc = v => !extra.isUndef(v) && extra.typeOf(v, 'function')
extra.isBool = v => !extra.isUndef(v) && extra.typeOf(v, 'boolean')
extra.isArray = v => !extra.isUndef(v) && Array.isArray(v)
extra.isObj = v => !extra.isUndef(v) && !extra.isArray(v) && extra.typeOf(v, 'object')
extra.index = (v, l, opt) => extra.isFunc(opt) ? v.map(opt).indexOf(l) : v.indexOf(l)
extra.hasKey = (v, key) => !extra.isUndef(v) && !extra.isUndef(v[key])


extra.hasIndex = (v, l, opt) => {
    if (!extra.isFunc(opt)) return extra.index(v, l) >= 0 ? true : false
    else return extra.index(v, l, opt) >= 0 ? true : false
}
extra.size = v => {
    if(extra.isObj) {
        let result = 0
        for(let key in v) v.hasOwnProperty(key) && result++
        return result
    } else return !extra.isUndef(v) && v.length
}

extra.fReturn = (v, k, d) => {
    const result = {}
    if (extra.isObj(v) && extra.isArray(k)) {
      const size = k.length
      
      for (let i = 0 ; i < size; i++) {
          let m = k[i]
          if(!extra.isUndef(d) && extra.isFunc(d[m])) {
              if (!extra.isUndef(v[m])) result[m] = d[m](v[m])
              else result[m] = d[m]()
          } else if(!extra.isUndef(v[m])) result[m] = v[m]
      }
    }
    return result
}

extra.merge = (d, d2) => {
    if (extra.isObj(d) && extra.isObj(d2)) {
        const result = d
        for(let key in d2) result[key] = d2[key]
        return result
    }
    return undefined
}

extra.deepMerge = (d, d2) => {
    if (extra.isObj(d) && extra.isObj(d2)) {
        const result = d
        for(let key in d2) {
            if(extra.isObj(result[key]) && extra.isObj(d2[key])) result[key] = extra.deepMerge(result[key], d2[key])
            else result[key] = d2[key]
        }
        return result
    }
    return undefined
}
extra.ArrayOpr = (a, b, func) => {
    if (extra.isArray(a) && extra.isArray(b) && a.length == b.length) {
        const size = a.length
        const arr = []
        let isNumber = true
        for (let i = 0; i < size; i++) {
            if (isNumber) {
                if (extra.isNumber(a[i]) && extra.isNumber(b[i])) arr.push(func(a[i], b[i]))
                else isNumber = false
            }
        }
        if (isNumber) return arr
    }
    return null
}
extra.ObjectOpr = (a, b, func) => {
    if (extra.isObj(a) && extra.isObj(b)) {
        const obj = {}
        let isNumber = true
        for (let key in a) {
            if (isNumber) {
                if(extra.isNumber(a[key])&& extra.isNumber(b[key])) obj[key] = func(a[key], b[key])
                else isNumber = false
            }
        }
        if (isNumber) return obj
    }
    return null
}

export default extra