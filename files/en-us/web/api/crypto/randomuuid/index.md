---
title: Crypto.randomUUID()
slug: Web/API/Crypto/randomUUID
tags:
  - API
  - Crypto
  - Method
  - Pseudorandom
  - Reference
  - UUID
  - Web Crypto API
  - randomUUID
browser-compat: api.Crypto.randomUUID
---
{{APIRef("Web Crypto API")}}{{SecureContext_header}}

The **`randomUUID()`** method of the {{domxref("Crypto")}}
interface lets you generate a v4 UUID using a cryptographically secure random
number generator, like is used for
{{domxref("Crypto.getRandomValues", "getRandomValues()")}}.

## Syntax

```js
crypto.randomUUID();
```

### Return value

A randomly generated, 36 character long v4 UUID.

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

- {{ domxref("Web Crypto API") }}
- {{ domxref("Window.crypto") }} to get a {{domxref("Crypto")}} object.
- {{ domxref("Crypto.getRandomValues") }}, a source for arbitrary amounts of secure random bytes.
