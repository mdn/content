---
title: Screen.availTop
slug: Web/API/Screen/availTop
tags:
  - API
  - API:Mozilla Extensions
  - API:WebKit Extensions
  - DOM
  - Non-standard
  - Property
browser-compat: api.Screen.availTop
---
{{APIRef("CSSOM")}}{{Non-standard_Header}}

Specifies the y-coordinate of the first pixel that is not allocated to permanent or
semipermanent user interface features.

## Syntax

```js
let availTop = window.screen.availTop;
```

## Example

```js
let setX = window.screen.width - window.screen.availLeft;
let setY = window.screen.height - window.screen.availTop;
window.moveTo(setX, setY);
```

## Notes

In most cases, this property returns `0`.

## Browser compatibility

{{Compat}}
