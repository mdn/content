---
title: "HTMLTableElement: frame property"
short-title: frame
slug: Web/API/HTMLTableElement/frame
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.HTMLTableElement.frame
---

{{APIRef("HTML DOM")}} {{Deprecated_Header}}

The {{domxref("HTMLTableElement")}} interface's **`frame`**
property is a string that indicates which of the table's exterior borders should be
drawn.

## Value

One of the following:

- `void`
  - : No sides. This is the default.
- `"above"`
  - : Top side
- `"below"`
  - : Bottom side
- `"hsides"`
  - : Top and bottom only
- `"vsides"`
  - : Right and left sides only
- `"lhs"`
  - : Left-hand side only
- `"rhs"`
  - : Right-hand side only
- `"box"`
  - : All four sides
- `"border"`
  - : All four sides

## Examples

```js
// Set the frame of TableA to 'border'
const t = document.getElementById("TableA");
t.frame = "border";
t.border = "2px";
```

## Specifications

- W3C DOM 2 HTML Specification

## Browser compatibility

{{Compat}}
