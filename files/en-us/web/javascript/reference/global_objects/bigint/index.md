---
title: BigInt
slug: Web/JavaScript/Reference/Global_Objects/BigInt
tags:
  - BigInt
  - Class
  - JavaScript
  - Reference
browser-compat: javascript.builtins.BigInt
---
{{JSRef}}

**`BigInt`** is a [primitive wrapper object](/en-US/docs/Glossary/Primitive#primitive_wrapper_objects_in_javascript) used to represent and manipulate {{Glossary("Primitive", "primitive")}} `bigint` values — which are [too large](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) to be represented by the `number` {{Glossary("Primitive", "primitive")}}.

## Description

A **BigInt value**, also sometimes just called a **BigInt**, is a `bigint` {{Glossary("Primitive", "primitive")}}, created by appending `n` to the end of an integer literal, or by calling the {{jsxref("Global_Objects/BigInt/BigInt", "BigInt()")}} function (without the `new` operator) and giving it an integer value or string value.

```js
const previouslyMaxSafeInteger = 9007199254740991n

const alsoHuge = BigInt(9007199254740991)
// ↪ 9007199254740991n

const hugeString = BigInt("9007199254740991")
// ↪ 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff")
// ↪ 9007199254740991n

const hugeOctal = BigInt("0o377777777777777777")
// ↪ 9007199254740991n

const hugeBin = BigInt("0b11111111111111111111111111111111111111111111111111111")
// ↪ 9007199254740991n
```

BigInt values are similar to Number values in some ways, but also differ in a few key matters: A BigInt value cannot be used with methods in the built-in [`Math`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) object and cannot be mixed with a Number value in operations; they must be coerced to the same type. Be careful coercing values back and forth, however, as the precision of a BigInt value may be lost when it is coerced to a Number value.

### Type information

When tested against `typeof`, a BigInt value (`bigint` primitive) will give `"bigint"`:

```js
typeof 1n === 'bigint'           // true
typeof BigInt('1') === 'bigint'  // true
```

A BigInt value can also be wrapped in an `Object`:

```js
typeof Object(1n) === 'object'  // true
```

### Operators

The following operators may be used with BigInt values or object-wrapped BigInt values:

```
+ * - % **
```

[Bitwise operators](/en-US/docs/Web/JavaScript/Reference/Operators) are supported as well, except `>>>` (zero-fill right shift), as every BigInt value is signed.

Also unsupported is the unary operator (`+`), [in order to not break asm.js](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs).

```js
const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER)
// ↪ 9007199254740991n

const maxPlusOne = previousMaxSafe + 1n
// ↪ 9007199254740992n

const theFuture = previousMaxSafe + 2n
// ↪ 9007199254740993n, this works now!

const multi = previousMaxSafe * 2n
// ↪ 18014398509481982n

const subtr = multi - 10n
// ↪ 18014398509481972n

const mod = multi % 10n
// ↪ 2n

const bigN = 2n ** 54n
// ↪ 18014398509481984n

bigN * -1n
// ↪ -18014398509481984n
```

The `/` operator also works as expected with whole numbers — but operations with a fractional result will be truncated when used with a BigInt value — they won't return any fractional digits.

```js
const expected = 4n / 2n
// ↪ 2n

const truncated = 5n / 2n
// ↪ 2n, not 2.5n
```

### Comparisons

A BigInt value is not strictly equal to a Number value, but it _is_ loosely so:

```js
0n === 0
// ↪ false

0n == 0
// ↪ true
```

A Number value and a BigInt value may be compared as usual:

```js
1n < 2
// ↪ true

2n > 1
// ↪ true

2 > 2
// ↪ false

2n > 2
// ↪ false

2n >= 2
// ↪ true
```

BigInt values and Number values may be mixed in arrays and sorted:

```js
const mixed = [4n, 6, -12n, 10, 4, 0, 0n]
// ↪  [4n, 6, -12n, 10, 4, 0, 0n]

mixed.sort() // default sorting behavior
// ↪  [ -12n, 0, 0n, 10, 4n, 4, 6 ]

mixed.sort((a, b) => a - b)
// won't work since subtraction will not work with mixed types
// TypeError: can't convert BigInt value to Number value

// sort with an appropriate numeric comparator
mixed.sort((a, b) => (a < b) ? -1 : ((a > b) ? 1 : 0))
// ↪  [ -12n, 0, 0n, 4n, 4, 6, 10 ]
```

Note that comparisons with `Object`-wrapped BigInt values act as with other objects, only indicating equality when the same object instance is compared:

```js
Object(0n) === 0n          // false
Object(0n) === Object(0n)  // false

const o = Object(0n)
o === o                    // true
```

### Conditionals

A BigInt value follows the same conversion rules as Numbers when:

- it is converted to a [`Boolean`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean): via the [`Boolean`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) function;
- when used with [logical operators](/en-US/docs/Web/JavaScript/Reference/Operators) `||`, `&&`, and `!`; or
- within a conditional test like an [`if`](/en-US/docs/Web/JavaScript/Reference/Statements/if...else) statement.

Namely, only `0n` is [falsy](/en-US/docs/Glossary/Falsy); everything else is [truthy](/en-US/docs/Glossary/Truthy).

```js
if (0n) {
  console.log('Hello from the if!')
} else {
  console.log('Hello from the else!')
}

// ↪ "Hello from the else!"

0n || 12n
// ↪ 12n

0n && 12n
// ↪ 0n

Boolean(0n)
// ↪ false

Boolean(12n)
// ↪ true

!12n
// ↪ false

!0n
// ↪ true
```

## Constructor

- [`BigInt()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)
  - : Creates a new BigInt value.

## Static methods

- [`BigInt.asIntN()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/asIntN)
  - : Clamps a BigInt value to a signed integer value, and returns that value.
- [`BigInt.asUintN()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/asUintN)
  - : Clamps a BigInt value to an unsigned integer value, and returns that value.

## Instance methods

- [`BigInt.prototype.toLocaleString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toLocaleString)
  - : Returns a string with a language-sensitive representation of this BigInt value. Overrides the [`Object.prototype.toLocaleString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString) method.
- [`BigInt.prototype.toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString)
  - : Returns a string representing this BigInt value in the specified radix (base). Overrides the [`Object.prototype.toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) method.
- [`BigInt.prototype.valueOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/valueOf)
  - : Returns this BigInt value. Overrides the [`Object.prototype.valueOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) method.

## Usage recommendations

### Coercion

Because coercing between Number values and BigInt values can lead to loss of precision, the following are recommended:

- Only use a BigInt value when values greater than 2^53 are reasonably expected.
- Don't coerce between BigInt values and Number values.

### Cryptography

The operations supported on BigInt values are not constant-time, and are thus open to [timing attacks](https://en.wikipedia.org/wiki/Timing_attack). JavaScript BigInts are therefore not well-suited for use in cryptography.

### Use within JSON

Using [`JSON.stringify()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) with any BigInt value will raise a `TypeError`, as BigInt values aren't serialized in JSON by default. However, `JSON.stringify()` specifically leaves a backdoor for BigInt values: it would try to call the BigInt's `toJSON()` method. (It doesn't do so for any other primitive values.) Therefore, you can implement your own `toJSON()` method (which is one of the few cases where patching built-in objects is not explicitly discouraged):

```js
BigInt.prototype.toJSON = function () {
  return this.toString();
};
```

Instead of throwing, `JSON.stringify()` now produces a string like this:

```js
console.log(JSON.stringify({ a: 1n }));
// {"a":"1"}
```

If you do not wish to patch `BigInt.prototype`, you can use the [`replacer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#the_replacer_parameter) parameter of `JSON.stringify` to serialize BigInt values:

```js
const replacer = (key, value) => key === "big" ? value.toString() : value;

const data = {
  number: 1,
  big: 18014398509481982n,
};
const stringified = JSON.stringify(data, replacer);

console.log(stringified);
// {"number":1,"big":"18014398509481982"}
```

If you have JSON data containing values you know will be large integers, you can use the [`reviver`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#using_the_reviver_parameter) parameter of `JSON.parse` to handle them:

```js
const reviver = (key, value) => key === "big" ? BigInt(value) : value;

const payload = '{"number":1,"big":"18014398509481982"}';
const parsed = JSON.parse(payload, reviver);

console.log(parsed);
// { number: 1, big: 18014398509481982n }
```

## Examples

### Calculating Primes

```js
// Returns true if the passed BigInt value is a prime number
function isPrime(p) {
  for (let i = 2n; i * i <= p; i++) {
    if (p % i === 0n) return false;
  }
  return true
}

// Takes a BigInt value as an argument, returns nth prime number as a BigInt value
function nthPrime(nth) {
  let maybePrime = 2n
  let prime = 0n

  while (nth >= 0n) {
    if (isPrime(maybePrime)) {
      nth--
      prime = maybePrime
    }
    maybePrime++
  }

  return prime
}

nthPrime(20n)
// ↪ 73n
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`Number`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [`Number.MAX_SAFE_INTEGER`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)
