---
title: "HTMLModelElement: duration property"
short-title: duration
slug: Web/API/HTMLModelElement/duration
page-type: web-api-instance-property
browser-compat: api.HTMLModelElement.duration
---

{{APIRef("HTML DOM")}}

The _read-only_ {{domxref("HTMLModelElement")}}
property **`duration`** indicates the length of the element's
model animation, specified in seconds.

## Value

A double-precision floating-point value indicating the duration of the model's animation
in seconds. If no model data is available, the value `NaN` is returned.
If the element's model resource doesn't have an animation, the value is returned
as `0`.

> [!NOTE]
> A model's `currentTime` and `duration` are unaffected
> by changes to its animation's `playbackRate`.

## Examples

```js
const obj = document.createElement("model");
console.log(obj.duration); // NaN
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also
