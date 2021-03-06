console.log("%cTesting for abs", "color: blue; font-size: 20pt;");
var ba = new BigArith("zero point five");
assertDeepEqual(ba.abs(), new BigArith("0.5"));

ba = new BigArith("negative zero point five");
assertDeepEqual(ba.abs(), new BigArith("0.5"));

ba = new BigArith("-234");
assertDeepEqual(ba.abs(), new BigArith("234"));

ba = new BigArith("-234t");//NaN
assertIsNaN(ba.abs());

ba = new BigArith("+8758376");
assertDeepEqual(ba.abs(), new BigArith("8758376"));

assertDeepEqual(BigArith.abs("+8758376"), new BigArith("8758376"));
assertDeepEqual(BigArith.abs("-8758.376"), new BigArith("8758.376"));
assertDeepEqual(BigArith.abs("-8758.376"), new BigArith("8758.376"));
assertDeepEqual(BigArith.abs(null), new BigArith(0));
assertDeepEqual(BigArith.abs(), new BigArith(0));
assertIsNaN(BigArith.abs(NaN));
assertIsNaN(BigArith.abs("kj"));