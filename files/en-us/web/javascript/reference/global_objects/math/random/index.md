---
title: Math.random()
slug: Web/JavaScript/Reference/Global_Objects/Math/random
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.random
---

{{JSRef}}

The **`Math.random()`** static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.

> **Note:** `Math.random()` _does not_ provide cryptographically secure random numbers. Do not use them for anything related to security. Use the Web Crypto API instead, and more precisely the {{domxref("Crypto/getRandomValues", "window.crypto.getRandomValues()")}} method.

{{EmbedInteractiveExample("pages/js/math-random.html")}}

## Syntax

```js-nolint
Math.random()
```

### Parameters

None.

### Return value

A floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).

## Examples

Note that as numbers in JavaScript are IEEE 754 floating point numbers with round-to-nearest-even behavior, the ranges claimed for the functions below (excluding the one for `Math.random()` itself) aren't exact. If extremely large bounds are chosen (2<sup>53</sup> or higher), it's possible in _extremely_ rare cases to reach the usually-excluded upper bound.

### Getting a random number between 0 (inclusive) and 1 (exclusive)

```js
function getRandom() {
  return Math.random();
}
```

### Getting a random number between two values

This example returns a random number between the specified values. The returned value is no lower than (and may possibly equal) `min`, and is less than (and not equal) `max`.

```js
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
```

### Getting a random integer between two values

This example returns a random _integer_ between the specified values. The value is no lower than `min` (or the next integer greater than `min` if `min` isn't an integer), and is less than (but not equal to) `max`.

```js
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
```

> **Note:** It might be tempting to use [`Math.round()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round) to accomplish that, but doing so would cause your random numbers to follow a non-uniform distribution, which may not be acceptable for your needs.

### Getting a random integer between two values, inclusive

While the `getRandomInt()` function above is inclusive at the minimum, it's exclusive at the maximum. What if you need the results to be inclusive at both the minimum and the maximum? The `getRandomIntInclusive()` function below accomplishes that.

```js
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Crypto/getRandomValues", "window.crypto.getRandomValues()")}}
