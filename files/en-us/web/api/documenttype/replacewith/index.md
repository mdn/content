---
title: "DocumentType: replaceWith() method"
short-title: replaceWith()
slug: Web/API/DocumentType/replaceWith
page-type: web-api-instance-method
browser-compat: api.DocumentType.replaceWith
---

{{APIRef("DOM")}}

The **`replaceWith()`** method of the {{domxref("DocumentType")}} interface replaces this `DocumentType` in the children list of its parent with a set of {{domxref("Node")}} objects or strings. Strings are inserted as equivalent {{domxref("Text")}} nodes. Nothing happens if {{domxref("Node.parentNode", "parentNode")}} is `null`.

## Syntax

```js-nolint
replaceWith(param1)
replaceWith(param1, param2)
replaceWith(param1, param2, /* …, */ paramN)
```

### Parameters

- `param1`, …, `paramN`
  - : A set of {{domxref("Node")}} objects or strings to insert.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Thrown when the node cannot be inserted at the specified point in the hierarchy.

## Examples

### Using `replaceWith()`

```js
const svgDt = document.implementation.createDocumentType(
  "svg:svg",
  "-//W3C//DTD SVG 1.1//EN",
  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd",
);

document.doctype.replaceWith(svgDt);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CharacterData.replaceWith()")}}
- {{domxref("Element.replaceWith()")}}
- {{domxref("CharacterData.replaceWith()")}}
