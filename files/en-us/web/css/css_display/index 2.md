---
title: CSS Display
slug: Web/CSS/CSS_Display
tags:
  - CSS
  - CSS Display
  - Guide
  - Overview
  - Reference
---
{{CSSRef}}

**CSS Display** is a module of CSS that defines how the CSS formatting box tree is generated from the document element tree and defines properties controlling it.

## Reference

### CSS properties

- {{CSSxRef("display")}}

### CSS data types

- {{CSSxRef("&lt;display-outside&gt;")}}
- {{CSSxRef("&lt;display-inside&gt;")}}
- {{CSSxRef("&lt;display-listitem&gt;")}}
- {{CSSxRef("&lt;display-box&gt;")}}
- {{CSSxRef("&lt;display-internal&gt;")}}
- {{CSSxRef("&lt;display-legacy&gt;")}}

## Guides

- [Adapting to the two-value syntax of display](/en-US/docs/Web/CSS/display/two-value_syntax_of_display)

### CSS Flow Layout (`display: block`, `display: inline`)

- [Block and Inline Layout in Normal Flow](/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)
- [Flow Layout and Overflow](/en-US/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Overflow)
- [Flow Layout and Writing Modes](/en-US/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Writing_Modes)
- [Formatting Contexts Explained](/en-US/docs/Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts)
- [In Flow and Out of Flow](/en-US/docs/Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow)

### `display: flex`

- [Basic concepts of flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [Aligning Items in a Flex Container](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)
- [Controlling Ratios of Flex Items Along the Main Axis](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)
- [Cross-browser Flexbox mixins](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox)
- [Mastering Wrapping of Flex Items](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)
- [Ordering Flex Items](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)
- [Relationship of flexbox to other layout methods](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods)
- [Backwards Compatibility of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox)
- [Typical use cases of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox)

### `display: grid`

- [Basic Concepts of Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [Relationship to other layout methods](/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
- [Line-based placement](/en-US/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
- [Grid template areas](/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
- [Layout using named grid lines](/en-US/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
- [Auto-placement in grid layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
- [Box alignment in grid layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
- [Grids, logical values and writing modes](/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Logical_Values_and_Writing_Modes)
- [CSS Grid Layout and Accessibility](/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
- [CSS Grid Layout and Progressive Enhancement](/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
- [Realizing common layouts using grids](/en-US/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)

## Specifications

| Specification                                                                            | Status                           | Comment                                                                      |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ---------------------------------------------------------------------------- |
| {{SpecName("CSS3 Display", "#the-display-properties", "display")}} | {{Spec2("CSS3 Display")}} | Added `run-in`, `flow`, `flow-root`, `contents` and multi-keyword values.    |
| {{SpecName("CSS2.1", "visuren.html#display-prop", "display")}}     | {{Spec2("CSS2.1")}}         | Added the table model values and `inline-block`.                             |
| {{SpecName("CSS1", "#display", "display")}}                                 | {{Spec2("CSS1")}}         | Initial definition. Basic values: `none`, `block`, `inline` and `list-item`. |

In addition to the CSS Display Specification Level 3, further specifications define the behavior of various values of display.

## Browser compatibility

{{Compat("css.properties.display", 10)}}
