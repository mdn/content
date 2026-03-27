---
title: "Document: createAttribute() method"
short-title: createAttribute()
slug: Web/API/Document/createAttribute
page-type: web-api-instance-method
browser-compat: api.Document.createAttribute
---

{{ ApiRef("DOM") }}

The **`createAttribute()`** method of the {{domxref("Document")}} interface creates a new attribute node.

The object created is a node implementing the {{domxref("Attr")}} interface.
The DOM does not enforce what sort of attributes can be added to a particular element in this manner.

> [!NOTE]
> The string given in parameter is converted to lowercase.

## Syntax

```js-nolint
createAttribute(localName)
```

### Parameters

- `localName`
  - : A string containing the name of the attribute.
    The value is used to initialize the new attribute's {{DOMxRef("Attr.localName", "localName")}} property.

### Return value

An {{domxref("Attr")}} node.

### Exceptions

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : Thrown if the [`localName`](#localName) value is not a valid attribute name.
    It must have at least one character, and may not contain ASCII whitespace, `NULL`, `/`, `=` or `>` (U+0000, U+002F, U+003D, or U+003E, respectively).

    > [!NOTE]
    > Earlier versions of the specification were more restrictive, requiring that the `localName` be a valid [XML name](https://www.w3.org/TR/xml/#dt-name).

## Examples

### Basic example

```js
const node = document.getElementById("div1");
const a = document.createAttribute("my_attrib");
a.value = "newVal";
node.setAttributeNode(a);
console.log(node.getAttribute("my_attrib")); // "newVal"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.createAttributeNS()")}}
- {{domxref("Document.createElement()")}}
- {{domxref("Element.setAttribute()")}}
- {{domxref("Element.setAttributeNode()")}}
