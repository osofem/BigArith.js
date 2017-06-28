# isOdd()
<code>isOdd()</code> returns a boolean indicating wheather a number (integer) is not exactly divisible by 2 or not . There is ONLY a method function for this.

#### Syntax
##### method function
```javascript
ba.isOdd();
```
 
### Parameters
#### method function
*none*

### Return value
#### method function - {boolean}
Returns true if the value of the BigArith object it is called on is an integer and not exactly divisible by 2 and false otherwise.

##### Description
There is no static method function for `isOdd()` so it should ALWAYS be used as a member function.


### Examples

> In the server-side, always remember to add the line `var BigArith = require('bigarith.js');` and every other thing remains the same in both server-side and client-side code.

#### Using method function

```javascript
var ba = new BigArith("-17031986");
console.log(ba = ba.isOdd()); //logs false to the console

ba = new BigArith("+17031986");
console.log(ba = ba.isOdd()); //logs false to the console

ba = new BigArith("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999");
console.log(ba = ba.isOdd()); //logs true to the console

ba = new BigArith("2.4");
console.log(ba = ba.isOdd()); //logs false to the console

ba = new BigArith("0");
console.log(ba = ba.isOdd()); //logs false to the console 

ba = new BigArith();
console.log(ba = ba.isOdd()); //logs false to the console 

ba = new BigArith(null);
console.log(ba = ba.isOdd()); //logs false to the console 

ba = new BigArith(NaN);
console.log(ba = ba.isOdd()); //logs NaN to the console 
```

More examples [here](https://github.com/osofem/BigArith.js/tree/master/examples/)

### See also
* [isEven()](https://osofem.github.io/BigArith.js/documentation/iseven.html)
* [isPositive()](https://osofem.github.io/BigArith.js/documentation/ispositive.html)
* [isNegative()](https://osofem.github.io/BigArith.js/documentation/isnegative.html)