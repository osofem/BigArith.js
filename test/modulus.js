console.log("%cTesting for modulus", "color: blue; font-size: 20pt;");

assertDeepEqual(BigArith.modulus("426", 2), new BigArith(0));
assertDeepEqual(BigArith.modulus("128",21), new BigArith(2));
assertDeepEqual(BigArith.modulus("138",2), new BigArith(0));
assertDeepEqual(BigArith.modulus("99999", "2"), new BigArith(1));
assertDeepEqual(BigArith.modulus("21", 2), new BigArith(1));
assertDeepEqual(BigArith.modulus("2100", 2), new BigArith(0));
assertDeepEqual(BigArith.modulus("0", "2"), new BigArith(0));



assertDeepEqual(BigArith.modulus("9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999",2), new BigArith(1));

assertDeepEqual(BigArith.modulus("9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999","99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999"), new BigArith("9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999"));

assertDeepEqual(BigArith.modulus("-2","3"), new BigArith("-2"));
assertDeepEqual(BigArith.modulus("-4","2"), new BigArith("-0"));
assertDeepEqual(BigArith.modulus("-2","-3"), new BigArith("-2"));

var a = new BigArith("426");
assertDeepEqual(a.modulus("2"), new BigArith("0"));
assertDeepEqual(a.modulus("3"), new BigArith("0"));
assertDeepEqual(a.modulus("5"), new BigArith("1"));

var b = new BigArith("99999");
assertDeepEqual(b.modulus("2"), new BigArith("1"));
assertDeepEqual(BigArith.modulus("0.9","0.2"), new BigArith("0.1"));
assertDeepEqual(BigArith.modulus("-0.9","0.2"), new BigArith("-0.1"));
assertDeepEqual(BigArith.modulus("-0.0009","0.2"), new BigArith("-0.0009"));

assertIsNaN(BigArith.modulus("2", "0"));
assertIsNaN(BigArith.modulus(NaN, "2"));
assertIsNaN(BigArith.modulus(45, NaN));

assertDeepEqual(BigArith.modulus("459", "-165.8987"), new BigArith("127.2026"));
