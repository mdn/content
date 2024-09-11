---
title: aria-rowspan
slug: Web/Accessibility/ARIA/Attributes/aria-rowspan
page-type: aria-attribute
spec-urls: https://w3c.github.io/aria/#aria-rowspan
---

{{AccessibilitySidebar}}

The `aria-rowspan` attribute defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

## Description

Similar to the `rowspan` attribute of the {{HTMLElement('td')}} and {{HTMLElement('th')}} elements, but for cells and gridcells which are not contained in a native table, the `aria-rowspan` attribute defines the number of rows spanned by a `cell` or `gridcell` within a `table`, `grid`, or `treegrid`.

This attribute is intended for cells and gridcells which are **not** part of an HTML {{HTMLElement('table')}}. When a cell is nested in a semantic `<table>`, the `rowspan` attribute should be used when a <td> or <th> spans more than one row. If both are present, `rowspan` takes precedence over `aria-rowspan`. But, like all ARIA attributes, `aria-rowspan` only impacts the accessibility tree. It doesn't change your layout.

> [!NOTE]
> ARIA modifies the accessibility tree and how assistive technology presents content to your users. ARIA doesn't change anything about an element's function, behavior, or appearance. When using non-semantic elements, you must use CSS to manage layout and appearance.

The value of `aria-rowspan` is an integer greater than or equal to 0 and less than the value which would cause the cell or gridcell to overlap the next cell or gridcell in the same column. Setting the value to `0` indicates that the cell or gridcell is to span all the remaining rows in the row group. The default value is `1`.

## Values

- `<integer>`
  - : An integer greater than or equal to `0` and less than would cause a cell to overlap the next cell in the same column.

## Associated interfaces

- {{domxref("Element.ariaRowSpan")}}
  - : The [`ariaRowSpan`](/en-US/docs/Web/API/Element/ariaRowSpan) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-rowspan` attribute.
- {{domxref("ElementInternals.ariaRowSpan")}}
  - : The [`ariaRowSpan`](/en-US/docs/Web/API/ElementInternals/ariaRowSpan) property, part of the {{domxref("ElementInternals")}} interface, reflects the value of the `aria-rowspan` attribute.

## Associated roles

Used in roles:

- [`cell`](/en-US/docs/Web/Accessibility/ARIA/Roles/cell_role)

Inherited into roles:

- [`columnheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`rowheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/rowheader_role)

## Specifications

{{Specifications}}

## See also

- The [`rowspan`](/en-US/docs/Web/HTML/Element/td#rowspan) attribute on {{HTMLElement('td')}}
- [`aria-rowindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)
- [`aria-colspan`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colspan)
