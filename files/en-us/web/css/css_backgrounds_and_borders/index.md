---
title: CSS backgrounds and borders
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

### Backgrounds, borders, and box shadows in action

This sample of borders, backgrounds, and box shadows consists of centered background images made of linear and radial gradients and a series of box shadows that make the border appear to "pop." The first sample has a border image set. The second sample has a rounded dotted border.

<!-- intro example -->

```html hidden
<article>
<div></div>
<div></div>
</article>
```

```css hidden
article {display: flex; gap: 10px;}
div {
  color: #58ADE3;
  height: 320px;
  width: 240px;
  padding: 20px;
  margin: 10px;
  border: dotted 15px; /* defaults to `currentcolor` */
  border-radius: 100px 0;
  background-image: 
    radial-gradient(circle, transparent 60%, currentcolor 60% 70%,transparent 70% ), 
    linear-gradient(45deg, currentcolor, white),
    linear-gradient(transparent, transparent);
    /* the third transparent background image was added to provide space for the background color to show through */
  background-color: currentcolor;
  background-position: center;
  background-size: 60px 60px, 120px 120px;
  background-clip: content-box, content-box, padding-box; 
  box-shadow: 
    inset 5px 5px 5px rgba(0,0,0,0.4), 
    inset -5px -5px 5px rgba(0,0,0,0.4),
    5px 5px 5px rgba(0,0,0,0.4), 
    -5px -5px 5px rgba(0,0,0,0.4);
}
div:first-of-type {
  border-radius: 0;
  border-image-source: repeating-conic-gradient(from 3deg at 25% 25%, currentColor 0 3deg, transparent 3deg 6deg);
  border-image-slice: 30;
}
```

{{ EmbedLiveSample('Backgrounds_borders_and_box_shadows_in_action', "450", "450") }}

The background images are defined with {{cssxref("background-image")}}. The images are centered with {{cssxref("background-position")}}. Different values of the {{cssxref("background-clip")}} property for the multiple background images are employed to make the background images stay within the content box, while the background color gets clipped to the padding box; prevention the background from appearing thru transparent sections for the {{cssxref("border-image")}} and {{cssxref("border-style", "dotted")}} {{cssxref("border")}}. The rounded corners on the second sample were created using the {{cssxref("border-radius")}}property. A single {{cssxref("box-shadow")}} declaration set all the shadows, both inset and outset. To see the code for this background, borders, and box-shadow samples, [view the source on Github](https://github.com/mdn/content/blob/main/files/en-us/web/css/compositing_and_blending/index.md?plain=1).

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
  - : Learn how to implement decorative images using CSS background images.
- [Using multiple backgrounds](/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)
  - : Explains how to set one or more backgrounds on an element.
- [Resizing background images](/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Resizing_background_images)
  - : Describes how to change the size and repeating behavior of background images.
- [Learn CSS: the box model](/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  - : Explains how borders, along with other box model properties, impact the CSS box model.
- [Using CSS gradients](/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
  - : Explains how to create CSS gradient background images.

## Related concepts

- {{cssxref("border-block-end-color")}} CSS property
- {{cssxref("border-block-start-color")}} CSS property
- {{cssxref("border-inline-end-color")}} CSS property
- {{cssxref("border-inline-start-color")}} CSS property
- {{cssxref("border-block-end-style")}} CSS property
- {{cssxref("border-block-start-style")}} CSS property
- {{cssxref("border-inline-end-style")}} CSS property
- {{cssxref("border-inline-start-style")}} CSS property
- {{cssxref("border-block-end-width")}} CSS property
- {{cssxref("border-block-start-width")}} CSS property
- {{cssxref("border-inline-end-width")}} CSS property
- {{cssxref("border-inline-start-width")}} CSS property

- {{cssxref("border-start-start-radius")}} CSS property
- {{cssxref("border-start-end-radius")}} CSS property
- {{cssxref("border-end-start-radius")}} CSS property
- {{cssxref("border-end-end-radius ")}} CSS property

- {{cssxref("box-sizing")}} CSS property
- {{cssxref("box-decoration-break")}} CSS property
- {{cssxref("text-shadow")}} CSS property

- {{cssxref("url()")}} CSS function
- [`<color>`](/en-US/docs/Web/CSS/color) data type
- [`<image>`](/en-US/docs/Web/CSS/image) data type
- [`<position>`](/en-US/docs/Web/CSS/position) data type

- [`currentcolor`](/en-US/docs/Web/CSS/color_value#currentcolor_keyword) keyword

## Specifications

{{Specifications}}

## See also

- Interactive tools that let you visually create borders images, rounded corners, and box shadows:
  - [Border-image generator](/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Border-image_generator)
  - [Border-radius generator](/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Border-radius_generator)
  - [Box-shadow generator](/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Box-shadow_generator)
- [Applying color to HTML elements using CSS](/en-US/docs/Web/CSS/CSS_Colors/Applying_color), including for borders.
- The [`drop-shadow()`](/en-US/docs/Web/CSS/filter-function/drop-shadow) filter function, used by the {{cssxref("filter")}} and {{cssxref("backdrop-filter")}} properties, applies a drop shadow effect to the input image.
