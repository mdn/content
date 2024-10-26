---
title: "ARIA: rowgroup role"
slug: Web/Accessibility/ARIA/Roles/rowgroup_role
page-type: aria-role
spec-urls: https://w3c.github.io/aria/#rowgroup
---

{{AccessibilitySidebar}}

An element with `role="rowgroup"` is a group of [rows](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role) within a tabular structure. A `rowgroup` contains one or more rows of [cells](/en-US/docs/Web/Accessibility/ARIA/Roles/cell_role), [grid cells](/en-US/docs/Web/Accessibility/ARIA/Roles/gridcell_role), [column headers](/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role), or [row headers](/en-US/docs/Web/Accessibility/ARIA/Roles/rowheader_role) within a [`grid`](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role), [`table`](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role) or [`treegrid`](/en-US/docs/Web/Accessibility/ARIA/Roles/treegrid_role).

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

`Rowgroup` establishes a relationship between owned row elements and is a structural equivalent to the {{HTMLElement('thead')}}, {{HTMLElement('tfoot')}} and {{HTMLElement('tbody')}} elements in HTML. There is, however, no differentiation between different types of row groups. Their elements must be contained in, or owned by, elements with either the [table](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role) or [grid](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role) role. Using the native {{HTMLElement('thead')}}, {{HTMLElement('tfoot')}} and {{HTMLElement('tbody')}} HTML elements, whenever possible, is strongly encouraged.

To create an ARIA table header, table footer or table body, add `role="rowgroup"` to the element. That rowgroup should be nested within a grid, table or treegrid, encompassing a group of one or more rows. Each row, in turn, contains child cells. These cells can be of different types, depending on whether they are column or row headers, or plain or grid cells.

> [!NOTE]
> Using the native HTML table element ({{HTMLElement('table')}}) along with the table header ({{HTMLElement('thead')}}), footer ({{HTMLElement('tfoot')}}), and body ({{HTMLElement('tbody')}}) elements whenever possible is strongly encouraged.

### Associated WAI-ARIA roles, states, and properties

#### Context roles

- [role="table"](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role)
  - : One of the three possible contexts (along with grid and treegrid) in which you'll find a row. It identifies the row as being part of a non-interactive table structure containing data arranged in rows and columns, similar to the native {{HTMLElement('table')}} HTML element.
- [role="grid"](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role)
  - : One of the three possible contexts (along with table and treegrid) in which you'll find a row. It identifies the row as being part of a non-interactive table structure containing data arranged in rows and columns, similar to the native {{HTMLElement('table')}} HTML element.
- [role="treegrid"](/en-US/docs/Web/Accessibility/ARIA/Roles/treegrid_role)
  - : Similar to a grid, but with rows that can be expanded and collapsed in the same manner as for a tree.

#### Descendant roles

- [role="row"](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role)
  - : A row of cells within a tabular structure. A row contains one or more [cells](/en-US/docs/Web/Accessibility/ARIA/Roles/cell_role), [gridcell](/en-US/docs/Web/Accessibility/ARIA/Roles/gridcell_role), or [column headers](/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role), and sometimes a [row header](/en-US/docs/Web/Accessibility/ARIA/Roles/rowheader_role).

### Keyboard interactions

None

### Required JavaScript features

None.

> [!NOTE]
> The first rule of ARIA use is if you can use a native feature with the semantics and behavior you require already built in, instead of re-purposing an element and **adding** an ARIA role, state or property to make it accessible, then do so. Employ the HTML `<table>` element instead of the ARIA role of table whenever possible.

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

The above is a non-semantic ARIA table with a table header and table body, with five of 81 rows present in the DOM: one within a table header and four rows within the table body. The header row, alone in a header rowgroup, has two column headers. The columns are sortable, but not currently sorted, as indicated by the [`aria-sort`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-sort) property. The table body is a separate rowgroup, with four rows currently in the DOM. Because not all the rows are in the DOM, we've included the [`aria-rowindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) property on every row.

## Best practices

Only use {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, and so on for data table structure. You can add these ARIA roles to ensure accessibility should the native semantics of the table be removed, such as with CSS. A relevant use case for the ARIA table role is when the CSS's display property overrides the native semantics of a table, such as by `display: grid`. In this case, you can use the ARIA table roles to add in the semantics.

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
  </tbody>
</table>
```

Above is the semantic way of writing a table. The ARIA roles are only necessary if the native semantics of the table, and therefore the table rows, are obliterated, such as by setting the [display property to flex or grid](/en-US/docs/Web/CSS/display#accessibility).

### Added benefits

none

## Specifications

{{Specifications}}

## See also

- [HTML table](/en-US/docs/Web/HTML/Element/table)
- [HTML table body](/en-US/docs/Web/HTML/Element/tbody)
- [HTML table footer](/en-US/docs/Web/HTML/Element/tfoot)
- [HTML table header](/en-US/docs/Web/HTML/Element/thead)
