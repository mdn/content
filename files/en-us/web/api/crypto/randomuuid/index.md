---
title: Crypto.randomUUID()
slug: Web/API/Crypto/randomUUID
page-type: web-api-instance-method
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

The **`randomUUID()`** method of the {{domxref("Crypto")}} interface is used to generate a v4 {{Glossary("UUID")}} using a cryptographically secure random number generator.

## Syntax

```js
randomUUID()
```

### Parameters

None.

### Return value

A string containing a randomly generated, 36 character long v4 UUID.

## Examples

The method is accessed through the global {{domxref("crypto_property", "crypto")}} property.

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
- {{ domxref("crypto_property", "crypto") }} to get a {{domxref("Crypto")}} object.
- {{ domxref("Crypto.getRandomValues") }}, a source for arbitrary amounts of secure random bytes.
