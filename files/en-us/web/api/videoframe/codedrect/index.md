---
title: VideoFrame.codedRect
slug: Web/API/VideoFrame/codedRect
page-type: web-api-instance-property
browser-compat: api.VideoFrame.codedRect
---

{{APIRef("Web Codecs API")}}

The **`codedRect`** property of the {{domxref("VideoFrame")}} interface returns a {{domxref("DOMRectReadOnly")}} with the width and height matching {{domxref("VideoFrame.codedWidth")}} and {{domxref("VideoFrame.codedHeight")}}.

## Value

A {{domxref("DOMRectReadOnly")}}.

## Examples

The following example prints the `codedRect` to the console.

```js
console.log(VideoFrame.codedRect);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
