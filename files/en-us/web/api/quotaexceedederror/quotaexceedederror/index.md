---
title: "QuotaExceededError: QuotaExceededError() constructor"
short-title: QuotaExceededError()
slug: Web/API/QuotaExceededError/QuotaExceededError
page-type: web-api-constructor
browser-compat: api.QuotaExceededError.QuotaExceededError
---

{{APIRef("DOM")}}

The **`QuotaExceededError()`** constructor creates a new `QuotaExceededError` object.

## Syntax

```js-nolint
new QuotaExceededError()
new QuotaExceededError(message)
new QuotaExceededError(message, options)
```

### Parameters

- `message` {{optional_inline}}
  - : The {{domxref("DOMException.message", "message")}}. Defaults to `""`.
- `options` {{optional_inline}}
  - : An object that can have the following properties:
    - `quota` {{optional_inline}}
      - : A number representing the system-defined storage quota (in bytes) that was exceeded, or `undefined` if the information isn't available. Corresponds to {{domxref("QuotaExceededError.quota")}}.
    - `requested` {{optional_inline}}
      - : A number representing the amount of storage (in bytes) that was requested during the operation, or `undefined` if the information isn't available. Corresponds to {{domxref("QuotaExceededError.requested")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMException/DOMException", "DOMException()")}}
- {{domxref("QuotaExceededError")}}
