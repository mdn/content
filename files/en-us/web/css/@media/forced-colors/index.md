---
title: forced-colors
slug: Web/CSS/@media/forced-colors
tags:
  - CSS
  - Reference
  - color
  - forced-colors
  - media feature
browser-compat: css.at-rules.media.forced-colors
---
{{CSSRef}}

The **`forced-colors`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features) is used to detect if the {{Glossary("user agent")}} has enabled a forced colors mode where it enforces a user-chosen limited color palette on the page. An example of a forced colors mode is Windows High Contrast mode.

## Syntax

The `forced-colors` media feature indicates whether or not the browser is currently in forced-colors mode.

### Values

- `none`
  - : Forced colors mode is not active; the page's colors are not being forced into a limited palette.
- `active`
  - : Indicates that forced colors mode is active. The browser provides the color palette to authors through the [CSS system color](/en-US/docs/Web/CSS/color_value#system_colors) keywords and, if appropriate, triggers the appropriate value of [`prefers-color-scheme`](/en-US/docs/Web/CSS/@media/prefers-color-scheme) so that authors can adapt the page. The browser selects the value for `prefers-color-scheme` based on the lightness of the `Canvas` system color (see the [color adjust spec](https://www.w3.org/TR/css-color-adjust-1/#forced) for more details).

## Usage notes

### Properties affected by forced-color mode

In forced colors mode, the values of the following properties are treated as if they have no author-level values specified. That is, browser-specified values are used instead. The browser-specified values do not affect the style cascade; the values are instead forced by the browser at paint time.

These browser-specified values are selected from the set of system colors — this ensures a consistent contrast for common UI elements for users that have forced colors enabled.

- {{cssxref("color")}}
- {{cssxref("background-color")}}
- {{cssxref("text-decoration-color")}}
- {{cssxref("text-emphasis-color")}}
- {{cssxref("border-color")}}
- {{cssxref("outline-color")}}
- {{cssxref("column-rule-color")}}
- {{cssxref("-webkit-tap-highlight-color")}}
- [SVG fill attribute](/en-US/docs/Web/SVG/Attribute/fill)
- [SVG stroke attribute](/en-US/docs/Web/SVG/Attribute/stroke)

Additionally the following properties have special behavior in forced colors mode:

- {{cssxref("box-shadow")}} is forced to 'none'
- {{cssxref("text-shadow")}} is forced to 'none'
- {{cssxref("background-image")}} is forced to 'none' for values that are not url-based
- {{cssxref("color-scheme")}} is forced to 'light dark'
- {{cssxref("scrollbar-color")}} is forced to 'auto'

The system colors that are forced for the above properties depend on the context of the element. For example the {{cssxref("color")}} property on button element will be forced to `ButtonText`. On normal text it will be forced to `CanvasText`. See the [list of system colors](/en-US/docs/Web/CSS/color_value#system_colors) for additional details of when each might be appropriate in various UI contexts.

> **Note:** user agents choose system colors based on native element semantics, _not_ on added ARIA roles.
> As an example, adding `role="button"` to a `div` will **not** cause an element's color to be forced to `ButtonText`

In addition to these adjustments, browsers will help ensure text legibility by drawing "backplates" behind text. This is particularly important for preserving contrast when text is placed on top of images.

There are two cases where the user agent does not force the values for the above properties — when a {{cssxref("forced-color-adjust")}} value of `none` is applied to an element, or when a system color is specified by the author.

When forced-color-adjust is set to `none` on an element, none of the forced color values will apply, and author styles will be applied as normal. Additionally, the backplate for text will be disabled.

When a system color is specified, it will be used instead of the value that would otherwise have been forced.

You can also use system colors with any property _other_ than those listed above, to ensure that the rest of the page integrates with the restricted color palette available in forced colors mode.

### Accessibility concerns

In general, web authors should **not** be using the `forced-colors` media feature to create a separate design for users with this feature enabled. Instead, its intended usage is to make small tweaks to improve usability or legibility when the default application of forced colors does not work well for a given portion of a page.

The high contrast provided by forced colors mode's reduced palette and text backplates is often essential for some users to be able to read or use a given website, so adjustments that affect content should be chosen carefully and targeted to content that is otherwise not legible.

### User preferences

This media feature is active only if the user has enabled color scheme preferences in their operating system. One example of such a feature is High Contrast mode on Windows.

## Examples

> **Note:** The below example will only work when using a browser that supports this media feature, and with a preference such as High Contrast mode enabled in your OS.

This example is a button that normally gets its contrast via {{cssxref("box-shadow")}}. Under forced colors mode, box-shadow is forced to none, so the example uses the forced-colors media feature to ensure there is a border of the appropriate color (ButtonText in this case)

### HTML

```html
<button class="button">Press me!</button>
```

### CSS

```css
.button {
  border: 0;
  padding: 10px;
  box-shadow: -2px -2px 5px gray, 2px 2px 5px gray;
}

@media (forced-colors: active) {
  .button {
    /* Use a border instead, since box-shadow is forced to 'none' in forced-colors mode */
    border: 2px ButtonText solid;
  }
}
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [@media](/en-US/docs/Web/CSS/@media)
- [Styling for Windows high contrast with standards for forced colors.](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- {{cssxref("forced-color-adjust")}}
