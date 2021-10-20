---
title: 'ARIA: aria-colspan attribute'
slug: Web/Accessibility/ARIA/Attributes/aria-colspan
tags: 

  - Accessibility
  - ARIA
  - ARIA attribute
  - ARIA property
  - aria-colspan
---

The `aria-colspan` attribute defines the number of columns spanned by a cell or gridcell within a [`table`](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role), [`grid`](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role), or [`treegrid`](/en-US/docs/Web/Accessibility/ARIA/Roles/treegrid_role). 

## Description

Intended for [`cell`s](/en-US/docs/Web/Accessibility/ARIA/Roles/Cell_role) and [`gridcell`s](/en-US/docs/Web/Accessibility/ARIA/Roles/gridcell_role) which are not contained in a native HTML {{HTMLElement('table')}}, the `aria-colspan` property value defines the number of columns spanned by a [`table`](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role), [`grid`](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role), or [`treegrid`](/en-US/docs/Web/Accessibility/ARIA/Roles/treegrid_role). 

In HTML, {{HTMLElement('th')}} and {{HTMLElement('td')}} elements have the [`colspan`](/en-US/docs/Web/HTML/Element/td#attributes) attribute. When using the semantic {{HTMLElement('table')}}, use the native `colspan` attribute as designed.  This ARIA attribute is intended for cells and gridcells which are not contained in a native table, and will be ignored if used on a cell in a {{HTMLElement('table')}}.

The value of `aria-colspan` should be a positive integer. The default or assumed value of a cell span is 1. Make sure that the included value does cause the cell or gridcell to overlap the next cell or gridcell in the same row and does not cause the cell to span outside of the containing table, grid, or treegrid.

## Values

- `<integer>`
  - : An integer value defining the number of columns spanned by the cell.

## ARIAMixin API 

- {{domxref("Element.ariaColSpan")}}
  - : The  [`ariaColSpan`](/en-US/docs/Web/API/Element/ariaColSpan) property, part of the {{domxref("ARIAMixin")}} interface, reflects the value of the `aria-colspan` attribute, which defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

## Associated roles

Used in roles: 
 - [`cell`](/en-US/docs/Web/Accessibility/ARIA/Roles/Cell_role)

Inherits into roles: 
 - [`columnheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/Columnheader_role)
 - [`rowheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/Columnheader_role)

## Specifications

| Specification | Status | 
| ------------- | ------  |
| {{SpecName("ARIA","#aria-colspan","ARIA: aria-colspan Attribute")}}  | {{Spec2('ARIA')}} |

## See Also

- The {{HTMLElement('th')}} and {{HTMLElement('td')}}  [`colspan`](/en-US/docs/Web/HTML/Element/td#attributes) attribute
- [`aria-colindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) property
- [`aria-rowspan`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan) property
- [`cell`](/en-US/docs/Web/Accessibility/ARIA/Roles/Cell_role) role
- [`columnheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/Columnheader_role) role
- [`rowheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/Columnheader_role)role