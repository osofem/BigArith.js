# add()
<code>add()</code> returns the sum of two numbers. There is a method function and a static method function.

#### Syntax
##### method function
```javascript
ba.add(n);
```

##### static method function
```javascript
BigArith.add(a, b);
```
 
### Parameters
#### method function
##### n - Required - {string|number|BigArith}
A summand with the value of the BigArith object <code>add()</code> is called on as the second summand. This could be a string of digits, a number, or a BigArith object.

#### static method function
##### a - Required - {string|number|BigArith}
The first summand: this could be a string of digits, a number, or a BigArith object.

##### b - Required - {string|number|BigArith}
The second summand: this could be a string of digits, a number, or a BigArith object.

### Return value
#### method function - {BigArith}
A BigArith object with its value equals to the sum of n and the value of the BigArith object it is called on.

#### static method function - {BigArith}
A BigArith object with its value equals to the sum of a and b.

### Description
There are two functions which could be used, the *method function*, and the *static method function*. The method function takes one parameter (n) and returns the sum of the parameter and the value of the BigArith object it is called on.

The static method function takes two parameters (a, b) and is always used as <code>BigArith.add()</code>. It returns the sum of a and b. 

> Any number parameter (that is not strings of digits or a BigArith) should be between the <code>Number.MIN_SAFE_INTEGER</code> and <code>Number.MAX_SAFE_INTEGER</code> limits.


### Examples
> In the server-side, always remember to add the line `var BigArith = require('bigarith.js');` however every other thing remains the same in both server-side and client-side code.

#### Using method function

```javascript
var ba = new BigArith("-17031986");
ba = ba.add("24011985"); //BigArith object with value "6979999"

ba = new BigArith("+17031986");
ba = ba.add("24011985"); //BigArith object with value "41043971"

ba = new BigArith("8888888888888888888888888888888888888888888888888888888");
ba = ba.add("99999999999999999999999999999999999999999999999999999999999999"); //BigArith object with value "100000008888888888888888888888888888888888888888888888888888887" 
```

#### Using the static method function

```javascript
var ba = BigArith.add("-17031986", "24011985"); //BigArith object with value "6979999"
ba = BigArith.add("+17031986", "24011985"); //BigArith object with value "41043971"
ba = BigArith.add("8888888888888888888888888888888888888888888888888888888", "99999999999999999999999999999999999999999999999999999999999999"); //BigArith object with value "100000008888888888888888888888888888888888888888888888888888887"
```

#### Method chaining
Since the method returns a BigArith object, [method chaining](method_chaining.html) is possible.
```javascript
var ba = new BigArith("-17031986");
ba = ba.divide("+17031986").add("24011985").multiply("456785564").subtract("2"); //BigArith object with value "10968327654198974"
```

More examples [here](https://github.com/osofem/bigarith.js/tree/master/examples/). Full documentation [here](https://github.com/osofem/bigarith.js/tree/master/documentation)

### See also
* [subtract()](https://osofem.github.io/bigarith.js/documentation/subtract.html)
* [multiply()](https://osofem.github.io/bigarith.js/documentation/multiply.html)
* [divide()](https://osofem.github.io/bigarith.js/documentation/divide.html)
* [modulus()](https://osofem.github.io/bigarith.js/documentation/modulus.html)