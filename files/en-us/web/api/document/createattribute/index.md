---
title: "Document: createAttribute() method"
short-title: createAttribute()
slug: Web/API/Document/createAttribute
page-type: web-api-instance-method
browser-compat: api.Document.createAttribute
---

{{ ApiRef("DOM") }}

The **`Document.createAttribute()`** method creates a new
attribute node, and returns it. The object created is a node implementing the
{{domxref("Attr")}} interface. The DOM does not enforce what sort of attributes can be
added to a particular element in this manner.

> **Note:** The string given in parameter is converted to lowercase.

## Syntax

```js-nolint
createAttribute(name)
```

### Parameters

- `name` is a string containing the name of the attribute.

### Return value

A {{domxref("Attr")}} node.

### Exceptions

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : Thrown if the [`name`](#name) value is not a valid [XML name](https://www.w3.org/TR/REC-xml/#dt-name); for example, it starts with a number, hyphen, or period, or contains characters other than alphanumeric characters, underscores, hyphens, or periods.

## Examples

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
