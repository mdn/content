---
title: 'ARIA: gridcell role'
slug: Web/Accessibility/ARIA/Roles/gridcell_role
tags:
  - ARIA
  - HTML
---
The [gridcell role](https://www.w3.org/TR/wai-aria-1.1/#gridcell) is used to make a cell in a [grid](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role) or [treegrid](/en-US/docs/Web/Accessibility/ARIA/Roles/treegrid_role). It is intended to mimic the functionality of the HTML {{HTMLElement('td')}} element for table-style grouping of information.

```html
<div role="gridcell">Potato</div>
<div role="gridcell">Cabbage</div>
<div role="gridcell">Onion</div>
```

Elements that have `role="gridcell"` applied to them must be the child of an element with a role of [`row`](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role).

```html
<div role="row">
  <div role="gridcell">Jane</div>
  <div role="gridcell">Smith</div>
  <div role="gridcell">496-619-5098</div>
  …
</div>
```

The first rule of ARIA is if a native HTML element or attribute has the semantics and behavior you require, use it instead of re-purposing an element and adding ARIA. Instead use the HTML {{HTMLElement('td')}} element:

```html
<td>Potato</td>
<td>Cabbage</td>
<td>Onion</td>
```

## Description

### gridcells with dynamically added, hidden, or removed rows and columns

Any element with a `role="gridcell"` applied to it should use ARIA to describe its order in the table-style grouping, provided the table, grid, or treegrid has the ability to have rows and/or columns dynamically added, hidden, or removed.

Use [`aria-colindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) to describe a `gridcell`'s order in the list of columns, and [`aria-rowindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) to describe a gridcell's order in the list of rows. Use [`aria-colcount`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) and [`aria-rowcount`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) on the parent element with [`role="grid"`](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role) applied to it to set the total number of columns or rows.

This sample code demonstrates a table-style grouping of information where the third and fourth columns have been removed. [`aria-colindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) is being used to describe the rows' position and allows a person using assistive technology to infer that certain rows have been removed:

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

### Describing the position of gridcells when the overall structure is unknown

In situations where the table-style grouping of content does not provide information about the columns and rows, gridcells must have their positions programmatically described by using [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby). The [`id`](/en-US/docs/Web/HTML/Global_attributes/id)s provided for `aria-describedby` should correspond to parent elements intended to be the rows and columns.

By referencing the parent elements with roles of [`rowheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/rowheader_role) or [`columnheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role) applied to them via `aria-describedby`, it allows assistive technology to understand the position and relationship of the `gridcell` element to the rest of the table-style grouping of content.

### Interactive grids and treegrids

#### Editable cells

Both `<td>` elements and elements with a role of `gridcell` applied to them can be made editable, mimicking functionality similar to editing a spreadsheet. This is done by applying the HTML [`contenteditable` attribute](/en-US/docs/Web/HTML/Global_attributes/contenteditable).

```html
<td contenteditable="true">Notes</td>

<div role="gridcell" contenteditable="true">Item cost</div>
```

`contenteditable` will make the element it is applied to focusable via the <kbd>Tab</kbd> key. If a gridcell is conditionally toggled into a state where editing is prohibited, toggle [`aria-readonly`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) on the gridcell element.

#### Expandable cells

In a [treegrid](/en-US/docs/Web/Accessibility/ARIA/Roles/treegrid_role), gridcells may be made expandable by toggling the [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) attribute. Note that if this attribute is provided, it applies only to the individual gridcell.

### Associated WAI-ARIA Roles, States, and Properties

- `grid`
  - : Communicates that a parent element is a table or tree style grouping of information.
- `row`
  - : Required to communicate the `gridcell` is part of a row of a table-style grouping of information.
- `columnheader`
  - : Specifies which element is the associated column header.
- [`aria-colindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindex)
  - : Identifies the position of an element in relation to the rest of the table-style grouping of information's columns.
- `rowheader`
  - : Specifies which element is the associated row header.
- [`aria-rowindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)
  - : Identifies the position of an element in relation to the rest of the table-style grouping of information's rows.

### Examples

The following example creates a table-style grouping of information:

```html
<h3 id="table-title">Jovian gas giant planets</h3>
<div role="grid" aria-describedby="table-title">
  <div role="rowgroup">
    <div role="row">
      <div role="columnheader">Name</div>
      <div role="columnheader">Diameter (km)</div>
      <div role="columnheader">Length of day (hours)</div>
      <div role="columnheader">Distance from Sun (10<sup>6</sup>km)</div>
      <div role="columnheader">Number of moons</div>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <div role="gridcell">Jupiter</div>
      <div role="gridcell">142,984</div>
      <div role="gridcell">9.9</div>
      <div role="gridcell">778.6</div>
      <div role="gridcell">67</div>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <div role="gridcell">Saturn</div>
      <div role="gridcell">120,536</div>
      <div role="gridcell">10.7</div>
      <div role="gridcell">1433.5</div>
      <div role="gridcell">62</div>
    </div>
  </div>
</div>
```

## Accessibility concerns

Support for `gridcell` and certain `gridcell`-related ARIA roles and properties have poor support with assistive technologies. If at all possible, use [HTML table markup](/en-US/docs/Web/HTML/Element/table) in their place.

## Best practices

The first rule of ARIA is: if a native HTML element or attribute has the semantics and behavior you require, use it instead of re-purposing an element and adding an ARIA role, state or property to make it accessible. As such, it is recommended to use [native HTML table markup](/en-US/docs/Web/HTML/Element/table) instead of recreating a table's form and functionality with ARIA and JavaScript.

## See also

- [The Table element](/en-US/docs/Web/HTML/Element/table)
- [ARIA: Grid role](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role)
- [Grid Role - Maxability](https://www.maxability.co.in/wai-aria-overview/grid-role/)
- [The Table row element](/en-US/docs/Web/HTML/Element/tr)
- [ARIA: row role](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role)
- [Row Role - Maxability](https://www.maxability.co.in/wai-aria-overview/row-role/)
- [aria-rowcount - Maxability](https://www.maxability.co.in/2018/09/07/aria-rowcount-property/)
- [ARIA: rowgroup role](/en-US/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
- [Rowgroup Role - Maxability](https://www.maxability.co.in/wai-aria-overview/rowgroup-role/)
- [The Table header element](/en-US/docs/Web/HTML/Element/th)
- [Columnheader - Maxability](https://www.maxability.co.in/wai-aria-overview/columnheader-role/)
- [aria-colcount - Maxability](https://www.maxability.co.in/2017/07/26/aria-colcount-property/)
- [The Table Data Cell element](/en-US/docs/Web/HTML/Element/td)
- [gridcell: Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria-1.1/#gridcell)
- [Gridcell Role - Maxability](https://www.maxability.co.in/wai-aria-overview/gridcell-role/)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
