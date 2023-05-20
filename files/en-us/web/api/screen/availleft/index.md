---
title: "Screen: availLeft property"
short-title: availLeft
slug: Web/API/Screen/availLeft
page-type: web-api-instance-property
status:
  - non-standard
browser-compat: api.Screen.availLeft
---

{{APIRef("CSSOM")}}{{Non-standard_Header}}

Returns the first available pixel from the left side of the screen.

## Value

A number.

## Examples

```js
let setX = window.screen.width - window.screen.availLeft;
let setY = window.screen.height - window.screen.availTop;
window.moveTo(setX, setY);
```

## Notes

In most cases, this property returns 0.

If you work with two screens this property, evaluated on the right screen, returns the
width of the left one in pixels (thereby indicating the X coordinate of the left edge of
the screen on the right).

On Windows, this property depends on which screen is set as your primary, returning the
X coordinate of the leftmost available pixel relative to the primary screen. That is,
the primary screen's left edge always has the X coordinate 0, even if it's not the
leftmost screen. If the secondary screen is to the left of the primary screen, it has a
negative X coordinate to compensate:

\[1] \[2] - on left screen _availLeft_ returns **0**, on the right
screen it returns the **width** of the left one

\[2] \[1] - on left screen _availLeft_ returns **-width** of that
screen, on the right screen, it returns **0**

## Browser compatibility

{{Compat}}
