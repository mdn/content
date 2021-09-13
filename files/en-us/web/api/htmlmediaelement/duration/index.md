---
title: HTMLMediaElement.duration
slug: Web/API/HTMLMediaElement/duration
tags:
  - API
  - HTML DOM
  - HTMLMediaElement
  - Property
  - Read-only
  - Time
  - Web
  - duration
  - seconds
browser-compat: api.HTMLMediaElement.duration
---
{{APIRef("HTML DOM")}}

The _read-only_ {{domxref("HTMLMediaElement")}}
property **`duration`** indicates the length of the element's
media in seconds.

## Syntax

```js
myDuration = htmlMediaElement.duration
```

### Value

A double-precision floating-point value indicating the duration of the media in
seconds. If no media data is available, the value `NaN` is returned. If the
element's media doesn't have a known duration—such as for live media streams—the value
of `duration` is `+Infinity`.

## Examples

```js
var obj = document.createElement('video');
console.log(obj.duration); // NaN
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web media technologies](/en-US/docs/Web/Media)
- {{domxref("HTMLMediaElement.currentTime")}}: The current playback position of the
  media
- The {{HTMLElement("audio")}} and {{HTMLElement("video")}} elements
