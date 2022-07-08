---
title: HTMLMediaElement.defaultPlaybackRate
slug: Web/API/HTMLMediaElement/defaultPlaybackRate
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - HTMLMediaElement
  - Property
  - Web
browser-compat: api.HTMLMediaElement.defaultPlaybackRate
---
{{APIRef("HTML DOM")}}

The **`HTMLMediaElement.defaultPlaybackRate`** property indicates the default playback rate for the media.

## Value

A double. `1.0` is "normal speed," values lower than `1.0` make the media play slower than normal, higher values make it play faster.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the specified value is not supported.

## Examples

```js
const obj = document.createElement('video');
console.log(obj.defaultPlaybackRate); // 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("HTMLMediaElement")}}.
