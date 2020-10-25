var tape = require("tape"),
    bimn = require("../dist/bim.min");

tape("divide(arg, arg2) returns divide a numbers", function(test) {
  test.equal(bimn.divide(2, 2), 1);
  test.equal(bimn.divide(6, 2), 3);
  test.equal(bimn.divide(5, "2"), null);

  test.end();
});

tape("divide(arg, arg2) returns divide an array", function(test) {
  test.deepEqual(bimn.divide([10, 4], [2, 2]), [5, 2]);
  test.deepEqual(bimn.divide([8, 10], [4, 5]), [2, 2]);
  test.deepEqual(bimn.divide([5, 4], [1,4,5]), null);
  test.deepEqual(bimn.divide([5, 4], {y: 1}), null);
  test.end();
});

tape("divide(arg, arg2) returns divide an object", function(test) {
  test.deepEqual(bimn.divide({x:20, y: 20}, {x:4, y: 5}), {x:5, y:4});
  test.deepEqual(bimn.divide({x:10, y: 6}, {x:2, y: 2}), {x:5, y:3});
  test.deepEqual(bimn.divide({x:2, y: 2, d: 4}, {x:4, y: 4}), null);
  test.deepEqual(bimn.divide({x:5, y: 5}, {d:2, y: 4}), null);
  test.end();
});