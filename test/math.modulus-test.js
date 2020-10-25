var tape = require("tape"),
    bimn = require("../dist/bim.min");

tape("modulus(arg, arg2) returns modulus a numbers", function(test) {
  test.equal(bimn.modulus(3, 2), 1);
  test.equal(bimn.modulus(9, 2), 1);
  test.equal(bimn.modulus(5, "2"), null);

  test.end();
});

tape("modulus(arg, arg2) returns modulus an array", function(test) {
  test.deepEqual(bimn.modulus([13, 5], [5, 2]), [3, 1]);
  test.deepEqual(bimn.modulus([8, 14], [4, 5]), [0, 4]);
  test.deepEqual(bimn.modulus([5, 4], [1,4,5]), null);
  test.deepEqual(bimn.modulus([5, 4], {y: 1}), null);
  test.end();
});

tape("modulus(arg, arg2) returns modulus an object", function(test) {
  test.deepEqual(bimn.modulus({x:20, y: 20}, {x:4, y: 5}), {x:0, y:0});
  test.deepEqual(bimn.modulus({x:13, y: 6}, {x:2, y: 2}), {x:1, y:0});
  test.deepEqual(bimn.modulus({x:2, y: 2, d: 4}, {x:4, y: 4}), null);
  test.deepEqual(bimn.modulus({x:5, y: 5}, {d:2, y: 4}), null);
  test.end();
});