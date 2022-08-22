---
title: Introduction to the CSS basic box model
slug: Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model
tags:
  - CSS
  - CSS Box Model
  - Guide
  - Layout
spec-urls: https://drafts.csswg.org/css-box/#intro
---
{{CSSRef}}

When laying out a document, the browser's rendering engine represents each element as a rectangular box according to the standard **CSS basic box model**. CSS determines the size, position, and properties (color, background, border size, etc.) of these boxes.

Every box is composed of four parts (or _areas_), defined by their respective edges: the _content edge_, _padding edge_, _border edge_, and _margin edge_.

![CSS Box model](<boxmodel-(3).png>)

## Content area

The **content area**, bounded by the content edge, contains the "real" content of the element, such as text, an image, or a video player. Its dimensions are the _content width_ (or _content-box width_) and the _content height_ (or _content-box height_). It often has a background color or background image.

If the {{cssxref("box-sizing")}} property is set to `content-box` (default) and if the element is a block element, the content area's size can be explicitly defined with the {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{ cssxref("height") }}, {{cssxref("min-height")}}, and {{cssxref("max-height")}} properties.

## Padding area

The **padding area**, bounded by the padding edge, extends the content area to include the element's padding. Its dimensions are the _padding-box width_ and the _padding-box height_.

The thickness of the padding is determined by the {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}, and shorthand {{cssxref("padding")}} properties.

## Border area

The **border area**, bounded by the border edge, extends the padding area to include the element's borders. Its dimensions are the _border-box width_ and the _border-box height_.

The thickness of the borders are determined by the {{cssxref("border-width")}} and shorthand {{cssxref("border")}} properties. If the {{cssxref("box-sizing")}} property is set to `border-box`, the border area's size can be explicitly defined with the {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{ cssxref("height") }}, {{cssxref("min-height")}}, and {{cssxref("max-height")}} properties. When there is a background ({{cssxref("background-color")}} or {{cssxref("background-image")}}) set on a box, it extends to the outer edge of the border (i.e. extends underneath the border in z-ordering). This default behavior can be altered with the {{cssxref("background-clip")}} CSS property.

## Margin area

The **margin area**, bounded by the margin edge, extends the border area to include an empty area used to separate the element from its neighbors. Its dimensions are the _margin-box width_ and the _margin-box height_.

The size of the margin area is determined by the {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}, and shorthand {{cssxref("margin")}} properties. When [margin collapsing](/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing) occurs, the margin area is not clearly defined since margins are shared between boxes.

Finally, note that for non-replaced inline elements, the amount of space taken up (the contribution to the height of the line) is determined by the {{cssxref('line-height')}} property, even though the borders and padding are still displayed around the content.

## See also

- [Layout and the containing block](/en-US/docs/Web/CSS/Containing_block)
- [Introducing the CSS Cascade](/en-US/docs/Web/CSS/Cascade)
- [Cascade and inheritance](/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)

## Specifications

{{Specifications}}

## See also

- CSS key concepts:
  - [CSS syntax](/en-US/docs/Web/CSS/Syntax)
  - [At-rules](/en-US/docs/Web/CSS/At-rule)
  - [Comments](/en-US/docs/Web/CSS/Comments)
  - [Specificity](/en-US/docs/Web/CSS/Specificity)
  - [Inheritance](/en-US/docs/Web/CSS/inheritance)
  - [Layout modes](/en-US/docs/Web/CSS/Layout_mode)
  - [Visual formatting models](/en-US/docs/Web/CSS/Visual_formatting_model)
  - [Margin collapsing](/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - Values
    - [Initial values](/en-US/docs/Web/CSS/initial_value)
    - [Computed values](/en-US/docs/Web/CSS/computed_value)
    - [Used values](/en-US/docs/Web/CSS/used_value)
    - [Actual values](/en-US/docs/Web/CSS/actual_value)
  - [Value definition syntax](/en-US/docs/Web/CSS/Value_definition_syntax)
  - [Shorthand properties](/en-US/docs/Web/CSS/Shorthand_properties)
  - [Replaced elements](/en-US/docs/Web/CSS/Replaced_element)
