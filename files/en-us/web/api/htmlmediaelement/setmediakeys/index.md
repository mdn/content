---
title: HTMLMediaElement.setMediaKeys()
slug: Web/API/HTMLMediaElement/setMediaKeys
page-type: web-api-instance-method
tags:
  - API
  - Audio
  - EncryptedMediaExtensions
  - HTMLMediaElement
  - Media
  - Method
  - Reference
  - Video
browser-compat: api.HTMLMediaElement.setMediaKeys
---
{{APIRef("HTML DOM")}}

The **`setMediaKeys()`** property of the
{{domxref("HTMLMediaElement")}} interface returns a {{jsxref("Promise")}} that resolves
to the passed {{domxref("MediaKeys")}}, which are those used to decrypt media during
playback.

## Syntax

```js
setMediaKeys(mediaKeys)
```

### Parameters

- `mediaKeys`
  - : A reference to a {{domxref("MediaKeys")}} object that the
    {{domxref("HTMLMediaElement")}} can use for decryption of media data during playback.

### Return value

A {{jsxref("Promise")}} that resolves to the passed instance of `MediaKeys`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
