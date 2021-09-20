---
title: HTMLTableElement.frame
slug: Web/API/HTMLTableElement/frame
tags:
  - API
  - HTML DOM
  - HTMLTableElement
  - NeedsBrowserCompatibility
  - NeedsSpecTable
  - Property
  - Reference
  - Tables
  - Deprecated
browser-compat: api.HTMLTableElement.frame
---
{{APIRef("HTML DOM")}} {{Deprecated_Header}}

The {{domxref("HTMLTableElement")}} interface's **`frame`**
property is a string that indicates which of the table's exterior borders should be
drawn.

## Syntax

```js
HTMLTableElement.frame = frameSides;
var frameSides = HTMLTableElement.frame;
```

### Parameters

`frameSides` is a string whose value is one of the following values:

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

## Example

```js
// Set the frame of TableA to 'border'
var t = document.getElementById('TableA');
t.frame  = "border";
t.border = "2px";
```

## Specifications

- W3C DOM 2 HTML Specification

## Browser compatibility

{{Compat}}
