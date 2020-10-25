var tape = require("tape"),
    bimn = require("../dist/bim.min");

tape("multiple(arg, arg2) returns multiple a numbers", function(test) {
  test.equal(bimn.multiple(1, 2), 2);
  test.equal(bimn.multiple(5, 2), 10);
  test.equal(bimn.multiple(5, "2"), null);

  test.end();
});

tape("multiple(arg, arg2) returns multiple an array", function(test) {
  test.deepEqual(bimn.multiple([1, 4], [2, 5]), [2, 20]);
  test.deepEqual(bimn.multiple([5, 4], [1, 2]), [5, 8]);
  test.deepEqual(bimn.multiple([5, 4], [1,4,5]), null);
  test.deepEqual(bimn.multiple([5, 4], {y: 1}), null);
  test.end();
});

tape("multiple(arg, arg2) returns multiple an object", function(test) {
  test.deepEqual(bimn.multiple({x:2, y: 2}, {x:4, y: 4}), {x:8, y:8});
  test.deepEqual(bimn.multiple({x:5, y: 5}, {x:2, y: 4}), {x:10, y:20});
  test.deepEqual(bimn.multiple({x:2, y: 2, d: 4}, {x:4, y: 4}), null);
  test.deepEqual(bimn.multiple({x:5, y: 5}, {d:2, y: 4}), null);
  test.end();
});