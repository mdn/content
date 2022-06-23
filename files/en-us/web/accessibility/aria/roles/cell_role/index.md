---
title: 'ARIA: cell role'
slug: Web/Accessibility/ARIA/Roles/cell_role
tags:
  - ARIA
  - HTML
  - cell
  - table
  - role
  - role attribute
  - cell role
  - Reference
  - document structure role
spec-urls:
  - https://w3c.github.io/aria/#cell
  - https://w3c.github.io/aria-practices/#cell
---
The `cell` value of the ARIA _role_ attribute identifies an element as being a cell in a tabular container that does not contain column or row header information. To be supported, the cell must be nested in an element with the role of `row`.

```html
<div role="row">
  <span role="cell">France</span>
  <span role="cell">67 million</span>
</div>
```

A better, more semantic way of writing the cells above would be to use the semantic [`<td>`](/en-US/docs/Web/HTML/Element/td) element.

```html
<tr role="row">
  <td role="cell">France</td>
  <td role="cell">67 million</td>
</tr>
```

## Description

The element with `role="cell"` is a cell within a row, optionally within a [`rowgroup`](/en-US/docs/Web/Accessibility/ARIA/Roles/rowgroup_role), within a [`table`](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role). If the cell is in a [`grid`](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role) or [`treegrid`](/en-US/docs/Web/Accessibility/ARIA/Roles/treegrid_role), opt for [`gridcell`](/en-US/docs/Web/Accessibility/ARIA/Roles/gridcell_role). Using native HTML {{HTMLElement('td')}} elements, whenever possible, is strongly encouraged.

Each element with `role="cell"` MUST be nested in a container element with [`role="row"`](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role). That row, in turn, can be nested within an element with [`role="rowgroup"`](/en-US/docs/Web/Accessibility/ARIA/Roles/rowgroup_role), and should be nested within a `grid`, `table` or `treegrid`. If a cell contains column or row header information, use the `columnheader` or `rowheader` roles, respectively. If the cell does not contain header information and is nested in a `grid` or `treegrid`, the role of `gridcell` may be more appropriate.

A cell can contain a number of property attributes clarifying the cell's position within the tabular data structure, including [`aria-colindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindex), [`aria-colspan`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colspan), [`aria-rowindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex), and [`aria-rowspan`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan).

> **Note:** Using the native HTML table element ({{HTMLElement('table')}} element, along with the table row element ({{HTMLElement('tr')}},  and table cell element ({{HTMLElement('td')}}, whenever possible, is strongly encouraged.

### Associated WAI-ARIA roles, states, and properties

#### Context roles

- [role="row"](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role)
  - : An element with `role="row"` is a row of cells within a tabular structure. A row contains one or more cells,  grid cells, column headers, or row headers within a [`grid`](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role), [`table`](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role) or `treegrid`, and optionally within a [`rowgroup`](/en-US/docs/Web/Accessibility/ARIA/Roles/rowgroup_role).
- [role="rowgroup"](/en-US/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
  - : `Row` is a required cell parent. `Rowgroup` is an optional contextual row parent. It establishes a relationship between descendant rows. It is a structural equivalent to the [`thead`](/en-US/docs/Web/HTML/Element/thead), [`tfoot`](/en-US/docs/Web/HTML/Element/tfoot), and [`tbody`](/en-US/docs/Web/HTML/Element/tbody) elements in an [HTML `table`](/en-US/docs/Learn/HTML/Tables/Basics) element.
- [role="table"](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role)
  - : One of the three possible contexts (along with `grid` and `treegrid`) in which you'll find a row containing cells. Table identifies the cell as being part of a non-interactive table structure containing data arranged in rows and columns, similar to the native HTML [`<table>`](/en-US/docs/Web/HTML/Element/table) element.
- [role="grid"](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role)
  - : One of the three possible contexts (along with `table` and `treegrid`) in which you'll find a row containing `cells` and `gridcells`. `Grid` identifies a cell as being part of a possibly interactive table structure containing data arranged in rows and columns, similar to the native [`<table>`](/en-US/docs/Web/HTML/Element/table) HTML element.
- [role="treegrid"](/en-US/docs/Web/Accessibility/ARIA/Roles/treegrid_role)
  - : Similar to a grid, but with rows that can be expanded and collapsed in the same manner as for a tree.

#### Subclass roles

- [role="gridcell"](/en-US/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
  - : A cell in a row within a `grid` or `treegrid.`
- [role="columnheader"](/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
  - : A header cell that is the structural equivalent of the HTML [`<th>`](/en-US/docs/Web/HTML/Element/th) element with a column scope. Unlike a plain cell, the `columnheader` role establishes a relationship between it and all cells in the corresponding column.
- [role="rowheader"](/en-US/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
  - : A header cell that is the structural equivalent of the HTML [`<th>`](/en-US/docs/Web/HTML/Element/th) element with a row scope. Unlike a plain cell, the `rowheader` role establishes a relationship between it and all cells in the corresponding row.

#### States and properties

- [`aria-colspan`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colspan)
  - : Similar to the HTML [`<th>`](/en-US/docs/Web/HTML/Element/th) and [`<td>` colspan attribute](/en-US/docs/Web/HTML/Element/td), it defines the number of columns spanned by the cell.
- [`aria-rowspan`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan)
  - : Similar to the HTML [`<th>`](/en-US/docs/Web/HTML/Element/th) and [`<td>` rowspan attribute](/en-US/docs/Web/HTML/Element/td), it defines the number of rows spanned by the cell.
- [`aria-colindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) attribute
  - : The `aria-colindex` attribute is only needed if columns are hidden from the DOM. The attribute takes as its value an integer between 1 and the total number of columns within the `table`, `grid` or `treegrid`. The `aria-colindex` defines an element's column index or position with respect to the total number of columns within a row. If all the columns are in the DOM, this attribute is not necessary.
- [`aria-rowindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) attribute
  - : The `aria-rowindex` attribute is only needed if rows are hidden from the DOM, to indicate which row, in the list of total rows, the current cell is in. The attribute, takes as its value an integer between 1 and the total number of rows within the table, grid, or treegrid, indicating the position, or index, of the cell.  For example, a cell in the first row of the first header would likely have `aria-rowindex="1"` set, and cells in row 47 would have `aria-rowindex="47"`, if `aria-rowindex` were needed due to not all rows being in the DOM. If the rows that are visible are contiguous, and there are no cells with a `colspan` or `rowspan` greater than one, this property can be added to the parent rows instead of all the rows' cells.

### Keyboard interactions

None

### Required JavaScript features

The first rule of ARIA use is if you can use a native feature with the semantics and behavior you require already built in, instead of repurposing an element and **adding** an ARIA role, state or property to make it accessible, then do so. Employ the HTML [`<td>`](/en-US/docs/Web/HTML/Element/td) element instead of the ARIA role of `cell` whenever possible.

## Examples

```html
    <div role="table" aria-label="Semantic Elements" aria-describedby="semantic_elements_table_desc" aria-rowcount="81">
      <div id="semantic_elements_table_desc">Semantic Elements to use instead of ARIA's roles</div>
      <div role="rowgroup">
         <div role="row">
           <span role="columnheader" aria-sort="none" aria-rowindex="1">ARIA Role</span>
           <span role="columnheader" aria-sort="none" aria-rowindex="1">Semantic Element</span>
         </div>
       </div>
       <div role="rowgroup">
        <div role="row">
           <span role="cell" aria-rowindex="11">header</span>
           <span role="cell" aria-rowindex="11">h1</span>
        </div>
        <div role="row">
          <span role="cell" aria-rowindex="16">header</span>
          <span role="cell" aria-rowindex="16">h6</span>
        </div>
        <div role="row">
          <span role="cell" aria-rowindex="18">rowgroup</span>
          <span role="cell" aria-rowindex="18">thead</span>
        </div>
        <div role="row">
          <span role="cell" aria-rowindex="24">term</span>
          <span role="cell" aria-rowindex="24">dt</span>
        </div>
      </div>
    </div>
  ```

The above is a non-semantic ARIA table with five of 81 rows present in the DOM: one within a table header and four rows within the table body. Because not all the rows are in the DOM, we've included the `aria-rowindex` property on every cell. If no cells spanned more than one row or column, the `aria-rowindex` could have been placed on the row rather than the row's individual cells.

## Best practices

Only use {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, etc., for data table structure. You can add ARIA roles to ensure accessibility should the native semantics of the table be removed, such as with CSS. A relevant use case for the ARIA table role is when the native semantics of a table are overridden by [CSS's display property, such as by display: grid](/en-US/docs/Web/CSS/display#accessibility_concerns). In this case, you can use the ARIA table roles to add the semantics back in.

```html
    <table role="table" aria-label="Semantic Elements" aria-describedby="semantic_elements_table_desc" aria-rowcount="81">
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

Above is the semantic way of writing a table. The ARIA roles are not necessary if the native semantics of the table, and therefore the table rows, have not been altered, such as through [the display property](/en-US/docs/Web/CSS/display#accessibility_concerns).

### Added benefits

When applied to a {{HTMLElement('td')}}, it returns cell semantics to the element in case the semantics were removed, such as with `display: grid;`.

## Specifications

{{Specifications}}

## See also

- [`role="row"`](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role)
- [`role="gridcell"`](/en-US/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [HTML `<td>` element](/en-US/docs/Web/HTML/Element/td)
- [HTML `<th>` element](/en-US/docs/Web/HTML/Element/th)
- [HTML table advanced features and accessibility](/en-US/docs/Learn/HTML/Tables/Advanced)
- [HTML table basics](/en-US/docs/Learn/HTML/Tables/Basics)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
