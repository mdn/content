---
title: Element.firstElementChild
slug: Web/API/Element/firstElementChild
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - Element
  - Property
browser-compat: api.Element.firstElementChild
---
{{ APIRef("DOM") }}

The **`Element.firstElementChild`** read-only property
returns an element's first child {{domxref("Element")}}, or `null` if there
are no child elements.

`Element.firstElementChild` includes only element nodes.
To get all child nodes, including non-element nodes like text and comment nodes, use {{domxref("Node.firstChild")}}.

## Value

An {{domxref("Element")}} object, or `null`.

## Examples

```html
<ul id="list">
  <li>First  (1)</li>
  <li>Second (2)</li>
  <li>Third  (3)</li>
</ul>

<script>
const list = document.getElementById('list');
console.log(list.firstElementChild.textContent);
// logs "First (1)"
</script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.nextElementSibling")}}
- {{domxref("Element.lastElementChild")}}
