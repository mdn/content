---
title: HTMLMediaElement.playbackRate
slug: Web/API/HTMLMediaElement/playbackRate
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - HTMLMediaElement
  - Property
browser-compat: api.HTMLMediaElement.playbackRate
---
{{APIRef("HTML DOM")}}

The **`HTMLMediaElement.playbackRate`** property sets the rate at which the media is being played back. This is used to implement user controls for fast forward, slow motion, and so forth. The normal playback rate is multiplied by this value to obtain the current rate, so a value of 1.0 indicates normal speed.

If `playbackRate` is negative, the media is **not** played backwards.

The audio is muted when the fast forward or slow motion is outside a useful range (for example, Gecko mutes the sound outside the range `0.25` to `4.0`).

The pitch of the audio is corrected by default. You can disable pitch correction using the {{domxref("HTMLMediaElement.preservesPitch")}} property.

## Value

A [`double`](https://en.wikipedia.org/wiki/Double-precision_floating-point_format). `1.0` is "normal speed," values lower than `1.0` make the media play slower than normal, higher values make it play faster. (**Default:** `1.0`)

## Examples

```js
const obj = document.createElement('video');
console.log(obj.playbackRate); // Expected Output: 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("HTMLMediaElement")}}.
