---
title: Element.ariaColIndexText
slug: Web/API/Element/ariaColIndexText
page-type: web-api-instance-property
browser-compat: api.Element.ariaColIndexText
---

{{APIRef("DOM")}}

The **`ariaColIndexText`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-colindextext`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindextext) attribute, which defines a human readable text alternative of aria-colindex.

## Value

A string.

## Examples

In this example the `aria-colindex` attribute on the element with an ID of `role-heading` is set to "Aria Role column". Using `ariaColIndexText` we update the value to the string "New column name".

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
        aria-colindex="1"
        aria-colindextext="Aria Role column">
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
console.log(el.ariaColIndexText); // "Aria Role"
el.ariaColIndexText = "New column name";
console.log(el.ariaColIndexText); // "New column name"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: table role](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role)
