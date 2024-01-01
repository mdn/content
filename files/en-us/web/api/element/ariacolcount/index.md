---
title: "Element: ariaColCount property"
short-title: ariaColCount
slug: Web/API/Element/ariaColCount
page-type: web-api-instance-property
browser-compat: api.Element.ariaColCount
---

{{DefaultAPISidebar("DOM")}}

The **`ariaColCount`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-colcount`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) attribute, which defines the number of columns in a table, grid, or treegrid.

## Value

A string.

## Examples

In this example the `aria-colcount` attribute on the element with an ID of `semantic-table` is set to "2". Using `ariaColCount` we update the value to "3".

```html
<table
  id="semantic-table"
  role="table"
  aria-label="Semantic Elements"
  aria-describedby="semantic_elements_table_desc"
  aria-rowcount="100"
  aria-colcount="2">
  <caption id="semantic_elements_table_desc">
    Semantic Elements to use instead of ARIA's roles
  </caption>
  <thead role="rowgroup">
    <tr role="row">
      <th role="columnheader" aria-sort="none" aria-rowindex="1">ARIA Role</th>
      <th role="columnheader" aria-sort="none" aria-rowindex="1">
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
let el = document.getElementById("semantic-table");
console.log(el.ariaColCount); // 2
el.ariaColCount = "3";
console.log(el.ariaColCount); // 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

- [ARIA: table role](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role)
