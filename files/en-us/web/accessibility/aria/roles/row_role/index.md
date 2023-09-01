---
title: "ARIA: row role"
slug: Web/Accessibility/ARIA/Roles/row_role
page-type: aria-role
spec-urls:
  - https://w3c.github.io/aria/#row
  - https://w3c.github.io/aria-practices/#row
---

An element with `role="row"` is a row of cells within a tabular structure. A row contains one or more cells, grid cells or column headers, and possibly a row header, within a [`grid`](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role), [`table`](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role) or [`treegrid`](/en-US/docs/Web/Accessibility/ARIA/Roles/treegrid_role), and optionally within a [`rowgroup`](/en-US/docs/Web/Accessibility/ARIA/Roles/rowgroup_role).

```html
<div
  role="table"
  aria-label="Populations"
  aria-describedby="country_population_desc">
  <div id="country_population_desc">World Populations by Country</div>
  <div role="rowgroup">
    <div role="row">
      <span role="columnheader" aria-sort="descending">Country</span>
      <span role="columnheader" aria-sort="none">Population</span>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <span role="cell">Finland</span>
      <span role="cell">5.5 million</span>
    </div>
    <div role="row">
      <span role="cell">France</span>
      <span role="cell">67 million</span>
    </div>
  </div>
</div>
```

## Description

The element `role="row"` is a row within a [`grid`](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role), [`table`](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role) or [`treegrid`](/en-US/docs/Web/Accessibility/ARIA/Roles/treegrid_role), and optionally within a [`rowgroup`](/en-US/docs/Web/Accessibility/ARIA/Roles/rowgroup_role), that is a container for one or more [`cells`](/en-US/docs/Web/Accessibility/ARIA/Roles/cell_role), [`gridcells`](/en-US/docs/Web/Accessibility/ARIA/Roles/gridcell_role), [`columnheaders`](/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role), or [`rowheaders`](/en-US/docs/Web/Accessibility/ARIA/Roles/rowheader_role) within a static tabular structure. Using native [HTML `<tr>`](/en-US/docs/Web/HTML/Element/tr) elements, whenever possible, is strongly encouraged.

To create an ARIA row, add `role="row"` to the container element. That row should be nested within a grid, table or treegrid. A group of rows can be nested within a grid, table or treegrid directly, or within a rowgroup in one of those containers. Each row contains child cells. These cells can be of different types, depending on whether they are column or row headers, or grid or regular cells.

A row can contain a number of attributes clarifying the row's role, including [`aria-colindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindex), [`aria-level`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level), [`aria-rowindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex), and [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected).

If the row is within a treegrid, rows can include the [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) attribute, using the attribute to indicate the present status. This is not the case for an ordinary table or grid, in which the `aria-expanded` attribute is not present.

To create an interactive widget that has a tabular structure, use the grid pattern instead. If the interaction provides for the selection state of individual cells, if left to right and top to bottom navigation is provided, or if the user interface allows the rearranging of cell order or otherwise changing individual cell order such as through drag and drop, use [grid](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role) or [treegrid](/en-US/docs/Web/Accessibility/ARIA/Roles/treegrid_role) instead.

> **Note:** Using the native HTML table element ({{HTMLElement('table')}}) along with the table row element ({{HTMLElement('tr')}}) whenever possible is strongly encouraged.

### Associated WAI-ARIA roles, states, and properties

#### Context roles

- [role="rowgroup"](/en-US/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
  - : An optional contextual row parent, it establishes a relationship between descendant rows. It is a structural equivalent to the thead, tfoot, and tbody elements in an HTML table element.
- [role="table"](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role)
  - : One of the three possible contexts (along with grid and treegrid) in which you'll find a row, it identifies the row as being part of a non-interactive table structure containing data arranged in rows and columns, similar to the native {{HTMLElement('table')}} HTML element.
- [role="grid"](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role)
  - : One of the three possible contexts (along with table and treegrid) in which you'll find a row, it identifies the row as being part of a non-interactive table structure containing data arranged in rows and columns, similar to the native {{HTMLElement('table')}} HTML element.
- [role="treegrid"](/en-US/docs/Web/Accessibility/ARIA/Roles/treegrid_role)
  - : Similar to a grid, but with rows that can be expanded and collapsed in the same manner as for a tree.

#### Descendant roles

- [role="cell"](/en-US/docs/Web/Accessibility/ARIA/Roles/cell_role)
  - : A cell in a row within a tabular container.
- [role="gridcell"](/en-US/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
  - : A cell in a row within a grid or treegrid.
- [role="columnheader"](/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
  - : A header cell that is the structural equivalent of the HTML {{HTMLElement('th')}} element with a column scope ({{HTMLElement('tr', '<code>&lt;tr scope="col"&gt;</code>')}}). Unlike a plain cell, the columnheader role establishes a relationship between it and all cells in the corresponding column.
- [role="rowheader"](/en-US/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
  - : A header cell that is the structural equivalent of the HTML {{HTMLElement('th')}} element with a row scope ({{HTMLElement('tr', '<code>&lt;tr scope="row"&gt;</code>')}}). Unlike a plain cell, the rowheader role establishes a relationship between it and all cells in the corresponding row.

#### States and properties

- [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) state

  - : The `aria-expanded` attribute, which defines the state of the row, can take one of three values, or be omitted:

    - `aria-expanded="true`: Row is currently expanded.
    - `aria-expanded="false"`: Row is currently collapsed.
    - `aria-expanded="undefined"` or the attribute is missing: The row is neither expandable nor collapsible.

    If the element with the `aria-expanded` attribute controls the expansion of another grouping container that is not 'owned by' the element, the author **should** reference the container by using the `aria-controls` attribute.

- [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected) state

  - : Only relevant if the row is in an interactive container, such as a grid or treegrid, but not relevant if the row is in a table. The `aria-selected` attribute can take one of three values, or be omitted:

    - `aria-selected="true`: Row is currently selected
    - `aria-selected="false"`: Row is not currently selected.
    - `aria-selected="undefined"` or the attribute is missing: The row is not selectable.

- [`aria-colindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) attribute

  - : The `aria-colindex` attribute is only needed if columns are hidden from the DOM. It is generally placed on row children, rather than on the row itself. If the columns displayed are contiguous, then it can be placed on the row.

    The attribute takes as its value an integer between 1 and the total number of columns within the table, grid or treegrid. When placed on the row, the `aria-colindex` defines an element's column index or position with respect to the total number of columns within a row. For example, in a table with 15 columns, and columns 4, 5, and 6 are in the DOM, `aria-colindex="4"` could be set on every row.

    If the set of columns which is present in the DOM is **not** contiguous, or if there are cells spanning more than one row or column, put the `aria-colindex` on all of the children of each row instead of on the row itself.

    If all the columns are in the DOM, this attribute is not necessary.

- [`aria-rowindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) attribute

  - : The `aria-rowindex` attribute is only needed if rows are hidden from the DOM, to indicate which row, in the list of total rows, is being read. The attribute, placed with a unique value on each row, takes as its value an integer between 1 and the total number of rows within the table, grid or treegrid, indicating the position, or index, of each row. For example, if a table has 1,500 rows, but only the header and rows 47 and 52 are in the DOM, `aria-rowindex="1"` would be set on the header row, and `aria-rowindex="47"` and `aria-rowindex="52"` would be set on the 47th and 52nd row, respectively.

    If all the rows are present in the DOM, this attribute is not necessary.

### Keyboard Interactions

None

### Required JavaScript features

None. For sortable columns, see the [`columnheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role) aria role.

> **Note:** The first rule of ARIA use is you can use a native feature with the semantics and behavior you require already built in, instead of re-purposing an element and **adding** an ARIA role, state or property to make it accessible, then do so. Employ the HTML {{HTMLElement('table')}} element instead of the ARIA role of table whenever possible.

## Examples

```html
<div
  role="table"
  aria-label="Semantic Elements"
  aria-describedby="semantic_elements_table_desc"
  aria-rowcount="81">
  <div id="semantic_elements_table_desc">
    Semantic Elements to use instead of ARIA's roles
  </div>
  <div role="rowgroup">
    <div role="row">
      <span role="columnheader" aria-sort="none">ARIA Role</span>
      <span role="columnheader" aria-sort="none">Semantic Element</span>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row" aria-rowindex="11">
      <span role="cell">header</span>
      <span role="cell">h1</span>
    </div>
    <div role="row" aria-rowindex="16">
      <span role="cell">header</span>
      <span role="cell">h6</span>
    </div>
    <div role="row" aria-rowindex="18">
      <span role="cell">rowgroup</span>
      <span role="cell">thead</span>
    </div>
    <div role="row" aria-rowindex="24">
      <span role="cell">term</span>
      <span role="cell">dt</span>
    </div>
  </div>
</div>
```

The above is a non-semantic ARIA table with five of 81 rows present in the DOM: One within a table header and four rows within the table body. The header row, alone in a header rowgroup, has two column headers. The columns are sortable, but not currently sorted, as indicated by the `aria-sort` property. The table body is in a separate rowgroup, with four rows currently in the DOM. Because not all the rows are in the DOM, we've included the `aria-rowindex` property on every row.

## Best practices

Only use {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, etc., for data table structure. You can add these ARIA roles to ensure accessibility should the native semantics of the table be removed, such as with CSS. A relevant use case for the ARIA table role is when the native semantics of a table are overridden by CSS's display property, such as by display: grid. In this case, you can use the ARIA table roles to add the semantics back in.

```html
<table
  role="table"
  aria-label="Semantic Elements"
  aria-describedby="semantic_elements_table_desc"
  aria-rowcount="81">
  <caption id="semantic_elements_table_desc">
    Semantic Elements to use instead of ARIA's roles
  </caption>
  <thead role="rowgroup">
    <tr role="row">
      <th role="columnheader" aria-sort="none">ARIA Role</th>
      <th role="columnheader" aria-sort="none">Semantic Element</th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row" aria-rowindex="11">
      <td role="cell">header</td>
      <td role="cell">h1</td>
    </tr>
    <tr role="row" aria-rowindex="16">
      <td role="cell">header</td>
      <td role="cell">h6</td>
    </tr>
    <tr role="row" aria-rowindex="18">
      <td role="cell">rowgroup</td>
      <td role="cell">thead</td>
    </tr>
    <tr role="row" aria-rowindex="24">
      <td role="cell">term</td>
      <td role="cell">dt</td>
    </tr>
  </tbody>
</table>
```

Above is the semantic way of writing a table. The ARIA roles are only necessary if the native semantics of the table, and therefore the table rows, are obliterated, such as via setting the [display property to flex or grid](/en-US/docs/Web/CSS/display#accessibility_concerns).

### Added benefits

none

## Specifications

{{Specifications}}

## See also

- The HTML {{HTMLElement('tr', '<code>&lt;tr&gt;</code> table row')}} element
- {{HTMLElement('table')}}
- [The `rowgroup` role](/en-US/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
- [The `table` role](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role)
- [The `grid` role](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role)
- [The `treegrid` role](/en-US/docs/Web/Accessibility/ARIA/Roles/treegrid_role)
- [The `cell` role](/en-US/docs/Web/Accessibility/ARIA/Roles/cell_role)
- [The `gridcell` role](/en-US/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [The `columnheader` role](/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [The `rowheader` role](/en-US/docs/Web/Accessibility/ARIA/Roles/rowheader_role)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
