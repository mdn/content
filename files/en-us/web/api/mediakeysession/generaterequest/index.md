---
title: "MediaKeySession: generateRequest() method"
short-title: generateRequest()
slug: Web/API/MediaKeySession/generateRequest
page-type: web-api-instance-method
browser-compat: api.MediaKeySession.generateRequest
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

The `generateRequest()` method of the {{domxref('MediaKeySession')}} interface returns a {{jsxref('Promise')}} after generating a license request based on initialization data.

## Syntax

```js-nolint
generateRequest(initDataType, initData)
```

### Parameters

- `initDataType`
  - : A string that specifies the format of the `initData` parameter. This must be one of the following values:
    - `"cenc"`: The `initData` parameter uses the [`"cenc"`](https://www.w3.org/TR/eme-initdata-cenc/) format.
    - `"keyids"`: The `initData` parameter uses the [`"keyids"`](https://www.w3.org/TR/eme-initdata-keyids/) format.
    - `"webm"`: The `initData` parameter uses the [`"webm"`](https://www.w3.org/TR/eme-initdata-webm/) format.
- `initData`

  - : Initialization data for the request, in the format specified by `initDataType`. It is an instance of any of the following types:

    - {{jsxref("ArrayBuffer")}}
    - {{jsxref("DataView")}}
    - {{jsxref("TypedArray")}}

### Return value

A {{jsxref('Promise')}}.

### Exceptions

- {{jsxref("TypeError")}}
  - : Raised if `initDataType` is an empty string, if `initData` is an empty array, or if the provided `initData` is not valid according to the specified `initDataType`.
- {{domxref("DOMException")}} `NotSupportedError`
  - : Raised if the Key System implementation associated with the `MediaKeySession` object does not support the provided `initDataType`, if the sanitized initialization data is empty, or if the sanitized initialization data is not supported by the content decryption module (CDM).
- {{domxref("DOMException")}} `QuotaExceededError`
  - : Raised if the operation fails due to a lack of resources on the user agent or CDM.
- {{domxref("DOMException")}} `InvalidStateError`
  - : Raised if the `MediaKeySession` object is in a `closing` or `closed` state, or if it has already been initialized.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
