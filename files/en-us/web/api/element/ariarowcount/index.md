---
title: Element.ariaRowCount
slug: Web/API/Element/ariaRowCount
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - ariaRowCount
  - AriaAttributes
  - AriaMixin
  - Element
browser-compat: api.Element.ariaRowCount
---
{{DefaultAPISidebar("DOM")}}

The **`ariaRowCount`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-rowcount`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) attribute, which defines the total number of rows in a table, grid, or treegrid.

## Value

A string which contains an integer.

## Examples

In this example the `aria-rowcount` attribute on the element with an ID of `semantic-table` is set to "100", representing the total number of rows in the table, rather than the currently visible rows. Using `ariaRowCount` we update the value to "101".

```html
<table id="semantic-table" role="table" aria-label="Semantic Elements" aria-describedby="semantic_elements_table_desc" aria-rowcount="100">
  <caption id="semantic_elements_table_desc">Semantic Elements to use instead of ARIA's roles</caption>
  <thead role="rowgroup">
    <tr role="row">
      <th role="columnheader" aria-sort="none" aria-rowindex="1">ARIA Role</th>
      <th role="columnheader" aria-sort="none" aria-rowindex="1">Semantic Element</th>
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
let el = document.getElementById('semantic-table');
console.log(el.ariaRowCount); // 100
el.ariaRowCount = "101"
console.log(el.ariaRowCount); // 101
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

- [ARIA: table role](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role)
