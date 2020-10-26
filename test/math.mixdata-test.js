var tape = require("tape"),
    bimn = require("../dist/bim.min");


tape("calculate an array value with single number return an array", function(test) {
  test.deepEqual(bimn.add([1, 4], 2), [3, 6]);
  test.deepEqual(bimn.subtraction([5, 4], 4), [1, 0]);
  test.deepEqual(bimn.multiple([5, 4], 2), [10, 8]);
  test.deepEqual(bimn.divide([8, 4], 2), [4, 2]);
  test.deepEqual(bimn.modulus([9, 3], 2), [1, 1]);
  test.end();
});

tape("calculate an object value with single number return an object", function(test) {
  test.deepEqual(bimn.add({x: 1, y: 4}, 2), {x:3, y: 6});
  test.deepEqual(bimn.subtraction({x: 5, y: 4}, 4), {x:1, y: 0});
  test.deepEqual(bimn.multiple({x: 5, y: 4}, 2), {x:10, y: 8});
  test.deepEqual(bimn.divide({x: 8, y: 4}, 2), {x:4, y: 2});
  test.deepEqual(bimn.modulus({x: 9, y: 3}, 2), {x:1, y: 1});
  test.end();
});