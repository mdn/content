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
one in its parent's children list, or `null` if the specified element is the first one in the list.

## Value

An {{domxref("Element")}} object, or `null`.

## Examples

```html
<div id="div-01">Here is div-01</div>
<div id="div-02">Here is div-02</div>
<li>This is a list item</li>
<li>This is another list item</li>
<div id="div-03">Here is div-03</div>

<script>
  let el = document.getElementById("div-03").previousElementSibling;
  document.write("<p>Siblings of div-03</p><ol>");
  while (el) {
    document.write("<li>" + el.nodeName + "</li>");
    el = el.previousElementSibling;
  }
  document.write("</ol>");
</script>
```

This example outputs the following into the page when it loads:

```
Siblings of div-03

   1. LI
   2. LI
   3. DIV
   4. DIV
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.nextElementSibling")}}
