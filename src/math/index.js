import {ArrayOpr, ObjectOpr, isArray, isObj, isNumber} from '../extra/index'

function isArgNumber (a, b) {
    return isNumber(a) && isNumber(b)
}

function isArgArray(a, b)  {
    return isArray(a) && isArray(b)
}

function isArgObject(a, b) {
    return isObj(a) && isObj(b)
}


export function multiple(a, b) {
    if (isArgNumber(a, b)) return a * b
    if (isArgArray(a, b)) return ArrayOpr(a,b, (a1, b1) => a1 * b1)
    if (isArgObject(a, b)) return ObjectOpr(a,b, (a1, b1) => a1 * b1)
    return null
}

export function divide (a, b) {
    if (isArgNumber(a, b)) return a / b
    if (isArgArray(a, b))return ArrayOpr(a,b, (a1, b1) => a1 / b1)
    if (isArgObject(a, b)) return ObjectOpr(a,b, (a1, b1) => a1 / b1)
    return null
}

export function modulus (a, b) {
    if (isArgNumber(a, b)) return a % b
    if (isArgArray(a, b)) return ArrayOpr(a,b, (a1, b1) => a1 % b1)
    if (isArgObject(a, b)) return ObjectOpr(a,b, (a1, b1) => a1 % b1)
    return null
}

export function add (a, b) {
    if (isArgNumber(a, b)) return a + b
    if (isArgArray(a, b)) return ArrayOpr(a,b, (a1, b1) => a1 + b1)
    if (isArgObject(a, b)) return ObjectOpr(a,b, (a1, b1) => a1 + b1)
    return null
}

export function subtraction (a, b) {
    if (isArgNumber(a, b)) return a - b
    if (isArgArray(a, b)) return ArrayOpr(a,b, (a1, b1) => a1 - b1)
    if (isArgObject(a, b)) return ObjectOpr(a,b, (a1, b1) => a1 - b1)
    return null
}