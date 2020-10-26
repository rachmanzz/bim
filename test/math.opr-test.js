var tape = require("tape"),
    bimn = require("../dist/bim.min");

tape("opr(arg, arg2, '+') returns add a numbers", function(test) {
  test.equal(bimn.opr(1, 2, "+"), 3);
  test.equal(bimn.opr(5, 2, "+"), 7);
  test.equal(bimn.opr(5, "2", "+"), null);

  test.end();
});

tape("opr(arg, arg2, '+') returns add an array", function(test) {
  test.deepEqual(bimn.opr([1, 4], [2, 5], "+"), [3, 9]);
  test.deepEqual(bimn.opr([5, 4], [1, 2], "+"), [6, 6]);
  test.deepEqual(bimn.opr([5, 4], [1,4,5], "+"), null);
  test.deepEqual(bimn.opr([5, 4], {y: 1}, "+"), null);
  test.end();
});

tape("opr(arg, arg2, '+') returns add an object", function(test) {
  test.deepEqual(bimn.opr({x:2, y: 2}, {x:4, y: 4}, "+"), {x:6, y:6});
  test.deepEqual(bimn.opr({x:5, y: 5}, {x:2, y: 4}, "+"), {x:7, y:9});
  test.deepEqual(bimn.opr({x:2, y: 2, d: 4}, {x:4, y: 4}, "+"), null);
  test.deepEqual(bimn.opr({x:5, y: 5}, {d:2, y: 4}, "+"), null);
  test.end();
});



tape("opr(arg, arg2, '-') returns subtraction a numbers", function(test) {
  test.equal(bimn.opr(1, 2, "-"), -1);
  test.equal(bimn.opr(5, 2, "-"), 3);
  test.equal(bimn.opr(5, "2", "-"), null);

  test.end();
});

tape("opr(arg, arg2, '-') returns subtraction an array", function(test) {
  test.deepEqual(bimn.opr([1, 4], [2, 5], "-"), [-1, -1]);
  test.deepEqual(bimn.opr([5, 4], [1, 2], "-"), [4, 2]);
  test.deepEqual(bimn.opr([5, 4], [1,4,5], "-"), null);
  test.deepEqual(bimn.opr([5, 4], {y: 1}, "-"), null);
  test.end();
});

tape("opr(arg, arg2, '-') returns subtraction an object", function(test) {
  test.deepEqual(bimn.opr({x:2, y: 2}, {x:4, y: 4}, "-"), {x:-2, y:-2});
  test.deepEqual(bimn.opr({x:5, y: 5}, {x:2, y: 4}, "-"), {x:3, y:1});
  test.deepEqual(bimn.opr({x:2, y: 2, d: 4}, {x:4, y: 4}, "-"), null);
  test.deepEqual(bimn.opr({x:5, y: 5}, {d:2, y: 4}, "-"), null);
  test.end();
});

tape("opr(arg, arg2, '*') returns multiple a numbers", function(test) {
  test.equal(bimn.opr(1, 2, "*"), 2);
  test.equal(bimn.opr(5, 2, "*"), 10);
  test.equal(bimn.opr(5, "2", "*"), null);
  test.end();
});

tape("opr(arg, arg2, '*') returns multiple an array", function(test) {
  test.deepEqual(bimn.opr([1, 4], [2, 5], "*"), [2, 20]);
  test.deepEqual(bimn.opr([5, 4], [1, 2], "*"), [5, 8]);
  test.deepEqual(bimn.opr([5, 4], [1,4,5], "*"), null);
  test.deepEqual(bimn.opr([5, 4], {y: 1}, "*"), null);
  test.end();
});

tape("opr(arg, arg2, '*') returns multiple an object", function(test) {
  test.deepEqual(bimn.opr({x:2, y: 2}, {x:4, y: 4}, "*"), {x:8, y:8});
  test.deepEqual(bimn.opr({x:5, y: 5}, {x:2, y: 4}, "*"), {x:10, y:20});
  test.deepEqual(bimn.opr({x:2, y: 2, d: 4}, {x:4, y: 4}, "*"), null);
  test.deepEqual(bimn.opr({x:5, y: 5}, {d:2, y: 4}, "*"), null);
  test.end();
});

tape("opr(arg, arg2, '/') returns divide a numbers", function(test) {
  test.equal(bimn.opr(2, 2, "/"), 1);
  test.equal(bimn.opr(6, 2, "/"), 3);
  test.equal(bimn.opr(5, "2", "/"), null);

  test.end();
});

tape("opr(arg, arg2, '/') returns divide an array", function(test) {
  test.deepEqual(bimn.opr([10, 4], [2, 2], "/"), [5, 2]);
  test.deepEqual(bimn.opr([8, 10], [4, 5], "/"), [2, 2]);
  test.deepEqual(bimn.opr([5, 4], [1,4,5], "/"), null);
  test.deepEqual(bimn.opr([5, 4], {y: 1}, "/"), null);
  test.end();
});

tape("opr(arg, arg2, '/') returns divide an object", function(test) {
  test.deepEqual(bimn.opr({x:20, y: 20}, {x:4, y: 5}, "/"), {x:5, y:4});
  test.deepEqual(bimn.opr({x:10, y: 6}, {x:2, y: 2}, "/"), {x:5, y:3});
  test.deepEqual(bimn.opr({x:2, y: 2, d: 4}, {x:4, y: 4}, "/"), null);
  test.deepEqual(bimn.opr({x:5, y: 5}, {d:2, y: 4}, "/"), null);
  test.end();
});



tape("opr(arg, arg2, '%') returns modulus a numbers", function(test) {
  test.equal(bimn.opr(3, 2, "%"), 1);
  test.equal(bimn.opr(9, 2, "%"), 1);
  test.equal(bimn.opr(5, "2", "%"), null);

  test.end();
});

tape("opr(arg, arg2, '%') returns modulus an array", function(test) {
  test.deepEqual(bimn.opr([13, 5], [5, 2], "%"), [3, 1]);
  test.deepEqual(bimn.opr([8, 14], [4, 5], "%"), [0, 4]);
  test.deepEqual(bimn.opr([5, 4], [1,4,5], "%"), null);
  test.deepEqual(bimn.opr([5, 4], {y: 1}, "%"), null);
  test.end();
});

tape("opr(arg, arg2, '%') returns modulus an object", function(test) {
  test.deepEqual(bimn.opr({x:20, y: 20}, {x:4, y: 5}, "%"), {x:0, y:0});
  test.deepEqual(bimn.opr({x:13, y: 6}, {x:2, y: 2}, "%"), {x:1, y:0});
  test.deepEqual(bimn.opr({x:2, y: 2, d: 4}, {x:4, y: 4}, "%"), null);
  test.deepEqual(bimn.opr({x:5, y: 5}, {d:2, y: 4}, "%"), null);
  test.end();
});