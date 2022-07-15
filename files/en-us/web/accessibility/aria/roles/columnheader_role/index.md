---
title: 'ARIA: columnheader role'
slug: Web/Accessibility/ARIA/Roles/columnheader_role
tags:
  - Accessibility
  - ARIA
  - roles
  - Reference
  - ARIA roles
  - document structure role
spec-urls:
  - https://w3c.github.io/aria/#columnheader
  - https://w3c.github.io/aria-practices/#table
---


The `columnheader` value of the ARIA role attribute identifies an element as being a cell in a row contains header information for a column, similar to the native {{HTMLElement('th')}} element with column scope.

## Description

An element with *role="columnheader"* nested as a descendant for an element with *role="row"*, is a static tabular structure of a column header cell in a tabular container, either a table or grid, or other chart that needs to show data relationships. To be supported, the columnheader must be nested in an element with the [role of `row`](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role).

### Associated WAI-ARIA roles, states, and properties

All columnheaders should be nested within a [row](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role). Every row, in turn, should be nested within a [grid](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role), [table](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role), or [treegrid](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role), alternatively within a [rowgroup](/en-US/docs/Web/Accessibility/ARIA/Roles/rowgroup_role) nested within one of the above.

- [`aria-sort`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-sort)
  - : Only applied to one column header at a time, if any, the `aria-sort` attribute indicates if a column is sorted in the three values of `ascending` or `descending` order, or `none` for not sorted.

### Keyboard interactions

This role does not support any specific keyboard interaction.

### Required JavaScript features

JavaScript is only required if the `aria-sort` attribute is used.

## Examples

```html
<table>
  <thead>
    <tr role="row">
      <th role="columnheader" scope="col">
        <button>
          First Name
        </button>
      </th>
      <th role="columnheader" scope="col">
        <button>
          Last Name
        </button>
      </th>
      <th role="columnheader" scope="col" aria-sort="ascending">
        <button>
          Company Name
        </button>
      </th>
      <th role="columnheader" scope="col">
        <button>
          Job Title
        </button>
      </th>
    </tr>
  </thead>
  <tbody>
    …
  </tbody>
</table>
```

## Best Practices

Columnheaders should contain a title or header information for the column.

The first rule of ARIA is: if a native HTML element or attribute has the semantics and behavior you require, use it instead of re-purposing an element and adding an ARIA role, state or property to make it accessible. It is recommended to use the native HTML `<th>` element with the `scope` attribute set `<th scope="col">` instead of a `<div>` or other element. If you use semantic HTML's `<th scope="col">` the role attribute is not required, but can be included as a back up to ensure the table retains its semantics should the default semantics be removed with a CSS display property value.

The `aria-sort` attribute can be added to a `<th scope="col">`  even when the ARIA role attribute is not specified.

### Prefer HTML

Columnheader has the same semantics `<th scope="col">`.

## Specifications

{{Specifications}}

## See Also

- [`table` role](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role)
- [`grid` role](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role)
- [`treegrid` role](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role)
- [`row` role](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role)
- [`rowgroup` role](/en-US/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
- [The `<th>` element](/en-US/docs/Web/HTML/Element/th)
- [The `<table>` element](/en-US/docs/Web/HTML/Element/table)
- [The `<tr>` element](/en-US/docs/Web/HTML/Element/tr)
- [The `<td>` element](/en-US/docs/Web/HTML/Element/td)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
