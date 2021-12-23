---
title: Screen.colorDepth
slug: Web/API/Screen/colorDepth
tags:
  - API
  - CSSOM View
  - Property
  - Reference
browser-compat: api.Screen.colorDepth
---
{{APIRef("CSSOM")}}

The **`Screen.colorDepth`** read-only property returns the
color depth of the screen. Per the CSSOM, some implementations return `24`
for compatibility reasons. See the browser compatibility section for those that don't.

## Syntax

```js
bitDepth = window.screen.colorDepth;
```

## Example

```js
// Check the color depth of the screen
if ( window.screen.colorDepth < 8) {
  // Use low-color version of page
} else {
  // Use regular, colorful page
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Screen.pixelDepth")}}
