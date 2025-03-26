---
title: "DOMQuad: DOMQuad() constructor"
short-title: DOMQuad()
slug: Web/API/DOMQuad/DOMQuad
page-type: web-api-constructor
browser-compat: api.DOMQuad.DOMQuad
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The **`DOMQuad()`** constructor
creates and returns a new {{domxref("DOMQuad")}} object, given the values for some or
all of its properties.

You can also create a `DOMQuad` by calling the
{{domxref("DOMQuad.fromRect()")}} or {{domxref("DOMQuad.fromQuad()")}} static function. That function accepts any object with the required parameters, including a `DOMQuad`, {{domxref("DOMPoint")}} or
{{domxref("DOMPointReadOnly")}}.

## Syntax

```js-nolint
new DOMQuad()
new DOMQuad(p1)
new DOMQuad(p1, p2)
new DOMQuad(p1, p2, p3)
new DOMQuad(p1, p2, p3, p4)
```

### Parameters

- `p1` {{optional_inline}}
  - : The `p1` {{domxref("DOMPoint")}} for the new `DOMQuad`.
- `p2` {{optional_inline}}
  - : The `p2` {{domxref("DOMPoint")}} for the new `DOMQuad`.
- `p3` {{optional_inline}}
  - : The `p3` {{domxref("DOMPoint")}} for the new `DOMQuad`.
- `p4` {{optional_inline}}
  - : The `p4` {{domxref("DOMPoint")}} for the new `DOMQuad`.

## Examples

This example creates a `DOMQuad` using a {{domxref("DOMPoint")}} and three additional points defined as objects.

```js
const point = new DOMPoint(2, 0);
const quad = new DOMQuad(
  point,
  { x: 12, y: 0 },
  { x: 12, y: 10 },
  { x: 2, y: 10 },
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMPoint")}}
- {{domxref("DOMRect")}}
- {{domxref("DOMMatrix")}}
