---
title: "Screen: pixelDepth property"
short-title: pixelDepth
slug: Web/API/Screen/pixelDepth
page-type: web-api-instance-property
browser-compat: api.Screen.pixelDepth
---

{{APIRef("CSSOM")}}

Returns the bit depth of the screen. Per the CSSOM, some implementations
return `24` for compatibility reasons. See the [browser compatibility](#browser_compatibility) section for those that don't.

## Value

A number.

## Examples

```js
// if there is not adequate bit depth
// choose a simpler color
document.style.color = window.screen.pixelDepth > 8 ? "#FAEBD7" : "#FFFFFF";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Screen.colorDepth")}}
