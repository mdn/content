---
title: "HTMLMediaElement: volume property"
short-title: volume
slug: Web/API/HTMLMediaElement/volume
page-type: web-api-instance-property
browser-compat: api.HTMLMediaElement.volume
---

{{APIRef("HTML DOM")}}

The **`HTMLMediaElement.volume`** property sets the volume at
which the media will be played.

## Value

A double values must fall between 0 and 1, where 0 is effectively muted and 1 is the
loudest possible value.

## Examples

```js
const obj = document.createElement("audio");
console.log(obj.volume); // 1
obj.volume = 0.75;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLMediaElement")}}: Interface used to define the `HTMLMediaElement.volume` property
- {{domxref("HTMLMediaElement.muted")}}
