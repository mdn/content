---
title: 'ARIA: rowheader role'
slug: Web/Accessibility/ARIA/Roles/rowheader_role
tags:
  - Accessibility
  - ARIA
  - roles
  - Reference
  - ARIA roles
  - table
  - document structure role
  - Accessibility
  - ARIA role
spec-urls: https://w3c.github.io/aria/#rowheader
---
An element with `role="rowheader"` is a [cell](/en-US/docs/Web/Accessibility/ARIA/Roles/cell_role) containing header information for a [row](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role) within a tabular structure of a [`grid`](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role), [`table`](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role) or [`treegrid`](/en-US/docs/Web/Accessibility/ARIA/Roles/treegrid_role).

## Description

`Rowheader` is the header [`cell`](/en-US/docs/Web/Accessibility/ARIA/Roles/cell_role) for a row, establishing a relationship between it and the other cells in the same [`row`](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role).

```html
<div role="table" aria-label="Populations" aria-describedby="country_population_desc">
   <div id="country_population_desc">World Populations by Country</div>
   <div role="rowgroup">
      <div role="row">
         <span role="columnheader" aria-sort="descending">Country</span>
         <span role="columnheader"aria-sort="none">Population</span>
      </div>
   </div>
   <div role="rowgroup">
     <div role="row">
        <span role="rowheader">Finland</span>
        <span role="cell">5.5 million</span>
     </div>
     <div role="row">
        <span role="rowheader">France</span>
        <span role="cell">67 million</span>
     </div>
  </div>
</div>
```

It is a structural equivalent to the {{HTMLElement('th')}} element with a scope of `row`, `<th scope="row">`. Using the native {{HTMLElement('th')}} HTML element is strongly encouraged.

To create an ARIA row header, add `role="rowheader"` to the element. That row header must be nested within a `row`, which, in turn, is nested within a `rowgroup`, or directly within a `grid`, `table` or `treegrid`.

> **Note:** Using the native [table elements](/en-US/docs/Learn/HTML/Tables/Basics) whenever possible, is strongly encouraged.

### Associated WAI-ARIA roles, states, and properties

#### Context roles

- [role="row"](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role)
  - : The only context in which you will find a row.  It encompasses a cell or group of cells row, of which only one should be of rowheader type. Similar to the native {{HTMLElement('tr')}} HTML element.

### Keyboard interactions

None

### Required JavaScript features

None.

> **Note:** The first rule of ARIA use is if you can use a native feature with the semantics and behavior you require already built in, instead of re-purposing an element and **adding** an ARIA role, state or property to make it accessible, then do so. Employ the HTML `<table>`, `<tr>`, `<th>`, `<td>`, and other [table elements](/en-US/docs/Learn/HTML/Tables/Basics) instead of the ARIA table roles whenever possible.

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
       <span role="rowheader">header</span>
       <span role="cell">h1</span>
    </div>
    <div role="row" aria-rowindex="16">
      <span role="rowheader">header</span>
      <span role="cell">h6</span>
    </div>
    <div role="row" aria-rowindex="18">
      <span role="rowheader">rowgroup</span>
      <span role="cell">thead</span>
    </div>
    <div role="row" aria-rowindex="24">
      <span role="rowheader">term</span>
      <span role="cell">dt</span>
    </div>
  </div>
</div>
```

The above is a non-semantic ARIA table with a table header and table body, with five of 81 rows present in the DOM: one within a table header and four rows within the table body. The header row, alone in a header rowgroup, has two column headers. The columns are sortable, but not currently sorted, as indicated by the [`aria-sort`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-sort) property. The table body is a separate rowgroup, with four rows currently in the DOM. Each data table row has a row header. Because not all the rows are in the DOM, we've included the [`aria-rowindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) property on every row.

## Best practices

Only use {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, and so on for data table structure. You can add these ARIA roles to ensure accessibility should the native semantics of the table be removed, such as with CSS. A relevant use case for all the ARIA table roles is when the CSS's `display` property overrides the native semantics of a table, such as by `display: grid`. In this case, you can use the ARIA table roles to add in the semantics.

```html
<table role="table" aria-label="Semantic Elements" aria-describedby="semantic_elements_table_desc" aria-rowcount="81">
  <caption id="semantic_elements_table_desc">Semantic Elements to use instead of ARIA's roles</caption>
  <thead role="rowgroup">
     <tr role="row">
       <th role="columnheader" aria-sort="none">ARIA Role</th>
       <th role="columnheader" aria-sort="none">Semantic Element</th>
     </tr>
  </thead>
  <tbody role="rowgroup">
     <tr role="row" aria-rowindex="11">
       <th role="rowheader">header</th>
       <td role="cell">h1</td>
     </tr>
     <tr role="row" aria-rowindex="16">
       <th role="rowheader">header</th>
       <td role="cell">h6</td>
     </tr>
   </tbody>
 </table>
```

Above is the semantic way of writing a table. The ARIA roles are only necessary if the native semantics of the table, and therefore the table row headers, are obliterated, such as by setting the [display property to flex or grid](/en-US/docs/Web/CSS/display#accessibility_concerns).

### Added benefits

none

## Specifications

{{Specifications}}

## See also

- [The HTML `<table>` element](/en-US/docs/Web/HTML/Element/table)
- [The HTML `<th>` element](/en-US/docs/Web/HTML/Element/th)
- [HTML table tutorial](/en-US/docs/Learn/HTML/Tables/Basics)
- [ARIA `cell` role](/en-US/docs/Web/Accessibility/ARIA/Roles/cell_role)
- [ARIA `row` role](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role)
- [ARIA `gridcell` role](/en-US/docs/Web/Accessibility/ARIA/Roles/gridell_role)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
