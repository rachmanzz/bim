var tape = require("tape"),
    bimn = require("../dist/bim.min");

tape("add(arg, arg2) returns add a numbers", function(test) {
  test.equal(bimn.add(1, 2), 3);
  test.equal(bimn.add(5, 2), 7);
  test.equal(bimn.add(5, "2"), null);

  test.end();
});

tape("add(arg, arg2) returns add an array", function(test) {
  test.deepEqual(bimn.add([1, 4], [2, 5]), [3, 9]);
  test.deepEqual(bimn.add([5, 4], [1, 2]), [6, 6]);
  test.deepEqual(bimn.add([5, 4], [1,4,5]), null);
  test.deepEqual(bimn.add([5, 4], {y: 1}), null);
  test.end();
});

tape("add(arg, arg2) returns add an object", function(test) {
  test.deepEqual(bimn.add({x:2, y: 2}, {x:4, y: 4}), {x:6, y:6});
  test.deepEqual(bimn.add({x:5, y: 5}, {x:2, y: 4}), {x:7, y:9});
  test.deepEqual(bimn.add({x:2, y: 2, d: 4}, {x:4, y: 4}), null);
  test.deepEqual(bimn.add({x:5, y: 5}, {d:2, y: 4}), null);
  test.end();
});