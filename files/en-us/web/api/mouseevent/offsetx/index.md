---
title: MouseEvent.offsetX
slug: Web/API/MouseEvent/offsetX
tags:
  - API
  - Experimental
  - MouseEvent
  - Property
  - Read-only
  - Reference
browser-compat: api.MouseEvent.offsetX
---
{{APIRef("DOM Events")}}{{SeeCompatTable}}

The **`offsetX`** read-only property of the
{{domxref("MouseEvent")}} interface provides the offset in the X coordinate of the mouse
pointer between that event and the padding edge of the target node.

## Syntax

```js
var xOffset = instanceOfMouseEvent.offsetX;
```

### Return value

A `double` floating point value. Early versions of the spec defined this as
an integer. See the Browser compatibility section for details.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("MouseEvent") }}
