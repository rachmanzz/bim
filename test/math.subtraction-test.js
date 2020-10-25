var tape = require("tape"),
    bimn = require("../dist/bim.min");

tape("subtraction(arg, arg2) returns subtraction a numbers", function(test) {
  test.equal(bimn.subtraction(1, 2), -1);
  test.equal(bimn.subtraction(5, 2), 3);
  test.equal(bimn.subtraction(5, "2"), null);

  test.end();
});

tape("subtraction(arg, arg2) returns subtraction an array", function(test) {
  test.deepEqual(bimn.subtraction([1, 4], [2, 5]), [-1, -1]);
  test.deepEqual(bimn.subtraction([5, 4], [1, 2]), [4, 2]);
  test.deepEqual(bimn.subtraction([5, 4], [1,4,5]), null);
  test.deepEqual(bimn.subtraction([5, 4], {y: 1}), null);
  test.end();
});

tape("subtraction(arg, arg2) returns subtraction an object", function(test) {
  test.deepEqual(bimn.subtraction({x:2, y: 2}, {x:4, y: 4}), {x:-2, y:-2});
  test.deepEqual(bimn.subtraction({x:5, y: 5}, {x:2, y: 4}), {x:3, y:1});
  test.deepEqual(bimn.subtraction({x:2, y: 2, d: 4}, {x:4, y: 4}), null);
  test.deepEqual(bimn.subtraction({x:5, y: 5}, {d:2, y: 4}), null);
  test.end();
});