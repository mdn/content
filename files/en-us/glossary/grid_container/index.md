---
title: Grid container
slug: Glossary/Grid_Container
tags:
  - CSS
  - Glossary
  - grid
---
Using the value `grid` or `inline-grid` on an element turns it into a **grid container** using [CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout), and any direct children of this element become grid items.

When an element becomes a grid container it establishes a **grid formatting context**. The direct children can now lay themselves out on any explicit grid defined using {{cssxref("grid-template-columns")}} and {{cssxref("grid-template-rows")}}, or on the _implicit grid_ created when an item is placed outside of the _explicit grid_.

## See also

### Property reference

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid")}}
- {{cssxref("grid-template")}}

### Further reading

- CSS Grid Layout guide: _[Basic concepts of grid layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_
