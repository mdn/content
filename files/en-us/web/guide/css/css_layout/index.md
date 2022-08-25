---
title: CSS Layout
slug: Web/Guide/CSS/CSS_Layout
tags:
  - Guide
  - CSS
  - CSS Layout
  - Overview
  - Web
  - Web Development
---
There are a number of methods that you can use to lay out your web pages and applications. MDN contains a number of in-depth guides to the different methods, and this page provides an overview of them all.

## Normal flow, block, and inline layout

If you are not using a flex or grid layout, then your content is laid out using normal flow, or block and inline layout. These guides will help you to understand the way this layout method works.

- [Block and Inline layout in normal flow](/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)
  - : An introduction to normal flow.
- [In flow and Out of flow](/en-US/docs/Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow)
  - : How to take an item out of flow, and what that does to the layout of your document.
- [Formatting contexts explained](/en-US/docs/Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts)
  - : An introduction to creating a new formatting context.
- [Flow layout and writing modes](/en-US/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Writing_Modes)
  - : How flow layout works if you use a different writing mode, such as vertical text.
- [Flow layout and overflow](/en-US/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Overflow)
  - : Understanding and managing overflow.
- [Introduction to the CSS basic box model](/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - : Understanding the box model is a CSS fundamental; this guide explains how it works.
- [Mastering margin collapsing](/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - : Find out why you sometimes end up with less margin than you expect, due to margin collapsing in normal flow.
- [Understanding CSS z-index](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index)
  - : Absolute positioning, flexbox, and grid all result in the stack (elements' relative position on the z-axis) to be manipulable via the `z-index` property. This article explains how to manage it.

## Multi-column layout

Multi-column layout, often referred to as multicol, takes content in normal flow, and breaks it into columns. Find out how to use this layout method in the following guides.

- [Basic concepts of Multicol](/en-US/docs/Web/CSS/CSS_Columns/Basic_Concepts_of_Multicol)
  - : An overview of the basic functionality of multicol.
- [Styling columns](/en-US/docs/Web/CSS/CSS_Columns/Styling_Columns)
  - : There is a limited amount of styling opportunities for columns; this guide explains what you can do.
- [Spanning and balancing](/en-US/docs/Web/CSS/CSS_Columns/Spanning_Columns)
  - : Spanning elements across columns, and balancing the content of columns.
- [Handling overflow in Multicol](/en-US/docs/Web/CSS/CSS_Columns/Handling_Overflow_in_Multicol)
  - : What happens when there is more content than available column space?
- [Content breaks in Multicol](/en-US/docs/Web/CSS/CSS_Columns/Handling_content_breaks_in_multicol)
  - : Dealing with content breaks as the content is split into columns.

## Flexbox

CSS Flexible Box Layout, commonly known as flexbox, is a layout model optimized for user interface design, and the layout of items in one dimension. In the flex layout model, the children of a flex container can be laid out in any direction, and can "flex" their sizes, either growing to fill unused space or shrinking to avoid overflowing the parent.

- [Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
  - : An overview of the features of Flexbox.
- [Relationship of Flexbox to other layout methods](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods)
  - : How Flexbox relates to other layout methods, and other CSS specifications.
- [Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)
  - : How the Box Alignment properties work with Flexbox.
- [Ordering flex items](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)
  - : Explaining the different ways to change the order and direction of items, and covering the potential issues in doing so.
- [Controlling Ratios of flex items along the main axis](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)
  - : Explaining the `flex-grow`, `flex-shrink`, and `flex-basis` properties.
- [Mastering wrapping of flex items](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)
  - : How to create flex containers with multiple lines and control the display of the items along those lines.
- [Typical use cases of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox)
  - : Common design patterns that are typical Flexbox use cases.
- [Backwards compatibility of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox)
  - : Browser status of Flexbox, interoperability issues, and supporting older browsers and versions of the spec.

## Grid layout

CSS Grid Layout introduces a two-dimensional grid system to CSS. Grids can be used to lay out major page areas or small user interface elements.

- [Basic concepts of Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
  - : An overview of the features of grid layout.
- [Relationship of Grid Layout to other layout methods](/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
  - : How grid relates to other methods such as alignment, sizing, and flexbox.
- [Layout using line-based placement](/en-US/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
  - : How to place items by numbered lines.
- [Grid template areas](/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
  - : How to place items using the grid-template syntax.
- [Layout using named grid lines](/en-US/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
  - : How to name lines, and place items by line name rather than number.
- [Auto-placement in CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
  - : How to manage the auto-placement algorithm, and understand how the browser places items.
- [Box alignment in CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
  - : How to align items, and distribute space on both axes in grid.
- [CSS Grid, Logical Values and Writing Modes](/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Logical_Values_and_Writing_Modes)
  - : How to use flow relative, rather than physical, properties and values with grid.
- [CSS Grid Layout and accessibility](/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
  - : Some accessibility considerations when working with grid layout.
- [CSS Grid and progressive enhancement](/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
  - : How to ensure your site still works well in browsers that don't support grid.
- [Realizing common layouts using CSS Grid](/en-US/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)
  - : Using grid to build some common layouts.
- [Subgrid](/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid)
  - : An explanation of the subgrid value, part of Grid Level 2.
- [Masonry Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout) {{experimental_inline}}
  - : An explanation of the masonry layout feature in Grid Level 3.

## Alignment

- [Box alignment in block layout](/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Block_Abspos_Tables)
  - : The alignment properties are specified for block and inline layout, though there is no browser support as yet.
- [Box alignment in flexbox](/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox)
  - : The alignment properties first appeared with flexbox; this guide explains how they work.
- [Box alignment in grid layout](/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Grid_Layout)
  - : How to align items in grid layout.
- [Box alignment in multi-column layout](/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Multi-column_Layout)
  - : How alignment will work in multicol.
