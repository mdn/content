---
title: HTMLMediaElement.defaultPlaybackRate
slug: Web/API/HTMLMediaElement/defaultPlaybackRate
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

## Syntax

```js
var dSpeed = video.defaultPlaybackRate;
audio.defaultPlaybackRate = 1.0;
```

### Value

A double. `1.0` is "normal speed," values lower than `1.0` make the media play slower than normal, higher values make it play faster.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the specified value is not supported.

## Example

```js
var obj = document.createElement('video');
console.log(obj.defaultPlaybackRate); // 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("HTMLMediaElement")}}.
