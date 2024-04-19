---
title: aria-colcount
slug: Web/Accessibility/ARIA/Attributes/aria-colcount
page-type: aria-attribute
spec-urls: https://w3c.github.io/aria/#aria-colcount
---

{{AccessibilitySidebar}}

The `aria-colcount` attribute defines the total number of columns in a [`table`](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role), [`grid`](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role), or [`treegrid`](/en-US/docs/Web/Accessibility/ARIA/Roles/treegrid_role) when not all columns are present in the [DOM](/en-US/docs/Glossary/DOM).

## Description

Some tables are very large, and it's not possible to show all the columns to the user. Or, it is possible, but having such a wide table would be a bad user experience. Use the `aria-colcount` attribute to let assistive technologies know how many columns the table would have if all columns were present. The value is an integer representing the number of columns that make up the full table. If you don't know the total number of columns a table will have, but know they will not all be in the DOM, use the value -1, so `aria-colcount="-1"`. This value tells the user agent that the current number of columns present in the DOM may not be the actual number of columns in the table.

If all columns in a table are present in the DOM, the `aria-colcount` attribute isn't needed, as browsers automatically calculate the total number of columns. However, if only a portion of the columns is present in the DOM at a given moment, that is when this attribute is helpful and needed.

When using `aria-colcount` when you have a known number of columns, make sure to also use [`aria-colindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) to label each column, or, if the columns are contiguous－if it's a group of columns in the original order with no breaks－label each row.

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

The first rule of ARIA use is "if you can use a native feature with the semantics and behavior you require already built in, instead of repurposing an element and **adding** an ARIA role, state or property to make it accessible, then do so." If we employ native HTML semantics with {{HTMLElement('table')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, etc., the `aria-colcount` attribute is still necessary, but the mark up is not as verbose. When using semantic table header elements and not all columns are in the DOM, the `aria-colcount` must still be used, but the `aria-colindex` attribute only needs to be defined once per column in the column header {{HTMLElement('th')}}.

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

## Values

- `<integer>`
  - : The number of columns in the full table

## Associated roles

Used in roles:

- [`table`](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role)

Inherits into roles:

- [`grid`](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role)
- [`treegrid`](/en-US/docs/Web/Accessibility/ARIA/Roles/treegrid_role)

## Specifications

{{Specifications}}

## See also

- [`aria-colindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindex)
