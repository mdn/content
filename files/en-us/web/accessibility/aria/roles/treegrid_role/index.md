---
title: "ARIA: treegrid role"
slug: Web/Accessibility/ARIA/Roles/treegrid_role
page-type: aria-role
spec-urls:
  - https://w3c.github.io/aria/#treegrid
  - https://w3c.github.io/aria-practices/#treegrid
---

The `treegrid` role identifies an element as being grid whose rows can be expanded and collapsed in the same manner as for a `tree`.

## Description

A `treegrid` is a hierarchical data grid, or table, consisting of tabular information that is editable or interactive. A `treegrid` is a combination of the [`tree`](/en-US/docs/Web/Accessibility/ARIA/Roles/tree_role) and [`grid`](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role) roles. Like a `grid`, the `treegrid` is made up of rows, columns, and gridcells. Like a `tree`, parent nodes in a `treegrid` are expandable and collapsible.
The `treegrid` widget contains one or more [`row`](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role) elements, optionally with [`rowgroup`](/en-US/docs/Web/Accessibility/ARIA/Roles/rowgroup_role) elements grouping the rows. Each row, in turn, contains one or more cells. Each cell is either a DOM descendant of or owned by a row element and is either a [`columnheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role), [`rowheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/rowheader_role), or [`gridcell`](/en-US/docs/Web/Accessibility/ARIA/Roles/gridcell_role) element, with the `gridcell` role being used for all cells that do not contain column or row header information.

A `row` that can be expanded or collapsed to show or hide a set of child rows is a **parent row**. Each parent row has the [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) state set on either the row element or on a cell contained in the row.

The `aria-expanded` state is set to `true` when the child rows are displayed and set to `false` when the child rows are hidden. Elements that do not control display of child rows should not have the `aria-expanded` attribute because the presence of the attribute indicates to assistive technologies that the element with the attribute is a parent.

When your grid UI calls for rows supporting `aria-expanded` or if your grid requires supporting [`aria-posinset`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-posinset), [`aria-setsize`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-setsize), or [`aria-level`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level), use `treegrid` and not `grid`.

Each `row` or `gridcell` in a row should be keyboard focusable, and keyboard focus for all these tree grid descendants must be managed. The exception to this rule is column header cells which aren't required to be focusable if they do not provide functionality such as sort or filter. Every row and cell should either contain a focusable element or be focusable itself, regardless of whether individual cell content is editable or interactive.

### Single and multi-select treegrids

If the `treegrid` allows the user to choose just one item for an action, then it is known as a **single-select** treegrid. In single-select treegrids, the item with focus also has a selected state set with [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected).

If the treegrid supports selection of more than one row or cell, it is a **multi-select** treegrid. In the multi-select treegrid, the selected state is independent of the focus. The visual design and assistive technologies must distinguish between items that are selected and the item that has focus.

For multi-select treegrids, include [`aria-multiselectable="true"`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) on the element with the `treegrid` role. All selected rows or cells have [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected) set to true. All rows and cells that are selectable but not currently selected have `aria-selected` set to `false`. Don't include the `aria-selected` attribute on rows and cells that are not individually selectable as the presence of the attribute indicates to assistive technologies that the row or cell is selectable.

### Orphan rows

In cases where a child `row` or `rowgroup` is not nested within the `treegrid` in the DOM, the [`aria-owns`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-owns) attribute, referencing all of the IDs of the non-descendant children must be set on the `treegrid` element. If rows or cells are included in a treegrid via `aria-owns`, they will be presented to assistive technologies after the DOM descendants of the `treegrid` element unless the grid's actual DOM descendants are also included in the `aria-owns` attribute.

### Treegrids with dynamically loaded content

If some rows or columns are not in the DOM and are dynamically loaded when scrolling, [`aria-colcount`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colcount), [`aria-rowcount`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount), [`aria-colindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) and [`aria-rowindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) come into play. The `aria-colcount` and `aria-rowcount` properties get set on the `treegrid`. The values being the total number of columns and rows of the fully loaded grid, respectively. The indexes for each row and column get set on individual cells, not on the `treegrid` element.

### A treegrid's accessible name, description, and focus

The element with the role of `treegrid` must have an accessible name. If an appropriate label is visible in the content, provide the name via [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby). In other words, if there is an element in the user interface that serves as a label for the treegrid, include `aria-labelledby` as an attribute on the element with the role of `treegrid`, and set the value of the attribute to the `id` of the labelling element or elements. If no visible label is present, use [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) instead. Not both.

If the content includes a caption or description for the `treegrid`, include [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) on the `treegrid` element with the attribute value being the `id` of the element containing the description.

If the `treegrid` container itself receives focus, the value of its [`aria-activedescendant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) property should reference the [`id`](/en-US/docs/Web/HTML/Global_attributes#id) of the selected `row`, `columnheader`, `rowheader` or `gridcell`, unless roving tabindex is used to manage focus between those roles, in which case `aria-activedescendant` should not be used.

If the `treegrid` is disabled, make that disabled state visually apparent, programmatically enforced, and include the [`aria-disabled`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) attribute on the `treegrid` itself to inform assistive technologies of its disabled state.

### Treegrid sorting

If the treegrid provides sort functions, the [`aria-sort`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-sort) attribute is included on relevant header cell elements, not on the grid itself.

### Treegrid menus

If the `treegrid` has an attached [`menu`](/en-US/docs/Web/Accessibility/ARIA/Roles/menu_role) that opens when right clicked, include [`aria-haspopup="true"`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) on the `treegrid` element. This informs assistive technologies that the `treegrid` has an associated popup. The ability for both keyboard and pointer device users to open and set focus in the menu must be added with JavaScript.

### Read-only treegrids

By default, treegrids are assumed to be editable. If a tree grid is not editable, use the [`aria-readonly`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) attribute to inform assistive technologies the `treegrid` is readonly. The attribute value, when set on the element with the `treegrid` role, propagates down to all `columnheader`, `rowheader`, and `gridcell` elements. That global value can be overridden for individual `gridcell` elements by including `aria-readonly` on individual tree grid element descendants.

Like all ARIA attributes, adding `aria-readonly` only informs assistive technologies that the content is or is not editable, but it does nothing to enable or disable interactivity. That must be done with HTML's global [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes#contenteditable) attribute or with JavaScript.

### Associated WAI-ARIA roles, states, and properties

- [`row`](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role) role
  - : A row of cells within a tabular structure, optionally within a `rowgroup`. Contains one or more rows of grid cells, column headers, or row headers.
- [`rowgroup`](/en-US/docs/Web/Accessibility/ARIA/Roles/rowgroup_role) role
  - : A group of [rows](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role) within a tabular structure.
- [`gridcell`](/en-US/docs/Web/Accessibility/ARIA/Roles/gridcell_role) role
  - : Intended to mimic the functionality of the HTML {{HTMLElement('td')}} element, is found in `grid` and `treegrid` roles and must be the direct child of a `row`.
- [columnheader](/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role) role
  - : A cell in a row containing header information for a column, similar to the native {{HTMLElement('th')}} element with column scope
- [rowheader](/en-US/docs/Web/Accessibility/ARIA/Roles/rowheader_role) role
  - : A cell containing header information for a `row` within a tabular structure.
- [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : For expandable items, the value is `true` or `false`. Also indicates that the item is expandable, so should not be present if the item cannot be expanded.
- [`aria-owns`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-owns)
  - : Identifies a contextual relationship between a parent and its child elements when the DOM hierarchy cannot be used to represent the relationship
- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Use this attribute to label the `treegrid`. The `aria-labelledby` attribute is generally the id of the element used to title the treegrid.
- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : A human-readable string value which identifies the `treegrid`. If there's a visible label, then `aria-labelledby` should be used instead.

### Keyboard interactions

Being able to move focus among rows and cells of the grid with a keyboard must be implemented in order to create an accessible treegrid. Moving focus into the grid may result in the first cell or the first row being focused. Whether focus goes to the next adjacent cell or the row depends on its content requirements, with some treegrids not providing focus to rows.

The following keyboard interactions need to be supported when an element in the grid has received focus, e.g., after a user has moved focus to the grid with Tab.

- <kbd>Enter</kbd>
  - : If cell-only focus is enabled and focus is on the first cell with the `aria-expanded` property, opens or closes the child rows. Otherwise, performs the default action for the cell.
- <kbd>Tab</kbd>
  - : If the row containing focus contains focusable elements such as an {{HTMLElement('input')}}, {{HTMLElement('button')}} or {{HTMLElement('a')}}, moves the focus to the next input in the row. If focus is on the last focusable element in the row, moves focus out of the treegrid widget to the next focusable element.
- <kbd>Right Arrow</kbd>
  - : If focus is on a collapsed row, expand the row. If focus is on an expanded row or is on a row that does not have child rows, moves focus to the first cell in the row. If focus is on the right-most cell in a row, focus does not move. If focus is on any other cell, moves focus one cell to the right.
- <kbd>Left Arrow</kbd>
  - : If focus is on an expanded row, collapses the row. If focus is on a collapsed row or on a row that does not have child rows, focus does not move. If focus is on the first cell in a row and row focus is supported, moves focus to the row. If focus is on the first cell in a row and row focus is not supported, focus does not move. If focus is on any other cell, moves focus one cell to the left.
- <kbd>Down Arrow</kbd>
  - : If focus is on a row, moves focus one row down. If focus is on the last row, focus does not move. If focus is on a cell, moves focus one cell down. If focus is on the bottom cell in the column, focus does not move.
- <kbd>Up Arrow</kbd>
  - : If focus is on a row, moves focus one row up. If focus is on the first row, focus does not move. If focus is on a cell, moves focus one cell up. If focus is on the top cell in the column, focus does not move.
- <kbd>Page Down</kbd>
  - : If focus is on a row or cell, moves focus down a predetermined number of rows or cells. Usually, it moves down the equivalent of the height of the treegrid, scrolling so the bottom row in the currently visible set of rows becomes one of the first visible rows. If focus is in the last row, focus does not move.
- <kbd>Page Up</kbd>
  - : If focus is on a row or cell, moves focus up an predetermined number of rows. Usually, it moves up the equivalent of the height of the treegrid, scrolling so the top row in the currently visible set of rows becomes one of the last visible rows. If focus is in the first row, focus does not move.
- <kbd>Home</kbd> <kbd>Control + Home</kbd>
  - : If focus is on a row, moves focus to the first row. If focus is in the first row, focus does not move. If focus is on a cell, moves focus to the first cell in the row. If focus is in the first cell of the row, focus does not move.
- <kbd>End</kbd> <kbd>Control + End</kbd></td><td>
  - : If focus is on a row, moves focus to the last row. If focus is in the last row, focus does not move. If focus is on a cell, moves focus to the last cell in the row. If focus is in the last cell of the row, focus does not move. If not all rows are present in the DOM, this can be used to focus on the last row present in the DOM, or on the last row available if the entire database were present in the DOM.

If a treegrid supports selection of cells, rows, or columns, the following keys are commonly used for these functions.

- <kbd>Control + Space</kbd>
  - : If focus is on a row, selects all cells. If focus is on a cell, selects the column that contains the focus.
- <kbd>Shift + Space</kbd>
  - : If focus is on a row, select the row. If focus is on a cell, select the row that contains the focus. If the treegrid includes a column with checkboxes for selecting rows, this key can also be used as a shortcut for checking the box when focus is not on the checkbox.
- <kbd>Control + A</kbd>
  - : Selects all cells.
- <kbd>Shift + Right Arrow</kbd>
  - : if focus is on a cell, extends selection one cell to the right.
- <kbd>Shift + Left Arrow</kbd>
  - : if focus is on a cell, extends selection one cell to the left.
- <kbd>Shift + Down Arrow</kbd>
  - : If focus is on a row, extends selection to all the cells in the next row. If focus is on a cell, extends selection one cell down.
- <kbd>Shift + Up Arrow</kbd>
  - : If focus is on a row, extends selection to all the cells in the previous row. If focus is on a cell, extends selection one cell up.

If navigation functions can dynamically add more rows or columns to the DOM, key events that move focus to the beginning or end of the grid, such as <kbd>control + End</kbd>, may move focus to the last row in the DOM rather than the last available row in the back-end data.

While navigation keys, such as arrow keys, are moving focus from cell to cell, they are not available to do something like operate a combobox or move an editing caret inside of a cell. If this functionality is needed, see [Editing and Navigating Inside a Cell](https://www.w3.org/TR/wai-aria-practices-1.1/#gridNav_inside).

<!--
### Required JavaScript features

## Examples
-->

## Accessibility Concerns

It is important for all cells to be able to receive or contain keyboard focus because screen readers are generally in application reading mode, rather than their document reading mode, when users are interacting with the grid. While in application mode, a screen reader user hears only focusable elements and content that labels focusable elements. If content can't receive focus, screen reader users may unknowingly overlook elements contained in the treegrid.

<!--
## Best Practices

### Prefer HTML
-->

## Specifications

{{Specifications}}

## See Also

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
