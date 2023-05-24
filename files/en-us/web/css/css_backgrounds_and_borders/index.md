---
title: CSS backgrounds and borders
slug: Web/CSS/CSS_backgrounds_and_borders
page-type: css-module
spec-urls: https://drafts.csswg.org/css-backgrounds/
---

{{CSSRef}}

The **CSS backgrounds and borders** module provides properties for adding borders, rounded corners, and box shadows to elements.

You can add different types of border styles, including borders made of images of any image type, from raster images to CSS gradients. Borders can be square or rounded, and a different radius can be set for each corner. Elements can be rounded whether or not they have a visible border.

Box shadows include inset and outset shadow, single or multiple shadows, and solid or allowed to fade to transparent. An outer box-shadow casts a shadow as if the border-box of the element were opaque. An inner box-shadow casts a shadow as if everything outside the padding edge were opaque. The shadow can be solid or include a spread distance with the shadow color transitioning to transparent.

The properties in this module also let you define whether cells inside a {{HTMLElement("table")}} should have shared or separate borders.

### Backgrounds, borders, and box shadows in action

This sample of borders, backgrounds, and box shadows consists of centered background images made of linear and radial gradients. A series of box shadows make the border appear to "pop". The element on the left has a border image set. The element on the right has a rounded dotted border.

{{EmbedGHLiveSample("css-examples/modules/backgrounds.html", '100%', 430)}}

The background images are defined with {{cssxref("background-image")}}. The images are centered with {{cssxref("background-position")}}. Different values of the {{cssxref("background-clip")}} property for the multiple background images are used to make the background images stay within the content box. The background color gets clipped to the padding box preventing the background from appearing through the transparent sections for the {{cssxref("border-image")}} and the {{cssxref("border-style", "dotted")}} {{cssxref("border")}}. The rounded corners in the element on the right are created using the {{cssxref("border-radius")}} property. A single {{cssxref("box-shadow")}} declaration is used to set all the shadows, both inset and outset.

To see the code for this sample, [view the source on GitHub](https://github.com/mdn/css-examples/blob/main/modules/backgrounds.html).

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

### Data types

- {{cssxref("line-type")}} enumerated type

## Guides

- [Learn CSS: background and borders](/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
  - : Explains how to implement decorative images using CSS background images.
- [Using multiple backgrounds](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
  - : Explains how to set one or more backgrounds on an element.
- [Resizing background images](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
  - : Describes how to change the size and repeating behavior of background images.
- [Learn CSS: the box model](/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  - : Explains how borders, along with other box model properties, impact the CSS box model.
- [Using CSS gradients](/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
  - : Explains how to create CSS gradient background images.

## Related concepts

- {{cssxref("border-block-end-color")}} property
- {{cssxref("border-block-start-color")}} property
- {{cssxref("border-inline-end-color")}} property
- {{cssxref("border-inline-start-color")}} property
- {{cssxref("border-block-end-style")}} property
- {{cssxref("border-block-start-style")}} property
- {{cssxref("border-inline-end-style")}} property
- {{cssxref("border-inline-start-style")}} property
- {{cssxref("border-block-end-width")}} property
- {{cssxref("border-block-start-width")}} property
- {{cssxref("border-inline-end-width")}} property
- {{cssxref("border-inline-start-width")}} property

- {{cssxref("border-start-start-radius")}} property
- {{cssxref("border-start-end-radius")}} property
- {{cssxref("border-end-start-radius")}} property
- {{cssxref("border-end-end-radius ")}} property

- {{cssxref("box-sizing")}} property
- {{cssxref("box-decoration-break")}} property
- {{cssxref("text-shadow")}} property

- {{cssxref("url", "url()")}} CSS function
- [`<color>`](/en-US/docs/Web/CSS/color) data type
- [`<image>`](/en-US/docs/Web/CSS/image) data type
- [`<position>`](/en-US/docs/Web/CSS/position) data type

- [`currentcolor`](/en-US/docs/Web/CSS/color_value#currentcolor_keyword) keyword

## Specifications

{{Specifications}}

## See also

- Interactive tools that let you visually create borders images, rounded corners, and box shadows:
  - [Border-image generator](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders/Border-image_generator)
  - [Border-radius generator](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator)
  - [Box-shadow generator](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator)
- [Applying color to HTML elements using CSS](/en-US/docs/Web/CSS/CSS_colors/Applying_color), including for borders.
- The [`drop-shadow()`](/en-US/docs/Web/CSS/filter-function/drop-shadow) filter function that applies a drop shadow effect to the input image. The function is used by the {{cssxref("filter")}} and {{cssxref("backdrop-filter")}} properties.
