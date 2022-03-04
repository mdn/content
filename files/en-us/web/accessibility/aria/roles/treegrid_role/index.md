---
title: 'ARIA: treegrid role'
slug: Web/Accessibility/ARIA/Roles/treegrid_role
tags: 
  - Accessibility
  - ARIA
  - roles
  - Reference
  - ARIA roles
  - Treegrid role
  - composite widget role
  - treegrid
---

The `treegrid` role identifies an element as being grid whose rows can be expanded and collapsed in the same manner as for a `tree`.

## Description

A `treegrid` is a combination of the [`tree`](/en-US/docs/Web/Accessibility/ARIA/Roles/tree_role) and [`grid`](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role) roles. 

Like a `grid`, the `treegrid` is made up of rows, columns, and gridcells. A `treegrid` widget contains one or more [`row`](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role) elements or [`rowgroup`](/en-US/docs/Web/Accessibility/ARIA/Roles/rowgroup_role) elements containing one or more rows. Each row or cells in a row should be keyboard focusable. 

Like a `tree`, parent nodes in a `treegrid` are expandable and collapisble. Use  `treegrid` rather than `grid` when your UI calls for rows supporting [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) indicating the row is expandable and collapsible and if your grid requires supporting [`aria-posinset`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-posinset), [`aria-setsize`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-setsize), or [`aria-level`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level). 

A `treegrid` is a hierarchical data grid, or table, consisting of tabular information that is editable or interactive.  In a treegrid, any row in the hierarchy may have child rows. These parent rows can be expanded and collapsed to show and hide the children. 

While column header cells that do not provide functions, such as sort or filter, do not need to be focusable, all other rows and cells in a treegrid are focusable. Every row and cell contains a focusable element or is itself focusable, regardless of whether individual cell content is editable or interactive.  

When using a keyboard to navigate a treegrid, a visual keyboard indicator informs the user which row or cell is focused. 

If the treegrid allows the user to choose just one item for an action, then it is known as a "single-select" treegrid, and the item with focus also has a selected state set with [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected). 

Multi-select treegrids enable users to select more than one row or cell for an action. In the multi-select treegrid, the selected state is independent of the focus. In multi-select, it is important that the visual design distinguish between items that are selected and the item that has focus. For more details, see this description of differences between focus and selection.






In cases where the nesting structure of Treegrid and its child roles may be convoluted, aria-owns must be used on the role="treegrid" element to reference all of the IDs of the first child role; which would be role="rowgroup" if present, or role="row" otherwise.

Since a construct that includes role="treegrid" is automatically considered to be editable, the aria-readonly attribute may be set to declare the Treegrid as readonly, which will propagate down to all structural child roles of Treegrid, such as role="columnheader", role="rowheader", and role="gridcell".

If focusable, an element that includes role="treegrid" must have an explicit label in accordance with the Text Alternative Computation. (Both aria-labelledby and aria-label should not be used at the same time)

If the Treegrid container receives focus, the focusable element must be the same that includes the role="treegrid" attribute, and aria-activedescendant managed focus must be used to reference the ID of the selected role="row", role="columnheader", role="rowheader", or role="gridcell" elements without moving focus.

If instead roving tabindex is used to manage focus between role="row", role="columnheader", role="rowheader", or role="gridcell" elements, the aria-activedescendant attribute should not be included.

If the Treegrid is disabled, the aria-disabled attribute can be used to reflect the correct state of the element that includes role="treegrid".

If the Treegrid has an attached Menu that opens when Right clicked, aria-haspopup="true" must be set on the role="treegrid" element, and the Shift+F10 and Application keystrokes should be configured to open and set focus within the Menu, and a mechanism for doing the same on touch screen devices should be added as well. (The aria-describedby attribute can be used to convey this dual functionality by implementing a Tooltip.)



The treegrid container has role treegrid.
Each row container has role row and is either a DOM descendant of or owned by the treegrid element or an element with role rowgroup.
Each cell is either a DOM descendant of or owned by a row element and has one of the following roles:
columnheader if the cell contains a title or header information for the column.
rowheader if the cell contains title or header information for the row.
gridcell if the cell does not contain column or row header information.
A row that can be expanded or collapsed to show or hide a set of child rows is a parent row. Each parent row has the aria-expanded state set on either the row element or on a cell contained in therow. The aria-expanded state is set to false when the child rows are not displayed and set to true when the child rows are displayed. Rows that do not control display of child rows do not have the aria-expanded attribute because, if they were to have it, they would be incorrectly described to assistive technologies as parent rows.
If the treegrid supports selection of more than one row or cell, it is a multi-select treegrid and the element with role treegrid has aria-multiselectable set to true. Otherwise, it is a single-select treegrid, and aria-multiselectable is either set to false or the default value of false is implied.
If the treegrid is a single-select treegrid, aria-selected is set to true on the selected row or cell, and it is not present on any other row or cell in the treegrid.
if the treegrid is a multi-select treegrid:
All selected rows or cells have aria-selected set to true.
All rows and cells that are not selected have aria-selected set to false.
If there is an element in the user interface that serves as a label for the treegrid, aria-labelledby is set on the grid element with a value that refers to the labelling element. Otherwise, a label is specified for the grid element using aria-label.
If the treegrid has a caption or description, aria-describedby is set on the grid element with a value referring to the element containing the description.
If the treegrid provides sort functions, aria-sort is set to an appropriate value on the header cell element for the sorted column or row as described in the section on grid and table properties.
If the treegrid provides content editing functionality and contains cells that may have edit capabilities disabled in certain conditions, aria-readonly is set to true on cells where editing is disabled. If edit functions are disabled for all cells, instead of setting aria-readonly to true on every cell, aria-readonly may be set to true on the treegrid element. Treegrids that do not provide cell content editing functions do not include the aria-readonly attribute on any of their elements.
If there are conditions where some rows or columns are hidden or not present in the DOM, e.g., data is dynamically loaded when scrolling or the grid provides functions for hiding rows or columns, the following properties are applied as described in the section on grid and table properties.
aria-colcount or aria-rowcount is set to the total number of columns or rows, respectively.
aria-colindex or aria-rowindex is set to the position of a cell within a row or column, respectively.
If the treegrid includes cells that span multiple rows or multiple columns, and if the treegrid role is NOT applied to an HTML table element, then aria-rowspan or aria-colspan is applied as described in grid and table properties.
NOTE
A treegrid built from an HTML table that includes cells that span multiple rows or columns must use HTML rowspan and colspan and must not use aria-rowspan or aria-colspan.
If rows or cells are included in a treegrid via aria-owns, they will be presented to assistive technologies after the DOM descendants of the treegrid element unless the DOM descendants are also included in the aria-owns attribute.



A grid whose rows can be expanded and collapsed in the same manner as for a tree. A `treegird` has similar hierarchy to a `grid` but with the selectability of `tree`. Rows and columns can be selected - instead of just cells like in grid - and collapsed.
    expandable/collapsible sections
        when you expand something in a treegrid, you might get something other than cells, you might get a form for example
        treegrids can have vertical, or horizontal hierarchies.
        a grid-lick section can have its own row (or col?) headers 

If [`aria-readonly`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) is set on the `treegrid`, that value is set all of the [`gridcell`](/en-US/docs/Web/Accessibility/ARIA/Roles/gridcell_role) elements. That global value can be overriden for individual `gridcell` elements by including `aria-readonly` on that element.

When the `aria-readonly` attribute is applied to a focusable `gridcell`, it indicates whether the content contained in the `gridcell` is editable. Like all ARIA attributes, adding `aria-readonly` informs assistive technologies that the content is or is not editable, but it does nothing to enable or disable interactivity. That must be done with HTML's global {{HTMLattrxref('contenteditable')}} attribute or with JavaScript.

In a treegrid that provides content editing functions, if the content of a focusable gridcell element is not editable, authors MAY set aria-readonly to true on the gridcell element. However, if a treegrid presents a collection of elements that do not support aria-readonly, such as a collection of link elements, it is not necessary for the author to specify a value for aria-readonly.

To be keyboard accessible, authors SHOULD manage focus of descendants for all instances of this role, as described in Managing Focus.

### Associated WAI-ARIA roles, states, and properties

- [`row`](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role) role
  - : A row of cells within a tabular structure, optionally within a `rowgroup`. Contains one or more rows of grid cells, column headers, or row headers.
- [`rowgroup`](/en-US/docs/Web/Accessibility/ARIA/Roles/rowgroup_role) role
  - : A group of [rows](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role) within a tabular structure. 
- [`gridcell`](/en-US/docs/Web/Accessibility/ARIA/Roles/gridcell_role) role
  - : 
- [columnheader](/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role) role
  - : 
- [rowheader](/en-US/docs/Web/Accessibility/ARIA/Roles/rowheader_role) role
  - : 
- [`aria-expanded](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : For expandable items, the value is `true` or `false`. Also indicates that the item is expandable, so should not be present if the item cannot be expanded. 
- [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-
- [`aria-sort`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-
- [`aria-busy`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-
- [`aria-invalid`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-
- [`aria-grabbed`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-
- [`aria-owns`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-
- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-



### Keyboard interactions

The following keys provide treegrid navigation by moving focus among rows and cells of the grid. Implementations of treegrid make these key commands available when an element in the grid has received focus, e.g., after a user has moved focus to the grid with Tab. Moving focus into the grid may result in the first cell or the first row being focused. Whether focus goes to a cell or the row depends on author preferences and whether row focus is supported, since some treegrids may not provide focus to rows.

Enter: If cell-only focus is enabled and focus is on the first cell with the aria-expanded property, opens or closes the child rows.,Otherwise, performs the default action for the cell.
Tab: If the row containing focus contains focusable elements (e.g., inputs, buttons, links, etc.), moves focus to the next input in the row. If focus is on the last focusable element in the row, moves focus out of the treegrid widget to the next focusable element.
Right Arrow:
If focus is on a collapsed row, expands the row.
If focus is on an expanded row or is on a row that does not have child rows, moves focus to the first cell in the row.
If focus is on the right-most cell in a row, focus does not move.
If focus is on any other cell, moves focus one cell to the right.
Left Arrow:
If focus is on an expanded row, collapses the row.
If focus is on a collapsed row or on a row that does not have child rows, focus does not move.
If focus is on the first cell in a row and row focus is supported, moves focus to the row.
If focus is on the first cell in a row and row focus is not supported, focus does not move.
If focus is on any other cell, moves focus one cell to the left.
Down Arrow:
If focus is on a row, moves focus one row down. If focus is on the last row, focus does not move.
If focus is on a cell, moves focus one cell down. If focus is on the bottom cell in the column, focus does not move.
Up Arrow:
If focus is on a row, moves focus one row up. If focus is on the first row, focus does not move.
If focus is on a cell, moves focus one cell up. If focus is on the top cell in the column, focus does not move.
Page Down:
If focus is on a row, moves focus down an author-determined number of rows, typically scrolling so the bottom row in the currently visible set of rows becomes one of the first visible rows. If focus is in the last row, focus does not move.
If focus is on a cell, moves focus down an author-determined number of cells, typically scrolling so the bottom row in the currently visible set of rows becomes one of the first visible rows. If focus is in the last row, focus does not move.
Page Up:
If focus is on a row, moves focus up an author-determined number of rows, typically scrolling so the top row in the currently visible set of rows becomes one of the last visible rows. If focus is in the first row, focus does not move.
If focus is on a cell, moves focus up an author-determined number of cells, typically scrolling so the top row in the currently visible set of rows becomes one of the last visible rows. If focus is in the first row, focus does not move.
Home:
If focus is on a row, moves focus to the first row. If focus is in the first row, focus does not move.
If focus is on a cell, moves focus to the first cell in the row. If focus is in the first cell of the row, focus does not move.
End:
If focus is on a row, moves focus to the last row. If focus is in the last row, focus does not move.
If focus is on a cell, moves focus to the last cell in the row. If focus is in the last cell of the row, focus does not move.
Control + Home:
If focus is on a row, moves focus to the first row. If focus is in the first row, focus does not move.
If focus is on a cell, moves focus to the first cell in the column. If focus is in the first row, focus does not move.
Control + End:
If focus is on a row, moves focus to the last row. If focus is in the last row, focus does not move.
If focus is on a cell, moves focus to the last cell in the column. If focus is in the last row, focus does not move.
NOTE
When the above treegrid navigation keys move focus, whether the focus is set on an element inside the cell or on the cell depends on cell content. See Whether to Focus on a Cell or an Element Inside It.
While navigation keys, such as arrow keys, are moving focus from cell to cell, they are not available to do something like operate a combobox or move an editing caret inside of a cell. If this functionality is needed, see Editing and Navigating Inside a Cell.
If navigation functions can dynamically add more rows or columns to the DOM, key events that move focus to the beginning or end of the grid, such as control + End, may move focus to the last row in the DOM rather than the last available row in the back-end data.
If a treegrid supports selection of cells, rows, or columns, the following keys are commonly used for these functions.

Control + Space:
If focus is on a row, selects all cells.
If focus is on a cell, selects the column that contains the focus.
Shift + Space:
If focus is on a row, selects the row.
If focus is on a cell, selects the row that contains the focus. If the treegrid includes a column with checkboxes for selecting rows, this key can serve as a shortcut for checking the box when focus is not on the checkbox.
Control + A: Selects all cells.
Shift + Right Arrow:
If focus is on a row, does not change selection.
if focus is on a cell, extends selection one cell to the right.
Shift + Left Arrow:
If focus is on a row, does not change selection.
if focus is on a cell, extends selection one cell to the left.
Shift + Down Arrow:
If focus is on a row, extends selection to all the cells in the next row.
If focus is on a cell, extends selection one cell down.
Shift + Up Arrow:
If focus is on a row, extends selection to all the cells in the previous row.
If focus is on a cell, extends selection one cell up.
NOTE
See § 6.8 Key Assignment Conventions for Common Functions for cut, copy, and paste key assignments.

### Required JavaScript features

## Examples

## Accessibility Concerns

It is important for all cells to be able to receive or contain keyboard focus because screen readers are generally in application reading mode, rather than their document reading mode, when users are interacting with the grid. While in application mode, a screen reader user hears only focusable elements and content that labels focusable elements. If content can't receive focus, screen reader users may unknowingly overlook elements contained in the treegrid.

## Best Practices

### Prefer HTML


## Specifications

| Specification                                                                                                                    | Status                                           |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| {{SpecName("ARIA","#treegrid","ARIA: treegrid role")}}                                             | {{Spec2('ARIA')}}                         |
| {{SpecName("ARIA Authoring Practices 1.2","#treegrid","treegrid role")}} | {{Spec2('ARIA Authoring Practices 1.2')}} |

## See Also

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
