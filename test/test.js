let r = require("../dist/radiance");



// r.lpair.print(r.lpair.lfilter(x => x % 2 === 0)(r.lpair.range(0, Infinity)))

// r.stream.range(-1000, -1000000).map(x => x + 1000000).lfilter(x => x % 2 === 0).take(15).print()

// console.log(r.lpair.toArray(r.lpair.take(100, r.lpair.lfilter(x => x % 2 === 0)(r.lpair.range(1, Infinity)))));

// r.stream.range(1, Infinity).map(x => -x).lfilter(x => x % 2 === 0).take(100).print();

//  const n1 = r.stream.range(1, Infinity);
//  const n2 = r.stream.map(x => -x)(n1);
//  const n3 = r.stream.lfilter(x => x % 2 === 0)(n2);
//  const n4 = r.stream.take(100)(n3);
//  r.stream.print(n4);

// console.log(r.stream.range(100, 200000).take(100).toArray())

const composeKTwo = (g, f) => x => f(x).chain(g);

const composeKNright = (...args) => r.foldr(composeKTwo)(r.list)(args);

r.stream(1).print()

const a = composeKNright(x => r.list(1, 2, 3), x => r.list([5, 5]));

r.list(6, 6).chain(a);