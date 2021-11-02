---
title: MouseEvent.pageY
slug: Web/API/MouseEvent/pageY
tags:
  - API
  - DOM
  - Property
  - Read-only
  - Reference
browser-compat: api.MouseEvent.pageY
---
{{APIRef("DOM Events")}}

The **`pageY`** read-only property of the {{domxref("MouseEvent")}} interface returns the Y (vertical) coordinate in pixels of the event relative to the whole document.
This property takes into account any vertical scrolling of the page.

## Value

A `double` float.

This property was originally defined as a `long` integer, but it was redefined by the CSSOM View Module.

## Examples

```js
let pageY = event.pageY;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MouseEvent.pageX")}}
