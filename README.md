# BIMN

## Intall
`npm install --save bimn`

or

`yarn add bimn`


# Math

- multiple(arg, arg2)
    1. multiple(number, number)
        
        it mean arg times arg2 (arg x arg2) return number
    2. multiple(array, number)
        
        each item (number) of arg(array) times to arg2(number) return array
    3. multiple(object, number)
        
        each item (number) of arg(object) times to arg2(number) return object
    4. multiple(array, array)
        
        each item (number) of arg(array) times to arg2(array) with same index return array
    5. multiple(object, object)
        
        each item (number) of arg(object) times to arg2(object) with same key return object
- divide(arg, arg2)
- modulus(arg, arg2)
- add(arg, arg2)
- subtraction(arg, arg2)
- opr(arg, arg2, operator)
    
    alternative of math function, example: opr([1,2], [3, 5], "%") same with modulus([1,2], [3, 5])

# Extra 
- isUndef(v)
- isNotUndef(v)
- _typeOf(v, type)
- iString(v)
- isNumber(v)
- isFunc(v)
- isBool(v)
- isArray(v)
- isObj(v)
- index(v, l, opt) 

    index(v, l) same with v.indexOf(l) and opt is option of map function
- hasKey(v, key)
- hasIndex(v, l, opt)
- size(v)
- fReturn(v, k, d)
- merge(v, v1)
- deepMerge(v, v1)




