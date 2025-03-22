---
title: "HTMLMediaElement: setMediaKeys() method"
short-title: setMediaKeys()
slug: Web/API/HTMLMediaElement/setMediaKeys
page-type: web-api-instance-method
browser-compat: api.HTMLMediaElement.setMediaKeys
---

{{APIRef("HTML DOM")}}{{SecureContext_Header}}

The **`setMediaKeys()`** method of the {{domxref("HTMLMediaElement")}} interface sets the {{domxref("MediaKeys")}} that will be used to decrypt media during playback.

It returns a {{jsxref("Promise")}} that fulfils if the new keys are successfully set, or rejects if keys cannot be set.

## Syntax

```js-nolint
setMediaKeys(mediaKeys)
```

### Parameters

- `mediaKeys`
  - : A {{domxref("MediaKeys")}} object that the {{domxref("HTMLMediaElement")}} can use for decryption of media data during playback.

### Return value

A {{jsxref("Promise")}} that fulfills with {{jsxref('undefined')}}.

### Exceptions

The returned promise may reject an error:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Media keys are already in the process of being attached, or the previous keys cannot be removed at the current time (for example, because the particular implementation does not allow removal during playback).
- `QuotaExceededError` {{domxref("DOMException")}}
  - : The passed keys are already in use by another element, or the browser is unable to use it with this element for other reasons.
- `NotSupportedError` {{domxref("DOMException")}}
  - : The media keys that are currently associated with the media cannot be disassociated, because this is not supported by either the CDM or the browser.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
