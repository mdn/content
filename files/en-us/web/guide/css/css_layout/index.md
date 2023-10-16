---
title: CSS Layout
slug: Web/Guide/CSS/CSS_Layout
page-type: guide
---

There are a number of methods that you can use to lay out your web pages and applications. MDN contains a number of in-depth guides to the different methods, and this page provides an overview of them all.

## Normal flow, block, and inline layout

If you are not using a flex or grid layout, then your content is laid out using normal flow, or block and inline layout. These guides will help you to understand the way this layout method works.

- [Block and Inline layout in normal flow](/en-US/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
  - : An introduction to normal flow.
- [In flow and Out of flow](/en-US/docs/Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow)
  - : How to take an item out of flow, and what that does to the layout of your document.
- [Formatting contexts explained](/en-US/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)
  - : An introduction to creating a new formatting context.
- [Flow layout and writing modes](/en-US/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes)
  - : How flow layout works if you use a different writing mode, such as vertical text.
- [Flow layout and overflow](/en-US/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_overflow)
  - : Understanding and managing overflow.
- [Introduction to the CSS basic box model](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - : Understanding the box model is a CSS fundamental; this guide explains how it works.
- [Mastering margin collapsing](/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - : Find out why you sometimes end up with less margin than you expect, due to margin collapsing in normal flow.
- [Understanding CSS z-index](/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
  - : Absolute positioning, flexbox, and grid all result in the stack (elements' relative position on the z-axis) to be manipulable via the `z-index` property. This article explains how to manage it.

## Multi-column layout

Multi-column layout, often referred to as multicol, takes content in normal flow, and breaks it into columns. Find out how to use this layout method in the following guides.

- [Basic concepts of Multicol](/en-US/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
  - : An overview of the basic functionality of multicol.
- [Styling columns](/en-US/docs/Web/CSS/CSS_multicol_layout/Styling_columns)
  - : There is a limited amount of styling opportunities for columns; this guide explains what you can do.
- [Spanning and balancing](/en-US/docs/Web/CSS/CSS_multicol_layout/Spanning_balancing_columns)
  - : Spanning elements across columns, and balancing the content of columns.
- [Handling overflow in Multicol](/en-US/docs/Web/CSS/CSS_multicol_layout/Handling_overflow_in_multicol_layout)
  - : What happens when there is more content than available column space?
- [Content breaks in Multicol](/en-US/docs/Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout)
  - : Dealing with content breaks as the content is split into columns.

## Flexbox

CSS Flexible Box Layout, commonly known as flexbox, is a layout model optimized for user interface design, and the layout of items in one dimension. In the flex layout model, the children of a flex container can be laid out in any direction, and can "flex" their sizes, either growing to fill unused space or shrinking to avoid overflowing the parent.

- [Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
  - : An overview of the features of Flexbox.
- [Relationship of Flexbox to other layout methods](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
  - : How Flexbox relates to other layout methods, and other CSS specifications.
- [Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
  - : How the Box Alignment properties work with Flexbox.
- [Ordering flex items](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
  - : Explaining the different ways to change the order and direction of items, and covering the potential issues in doing so.
- [Controlling Ratios of flex items along the main axis](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
  - : Explaining the `flex-grow`, `flex-shrink`, and `flex-basis` properties.
- [Mastering wrapping of flex items](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
  - : How to create flex containers with multiple lines and control the display of the items along those lines.
- [Typical use cases of Flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)
  - : Common design patterns that are typical Flexbox use cases.

## Grid layout

CSS Grid Layout introduces a two-dimensional grid system to CSS. Grids can be used to lay out major page areas or small user interface elements.

- [Basic concepts of Grid Layout](/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
  - : An overview of the features of grid layout.
- [Relationship of Grid Layout to other layout methods](/en-US/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
  - : How grid relates to other methods such as alignment, sizing, and flexbox.
- [Layout using line-based placement](/en-US/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
  - : How to place items by numbered lines.
- [Grid template areas](/en-US/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
  - : How to place items using the grid-template syntax.
- [Layout using named grid lines](/en-US/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
  - : How to name lines, and place items by line name rather than number.
- [Auto-placement in CSS Grid Layout](/en-US/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
  - : How to manage the auto-placement algorithm, and understand how the browser places items.
- [Box alignment in CSS Grid Layout](/en-US/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
  - : How to align items, and distribute space on both axes in grid.
- [CSS Grid, Logical Values and Writing Modes](/en-US/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
  - : How to use flow relative, rather than physical, properties and values with grid.
- [CSS Grid Layout and accessibility](/en-US/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
  - : Some accessibility considerations when working with grid layout.
- [CSS Grid and progressive enhancement](/en-US/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_progressive_enhancement)
  - : How to ensure your site still works well in browsers that don't support grid.
- [Realizing common layouts using CSS Grid](/en-US/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)
  - : Using grid to build some common layouts.
- [Subgrid](/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid)
  - : An explanation of the subgrid value, part of Grid Level 2.
- [Masonry Layout](/en-US/docs/Web/CSS/CSS_grid_layout/Masonry_layout) {{experimental_inline}}
  - : An explanation of the masonry layout feature in Grid Level 3.

## Alignment

- [Box alignment in block layout](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)
  - : The alignment properties are specified for block and inline layout, though there is no browser support as yet.
- [Box alignment in flexbox](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
  - : The alignment properties first appeared with flexbox; this guide explains how they work.
- [Box alignment in grid layout](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
  - : How to align items in grid layout.
- [Box alignment in multi-column layout](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)
  - : How alignment will work in multicol.
