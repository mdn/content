---
title: light-dark()
slug: Web/CSS/color_value/light-dark
page-type: css-function
browser-compat: css.types.color.light-dark
---

{{CSSRef}}

The **`light-dark()`** [CSS](/en-US/docs/Web/CSS) [`<color>` function](/en-US/docs/Web/CSS/CSS_Functions#color_functions) enables setting two colors for a property - selecting one of the two options by detecting if a user has requested light or dark color theme - without needing to encase the theme colors withing a [`prefers-color-scheme`](/en-US/docs/Web/CSS/@media/prefers-color-scheme) [media feature](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_features) query.
Users are able to indicate their color-scheme preference through their operating system settings (e.g. light or dark mode) or their user agent settings. The `light-dark()` function enables providing two color values where any `<color>` value is accepted. The `light-dark()` CSS color function returns the first value if the user's preference is set to `light` or if no preference is set and the second value if the user's preference is set to `dark`.

To enable support for the `light-dark()` color function, the {{CSSXref("color-scheme")}} must have a value of `light dark`, usually set on the {{CSSXref(":root")}} [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes).

```css
:root {
  color-scheme: light dark;
}
```

The `color-scheme` property enables overriding a user's color scheme for document sections. Forcing a page section to only use a light or dark color scheme can be done by setting the `color-scheme` property to `light` or `dark`.

```css
.my-dark-section {
  color-scheme: dark;
}
```

## Syntax

```css
/* Named color values */
color: light-dark(white, black);

/* RGB color values */
color: light-dark(rgb(255 255 255), rgb(0 0 0));

/* Custom properties */
color: light-dark(var(--light), var(--dark));
```

### Values

Functional notation: `light-dark(light-color, dark-color)`

- `light-color`

  - : {{CSSXref("&lt;color&gt;")}} value to be set for light {{CSSXref("color-scheme")}}.

- `dark-color`
  - : {{CSSXref("&lt;color&gt;")}} value to be set for dark {{CSSXref("color-scheme")}}.

### Formal syntax

{{csssyntax}}

## Example

### Setting colors based on color scheme

In a supporting browser, the colors will change based on the user preference through an operating system setting (e.g., light or dark mode) or a user agent setting. You can also change this setting in the browsers {{glossary("developer tools")}}.

#### HTML

We include three sections to enable targeting light colors, dark colors, and the user's preferred colors.

```html
<h1><code>light-dark()</code> CSS function</h1>
<section>
  <h2>Automatic</h2>
  <p>This section will react to the users system or user agent setting.</p>
</section>
<section class="light">
  <h2>Light</h2>
  <p>
    This section will be light due to the <code>color-scheme: light;</code>.
  </p>
</section>
<section class="dark">
  <h2>Dark</h2>
  <p>This section will be light due to the <code>color-scheme: dark;</code>.</p>
</section>
```

#### CSS

We include colors for both light and dark themes. We also define `color-scheme` for the document on the `:root` to enable the `light-dark()` color function for the entire document.

```css-nolint
:root {
  /* this has to be set to switch between light or dark */
  color-scheme: light dark;

  --light-bg: ghostwhite;
  --light-color: darkslategray;
  --light-code: tomato;

  --dark-bg: darkslategray;
  --dark-color: ghostwhite;
  --dark-code: gold;
}
* {
  background-color: light-dark(var(--light-bg), var(--dark-bg));
  color: light-dark(var(--light-color), var(--dark-color));
}
code {
  color: light-dark(var(--light-code), var(--dark-code));
}
.light {
  /* forces light color-scheme */
  color-scheme: light;
}
.dark {
  /* forces dark color-scheme */
  color-scheme: dark;
}
```

```css hidden
section {
  padding: 0.8rem;
}
```

#### Result

{{EmbedLiveSample("setting_colors_based_on_color_scheme", "100%", 500)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSXref("color-scheme")}}
- {{CSSXref("&lt;color&gt;")}}
- [CSS color](/en-US/docs/Web/CSS/CSS_colors) module
