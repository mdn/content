---
title: MouseEvent.offsetY
slug: Web/API/MouseEvent/offsetY
tags:
  - API
  - Experimental
  - MouseEvent
  - Property
  - Read-only
  - Reference
browser-compat: api.MouseEvent.offsetY
---
{{APIRef("DOM Events")}}{{SeeCompatTable}}

The **`offsetY`** read-only property of the
{{domxref("MouseEvent")}} interface provides the offset in the Y coordinate of the mouse
pointer between that event and the padding edge of the target node.

## Syntax

```js
var yOffset = instanceOfMouseEvent.offsetY;
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
