---
title: HTMLMediaElement.setMediaKeys()
slug: Web/API/HTMLMediaElement/setMediaKeys
tags:
  - API
  - Audio
  - EncryptedMediaExtensions
  - Experimental
  - HTMLMediaElement
  - Media
  - Method
  - Reference
  - Video
browser-compat: api.HTMLMediaElement.setMediaKeys
---
{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`setMediaKeys()`** property of the
{{domxref("HTMLMediaElement")}} interface returns a {{jsxref("Promise")}} that resolves
to the passed {{domxref("MediaKeys")}}, which are those used to decrypt media during
playback.

## Syntax

```js
var Promise = HTMLMediaElement.setMediaKeys(mediaKeys);
```

### Parameters

- mediaKeys
  - : A reference to a {{domxref("MediaKeys")}} object that the
    {{domxref("HTMLMediaElement")}} can use for decryption of media data during playback.

### Returns

A {{jsxref("Promise")}} that resolves to the passed instance of `MediaKeys`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
