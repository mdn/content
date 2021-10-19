---
title: 'ARIA: aria-colcount attribute'
slug: Web/Accessibility/ARIA/Attributes/aria-colcount
tags: 

  - Accessibility
  - ARIA
  - ARIA attribute
  - ARIA property
  - aria-colcount
---

The `aria-colcount` attribute defines the total number of columns in a [`table`](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role), [`grid`](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role), or [`treegrid`](/en-US/docs/Web/Accessibility/ARIA/Roles/treegrid_role).

## Description

Some tables are very large, and it's not possible to show all the columns to the user. Or, it is possible, but having such a wide table would be bad user experience. Use the `aria-colcount` attribute to let assistive technologies know how many columns the table would have if all columns were present. The value is that integer number of columns that make up the full table. If you don't know the total number of columns a table will have, but know they will not all be in the DOM, use the value -1, so `aria-colcount="-1"`. This value tells the user agent that the current number of columns present in the DOM may not be the actual number of columns in the table.

If all columns in a table are present in the DOM, the `aria-colcount` attribute isn't needed, as browsers automatically calculate the total number of columns. However, if only a portion of the columns is present in the DOM at a given moment, that is when this attribute is helpful and needed. 

The following example shows a grid with 6 columns, of which columns 1, 2, 5, and 6 are displayed to the user.

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

## Values

- `<interger>`
  - : The number of columns in the full table

## Associated roles

Used in roles: 

- [`table`](/en-US/docs/Web/Accessibility/ARIA/Role/Table_role/)

Inherits into roles:

- [`grid`](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role)
- [`treegrid`](/en-US/docs/Web/Accessibility/ARIA/Roles/treegrid_role)

## Specifications

| Specification | Status | 
| ------------- | ------  |
| {{SpecName("ARIA","#aria-colcount","ARIA: aria-colcount Attribute")}}  | {{Spec2('ARIA')}} |
| {{SpecName("ARIA Authoring Practices 1.2","#aria-colcount","using aria-colcount")}} | {{Spec2('ARIA Authoring Practices')}} |


## See Also

- [`aria-colindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindex)
