---
title: Element.nextElementSibling
slug: Web/API/Element/nextElementSibling
tags:
  - API
  - DOM
  - Element
  - Property
browser-compat: api.Element.nextElementSibling
---
{{APIRef("DOM")}}

The **`Element.nextElementSibling`** read-only
property returns the element immediately following the specified one in its parent's
children list, or `null` if the specified element is the last one in the list.

## Syntax

```js
// Getter
element = el.nextElementSibling;

// No setter; read-only property
```

## Example

```html
<div id="div-01">Here is div-01</div>
<div id="div-02">Here is div-02</div>

<script type="text/javascript">
  let el = document.getElementById('div-01').nextElementSibling;
  console.log('Siblings of div-01:');
  while (el) {
    console.log(el.nodeName);
    el = el.nextElementSibling;
  }
</script>
```

This example outputs the following into the console when it loads:

    Siblings of div-01:
    DIV
    SCRIPT

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.previousElementSibling")}}
