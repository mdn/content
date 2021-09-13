---
title: Document.createAttribute()
slug: Web/API/Document/createAttribute
tags:
  - API
  - DOM
  - Method
  - Reference
browser-compat: api.Document.createAttribute
---
{{ ApiRef("DOM") }}

The **`Document.createAttribute()`** method creates a new
attribute node, and returns it. The object created a node implementing the
{{domxref("Attr")}} interface. The DOM does not enforce what sort of attributes can be
added to a particular element in this manner.

> **Note:** The string given in parameter is converted to lowercase.

## Syntax

```js
attribute = document.createAttribute(name)
```

### Parameters

- `name` is a string containing the name of the attribute.

### Return value

A {{domxref("Attr")}} node.

### Exceptions

- `INVALID_CHARACTER_ERR` if the parameter contains invalid characters for
  XML attribute.

## Example

```js
var node = document.getElementById("div1");
var a = document.createAttribute("my_attrib");
a.value = "newVal";
node.setAttributeNode(a);
console.log(node.getAttribute("my_attrib")); // "newVal"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.createElement()")}}
