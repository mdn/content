---
title: CSS Box Model
slug: Web/CSS/CSS_Box_Model
tags:
  - CSS
  - CSS Box Model
  - Guide
  - Overview
  - Reference
---
{{CSSRef}}

**CSS Box Model** is a module of CSS that defines the rectangular boxes—including their padding and margin—that are generated for elements and laid out according to the [visual formatting model](/en-US/docs/Web/CSS/Visual_formatting_model).

## The Box Model

A box in CSS consists of a content area, which is where any text, images, or other HTML elements are displayed. This is optionally surrounded by padding, a border, and a margin, on one or more sides. The box model describes how these elements work together to create a box as displayed by CSS. To learn more about it read [Introduction to the CSS Box Model](/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model).

### Box-edge keywords

The Box Model specification defines a set of keywords that refer to the edges of each part of the box, these are used as keyword values in CSS including as a value for the {{cssxref("box-sizing")}} property, to control how the box model calculates its size.

- `content-box`
  - : The edge of the content area of the box.
- `padding-box`
  - : The edge of the padding of the box, if there is no padding on a side then this is the same as `content-box`.
- `border-box`
  - : The edge of the border of the box, if there is no border on a side then this is the same as `padding-box`.
- `margin-box`
  - : The edge of the margin of the box, if there is no margin on a side then this is the same as `border-box`.
- `stroke-box`
  - : In SVG refers to the stroke bounding box, in CSS treated as `content-box`.
- `view-box`
  - : In SVG refers to the nearest SVG viewport element’s origin box, which is a rectangle with the width and height of the initial SVG user coordinate system established by the {{svgattr("viewBox")}} attribute for that element. In CSS treated as `border-box`.

## Reference

### Properties

> **Note:** This specification defines the physical padding and margin properties. Flow-relative properties, which relate to text direction, are defined in [Logical Properties and Values](/en-US/docs/Web/CSS/CSS_Logical_Properties).

#### Properties controlling the margins of a box

Margins surround the border edge of a box, and provide spacing between boxes.

- {{CSSxRef("margin")}}
- {{CSSxRef("margin-bottom")}}
- {{CSSxRef("margin-left")}}
- {{CSSxRef("margin-right")}}
- {{CSSxRef("margin-top")}}
- {{CSSxRef("margin-trim")}} {{Experimental_Inline}}

#### Properties controlling the paddings of a box

Padding in inserted between the content edge and border edge of a box.

- {{CSSxRef("padding")}}
- {{CSSxRef("padding-bottom")}}
- {{CSSxRef("padding-left")}}
- {{CSSxRef("padding-right")}}
- {{CSSxRef("padding-top")}}

#### Other properties

There are other properties that relate to the box model, that are defined elsewhere.

- [Borders](/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders)
  - : The border properties specify the thickness of the border, drawing style and color.
- [Overflow](/en-US/docs/Web/CSS/overflow)
  - : Controls what happens when there is too much content to fit into a box.

## Guides

- [Introduction to the CSS box model](/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - : Explains one of the fundamental concept of CSS: the box model. This model defines how CSS lays out elements, including their content, padding, border, and margin areas.
- [Mastering margin collapsing](/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - : Sometimes, two adjacent margins are collapsed into one. This article describes the rules that govern when and why this happens, and how to control it.
- [Visual formatting model](/en-US/docs/Web/CSS/Visual_formatting_model)
  - : Explains the visual formatting model.

## Specifications

| Specification                                | Status                       | Comment             |
| -------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName("CSS3 Box")}}             | {{Spec2("CSS3 Box")}} | Added `margin-trim` |
| {{SpecName("CSS2.1", "box.html")}} | {{Spec2("CSS2.1")}}     |                     |
| {{SpecName("CSS1")}}                 | {{Spec2("CSS1")}}     | Initial definition. |
