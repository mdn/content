---
title: aria-colindex
slug: Web/Accessibility/ARIA/Attributes/aria-colindex
page-type: aria-attribute
spec-urls: https://w3c.github.io/aria/#aria-colindex
---

{{AccessibilitySidebar}}

The `aria-colindex` attribute defines an element's column index or position with respect to the total number of columns within a `table`, `grid`, or `treegrid`.

## Description

Some tables are very large, and as a result have only a portion of its content is initially displayed. While loading only a subsection of the columns may improve user experience, you need to let all users know what portions of the content are being displayed, and that all the table's content is not present.

ARIA provides several attributes to provide information about `table`, `grid`, and `treegrid` structures. The `aria-colindex` attribute defines the substructure, an element's column index or position with respect to the total number of columns, within such structures.

Used in conjunction with the [`aria-colcount`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) attribute, which informs assistive technologies how many columns the table would have if all columns were present, the `aria-colindex` is used an element's column index or position with respect to that total number of columns.

If all of the columns are present in the DOM, including `aria-colindex` is not necessary as user agents can calculate the column index of each cell or gridcell. However, if any of the columns are left out of the DOM at any time, use `aria-colindex` to indicate the column of each cell or gridcell with respect to the full table.

The value for `aria-colindex` is an integer greater than or equal to 1. Each value should be greater than the previous column's `aria-colindex` and less than or equal to the number of columns in the full table.

If a cell or gridcell spans multiple columns, set [`aria-colspan`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colspan) to the number of columns it spans if not using {{htmlelement('td')}} and {{htmlelement('th')}} HTML elements, and set `aria-colindex` to the value of the start of the span; the value it would have had if it was only one column wide spanning only the first of its columns.

If the set of columns which is present in the DOM is contiguous, and if there are no cells which span more than one row or column in that set, you only have to put the `aria-colindex` once on each row on the first column of the set. If the columns are not contiguous, include the `aria-colindex` value on all of the children or owned elements of each row.

The following example shows a grid with 6 columns, of which columns 1, 2, 5, and 6 are displayed to the user. The total number of columns that make up the table is set as `aria-colcount="6"` on the table itself. As the columns aren't contiguous, every [`cell`](/en-US/docs/Web/Accessibility/ARIA/Roles/cell_role) - in this case [`columnheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role) and [`gridcell`](/en-US/docs/Web/Accessibility/ARIA/Roles/gridcell_role) elements - have the `aria-colindex` attribute set.

```html
<div role="grid" aria-colcount="6">
  <div role="rowgroup">
    <div role="row">
      <div role="columnheader" aria-colindex="1">First name</div>
      <div role="columnheader" aria-colindex="2">Last name</div>
      <div role="columnheader" aria-colindex="5">City</div>
      <div role="columnheader" aria-colindex="6">Zip</div>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <div role="gridcell" aria-colindex="1">Debra</div>
      <div role="gridcell" aria-colindex="2">Burks</div>
      <div role="gridcell" aria-colindex="5">New York</div>
      <div role="gridcell" aria-colindex="6">14127</div>
    </div>
  </div>
  …
</div>
```

The first rule of ARIA use is "if you can use a native feature with the semantics and behavior you require already built in, instead of repurposing an element and **adding** an ARIA role, state or property to make it accessible, then do so." If we employ native HTML semantics with {{HTMLElement('table')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, etc., and only display a subsection of columns, the `aria-colcount` and `aria-colindex` attribute are still necessary, but the mark up is not as verbose.

When using semantic table header elements and not all columns are in the DOM, the `aria-colindex` attribute only needs to be defined once per column in the column header {{HTMLElement('th')}}.

```html
<table aria-colcount="6">
  <thead>
    <tr>
      <th aria-colindex="1" scope="col">First name</th>
      <th aria-colindex="2" scope="col">Last name</th>
      <th aria-colindex="5" scope="col">City</th>
      <th aria-colindex="6" scope="col">Zip</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Debra</td>
      <td>Burks</td>
      <td>New York</td>
      <td>14127</td>
    </tr>
    …
  </tbody>
</table>
```

If all the columns are in the DOM, neither `aria-colcount` nor `aria-colindex` are necessary.

## Values

- `<integer>`
  - : Integer greater than or equal to 1 and less than or equal to the total number of columns if all were present.

## Associated interfaces

- {{domxref("Element.ariaColIndex")}}
  - : The [`ariaColIndex`](/en-US/docs/Web/API/Element/ariaColIndex) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-colindex` attribute.
- {{domxref("ElementInternals.ariaColIndex")}}
  - : The [`ariaColIndex`](/en-US/docs/Web/API/ElementInternals/ariaColIndex) property, part of the {{domxref("ElementInternals")}} interface, reflects the value of the `aria-colindex` attribute.

## Associated roles

Used in roles:

- [`cell`](/en-US/docs/Web/Accessibility/ARIA/Roles/cell_role)
- [`row`](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role)

Inherits into roles:

- [`columnheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`gridcell`](/en-US/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [`rowheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/rowheader_role)

## Specifications

{{Specifications}}

## See also

- [`aria-colindextext`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindextext) attribute
- [`aria-colcount`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) attribute
- [`aria-colspan`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colspan) attribute
- HTML {{HTMLElement('table')}} element
- HTML {{HTMLElement('th')}} element
- HTML {{HTMLElement('td')}} element
