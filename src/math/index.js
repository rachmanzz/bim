import {ArrayOpr, ObjectOpr, isNumber, isArray, isObj} from '../extra'

function isArgNumber (a, b) {
    return isNumber(a) && isNumber(b)
}

function isArgArray(a, b)  {
    return isArray(a) && isArray(b)
}

function isArgObject(a, b) {
    return isObj(a) && isObj(b)
}

export class MathHelper {
    static multiple(a, b) {
        if (isArgNumber(a, b)) return a * b
        if (isArgArray(a, b)) return ArrayOpr(a,b, (a1, b1) => a1 * b1)
        if (isArgObject(a, b)) return ObjectOpr(a,b, (a1, b1) => a1 * b1)
        return null
    }

    static divide (a, b) {
        if (isArgNumber(a, b)) return a / b
        if (isArgArray(a, b))return ArrayOpr(a,b, (a1, b1) => a1 / b1)
        if (isArgObject(a, b)) return ObjectOpr(a,b, (a1, b1) => a1 / b1)
        return null
    }

    static modulus (a, b) {
        if (isArgNumber(a, b)) return a % b
        if (isArgArray(a, b)) return ArrayOpr(a,b, (a1, b1) => a1 % b1)
        if (isArgObject(a, b)) return ObjectOpr(a,b, (a1, b1) => a1 % b1)
        return null
    }

    static add (a, b) {
        if (isArgNumber(a, b)) return a + b
        if (isArgArray(a, b)) return ArrayOpr(a,b, (a1, b1) => a1 + b1)
        if (isArgObject(a, b)) return ObjectOpr(a,b, (a1, b1) => a1 + b1)
        return null
    }

    static subtraction (a, b) {
        if (isArgNumber(a, b)) return a - b
        if (isArgArray(a, b)) return ArrayOpr(a,b, (a1, b1) => a1 - b1)
        if (isArgObject(a, b)) return ObjectOpr(a,b, (a1, b1) => a1 - b1)
        return null
    }
}