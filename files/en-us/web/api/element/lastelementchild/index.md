---
title: "Element: lastElementChild property"
short-title: lastElementChild
slug: Web/API/Element/lastElementChild
page-type: web-api-instance-property
browser-compat: api.Element.lastElementChild
---

{{ APIRef("DOM") }}

The **`Element.lastElementChild`** read-only property
returns an element's last child {{domxref("Element")}}, or `null` if there
are no child elements.

`Element.lastElementChild` includes only element nodes.
To get all child nodes, including non-element nodes like text and comment nodes, use {{domxref("Node.lastChild")}}.

## Value

An {{domxref("Element")}} object, or `null`.

## Examples

```html
<ul id="list">
  <li>First (1)</li>
  <li>Second (2)</li>
  <li>Third (3)</li>
</ul>

<script>
  const list = document.getElementById("list");
  console.log(list.lastElementChild.textContent);
  // logs "Third (3)"
</script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.previousElementSibling")}}
- {{domxref("Element.firstElementChild")}}
