---
title: color-adjust
slug: Web/CSS/color-adjust
tags:
  - Adjusting Colors
  - CSS
  - CSS Colors
  - CSS Property
  - HTML Colors
  - HTML Styles
  - Layout
  - Non-standard
  - Reference
  - Styling HTML
  - Styling text
  - Web
  - color-adjust
  - recipe:css-property
browser-compat: css.properties.color-adjust
---
{{CSSRef}}

The **`color-adjust`** CSS property sets what, if anything, the {{Glossary("user agent")}} may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.

## Syntax

```css
color-adjust: economy;
color-adjust: exact;

/* Global values */
color-adjust: inherit;
color-adjust: initial;
color-adjust: revert;
color-adjust: unset;
```

The `color-adjust` property's value must be one of the following keywords.

### Values

- `economy`
  - : The user agent is allowed to make adjustments to the element as it deems appropriate and prudent in order to optimize the output for the device it's being rendered for. For example, when printing, a browser might opt to leave out all background images and to adjust text colors to be sure the contrast is optimized for reading on white paper. This is the default.
- **`exact`**
  - : The element's content has been specifically and carefully crafted to use colors, images, and styles in a thoughtful and/or important way, such that being altered by the browser might actually make things worse rather than better. The appearance of the content should not be changed except by the user's request. For example, a page might include a list of information with rows whose background colors alternate between white and a light grey. Removing the background color would decrease the legibility of the content.

## Usage notes

There are a number of reasons a browser might wish to deviate from the specified appearance, such as:

- The content uses text and background colors that will be too similar on the output device for legibility purposes.
- If the output device is a printer, and to save ink, dark or extremely dense background images might be removed.
- When printing a page, the browser might want to replace light-colored text on a dark background with dark text on a white background.

Any options the user agent offers the user to allow them to control the use of color and images will take priority over the value of `color-adjust`. In other words, there isn't any guarantee that `color-adjust` will do anything. Not only can the user override the behavior, but each user agent is allowed to decide for itself how to handle `color-adjust` in any given situation.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Preserving low contrast

In this example, a box is shown which uses a {{cssxref("background-image")}} and a translucent {{cssxref("gradient/linear-gradient()", "linear-gradient()")}} function atop a black background color to have a dark blue gradient behind medium red text. For whatever reason, this is the desired appearance in any rendering environment, including on paper, so we also use `color-adjust: exact` to tell the browser not to make color or style adjustments to the box when rendering it.

#### CSS

```css
.my-box {
  background-color: black;
  background-image: linear-gradient(rgba(0, 0, 180, 0.5), rgba(70, 140, 220, 0.5));
  color: #900;
  width: 15rem;
  height: 6rem;
  text-align: center;
  font: 24px "Helvetica", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  color-adjust: exact;
}
```

#### HTML

```html
<div class="my-box">
  <p>Need more contrast!</p>
</div>
```

#### Result

{{EmbedLiveSample("Preserving_low_contrast", 640, 120)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Applying color to HTML elements using CSS](/en-US/docs/Web/HTML/Applying_color)
- Other color-related properties: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, and {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
- {{cssxref("-webkit-print-color-adjust")}}
