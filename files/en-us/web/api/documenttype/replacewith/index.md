---
title: DocumentType.replaceWith()
slug: Web/API/DocumentType/replaceWith
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Method
  - DocumentType
  - Reference
browser-compat: api.DocumentType.replaceWith
---
{{APIRef("DOM")}}

The **`DocumentType.replaceWith()`** method replaces the document type with a set of given nodes.

## Syntax

```js
replaceWith(node1)
replaceWith(node1, node2)
replaceWith(node1, node2, /* … ,*/ nodeN)
```

### Parameters

- `node1`, …, `nodeN`
  - : A set of nodes to replace the {{domxref("DocumentType")}} with.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Thrown when the node cannot be inserted at the specified point in the hierarchy.

## Examples

### Using `replaceWith()`

```js
let svg_dt = document.implementation.createDocumentType(
  'svg:svg',
  '-//W3C//DTD SVG 1.1//EN',
  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'
);

document.doctype.replaceWith(svg_dt);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.replaceWith()")}}
