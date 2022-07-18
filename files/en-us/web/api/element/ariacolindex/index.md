---
title: Element.ariaColIndex
slug: Web/API/Element/ariaColIndex
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - ariaColIndex
  - AriaAttributes
  - AriaMixin
  - Element
browser-compat: api.Element.ariaColIndex
---
{{DefaultAPISidebar("DOM")}}

The **`ariaColIndex`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-colindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) attribute, which defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

## Value

A string which contains an integer.

## Examples

In this example the `aria-colindex` attribute on the element with an ID of `role-heading` is set to "1". Using `ariaColIndex` we update the value to "2".

```html
<table id="semantic-table" role="table" aria-label="Semantic Elements" aria-describedby="semantic_elements_table_desc" aria-rowcount="100">
  <caption id="semantic_elements_table_desc">Semantic Elements to use instead of ARIA's roles</caption>
  <thead role="rowgroup">
    <tr role="row">
      <th role="columnheader" id="role-heading" aria-sort="none" aria-rowindex="1" aria-colindex="1">ARIA Role</th>
      <th role="columnheader" id="element-heading" aria-sort="none" aria-rowindex="1">Semantic Element</th>
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
let el = document.getElementById('role-heading');
console.log(el.ariaColIndex); // 1
el.ariaColIndex = "2"
console.log(el.ariaColIndex); // 2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: table role](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role)
