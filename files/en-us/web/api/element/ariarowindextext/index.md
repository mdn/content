---
title: Element.ariaRowIndexText
slug: Web/API/Element/ariaRowIndexText
page-type: web-api-instance-property
browser-compat: api.Element.ariaRowIndexText
---

{{APIRef("DOM")}}

The **`ariaRowIndexText`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-rowindextext`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowindextext) attribute, which defines a human readable text alternative of aria-rowindex.

## Value

A string.

## Examples

In this example the `aria-rowindextext` attribute on the element with an ID of `role-heading` is set to "Heading row". Using `ariaRowIndexText` we update the value to "Updated heading row".

```html
<table
  id="semantic-table"
  role="table"
  aria-label="Semantic Elements"
  aria-describedby="semantic_elements_table_desc"
  aria-rowcount="100">
  <caption id="semantic_elements_table_desc">
    Semantic Elements to use instead of ARIA's roles
  </caption>
  <thead role="rowgroup">
    <tr role="row">
      <th
        role="columnheader"
        id="role-heading"
        aria-sort="none"
        aria-rowindex="1"
        aria-rowindextext="Heading row">
        ARIA Role
      </th>
      <th
        role="columnheader"
        id="element-heading"
        aria-sort="none"
        aria-rowindex="1">
        Semantic Element
      </th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row">
      <td role="cell" aria-rowindex="11">header</td>
      <td role="cell" aria-rowindex="11">h1</td>
    </tr>
    <tr role="row">
      <td role="cell" aria-rowindex="16">header</td>
      <td role="cell" aria-rowindex="16">h6</td>
    </tr>
    <tr role="row">
      <td role="cell" aria-rowindex="18">rowgroup</td>
      <td role="cell" aria-rowindex="18">thead</td>
    </tr>
    <tr role="row">
      <td role="cell" aria-rowindex="24">term</td>
      <td role="cell" aria-rowindex="24">dt</td>
    </tr>
  </tbody>
</table>
```

```js
let el = document.getElementById("role-heading");
console.log(el.ariaRowIndexText); // "Heading row"
el.ariaRowIndexText = "Updated heading row";
console.log(el.ariaRowIndexText); // "Updated heading row"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: table role](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role)
