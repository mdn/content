---
title: "Credential: isConditionalMediationAvailable() static method"
short-title: isConditionalMediationAvailable()
slug: Web/API/Credential/isConditionalMediationAvailable_static
page-type: web-api-static-method
browser-compat: api.Credential.isConditionalMediationAvailable_static
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`isConditionalMediationAvailable()`** static method of the {{domxref("Credential")}} interface returns a {{jsxref("Promise")}} which resolves to `false`.

Subclasses of {{domxref("Credential")}} override this method if they support conditional mediation. See {{domxref("PublicKeyCredential.isConditionalMediationAvailable_static", "PublicKeyCredential.isConditionalMediationAvailable()")}}, for example.

## Syntax

```js-nolint
Credential.isConditionalMediationAvailable()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} which resolves to `false`.

## Examples

```js
await Credential.isConditionalMediationAvailable(); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
