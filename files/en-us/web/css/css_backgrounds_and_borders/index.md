---
title: Backgrounds and borders
slug: Web/CSS/CSS_Backgrounds_and_Borders
page-type: css-module
tags:
  - CSS
  - CSS Backgrounds and Borders
  - Guide
  - Overview
  - Reference
spec-urls: https://drafts.csswg.org/css-backgrounds/
---

{{CSSRef}}

The **CSS backgrounds and borders** module provides for adding borders, rounded corners, and box shadows to elements. The module also provides for setting whether cells inside a {{HTMLElement("table")}} have shared or separate borders.

The module provides for many border styles, including properties to create borders made of images of any image type, from raster images to CSS gradients. Borders can be square or rounded, including providing different radii for each corner. Elements can be rounded whether or not they have a visible border.

Box shadows include inset and outset shadow, single or multiple shadows, and solid or allowed to fade to transparent. An outer box-shadow casts a shadow as if the border-box of the element were opaque. An inner box-shadow casts a shadow as if everything outside the padding edge were opaque. The shadow can be solid or include a spread distance with the shadow color transitioning to transparent.

### Backgrounds and borders in action

<!-- intro example -->

```html hidden
<div>Hello</div>
```

```css hidden
div {
  background: red;
}
```

{{ EmbedLiveSample('Backgrounds_and_borders_in_action', "630", "630") }}

To see the code for this background and borders sample, [view the source on Github](https://github.com/mdn/content/blob/main/files/en-us/web/css/compositing_and_blending/index.md?plain=1).

## Reference

### Properties

- {{cssxref("background-attachment")}}
- {{cssxref("background-clip")}}
- {{cssxref("background-color")}}
- {{cssxref("background-image")}}
- {{cssxref("background-origin")}}
- {{cssxref("background-position")}}
- {{cssxref("background-repeat")}}
- {{cssxref("background-size")}}
- {{cssxref("background")}} shorthand
- {{cssxref("background-position-x")}} {{experimental_inline}}
- {{cssxref("background-position-y")}} {{experimental_inline}}
- {{cssxref("background-position-inline")}} {{experimental_inline}}
- {{cssxref("background-position-block")}} {{experimental_inline}}

- {{cssxref("border-bottom-color")}}
- {{cssxref("border-bottom-style")}}
- {{cssxref("border-bottom-width")}}
- {{cssxref("border-bottom")}} shorthand
- {{cssxref("border-left-color")}}
- {{cssxref("border-left-style")}}
- {{cssxref("border-left-width")}}
- {{cssxref("border-left")}} shorthand
- {{cssxref("border-right-color")}}
- {{cssxref("border-right-style")}}
- {{cssxref("border-right-width")}}
- {{cssxref("border-right")}} shorthand
- {{cssxref("border-top-color")}}
- {{cssxref("border-top-style")}}
- {{cssxref("border-top-width")}}
- {{cssxref("border-top")}} shorthand
- {{cssxref("border-color")}} shorthand
- {{cssxref("border-style")}} shorthand
- {{cssxref("border-width")}} shorthand
- {{cssxref("border")}} shorthand

- {{cssxref("border-collapse")}}

- {{cssxref("border-bottom-left-radius")}}
- {{cssxref("border-bottom-right-radius")}}
- {{cssxref("border-top-left-radius")}}
- {{cssxref("border-top-right-radius")}}
- {{cssxref("border-radius")}} shorthand

- {{cssxref("border-image-outset")}}
- {{cssxref("border-image-repeat")}}
- {{cssxref("border-image-slice")}}
- {{cssxref("border-image-source")}}
- {{cssxref("border-image-width")}}
- {{cssxref("border-image")}} shorthand

- {{cssxref("box-shadow")}}

## Guides

- [Learn CSS: background and borders](/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
  - :
- [Using multiple backgrounds](/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)
  - : Explains how to set one or more backgrounds on an element.
- [Resizing background images](/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Resizing_background_images)
  - : Describes how to change the size and repeating behavior of background images.
- [Learn CSS: the box model](/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  - : Explains how borders, along with other box model properties, impact the CSS box model.
- [Using CSS gradients](/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
  - : Explains how to create CSS gradient background images.

## Related concepts

- {{cssxref("box-sizing")}} CSS property
- {{cssxref("box-decoration-break")}} CSS property
- {{cssxref("text-shadow")}} CSS property
- {{cssxref("")}} CSS property
- {{cssxref("")}} CSS property
-
- {{glossary("")}} glossary term
- [`<color>`](/en-US/docs/Web/CSS/color) data type
- [`<image>`](/en-US/docs/Web/CSS/image) data type
- [`<position>`](/en-US/docs/Web/CSS/position) data type
- [`currentcolor`](/en-US/docs/Web/CSS/color_value#currentcolor_keyword) keyword
- [`drop-shadow()`](/en-US/docs/Web/CSS/filter-function/drop-shadow) filter function

## Specifications

{{Specifications}}

## See also

- Interactive tools that let you visually create borders images, rounded corners, and box shadows:
  - [Border-image generator](/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Border-image_generator)
  - [Border-radius generator](/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Border-radius_generator)
  - [Box-shadow generator](/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Box-shadow_generator)
- [Applying color to HTML elements using CSS](/en-US/docs/Web/CSS/CSS_Colors/Applying_color), including for borders.
