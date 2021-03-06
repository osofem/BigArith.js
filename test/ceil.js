console.log("%cTesting for ceil", "color: blue; font-size: 20pt;");
var x = new BigArith("1.1");
var y = new BigArith("1.9");
var z = new BigArith(7.45);

var a = new BigArith(".05");
var b = new BigArith("eighty three point seven three");
var c = new BigArith("56857675753763473473463574574575693849335.567787856456453");

//Ceil
assertDeepEqual(x.ceil(), new BigArith(2));
assertDeepEqual(y.ceil(), new BigArith(2));
assertDeepEqual(z.ceil(), new BigArith(8));
assertDeepEqual(a.ceil(), new BigArith(1));
assertDeepEqual(b.ceil(), new BigArith(84));
assertDeepEqual(c.ceil(), new BigArith("56857675753763473473463574574575693849336"));

assertDeepEqual(BigArith.ceil("0.95"), new BigArith("1"));
assertDeepEqual(BigArith.ceil("7.004"), new BigArith("8"));
assertDeepEqual(BigArith.ceil("-0.95"), new BigArith("-0"));

//Negative
assertDeepEqual(new BigArith("-45.23").ceil(), new BigArith("-45"));
assertDeepEqual(new BigArith("-75.99").ceil(), new BigArith("-75"));

assertIsNaN(BigArith.ceil(NaN));