---
title: "Element: ariaSort property"
short-title: ariaSort
slug: Web/API/Element/ariaSort
page-type: web-api-instance-property
browser-compat: api.Element.ariaSort
---

{{APIRef("DOM")}}

The **`ariaSort`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-sort`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-sort) attribute, which indicates if items in a table or grid are sorted in ascending or descending order.

## Value

A string with one of the following values:

- `"ascending"`
  - : Items are sorted in ascending order by this column.
- `"descending"`
  - : Items are sorted in descending order by this column.
- `"none"`
  - : There is no defined sort applied to the column.
- `"other"`
  - : A sort algorithm other than ascending or descending has been applied.

## Examples

In this example the `aria-sort` attribute on the element with an ID of `role-heading` is set to "none". Using `ariaSort` we update the value to "ascending".

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
        aria-colindex="1">
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
console.log(el.ariaSort); // none
el.ariaSort = "ascending";
console.log(el.ariaSort); // ascending
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: table role](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role)
