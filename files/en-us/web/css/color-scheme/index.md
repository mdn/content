---
title: color-scheme
slug: Web/CSS/color-scheme
page-type: css-property
browser-compat: css.properties.color-scheme
---

{{CSSRef}}

The **`color-scheme`** [CSS](/en-US/docs/Web/CSS) property allows an element to indicate which color schemes it can comfortably be rendered in. User agents change the following aspects of the UI chrome to match the used color scheme:

- The color of the canvas surface.
- The default colors of scrollbars and other interaction UI.
- The default colors of form controls.
- The default colors of other browser-provided UI, such as "spellcheck" underlines.

Component authors must use the [`prefers-color-scheme`](/en-US/docs/Web/CSS/@media/prefers-color-scheme) media feature to support the color schemes on the rest of the elements.

Common choices for operating system color schemes are "light" and "dark", or "day mode" and "night mode". When a user selects one of these color schemes, the operating system makes adjustments to the user interface. This includes [form controls](/en-US/docs/Learn_web_development/Extensions/Forms), [scrollbars](/en-US/docs/Web/CSS/CSS_scrollbars_styling), and the used values of [CSS system colors](/en-US/docs/Web/CSS/system-color).

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
  - : Indicates that the element can be rendered using the page's [color scheme](/en-US/docs/Web/HTML/Element/meta/name#color-scheme) settings. If the page does not have a color scheme set, the element is rendered using the page's default color settings.
- `light`
  - : Indicates that the element can be rendered using the operating system _light_ color scheme.
- `dark`
  - : Indicates that the element can be rendered using the operating system _dark_ color scheme.
- `only`

  - : Forbids the user agent from overriding the color scheme for the element.

    Can be used to turn off color overrides caused by Chrome's [Auto Dark Theme](https://developer.chrome.com/blog/auto-dark-theme/#per-element-opt-out), by applying `color-scheme: only light;` on a specific element or `:root`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Declaring color scheme preferences

To opt the entire page into the user's color scheme preferences, declare `color-scheme` on the {{cssxref(":root")}} element.

```css
:root {
  color-scheme: light dark;
}
```

To opt in specific elements to the user's color scheme preferences, declare `color-scheme` on those elements.

```css
header {
  color-scheme: only light;
}
main {
  color-scheme: light dark;
}
footer {
  color-scheme: only dark;
}
```

### Styling based on color schemes

To style elements based on color scheme preferences, use the [`prefers-color-scheme`](/en-US/docs/Web/CSS/@media/prefers-color-scheme) media query. The example below opts in the entire page to using both light and dark operating system color schemes via the `color-scheme` property, and then uses `prefers-color-scheme` to specify the desired foreground and background colors for individual elements in those color schemes.

```css
:root {
  color-scheme: light dark;
}

@media (prefers-color-scheme: light) {
  .element {
    color: black;
    background-color: white;
  }
}

@media (prefers-color-scheme: dark) {
  .element {
    color: white;
    background-color: black;
  }
}
```

Alternatively, use the [`light-dark()`](/en-US/docs/Web/CSS/color_value/light-dark) [`<color>` function](/en-US/docs/Web/CSS/CSS_Functions#color_functions) to set the foreground and background colors for the different color schemes using a more compact code structure:

```css
:root {
  color-scheme: light dark;
}

.element {
  color: light-dark(black, white);
  background-color: light-dark(white, black);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`prefers-color-scheme`](/en-US/docs/Web/CSS/@media/prefers-color-scheme) media query to detect user preferences for color schemes.
- {{CSSXref("color_value/light-dark", "light-dark()")}} color function to set colors for both light and dark color schemes.
- Other color-related properties: {{cssxref("color")}}, {{cssxref("accent-color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, and {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
- {{cssxref("print-color-adjust")}}
- [Using relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors)
