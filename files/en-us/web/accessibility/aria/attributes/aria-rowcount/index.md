---
title: aria-rowcount
slug: Web/Accessibility/ARIA/Attributes/aria-rowcount
page-type: aria-attribute
spec-urls: https://w3c.github.io/aria/#aria-rowcount
---

The `aria-rowcount` attribute defines the total number of rows in a table, grid, or treegrid.

## Description

Some tables have hundreds, even millions, of rows. Even for tables with fewer rows, loading only a subsection of rows may be a design requirement, improve performance, or improve user experience. When only a subset of rows are loaded, you do need to let all users know that only a subset of the data is being displayed. The `aria-rowcount` attribute is used to define the total number of rows in a table, grid, or treegrid.

Included on the {{HTMLElement('table')}} element or on an element with a role of [`table`](/en-US/docs/Web/Accessibility/ARIA/Roles/cell_role), the value is the number of rows in the full table, as an integer. If the total number of rows is not known, include `aria-rowcount="-1"`, which tells the browser to not count the total number of rows.

If all of the rows are loaded and in the DOM, you don't need to include `aria-rowcount` as browsers automatically count the total number of rows. However, if the rows aren't all present in the DOM at any time, this attribute is needed to provide the number of rows when the full table size is known and to tell the browser to not automatically count the rows when the total number of rows is not known.

## Example

The following example shows a grid with 24 rows, of which the first row and rows 7 through 9 are displayed to the user.

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
      <span role="gridcell">Goalkeeper</span>
    </div>
  </div>
</div>
```

## Values

- `<integer>`
  - : The number of rows in the full table or `-1` is the table size is not known.

## ARIAMixin API

- {{domxref("Element.ariaRowCount")}}
  - : The [`ariaRowCount`](/en-US/docs/Web/API/Element/ariaRowCount) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-rowcount` attribute.
- {{domxref("ElementInternals.ariaRowCount")}}
  - : The [`ariaRowCount`](/en-US/docs/Web/API/ElementInternals/ariaRowCount) property, part of the {{domxref("ElementInternals")}} interface, reflects the value of the `aria-rowcount` attribute.

## Associated roles

Used in roles:

- [`table`](/en-US/docs/Web/Accessibility/ARIA/Roles/cell_role)

Inherited into roles:

- [`grid`](/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`treegrid`](/en-US/docs/Web/Accessibility/ARIA/Roles/gridcell_role)

## Specifications

{{Specifications}}

## See Also

- [`aria-rowindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)
- [`aria-colcount`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colcount)

<section id="Quick_links">
<strong><a href="/en-US/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/aria/Attributes")}}
</section>
