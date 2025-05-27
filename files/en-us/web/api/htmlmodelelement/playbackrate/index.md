---
title: "HTMLModelElement: playbackRate property"
short-title: playbackRate
slug: Web/API/HTMLModelElement/playbackRate
page-type: web-api-instance-property
browser-compat: api.HTMLModelElement.playbackRate
---

{{APIRef("HTML DOM")}}

The **`HTMLModelElement.playbackRate`** property sets the rate at which the model element's animation is being played back. This is used to implement user controls for fast forward, slow motion, and so forth. The normal playback rate is multiplied by this value to obtain the current rate, so a value of 1.0 indicates normal speed.

## Value

A [`double`](https://en.wikipedia.org/wiki/Double-precision_floating-point_format).
`1.0` is "normal speed," values lower than `1.0` make the model animation
play slower than normal, higher values make it play faster. (**Default:** `1.0`)

> [!NOTE]
> A model's `currentTime` and `duration` are unaffected
> by changes to its animation's `playbackRate`.

## Examples

```js
const obj = document.createElement("model");
console.log(obj.playbackRate); // Expected Output: 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLModelElement")}}: Interface used to define the `HTMLModelElement.playbackRate` property
