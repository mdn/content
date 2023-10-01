---
title: "Screen: availTop property"
short-title: availTop
slug: Web/API/Screen/availTop
page-type: web-api-instance-property
status:
  - non-standard
browser-compat: api.Screen.availTop
---

{{APIRef("CSSOM")}}{{Non-standard_Header}}

Specifies the y-coordinate of the first pixel that is not allocated to permanent or
semipermanent user interface features.

## Value

A number.

## Examples

```js
let setX = window.screen.width - window.screen.availLeft;
let setY = window.screen.height - window.screen.availTop;
window.moveTo(setX, setY);
```

## Notes

In most cases, this property returns `0`.

## Browser compatibility

{{Compat}}
