---
title: VideoFrame.codedRect
slug: Web/API/VideoFrame/codedRect
tags:
  - API
  - Property
  - Reference
  - codedRect
  - VideoFrame
browser-compat: api.VideoFrame.codedRect
---
{{DefaultAPISidebar("Web Codecs API")}}

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
