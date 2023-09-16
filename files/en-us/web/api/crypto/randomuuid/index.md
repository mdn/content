-![image](https://github.com/mdn/content/assets/134336103/9c317d18-5982-4ebc-8607-d6f35605c0a3)
-
title: "Crypto: randomUUID() method"
short-title: randomUUID()
slug: Web/API/Crypto/randomUUID
page-type: web-api-instance-method
browser-compat: api.Crypto.randomUUID
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

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
