# compareAbs()
<code>compareAbs()</code> compares the absolute value of two numbers. There is a method function and a static method function.

#### Syntax
##### method function
```javascript
ba.compareAbs(n);
```

##### static method function
```javascript
BigArith.compareAbs(a, b);
```
 
### Parameters
#### method function
##### n - Required - {string|number|BigArith}
The number to compare with the value of the BigArith object. This could be a string of digits, a number, or a BigArith object.

#### static method function
##### a - Required - {string|number|BigArith}
The number to compare to. This could be a string of digits, a number, or a BigArith object.

##### b - Required - {string|number|BigArith}
The number to compare with. This could be a string of digits, a number, or a BigArith object.

### Return value
#### method function
-1 if absolute value of BigArith object is less to absolute value of n, 0 if absolute value of BigArith object is equal to absolute value of n, 1 if absolute value of BigArith object is greater than absolute value of n

#### static method function
-1 if absolute value of a is less to absolute value of b, 0 if absolute value of a is equal to absolute value of b, 1 if absolute value of a is greater than absolute value of b.

##### Description
There are two functions which could be used, the *method function*, and the *static method function*. The method function takes one parameter (n) and returns an integer indicating whether absolute value of object is lesser, equals or greater than absolute value of n.

The static method function takes two parameters (a, b) and is always used as <code>BigArith.compareAbs()</code>. It returns an integer indicating whether absolute value of a is lesser, equals or greater than absolute value of b. 

If the parameters are numbers, it should be between the <code>Number.MIN_SAFE_INTEGER</code> and <code>Number.MAX_SAFE_INTEGER</code> limits.

* -1 : BigArith object absolute value < n absolute value or a absolute value < b absolute value.
* 0 : BigArith object absolute value == n absolute value or a absolute value == b absolute value.
* 1 : BigArith object absolute value > n absolute value or a absolute value > b absolute value.

### Examples
#### Using method function

```javascript
var ba = new BigArith("-17031986");
console.log(ba.compareAbs("+17031986")); //logs 0

ba = new BigArith("-56");
console.log(ba.compareAbs("34")); //logs 1

ba = new BigArith("100");
console.log(ba.compareAbs("-450")); //logs -1

ba = new BigArith();
console.log(ba.compareAbs(null)); //logs 0

ba = new BigArith("8888888888888888888888888888888888888888888888888888888");
console.log(ba.compareAbs("-99999999999999999999999999999999999999999999999999999999999999")); //logs -1
```

#### Using the static method function

```javascript
console.log(BigArith.compareAbs("-17031986", "17031986")); //logs 0
console.log(BigArith.compareAbs("-56", "34")); //logs 1
console.log(BigArith.compareAbs("100", "-450")); //logs -1
console.log(BigArith.compareAbs("8888888888888888888888888888888888888888888888888888888", "-99999999999999999999999999999999999999999999999999999999999999")); //logs -1
console.log(BigArith.compareAbs(null, "")); //logs 0
```

More examples [here](https://github.com/osofem/BigArith.js/tree/master/examples/)

### See also
* [compare()](https://osofem.github.io/BigArith.js/documentation/compare.html)
* [abs()](https://osofem.github.io/BigArith.js/documentation/abs.html)
* [min()](https://osofem.github.io/BigArith.js/documentation/min.html)
* [max()](https://osofem.github.io/BigArith.js/documentation/max.html)