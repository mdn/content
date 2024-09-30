---
title: "Element: setAttributeNode() method"
short-title: setAttributeNode()
slug: Web/API/Element/setAttributeNode
page-type: web-api-instance-method
browser-compat: api.Element.setAttributeNode
---

{{ APIRef("DOM") }}

The **`setAttributeNode()`** method of the {{domxref("Element")}} interface adds a new {{domxref("Attr")}} node to the specified element.

If you don't need to work with the attribute node (such as cloning from another element) before adding it, you can use the {{domxref("Element.setAttribute()", "setAttribute()")}} method instead.

## Syntax

```js-nolint
setAttributeNode(attribute)
```

### Parameters

- `attribute`
  - : The {{domxref("Attr")}} node to add to the element.

### Return value

The replaced attribute node, if any, returned by this function.

## Examples

This example copies the `align` attribute from one element to another.

### HTML

```html
<div id="one" align="left">one</div>
<div id="two">two</div>
```

### JavaScript

```js
let d1 = document.getElementById("one");
let d2 = document.getElementById("two");
let a = d1.getAttributeNode("align");

d2.setAttributeNode(a.cloneNode(true));

// Returns: 'left'
alert(d2.attributes[1].value);
```

## Notes

If the attribute named already exists on the element, that attribute is replaced with
the new one and the replaced one is returned.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.createAttribute()")}}
- {{domxref("Element.getAttributeNode()")}}
- {{domxref("Element.removeAttributeNode()")}}
