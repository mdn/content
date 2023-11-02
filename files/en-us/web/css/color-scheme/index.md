---
title: color-scheme
slug: Web/CSS/color-scheme
page-type: css-property
browser-compat: css.properties.color-scheme
---

{{CSSRef}}

The **`color-scheme`** CSS property allows an element to indicate which color schemes it can comfortably be rendered in.

Common choices for operating system color schemes are "light" and "dark", or "day mode" and "night mode". When a user selects one of these color schemes, the operating system makes adjustments to the user interface. This includes form controls, scrollbars, and the used values of CSS system colors.

{{EmbedInteractiveExample("pages/css/color-scheme.html")}}

## Syntax

```css
color-scheme: normal;
color-scheme: light;
color-scheme: dark;
color-scheme: light dark;
color-scheme: only light;

/* Global values */
color-scheme: inherit;
color-scheme: initial;
color-scheme: revert;
color-scheme: revert-layer;
color-scheme: unset;
```

The `color-scheme` property's value must be one of the following keywords.

### Values

- `normal`
  - : Indicates that the element isn't aware of any color schemes, and so should be rendered using the browser's default color scheme.
- `light`
  - : Indicates that the element can be rendered using the operating system light color scheme.
- `dark`
  - : Indicates that the element can be rendered using the operating system dark color scheme.
- `only`

  - : Forbids the user agent from overriding the color scheme for the element.

    Can be used to turn off color overrides caused by Chrome's [Auto Dark Theme](https://developer.chrome.com/blog/auto-dark-theme/#per-element-opt-out), by applying `color-scheme: only light;` on a specific element or `:root`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Adapting to color schemes

To opt the entire page into the user's color scheme preferences declare `color-scheme` on the {{cssxref(":root")}} element.

```css
:root {
  color-scheme: light dark;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`prefers-color-scheme`](/en-US/docs/Web/CSS/@media/prefers-color-scheme) media query to detect user preferences for color schemes.
- [Applying color to HTML elements using CSS](/en-US/docs/Web/CSS/CSS_colors/Applying_color)
- Other color-related properties: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, and {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
- {{cssxref("print-color-adjust")}}
