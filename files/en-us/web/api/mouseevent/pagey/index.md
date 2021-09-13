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

The **`pageY`** read-only property of the
{{domxref("MouseEvent")}} interface returns the Y (vertical) coordinate in pixels of the
event relative to the whole document. This property takes into account any vertical
scrolling of the page.

## Syntax

```js
var pos = event.pageY;
```

Originally, this property was defined as a `long` integer. The CSSOM View
Module redefined it as a `double` float. See the Browser compatibility
section for details.

## Examples

    var pageY = event.pageY;

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MouseEvent.pageX")}}
