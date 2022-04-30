---
title: Screen.pixelDepth
slug: Web/API/Screen/pixelDepth
tags:
  - API
  - CSSOM View
  - NeedsMarkupWork
  - Property
  - Reference
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
if ( window.screen.pixelDepth > 8 ) {
  document.style.color = "#FAEBD7";
} else {
  document.style.color = "#FFFFFF";
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Screen.colorDepth")}}
