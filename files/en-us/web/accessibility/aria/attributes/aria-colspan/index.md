---
title: aria-colspan
slug: Web/Accessibility/ARIA/Attributes/aria-colspan
page-type: aria-attribute
spec-urls: https://w3c.github.io/aria/#aria-colspan
---

{{AccessibilitySidebar}}

The `aria-colspan` attribute defines the number of columns spanned by a cell or gridcell within a [`table`](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role), [`grid`](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role), or [`treegrid`](/en-US/docs/Web/Accessibility/ARIA/Roles/treegrid_role).

## Description

Intended for [`cell`s](/en-US/docs/Web/Accessibility/ARIA/Roles/cell_role) and [`gridcell`s](/en-US/docs/Web/Accessibility/ARIA/Roles/gridcell_role) which are not contained in a native HTML {{HTMLElement('table')}}, the `aria-colspan` property value defines the number of columns spanned by an individual cell an ARIA [`table`](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role), [`grid`](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role), or [`treegrid`](/en-US/docs/Web/Accessibility/ARIA/Roles/treegrid_role).

In HTML, {{HTMLElement('th')}} and {{HTMLElement('td')}} elements have the [`colspan`](/en-US/docs/Web/HTML/Element/td#attributes) attribute. When using the semantic {{HTMLElement('table')}}, use the native `colspan` attribute as designed. This ARIA attribute is intended for cells and gridcells which are not contained in a native table, and will be ignored if used on a cell in a {{HTMLElement('table')}}.

> [!NOTE]
> The first rule of ARIA use is if you can use a native feature with the semantics and behavior you require already built in, instead of repurposing an element and **adding** an ARIA role, state or property to make it accessible, then do so. Employ HTML {{HTMLelement('table')}} elements, including {{HTMLelement('td')}} and {{HTMLelement('th')}} with the `colspan` attribute instead of non-semantic elements with ARIA roles and attributes whenever possible.

The value of `aria-colspan` should be a positive integer. The default or assumed value of a cell span is 1. Make sure that the included value does cause the cell or gridcell to overlap the next cell or gridcell in the same row and does not cause the cell to span outside of the containing table, grid, or treegrid.

## Example

The following is an example of part of a bowling tournament league scoring spreadsheet. Each game spans 10 frames, and each frame spans a 3 scores: two balls and the current total. The 10th (and last) frame in each game spans 4 columns in case someone is scoring all strikes.

```html
<div role="grid" aria-rowcount="27">
  aria-label="Bowling League Scores"
  <div role="rowgroup">
    <div role="row" aria-rowindex="1">
      <!--
            aria-rowspan and aria-colspan provide
            assistive technologies with the correct data cell header information
            when header cells span more than one row or column.
          -->

      <span role="columnheader" aria-rowspan="2">Team</span>
      <span role="columnheader" aria-colspan="2">Player</span>
      <span role="columnheader" aria-colspan="31">Game 1 Frames</span>
      <span role="columnheader" aria-colspan="31">Game 2 Frames</span>
      <span role="columnheader" aria-colspan="31">Game 3 Frames</span>
      <span role="columnheader" aria-rowspan="2">Total</span>
    </div>
    <div role="row" aria-rowindex="2">
      <span role="columnheader">Last Name</span>
      <span role="columnheader">First Name</span>
      <span role="columnheader" aria-colspan="3">1</span>
      <span role="columnheader" aria-colspan="3">2</span>
      <span role="columnheader" aria-colspan="3">3</span>
      <span role="columnheader" aria-colspan="3">4</span>
      <span role="columnheader" aria-colspan="3">5</span>
      <span role="columnheader" aria-colspan="3">6</span>
      <span role="columnheader" aria-colspan="3">7</span>
      <span role="columnheader" aria-colspan="3">8</span>
      <span role="columnheader" aria-colspan="3">9</span>
      <span role="columnheader" aria-colspan="4">10</span>
      <span role="columnheader" aria-colspan="3">1</span>
      <span role="columnheader" aria-colspan="3">2</span>
      <span role="columnheader" aria-colspan="3">3</span>
      <span role="columnheader" aria-colspan="3">4</span>
      <span role="columnheader" aria-colspan="3">5</span>
      <span role="columnheader" aria-colspan="3">6</span>
      <span role="columnheader" aria-colspan="3">7</span>
      <span role="columnheader" aria-colspan="3">8</span>
      <span role="columnheader" aria-colspan="3">9</span>
      <span role="columnheader" aria-colspan="4">10</span>
      <span role="columnheader" aria-colspan="3">1</span>
      <span role="columnheader" aria-colspan="3">2</span>
      <span role="columnheader" aria-colspan="3">3</span>
      <span role="columnheader" aria-colspan="3">4</span>
      <span role="columnheader" aria-colspan="3">5</span>
      <span role="columnheader" aria-colspan="3">6</span>
      <span role="columnheader" aria-colspan="3">7</span>
      <span role="columnheader" aria-colspan="3">8</span>
      <span role="columnheader" aria-colspan="3">9</span>
      <span role="columnheader" aria-colspan="4">10</span>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row" aria-rowindex="10">
      <span role="rowheader" aria-rowspan="3">The Mighty Quokkas</span>
      <span role="cell">Henderson</span>
      <span role="cell">Alice</span>
      <span role="cell">7</span>
      <span role="cell">/</span>
      <span role="cell">20</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">39</span>
      <span role="cell">9</span>
      <span role="cell">-</span>
      <span role="cell">48</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">76</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">96</span>
      <span role="cell">8</span>
      <span role="cell">/</span>
      <span role="cell">113</span>
      <span role="cell">7</span>
      <span role="cell">-</span>
      <span role="cell">120</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">146</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">166</span>
      <span role="cell">6</span>
      <span role="cell">/</span>
      <span role="cell">X</span>
      <span role="cell">186</span>
      <span role="cell">7</span>
      <span role="cell">2</span>
      <span role="cell">9</span>
      <span role="cell">6</span>
      <span role="cell">-</span>
      <span role="cell">15</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">35</span>
      <span role="cell">7</span>
      <span role="cell">/</span>
      …
    </div>
    <div role="row" aria-rowindex="11">
      <span role="cell">McPherson</span>
      <span role="cell">Leslie</span>
      <span role="cell">9</span>
      <span role="cell">-</span>
      <span role="cell">9</span>
      <span role="cell">8</span>
      <span role="cell">1</span>
      <span role="cell">18</span>
      …
    </div>
  </div>
</div>
```

If we had used a {{HTMLElement('table')}} and semantic table elements our markup would have been less verbose and accessible by default.

## Values

- `<integer>`
  - : An integer greater than or equal to the default value of 1 defining the number of columns spanned by the cell. The value must be less than what would cause a cell to overlap the next cell in the same row.

## Associated interfaces

- {{domxref("Element.ariaColSpan")}}
  - : The [`ariaColSpan`](/en-US/docs/Web/API/Element/ariaColSpan) property, part of each element's interface, reflects the value of the `aria-colspan` attribute, which defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

## Associated roles

Used in roles:

- [`cell`](/en-US/docs/Web/Accessibility/ARIA/Roles/cell_role)

Inherits into roles:

- [`columnheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`rowheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role)

## Specifications

{{Specifications}}

## See also

- The {{HTMLElement('th')}} and {{HTMLElement('td')}} [`colspan`](/en-US/docs/Web/HTML/Element/td#attributes) attribute
- [`aria-colindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) property
- [`aria-rowspan`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan) property
- [`cell`](/en-US/docs/Web/Accessibility/ARIA/Roles/cell_role) role
- [`columnheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role) role
- [`rowheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role) role
