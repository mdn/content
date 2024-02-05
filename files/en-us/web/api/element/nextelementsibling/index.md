---
title: "Element: nextElementSibling property"
short-title: nextElementSibling
slug: Web/API/Element/nextElementSibling
page-type: web-api-instance-property
browser-compat: api.Element.nextElementSibling
---

{{APIRef("DOM")}}

The **`Element.nextElementSibling`** read-only
property returns the element immediately following the specified one in its parent's
children list, or `null` if the specified element is the last one in the list.

## Value

A {{domxref("Element")}} object, or `null`.

## Examples

```html
<div id="div-01">Here is div-01</div>
<div id="div-02">Here is div-02</div>

<script>
  let el = document.getElementById("div-01").nextElementSibling;
  console.log("Siblings of div-01:");
  while (el) {
    console.log(el.nodeName);
    el = el.nextElementSibling;
  }
</script>
```

This example outputs the following into the console when it loads:

```plain
Siblings of div-01:
DIV
SCRIPT
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.previousElementSibling")}}
