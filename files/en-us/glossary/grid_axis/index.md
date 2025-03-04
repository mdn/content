---
title: Grid Axis
slug: Glossary/Grid_Axis
page-type: glossary-definition
---

{{GlossarySidebar}}

CSS grid layout is a two-dimensional layout method enabling the laying out of content in _rows_ and _columns_. Therefore in any grid we have two axes. The _block or column axis_, and the _inline or row axis_.

It is along these axes that items can be aligned and justified using the properties defined in the [Box Alignment specification](/en-US/docs/Web/CSS/CSS_box_alignment).

The _inline axis_ (also called row axis, or main axis) is the direction along which regular text flows. The _block axis_ (also called column axis, or cross axis) is the axis used when laying out blocks of text. The physical direction of these axes can change according to the [writing mode](/en-US/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes) of the document.

For example, if you are writing left to right, top to bottom (like typical English prose), then the individual characters are placed along the inline axis, which runs from left to right.

![Diagram showing the inline axis in CSS grid layout.](7_inline_axis.png)

And, if the text contains multiple lines, these lines are placed along the block axis, which runs from top to bottom.

![Diagram showing the block axis in CSS grid layout.](7_block_axis.png)

## See also

- [Basic concepts of grid layout](/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Box alignment in grid layout](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [Grids, logical values and writing modes](/en-US/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
