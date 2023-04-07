---
title: "StaticRange: StaticRange() constructor"
short-title: StaticRange()
slug: Web/API/StaticRange/StaticRange
page-type: web-api-constructor
browser-compat: api.StaticRange.StaticRange
---

{{APIRef("DOM")}}

The **`StaticRange()`** constructor
creates a new {{domxref("StaticRange")}} object representing a span of content within
the DOM.

This constructor includes properties identifying the standard and end positions of
the range as well as a Boolean indicating whether or not the range is
**collapsed** (that is, empty).

## Syntax

```js-nolint
new StaticRange(rangeSpec)
```

### Parameters

- `rangeSpec`

  - : The required `rangeSpec` parameter is an object
    containing the four following properties:

    - `startContainer`
      - : The {{domxref("Node")}} in which the starting point of the range is located.
    - `startOffset`
      - : The offset into the starting node at which the first character of the range is
        found.
    - `endContainer`
      - : The `Node` in which the end point of the range is located.
    - `endOffset`
      - : The offset into the node indicated by `endOffset` at which the last
        character in the range is located.

### Return value

A new `StaticRange` object initialized with the values given in
the `rangeSpec` object.

### Exceptions

- `InvalidNodeTypeError`
  - : A {{domxref("DOMException")}} fired if either or both of the
    `startContainer` and/or `endContainer` are a type of node which
    you can't include in a range. Those node types
    are `Node.DOCUMENT_TYPE_NODE` (representing the {{domxref("DocumentType")}}
    node derived from the {{Glossary("Doctype", "DTD")}} identified using the `doctype`
    preamble in the HTML, for example) and the {{domxref("Attr")}} node describing an
    attribute of an element on the DOM.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
