# min()
<code>min()</code> returns the smallest of zero or more numbers. There is a method function and a static method function.

#### Syntax
##### method function
```javascript
ba.min([value1,[value2[,...]]]);
```

##### static method function
```javascript
BigArith.min([value1,[value2[,...]]]);
```
 
### Parameters
#### method function
##### value1, value2, ... - Optional - {string|number|BigArith}
The numbers to return the smallest of (including the value of the BigArith object it's called on).

#### static method function
##### value1, value2, ... - Optional - {string|number|BigArith}
The numbers to return the smallest of.

### Return value
#### method function - {BigArith}
The smallest of the given numbers and the value of the object it is called on. If at least one of the arguments cannot be converted to a number, NaN is returned.

#### static method function - {BigArith}
The smallest of the given numbers. If at least one of the arguments cannot be converted to a number, NaN is returned.

##### Description
There are two functions which could be used, the *method function*, and the *static method function*. The method function takes zero or more parameters and returns the smallest between the parameters and the value of the BigArith object it is called on. If no parameter is give, the value of the BigArith object is returned.

The static method function takes zero or more parameters and return the smallest. If no parameter is given, zero is returned.

If at least one of the arguments cannot be converted to a number, NaN is returned.


### Examples

> In the server-side, always remember to add the line `var BigArith = require('bigarith.js');` however every other thing remains the same in both server-side and client-side code.

#### Using method function

```javascript
var ba = new BigArith("-17031986");
ba.min("4", 8); //BigArith object with value "-17031986"

ba = new BigArith("+17031986");
ba.min(-2, -3, -10); //BigArith object with value "-10"

ba = new BigArith("one");
ba.min("two"); //BigArith object with value "1"

ba = new BigArith("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999");
ba.min("8888888888888888888888888888"); //BigArith object with value "8888888888888888888888888888"

ba = new BigArith(-34);
ba.min("negative two", "-3.0", -987); //BigArith object with value "-987"

ba = new BigArith(-34);
ba.min("-2", NaN); // NaN
```

#### Using static method function
```javascript
BigArith.min("459", "-165.8987", "165.898700000000000000000", "200", "467"); //BigArith object with value "-165.8987"
BigArith.min("99", "0.123568123", "-0.03455893"); //BigArith object with value "-0.03455893"
BigArith.min("45", "4590", "+0.03455893", "0.123568123"); //BigArith object with value "0.03455893"
BigArith.min(); //BigArith object with value "0"

BigArith.min("4", NaN); // NaN
BigArith.min(NaN, "0.0467"); //NaN
```

More examples [here](https://github.com/osofem/BigArith.js/tree/master/examples/). Full documentation [here](https://github.com/osofem/BigArith.js/tree/master/documentation)

### See also
* [max()](https://osofem.github.io/BigArith.js/documentation/max.html)