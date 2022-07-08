---
title: Element.removeAttribute()
slug: Web/API/Element/removeAttribute
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Element
  - Method
  - Reference
  - remove
  - removeAttribute
browser-compat: api.Element.removeAttribute
---
{{ APIRef("DOM") }}

The {{domxref("Element")}} method
**`removeAttribute()`** removes the attribute with the
specified name from the element.

## Syntax

```js
removeAttribute(attrName)
```

### Parameters

- `attrName`
  - : A string specifying the name of the attribute to remove from the
    element. If the specified attribute does not exist, `removeAttribute()`
    returns without generating an error.

### Return value

None ({{jsxref("undefined")}}).

## Usage notes

You should use `removeAttribute()` instead of setting the attribute value to
`null` either directly or using {{domxref("Element.setAttribute",
  "setAttribute()")}}. Many attributes will not behave as expected if you set them to
`null`.

{{ DOMAttributeMethods() }}

## Examples

```js
// Given: <div id="div1" align="left" width="200px">
document.getElementById("div1").removeAttribute("align");
// Now: <div id="div1" width="200px">
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
