---
title: Equality comparisons and sameness
slug: Web/JavaScript/Equality_comparisons_and_sameness
tags:
  - Comparison
  - Equality
  - Guide
  - Intermediate
  - JS
  - JavaScript
  - NaN
  - SameValue
  - SameValueZero
  - Sameness
---
{{jsSidebar("Intermediate")}}

There are four equality algorithms in ES2015:

- Abstract Equality Comparison (`==`)
- Strict Equality Comparison (`===`): used by `Array.prototype.indexOf`, `Array.prototype.lastIndexOf`, and `case`-matching
- SameValueZero: used by `%TypedArray%` and `ArrayBuffer` constructors, as well as `Map` and `Set` operations, and also `String.prototype.includes` and `Array.prototype.includes` since ES2016
- SameValue: used in all other places

JavaScript provides three different value-comparison operations:

- [===](/en-US/docs/Web/JavaScript/Reference/Operators#identity) - Strict Equality Comparison ("strict equality", "identity", "triple equals")
- [==](/en-US/docs/Web/JavaScript/Reference/Operators#equality_operators) - Abstract Equality Comparison ("loose equality", "double equals")
- {{jsxref("Object.is")}} provides SameValue (new in ES2015).

Which operation you choose depends on what sort of comparison you are looking to perform. Briefly:

- double equals (`==`) will perform a type conversion when comparing two things, and will handle `NaN`, `-0`, and `+0` specially to conform to IEEE 754 (so `NaN != NaN`, and `-0 == +0`);
- triple equals (`===`) will do the same comparison as double equals (including the special handling for `NaN`, `-0`, and `+0`) but without type conversion; if the types differ, `false` is returned.
- `Object.is` does no type conversion and no special handling for `NaN`, `-0`, and `+0` (giving it the same behavior as `===` except on those special numeric values).

Note that the distinction between these all have to do with their handling of primitives; none of them compares whether the parameters are conceptually similar in structure. For any non-primitive objects `x` and `y` which have the same structure but are distinct objects themselves, all of the above forms will evaluate to `false`.

## Strict equality using `===`

Strict equality compares two values for equality. Neither value is implicitly converted to some other value before being compared. If the values have different types, the values are considered unequal. If the values have the same type, are not numbers, and have the same value, they're considered equal. Finally, if both values are numbers, they're considered equal if they're both not `NaN` and are the same value, or if one is `+0` and one is `-0`.

```js
var num = 0;
var obj = new String('0');
var str = '0';

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false
```

Strict equality is almost always the correct comparison operation to use. For all values except numbers, it uses the obvious semantics: a value is only equal to itself. For numbers it uses slightly different semantics to gloss over two different edge cases. The first is that floating point zero is either positively or negatively signed. This is useful in representing certain mathematical solutions, but as most situations don't care about the difference between `+0` and `-0`, strict equality treats them as the same value. The second is that floating point includes the concept of a not-a-number value, `NaN`, to represent the solution to certain ill-defined mathematical problems: negative infinity added to positive infinity, for example. Strict equality treats `NaN` as unequal to every other value -- including itself. (The only case in which `(x !== x)` is `true` is when `x` is `NaN`.)

## Loose equality using ==

The behavior for performing loose equality using `==` is as follows:

- Loose equality compares two values for equality _after_ converting both values to a common type. After conversions (one or both sides may undergo conversions), the final equality comparison is performed exactly as `===` performs it.
- Loose equality is _symmetric_: `A == B` always has identical semantics to `B == A` for any values of `A` and `B` (except for the order of applied conversions).
- `undefined` and `null` are loosely equal; that is, `undefined == null` is true, and `null == undefined` is true

Traditionally, and according to ECMAScript, all primitives and objects are loosely unequal to `undefined` and `null`. But most browsers permit a very narrow class of objects (specifically, the `document.all` object for any page), in some contexts, to act as if they _emulate_ the value `undefined`. Loose equality is one such context: `null == A` and `undefined == A` evaluate to true if, and only if, A is an object that _emulates_ `undefined`. In all other cases an object is never loosely equal to `undefined` or `null`.

Loose equality comparisons among other combinations of operand types are performed as shown in the tables below. The following notations are used in the tables:

- `ToNumber(A)` attempts to convert its argument to a number before comparison. Its behavior is equivalent to `+A` (the unary + operator).
- `ToPrimitive(A)` attempts to convert its object argument to a primitive value, by invoking varying sequences of `A[Symbol.toPrimitive]()`, `A.valueOf()` and `A.toString()` methods on `A`.
- `ℝ(A)` attempts to convert its argument to an ECMAScript [mathematical value](https://tc39.es/ecma262/#mathematical-value).
- `StringToBigInt(A)` attempts to convert its argument to a `BigInt` by applying the ECMAScript [`StringToBigInt`](https://tc39.es/ecma262/#sec-stringtobigint) algorithm.

**number** primitive `A` compared to operand `B`:

| number    | bigint             | string              | boolean             | Object                |
| --------- | ------------------ | ------------------- | ------------------- | --------------------- |
| `A === B` | `ℝ(A) equals ℝ(B)` | `A === ToNumber(B)` | `A === ToNumber(B)` | `A == ToPrimitive(B)` |

**bigint** primitive `A` compared to operand `B`:

| number             | bigint    | string                    | boolean            | Object                |
| ------------------ | --------- | ------------------------- | ------------------ | --------------------- |
| `ℝ(A) equals ℝ(B)` | `A === B` | `A === StringToBigInt(B)` | `A == ToNumber(B)` | `A == ToPrimitive(B)` |

**string** primitive `A` compared to operand `B`:

| number              | bigint                    | string    | boolean                       | Object                |
| ------------------- | ------------------------- | --------- | ----------------------------- | --------------------- |
| `ToNumber(A) === B` | `StringToBigInt(A) === B` | `A === B` | `ToNumber(A) === ToNumber(B)` | `A == ToPrimitive(B)` |

**boolean** primitive `A` compared to operand `B`:

| number              | bigint             | string                        | boolean   | Object                          |
| ------------------- | ------------------ | ----------------------------- | --------- | ------------------------------- |
| `ToNumber(A) === B` | `ToNumber(A) == B` | `ToNumber(A) === ToNumber(B)` | `A === B` | `ToNumber(A) == ToPrimitive(B)` |

**Object** `A` compared to operand `B`:

| number                | bigint                | string                | boolean                         | Object    |
| --------------------- | --------------------- | --------------------- | ------------------------------- | --------- |
| `ToPrimitive(A) == B` | `ToPrimitive(A) == B` | `ToPrimitive(A) == B` | `ToPrimitive(A) == ToNumber(B)` | `A === B` |

In most cases, using loose equality is discouraged. The result of a comparison using strict equality is easier to predict, and may evaluate more quickly due to the lack of type coercion.

### Example

The following example demonstrates loose equality comparisons involving the number primitive `0`, the bigint primitive `0n`, the string primitive `'0'`, and an object whose `toString()` value is `'0'`.

```js
const num = 0;
const big = 0n;
const str = '0';
const obj = new String('0');

console.log(num == str); // true
console.log(big == num); // true
console.log(str == big); // true

console.log(num == obj); // true
console.log(big == obj); // true
console.log(str == obj); // true
```

## Same-value equality

Same-value equality addresses a final use case: determining whether two values are _functionally identical_ in all contexts. (This use case demonstrates an instance of the [Liskov substitution principle](https://en.wikipedia.org/wiki/Liskov_substitution_principle).) One instance occurs when an attempt is made to mutate an immutable property:

```js
// Add an immutable NEGATIVE_ZERO property to the Number constructor.
Object.defineProperty(Number, 'NEGATIVE_ZERO',
                      { value: -0, writable: false, configurable: false, enumerable: false });

function attemptMutation(v) {
  Object.defineProperty(Number, 'NEGATIVE_ZERO', { value: v });
}
```

`Object.defineProperty` will throw an exception when attempting to change an immutable property, but it does nothing if no actual change is requested. If `v` is `-0`, no change has been requested, and no error will be thrown. Internally, when an immutable property is redefined, the newly-specified value is compared against the current value using same-value equality.

Same-value equality is provided by the {{jsxref("Object.is")}} method.

## Same-value-zero equality

Similar to same-value equality, but +0 and -0 are considered equal.

## Abstract equality, strict equality, and same value in the specification

In ES5, the comparison performed by [`==`](/en-US/docs/Web/JavaScript/Reference/Operators) is described in [Section 11.9.3, The Abstract Equality Algorithm](http://ecma-international.org/ecma-262/5.1/#sec-11.9.3). The [`===`](/en-US/docs/Web/JavaScript/Reference/Operators) comparison is [11.9.6, The Strict Equality Algorithm](http://ecma-international.org/ecma-262/5.1/#sec-11.9.6). (Go look at these. They're brief and readable. Hint: read the strict equality algorithm first.) ES5 also describes, in [Section 9.12, The SameValue Algorithm](http://ecma-international.org/ecma-262/5.1/#sec-9.12) for use internally by the JS engine. It's largely the same as the Strict Equality Algorithm, except that 11.9.6.4 and 9.12.4 differ in handling {{jsxref("Number")}}s. ES2015 proposes to expose this algorithm through {{jsxref("Object.is")}}.

We can see that with double and triple equals, with the exception of doing a type check upfront in 11.9.6.1, the Strict Equality Algorithm is a subset of the Abstract Equality Algorithm, because 11.9.6.2–7 correspond to 11.9.3.1.a–f.

## A model for understanding equality comparisons?

Prior to ES2015, you might have said of double equals and triple equals that one is an "enhanced" version of the other. For example, someone might say that double equals is an extended version of triple equals, because the former does everything that the latter does, but with type conversion on its operands. E.g., `6 == "6"`. (Alternatively, someone might say that double equals is the baseline, and triple equals is an enhanced version, because it requires the two operands to be the same type, so it adds an extra constraint. Which one is the better model for understanding depends on how you choose to view things.)

However, this way of thinking about the built-in sameness operators is not a model that can be stretched to allow a place for ES2015's {{jsxref("Object.is")}} on this "spectrum". {{jsxref("Object.is")}} isn't "looser" than double equals or "stricter" than triple equals, nor does it fit somewhere in between (i.e., being both stricter than double equals, but looser than triple equals). We can see from the sameness comparisons table below that this is due to the way that {{jsxref("Object.is")}} handles {{jsxref("NaN")}}. Notice that if `Object.is(NaN, NaN)` evaluated to `false`, we _could_ say that it fits on the loose/strict spectrum as an even stricter form of triple equals, one that distinguishes between `-0` and `+0`. The {{jsxref("NaN")}} handling means this is untrue, however. Unfortunately, {{jsxref("Object.is")}} has to be thought of in terms of its specific characteristics, rather than its looseness or strictness with regard to the equality operators.

| x                   | y                   | `==`       | `===`      | `Object.is` | `SameValueZero` |
| ------------------- | ------------------- | ---------- | ---------- | ----------- | --------------- |
| `undefined`         | `undefined`         | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `null`              | `null`              | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `true`              | `true`              | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `false`             | `false`             | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `'foo'`             | `'foo'`             | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `0`                 | `0`                 | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `+0`                | `-0`                | `✅ true`  | `✅ true`  | `❌ false`  | `✅ true`       |
| `+0`                | `0`                 | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `-0`                | `0`                 | `✅ true`  | `✅ true`  | `❌ false`  | `✅ true`       |
| `0n`                | `-0n`               | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `0`                 | `false`             | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `""`                | `false`             | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `""`                | `0`                 | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `'0'`               | `0`                 | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `'17'`              | `17`                | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `[1, 2]`            | `'1,2'`             | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `new String('foo')` | `'foo'`             | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `null`              | `undefined`         | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `null`              | `false`             | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `undefined`         | `false`             | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `{ foo: 'bar' }`    | `{ foo: 'bar' }`    | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `new String('foo')` | `new String('foo')` | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `0`                 | `null`              | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `0`                 | `NaN`               | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `'foo'`             | `NaN`               | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `NaN`               | `NaN`               | `❌ false` | `❌ false` | `✅ true`   | `✅ true`       |

## When to use Object.is versus triple equals

In general, the only time {{jsxref("Object.is")}}'s special behavior towards zeros is likely to be of interest is in the pursuit of certain meta-programming schemes, especially regarding property descriptors, when it is desirable for your work to mirror some of the characteristics of {{jsxref("Object.defineProperty")}}. If your use case does not require this, it is suggested to avoid {{jsxref("Object.is")}} and use [`===`](/en-US/docs/Web/JavaScript/Reference/Operators) instead. Even if your requirements involve having comparisons between two {{jsxref("NaN")}} values evaluate to `true`, generally it is easier to special-case the {{jsxref("NaN")}} checks (using the {{jsxref("isNaN")}} method available from previous versions of ECMAScript) than it is to work out how surrounding computations might affect the sign of any zeros you encounter in your comparison.

Here's a non-exhaustive list of built-in methods and operators that might cause a distinction between `-0` and `+0` to manifest itself in your code:

- {{jsxref("Operators/Unary_negation", "- (unary negation)")}}
  - : Consider the following example:

      ```js
      let stoppingForce = obj.mass * -obj.velocity;
      ```

      If `obj.velocity` is `0` (or computes to `0`), a `-0` is introduced at that place and propagates out into `stoppingForce`.
- {{jsxref("Math.atan2")}}, {{jsxref("Math.ceil")}}, {{jsxref("Math.pow")}}, {{jsxref("Math.round")}}
  - : In some cases,it's possible for a `-0` to be introduced into an expression as a return value of these methods even when no `-0` exists as one of the parameters. For example, using {{jsxref("Math.pow")}} to raise {{jsxref("Infinity", "-Infinity")}} to the power of any negative, odd exponent evaluates to `-0`. Refer to the documentation for the individual methods.
- {{jsxref("Math.floor")}}, {{jsxref("Math.max")}}, {{jsxref("Math.min")}}, {{jsxref("Math.sin")}}, {{jsxref("Math.sqrt")}}, {{jsxref("Math.tan")}}
  - : It's possible to get a `-0` return value out of these methods in some cases where a `-0` exists as one of the parameters. E.g., `Math.min(-0, +0)` evaluates to `-0`. Refer to the documentation for the individual methods.
- [`~`](/en-US/docs/Web/JavaScript/Reference/Operators), [`<<`](/en-US/docs/Web/JavaScript/Reference/Operators), [`>>`](/en-US/docs/Web/JavaScript/Reference/Operators)
  - : Each of these operators uses the ToInt32 algorithm internally. Since there is only one representation for 0 in the internal 32-bit integer type, `-0` will not survive a round trip after an inverse operation. E.g., both `Object.is(~~(-0), -0)` and `Object.is(-0 << 2 >> 2, -0)` evaluate to `false`.

Relying on {{jsxref("Object.is")}} when the signedness of zeros is not taken into account can be hazardous. Of course, when the intent is to distinguish between `-0` and `+0`, it does exactly what's desired.

## Caveat: Object.is and NaN

The {{jsxref("Object.is")}} specification treats all instances of {{jsxref("NaN")}} as the same object. However, since [typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays) are available, we can have distinct instances, which don't behave identically in all contexts. For example:

```js
var f2b = x => new Uint8Array(new Float64Array([x]).buffer);
var b2f = x => new Float64Array(x.buffer)[0];
var n = f2b(NaN);
n[0] = 1;
var nan2 = b2f(n);
nan2;
// > NaN
Object.is(nan2, NaN);
// > true
f2b(NaN);
// > Uint8Array(8) [0, 0, 0, 0, 0, 0, 248,127)
f2b(nan2);
// > Uint8Array(8) [1, 0, 0, 0, 0, 0, 248,127)
```

## See also

- [JS Comparison Table](https://dorey.github.io/JavaScript-Equality-Table/)
