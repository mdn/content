---
title: "Document: hasRedemptionRecord() method"
short-title: hasRedemptionRecord()
slug: Web/API/Document/hasRedemptionRecord
page-type: web-api-instance-method
browser-compat: api.Document.hasRedemptionRecord
---

{{APIRef("Storage Access API")}}

The **`hasRedemptionRecord()`** method of the {{domxref("Document")}} interface returns a promise that fulfills with a boolean indicating whether the browser has a [redemption record](/en-US/docs/Web/API/Private_State_Token_API/Using#redeeming_tokens) originating from a particular issuer.

## Syntax

```js-nolint
hasRedemptionRecord(issuer)
```

### Parameters

- `issuer`
  - : A string representing the URL of an issuer server.

### Return value

A {{jsxref("Promise")}} that resolves with a boolean value indicating whether the browser has a redemption record stored that originates from the specified issuer server.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the current {{domxref("Document")}} is not yet active.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if the current {{domxref("Document")}} is not loaded in a secure context.
- `TypeError` {{domxref("DOMException")}}
  - : Thrown if `issuer` is not a valid URL.

## Examples

```js
const hasRR = await Document.hasRedemptionRecord(`issuer.example`);
if (hasRR) {
  await fetch("some-resource.example", {
    method: "POST",
    privateToken: {
      version: 1,
      operation: "send-redemption-record",
      issuers: [`issuer.example`],
    },
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Private State Token API](/en-US/docs/Web/API/Private_State_Token_API)
