---
title: VideoColorSpace.toJSON()
slug: Web/API/VideoColorSpace/toJSON
tags:
  - API
  - Method
  - Reference
  - toJSON
  - VideoColorSpace
browser-compat: api.VideoColorSpace.toJSON
---
{{DefaultAPISidebar("WebCodecs API")}}

The **`toJSON()`** method of the {{domxref("VideoColorSpace")}} interface is a _serializer_ that returns a JSON representation of the `VideoColorSpace` object.

## Syntax

```js
VideoColorSpace.toJSON()
```

### Parameters

None.

### Return Value

A JSON object.

## Examples

In the following example, `colorSpace` is a `VideoColorSpace` object returned from {{domxref("VideoFrame")}}. This object is then printed to the console as JSON.

```js
let colorSpace = VideoFrame.colorSpace
console.log(colorSpace.toJSON());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

