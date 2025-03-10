---
title: "Crypto: getRandomValues() method"
short-title: getRandomValues()
slug: Web/API/Crypto/getRandomValues
page-type: web-api-instance-method
browser-compat: api.Crypto.getRandomValues
---

{{APIRef("Web Crypto API")}}{{AvailableInWorkers}}

The **`Crypto.getRandomValues()`** method lets you get cryptographically strong random values.
The array given as the parameter is filled with random numbers (random in its cryptographic meaning).

To guarantee enough performance, implementations are not using a truly random number generator, but they are using a pseudo-random number generator _seeded_ with a value with enough entropy.
The pseudo-random number generator algorithm (PRNG) may vary across {{Glossary("user agent", "user agents")}}, but is suitable for cryptographic purposes.

`getRandomValues()` is the only member of the `Crypto` interface which can be used from an insecure context.

## Syntax

```js-nolint
getRandomValues(typedArray)
```

### Parameters

- `typedArray`
  - : An integer-based {{jsxref("TypedArray")}}, that is one of: {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}},
    {{jsxref("Uint8ClampedArray")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}},
    {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}},
    {{jsxref("BigUint64Array")}} (but **not** `Float32Array` nor `Float64Array`).
    All elements in the array will be overwritten with random numbers.

### Return value

The same array passed as `typedArray` but with its contents replaced with the newly generated random numbers.
Note that `typedArray` is modified in-place, and no copy is made.

### Exceptions

- `QuotaExceededError` {{domxref("DOMException")}}
  - : Thrown if the {{jsxref("TypedArray.byteLength", "byteLength")}} of `typedArray` exceeds 65,536.

## Usage notes

Prefer the {{domxref("SubtleCrypto.generateKey", "generateKey()")}} method for key generation, which is guaranteed to be running in a secure context.

There is no minimum degree of entropy mandated by the Web Cryptography specification.
User agents are instead urged to provide the best entropy they can when generating random numbers,
using a well-defined, efficient pseudorandom number generator built into the user agent itself,
but seeded with values taken from an external source of pseudorandom numbers, such as a platform-specific random number function,
the Unix `/dev/urandom` device, or other source of random or pseudorandom data.

## Examples

```js
const array = new Uint32Array(10);
self.crypto.getRandomValues(array);

console.log("Your lucky numbers:");
for (const num of array) {
  console.log(num);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API)
- {{jsxref("Math.random")}}, a non-cryptographic source of random numbers.
