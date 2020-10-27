import {isArray, isObj, isNumber, isNotUndef, iString, isFunc} from '../extra/index'



function isArgNumber (a, b) {
    return isNumber(a) && isNumber(b)
}

function isArgArray(a, b)  {
    return isArray(a) && isArray(b)
}

function isArgObject(a, b) {
    return isObj(a) && isObj(b)
}

export function ArrayOpr(a, b, func) {
    if (isArray(a)) {
        const size = a.length
        const arr = []
        let _isNumber = true
        for (let i = 0; i < size; i++) {
            if (_isNumber) {
                if (isFunc(b) && isUndef(func)) arr.push(b(a[i]))
                else if (isArray(b) && a.length == b.length && isNumber(a[i]) && isNumber(b[i])) arr.push(func(a[i], b[i]))
                else _isNumber = false
            }
        }
        if (_isNumber) return arr
    }
    return null
}
export function ObjectOpr(a, b, func) {
    if (isObj(a)) {
        const obj = {}
        let _isNumber = true
        for (let key in a) {
            if (_isNumber) {
                if (isFunc(b) && isUndef(func)) obj[key]= b(a[key])
                else if(isObj(b) && isNumber(a[key]) && isNumber(b[key])) obj[key] = func(a[key], b[key])
                else _isNumber = false
            }
        }
        if (_isNumber) return obj
    }
    return null
}


export function multiple(a, b) {
    if (isArgNumber(a, b)) return a * b
    if (isArgArray(a, b)) return ArrayOpr(a,b, (a1, b1) => a1 * b1)
    if (isArgObject(a, b)) return ObjectOpr(a,b, (a1, b1) => a1 * b1)
    if (isArray(a) && isNumber(b)) return ArrayOpr(a, a1 => a1 * b)
    if (isObj(a) && isNumber(b)) return ObjectOpr(a, a1 => a1 * b)
    return null
}

export function divide (a, b) {
    if (isArgNumber(a, b)) return a / b
    if (isArgArray(a, b))return ArrayOpr(a,b, (a1, b1) => a1 / b1)
    if (isArgObject(a, b)) return ObjectOpr(a,b, (a1, b1) => a1 / b1)
    if (isArray(a) && isNumber(b)) return ArrayOpr(a, a1 => a1 / b)
    if (isObj(a) && isNumber(b)) return ObjectOpr(a, a1 => a1 / b)
    return null
}

export function modulus (a, b) {
    if (isArgNumber(a, b)) return a % b
    if (isArgArray(a, b)) return ArrayOpr(a,b, (a1, b1) => a1 % b1)
    if (isArgObject(a, b)) return ObjectOpr(a,b, (a1, b1) => a1 % b1)
    if (isArray(a) && isNumber(b)) return ArrayOpr(a, a1 => a1 % b)
    if (isObj(a) && isNumber(b)) return ObjectOpr(a, a1 => a1 % b)
    return null
}

export function add (a, b) {
    if (isArgNumber(a, b)) return a + b
    if (isArgArray(a, b)) return ArrayOpr(a,b, (a1, b1) => a1 + b1)
    if (isArgObject(a, b)) return ObjectOpr(a,b, (a1, b1) => a1 + b1)
    if (isArray(a) && isNumber(b)) return ArrayOpr(a, a1 => a1 + b)
    if (isObj(a) && isNumber(b)) return ObjectOpr(a, a1 => a1 + b)
    return null
}

export function subtraction (a, b) {
    if (isArgNumber(a, b)) return a - b
    if (isArgArray(a, b)) return ArrayOpr(a,b, (a1, b1) => a1 - b1)
    if (isArgObject(a, b)) return ObjectOpr(a,b, (a1, b1) => a1 - b1)
    if (isArray(a) && isNumber(b)) return ArrayOpr(a, a1 => a1 - b)
    if (isObj(a) && isNumber(b)) return ObjectOpr(a, a1 => a1 - b)
    return null
}

export function opr (a, b, oprt) {
    if (isNotUndef(oprt) && iString(oprt)) {
        if (oprt === "*") return multiple(a, b)
        if (oprt === "/") return divide(a, b)
        if (oprt === "%") return modulus(a, b)
        if (oprt === "-") return subtraction(a, b)
        if (oprt === "+") return add(a, b)
    }
    return null
}