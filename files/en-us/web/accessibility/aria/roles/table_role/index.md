---
title: 'ARIA: table role'
slug: Web/Accessibility/ARIA/Roles/table_role
tags:
  - ARIA
  - ARIA Role
  - ARIA Table
  - ARIA Table Role
  - Accessibility
  - Reference
  - Table Role
  - document structure role
spec-urls:
  - https://w3c.github.io/aria/#table
  - https://w3c.github.io/aria-practices/#table
---
The `table` value of the ARIA `role` attribute identifies the element containing the role as having a non-interactive table structure containing data arranged in rows and columns, similar to the native {{HTMLElement('table')}} HTML element.

```html
<div role="table" aria-label="Semantic Elements" aria-describedby="semantic_elements_table_desc" aria-rowcount="81">
  <div id="semantic_elements_table_desc">Semantic Elements to use instead of ARIA's roles</div>
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

## Description

An element with `role="table"` is a static tabular structure with rows containing cells. The cells are not focusable or selectable, though widgets within individual cells of the table can be interactive. Using a native HTML {{HTMLElement('table')}} element whenever possible is strongly encouraged.

> **Warning:** If a table maintains a selection state, has two-dimensional navigation, or allows the user to rearrange cell order use [`grid`](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role) or [`treegrid`](/en-US/docs/Web/Accessibility/ARIA/Roles/treegrid_role) instead.

To create an ARIA table, add `role="table"` to the container element. Within that container, each row has `role="row"` set and contains child cells. Each cell has a role of either `columnheader`, `rowheader`, or `cell`. Rows can be children of the table or within a `rowgroup`.

The table caption can be defined via [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) or [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label).  All other semantic table elements, such as {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, and {{HTMLElement('td')}}, need to be added via associated roles, such as `rowgroup`, `row`, `columnheader`, and `cell`.

If the table contains sortable columns or rows, the [`aria-sort`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-sort) attribute should be added on the header cell element (not the table itself). If any rows or columns are hidden, the [`aria-colcount`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) or [`aria-rowcount`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) should be included indicating the total number of columns or rows, respectively, along with the [`aria-colindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) or [`aria-rowindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) on each cell. The [`aria-colindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) or [`aria-rowindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) is set to the position of a cell within the row or column, respectively. If the table includes cells that span multiple rows or multiple columns, then [`aria-rowspan`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan) or [`aria-colspan`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colspan) should be included as well. Realize, it is much simpler to use the {{HTMLElement('table')}} element, along with all the related semantic elements and attributes that are all supported by all assistive technologies.

To create an interactive widget that has a tabular structure, use the `grid` pattern instead. If the interaction provides for the selection state of individual cells, if left to right and top to bottom navigation is provided, or if the user interface allows the rearranging of cell order or otherwise changing individual cell order such as through drag and drop, use [`grid`](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role) or [`treegrid`](/en-US/docs/Web/Accessibility/ARIA/Roles/treegrid_role) instead.

> **Note:** Using a native HTML table element whenever possible is strongly encouraged.

### Associated WAI-ARIA roles, states, and properties

- `role="rowgroup"`
  - : An optional child of the table, the row group encapsulates a group of rows, similar to {{HTMLElement('thead')}}, {{HTMLElement('tbody')}}, and {{HTMLElement('tfoot')}}.
- [`role="row"`](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role)
  - : A row within the table, and optionally within a rowgroup, that is a container for one or more cells, columnheaders, or rowheaders.
- [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) attribute
  - : Takes as its value the id of the element that serves as a description for the table.
- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) attribute
  - : The [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) provides an accessible name for the table.
- [`aria-colcount`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) attribute
  - : This attribute is only required if the columns are not present in the DOM all the time. It provides an explicit indication of the number of columns in the full table. Set the value to the total number of columns in the full table. If unknown, set `aria-colcount="-1"`.
- [`aria-rowcount`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) attribute
  - : This attribute is only required if the rows are not present in the DOM all the time, such as scrollable tables that reuse rows to minimize the number of DOM nodes. It provides an explicit indication of the number of rows in the full table. Set the value to the total number of rows in the full table. If unknown, set `aria-rowcount="-1"`.

### Keyboard interactions

None

### Required JavaScript features

None. For sortable columns, see the [columnheader](/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role) aria role.

> **Note:** The first rule of ARIA use is if you can use a native feature with the semantics and behavior you require already built in, instead of re-purposing an element and **adding** an ARIA role, state or property to make it accessible, then do so. Employ the HTML {{HTMLElement('table')}} element instead of the ARIA role of table whenever possible.

## Examples

```html
<div role="table" aria-label="Semantic Elements" aria-describedby="semantic_elements_table_desc" aria-rowcount="81">
  <div id="semantic_elements_table_desc">Semantic Elements to use instead of ARIA's roles</div>
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

The above is part of a table. While the full table has 81 entries, as indicated by the [`aria-rowcount`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) property, only four are currently visible. The columns are sortable, but not currently sorted, as indicated by the [`aria-sort`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-sort) property on the column headers.

## Best practices

Only use {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, etc., for data table structure. You can add these ARIA roles to ensure accessibility should the native semantics of the table be removed, such as with CSS. A relevant use case for the ARIA table role is when CSS's display property overrides the native semantics of a table, such as by `display: grid`. In this case, you can use the ARIA table roles to re-add the semantics.

### Added benefits

none

## Specifications

{{Specifications}}

## See also

- [HTML table element](/en-US/docs/Learn/HTML/Tables/Advanced)
- [HTML table tutorial](/en-US/docs/Learn/HTML/Tables/Basics)
- [ARIA: `grid` role](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
