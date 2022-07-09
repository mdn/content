---
 title: Grid (ARIA)
 slug: Glossary/Grid_pattern
 tags:
   - Accessibility
   - ARIA
   - Glossary
---
A **Grid** is an ARIA design pattern describing a type of composite user interface widget.  A grid widget is a generic container that groups page elements for data or layout purposes.
 
As a composite widget, a grid is characterized by interactive descendants which are keyboard accessible via a single tab stop in the page navigation sequence.  When the entry grid element receives focus, inner grid elements become focusable via alternate keys (usually arrow keys).
 
The [Grid pattern](https://www.w3.org/WAI/ARIA/apg/patterns/grid/) resembles the [Table pattern](https://www.w3.org/WAI/ARIA/apg/patterns/table/).  While the Grid pattern describes an interactive widget, the Table pattern describes non-interactive document structure.  Any focusable elements contained within a table remain exposed as tab stops to the larger page sequence, whereas a grid implements an extra layer of focus-management behavior which restricts keyboard access to its elements.

> **Note:** A grid widget's markup consists of an outer element of role `grid` with inner elements of role `row`, `rowheader`, `gridcell`, etc.  This closely resembles table markup.  
> 
> The HTML5 {{HTMLElement("table")}} element(s) include implicit ARIA roles which overlap with those used by the Grid pattern.  Native `<table>` elements should be used whenever possible, since they reduce the need to explicitly declare accessibility semantics.
 
## See also
 
- [WAI-ARIA Roles on MDN](/en-US/docs/Web/Accessibility/ARIA/Roles) 
- [ARIA `grid` role on MDN](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role)
- [ARIA `table` role on MDN](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role)
- [ARIA Authoring Practices Guide: Grid](https://www.w3.org/WAI/ARIA/apg/patterns/grid/)
- [ARIA Authoring Practices Guide: Table](https://www.w3.org/WAI/ARIA/apg/patterns/table/)
- [WAI-ARIA 1.2 Specification](https://www.w3.org/TR/wai-aria-1.2/#role_definitions)
