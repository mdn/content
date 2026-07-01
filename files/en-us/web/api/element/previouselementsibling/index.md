---
title: "Element: previousElementSibling property"
short-title: previousElementSibling
slug: Web/API/Element/previousElementSibling
page-type: web-api-instance-property
browser-compat: api.Element.previousElementSibling
---

{{APIRef("DOM")}}

The **`Element.previousElementSibling`**
read-only property returns the {{domxref("Element")}} immediately prior to the specified
one in its parent's {{domxref("Element.children", "children")}} list, or `null` if the specified element is the first one in the list.

## Value

An {{domxref("Element")}} object, or `null`.

## Examples

```html
<div id="div-01">Here is div-01</div>
<div id="div-02">Here is div-02</div>
<li>This is a list item</li>
<li>This is another list item</li>
<div id="div-03">Here is div-03</div>
```

```js
let el = document.getElementById("div-03").previousElementSibling;
console.log("Siblings of div-03:");
while (el) {
  console.log(el.nodeName);
  el = el.previousElementSibling;
}
```

This example outputs the following into the page when it loads:

```plain
Siblings of div-03:
LI
LI
DIV
DIV
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.nextElementSibling")}}
