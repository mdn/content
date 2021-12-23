---
title: Crypto.getRandomValues()
slug: Web/API/Crypto/getRandomValues
tags:
  - API
  - Crypto
  - Cryptography
  - Encryption
  - Integers
  - Method
  - Numbers
  - Pseudorandom
  - Pseudorandom Numbers
  - Random Numbers
  - Reference
  - Web Crypto API
  - getRandomValues
browser-compat: api.Crypto.getRandomValues
---
{{APIRef("Web Crypto API")}}

The **`Crypto.getRandomValues()`** method lets you get cryptographically strong random values.
The array given as the parameter is filled with random numbers (random in its cryptographic meaning).

To guarantee enough performance, implementations are not using a truly random number generator, but they are using a pseudo-random number generator _seeded_ with a value with enough entropy.
The pseudo-random number generator algorithm (PRNG) may vary across {{Glossary("user agent", "user agents")}}, but is suitable for cryptographic purposes.
Implementations are required to use a seed with enough entropy, like a system-level entropy source.

`getRandomValues()` is the only member of the `Crypto` interface which can be used from an insecure context.

## Syntax

```js
crypto.getRandomValues(typedArray)
```

### Parameters

- `typedArray`
  - : An integer-based {{jsxref("TypedArray")}}, that is an {{jsxref("Int8Array")}}, a {{jsxref("Uint8Array")}}, an {{jsxref("Int16Array")}}, a {{jsxref("Uint16Array")}}, an
    {{jsxref("Int32Array")}}, or a {{jsxref("Uint32Array")}}.
    All elements in the array are overwritten with random numbers.

### Return value

The same array passed as `typedArray` but with its contents replaced with the newly generated random numbers.
Note that `typedArray` is modified in-place, and no copy is made.

### Exceptions

This method can throw an exception under error conditions.

- {{domxref("DOMException")}} (name: {{exception("QuotaExceededError")}})
  - : The requested length exceeds 65,536 bytes.

## Usage notes

Don't use `getRandomValues()` to generate encryption keys.
Instead, use the {{domxref("SubtleCrypto.generateKey", "generateKey()")}} method.
There are a few reasons for this; for example, `getRandomValues()` is not guaranteed to be running in a secure context.

There is no minimum degree of entropy mandated by the Web Cryptography specification.
User agents are instead urged to provide the best entropy they can when generating random numbers,
using a well-defined, efficient pseudorandom number generator built into the user agent itself,
but seeded with values taken from an external source of pseudorandom numbers, such as a platform-specific random number function,
the Unix `/dev/urandom` device, or other source of random or pseudorandom data.

## Examples

```js
/* Assuming that window.crypto.getRandomValues is available */

var array = new Uint32Array(10);
self.crypto.getRandomValues(array);

console.log("Your lucky numbers:");
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API)
- {{ domxref("crypto_property", "crypto") }} to get a {{domxref("Crypto")}} object.
- {{jsxref("Math.random")}}, a non-cryptographic source of random numbers.
