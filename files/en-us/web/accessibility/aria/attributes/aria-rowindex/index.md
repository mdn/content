---
title: aria-rowindex
slug: Web/Accessibility/ARIA/Attributes/aria-rowindex
page-type: aria-attribute
spec-urls: https://w3c.github.io/aria/#aria-rowindex
---

{{AccessibilitySidebar}}

The `aria-rowindex` attribute defines an element's position with respect to the total number of rows within a table, grid, or treegrid.

## Description

Some tables have many, many rows. Loading only a subsection of rows may be done as a design requirement, to improve performance, or to improve user experience.

When only a subset of rows are loaded, you do need to let all users know which subsets of rows are being displayed. The `aria-rowindex` attribute is used to define the cell or row's row index or position with respect to the total number of rows within a table, grid, or treegrid.

Included on the {{HTMLElement('tr')}} element or on an element with a role of [`row`](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role), or directly on the {{HTMLElement('td')}}, {{HTMLElement('th')}}, or element with role of [`cell`](/en-US/docs/Web/Accessibility/ARIA/Roles/cell_role) or [`gridcell`](/en-US/docs/Web/Accessibility/ARIA/Roles/gridcell_role), the value is the row's position with respect to the full table.

The value for `aria-rowindex` is an integer greater than or equal to `1`, greater than the `aria-rowindex` value of any previous rows, and less than or equal to the number of rows in the full table.

If all of the rows are loaded and in the DOM, you don't need to include `aria-rowindex` as browsers automatically calculate the index of each row. However, when only a subset of the rows are present in the DOM, `aria-rowindex` is needed to indicate each row's position with respect to the full table. If only a subset of rows are loaded, you also need to include [`aria-rowcount`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) on the table ancestor, even if you don't know the total rowcount.

If the table with only a subset of rows has a cell that spans more than one row, both the row and cell need to have the `aria-rowindex` set. If a cell spans more than one row－when a cell role includes the `aria-rowspan` attribute or HTML cell has a `rowspan` attribute set to a value greater than 1－include the row's `aria-rowindex` value on the spanning cell in addition to the appropriate row spanning attribute. The value should be the row index of the row where the span starts.

> [!NOTE]
> The `aria-rowindex` must be added to each row, but is optional on the cells, except for cells that span rows: the `aria-rowindex` attribute is required on all spanning cells.

## Examples

The following example shows a grid with 24 rows, of which the first row and rows 7 through 10 are displayed to the user. The last "position" cell spans column 9 and 10.

```html
<div role="grid" aria-rowcount="24">
  <div role="rowgroup">
    <div role="row" aria-rowindex="1">
      <span role="columnheader">First Name</span>
      <span role="columnheader">Last Name</span>
      <span role="columnheader">Position</span>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row" aria-rowindex="7">
      <span role="gridcell">Morgan</span>
      <span role="gridcell">Brian</span>
      <span role="gridcell">Midfielder</span>
    </div>
    <div role="row" aria-rowindex="8">
      <span role="gridcell">Abby</span>
      <span role="gridcell">Dahlkemper</span>
      <span role="gridcell">Defender</span>
    </div>
    <div role="row" aria-rowindex="9">
      <span role="gridcell">Ashlyn</span>
      <span role="gridcell">Harris</span>
      <span role="gridcell" aria-rowspan="2" aria-rowindex="9">Goalkeeper</span>
    </div>
    <div role="row" aria-rowindex="10">
      <span role="gridcell">Alyssa</span>
      <span role="gridcell">Naeher</span>
    </div>
  </div>
</div>
```

Note both `aria-rowspan` and `aria-rowindex` are present on the Goalkeeper cell, which spans two rows.

## Values

- `<integer>`
  - : An integer greater than or equal to 1, greater than the `aria-rowindex` of the previous row, if any, and less than or equal to the value of [`aria-rowcount`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount).

## Associated interfaces

- {{domxref("Element.ariaRowIndex")}}
  - : The [`ariaRowIndex`](/en-US/docs/Web/API/Element/ariaRowIndex) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-rowindex` attribute.
- {{domxref("ElementInternals.ariaRowIndex")}}
  - : The [`ariaRowIndex`](/en-US/docs/Web/API/ElementInternals/ariaRowIndex) property, part of the {{domxref("ElementInternals")}} interface, reflects the value of the `aria-rowindex` attribute.

## Associated roles

Used in roles:

- [`cell`](/en-US/docs/Web/Accessibility/ARIA/Roles/cell_role)
- [`row`](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role)

Inherited into roles:

- [`columnheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`gridcell`](/en-US/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [`rowheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/rowheader_role)

## Specifications

{{Specifications}}

## See also

- [`aria-rowindextext`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowindextext)
- [`aria-rowcount`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount)
- [`aria-rowspan`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan)
- [`aria-colindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindex)
- The [`rowspan`](/en-US/docs/Web/HTML/Element/td#rowspan) attribute on {{HTMLElement('td')}}
