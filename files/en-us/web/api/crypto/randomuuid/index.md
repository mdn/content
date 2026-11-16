---
title: "Crypto: randomUUID() method"
short-title: randomUUID()
slug: Web/API/Crypto/randomUUID
page-type: web-api-instance-method
browser-compat: api.Crypto.randomUUID
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

The **`randomUUID()`** method of the {{domxref("Crypto")}} interface is used to generate a v4 {{Glossary("UUID")}} using a cryptographically secure random number generator.

## Syntax

```js-nolint
randomUUID()
```

### Parameters

None.

### Return value

A string containing a randomly generated, 36 character long v4 UUID.

## Examples

```js
/* Assuming that self.crypto.randomUUID() is available */

let uuid = self.crypto.randomUUID();
console.log(uuid); // for example "36b8f84d-df4e-4d49-b662-bcde71a8764f"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API)
- {{ domxref("Crypto.getRandomValues") }}, a source for arbitrary amounts of secure random bytes.
