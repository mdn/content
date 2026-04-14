---
title: light-dark()
slug: Web/CSS/Reference/Values/color_value/light-dark
page-type: css-function
browser-compat: css.types.color.light-dark
sidebar: cssref
---

The **`light-dark()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/Reference/Values/Functions) accepts two colors or two images and returns a color or an image based on the active color scheme, without needing a [`prefers-color-scheme`](/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) [media feature](/en-US/docs/Web/CSS/Guides/Media_queries/Using#targeting_media_features).

## Syntax

```css-nolint
/* Named color values */
light-dark(
  black,
  white
);

/* RGB color values */
light-dark(
  rgb(0 0 0),
  rgb(255 255 255)
);

/* image url values */
light-dark(
  url("light-icon.png"),
  url("dark-icon.png")
);

/* linear-gradient values */
light-dark(
  linear-gradient(135deg, ghostwhite 20%, tomato),
  linear-gradient(45deg, darkslategray 20%, gold)
);

/* Custom properties */
light-dark(
  var(--light),
  var(--dark)
);
```

### Values

The light-dark() function has two forms:

- Accepts two `<color>` values:
  - `<color>` (light)
    - : The {{CSSXref("&lt;color&gt;")}} value used when the {{CSSXref("color-scheme")}} is `light` or no preference is set.
  - `<color>` (dark)
    - : The {{CSSXref("&lt;color&gt;")}} value used when the {{CSSXref("color-scheme")}} is `dark`.
- Accepts two `<image>` values:
  - `<image>` (light)
    - : The {{CSSXref("&lt;image&gt;")}} value used when the {{CSSXref("color-scheme")}} is `light` or no preference is set.
  - `<image>` (dark)
    - : The {{CSSXref("&lt;image&gt;")}} value used when the {{CSSXref("color-scheme")}} is `dark`.
  - `none`
    - : The `none` keyword produces a fully transparent image with no natural size.

## Description

Users can indicate their color scheme preference through their operating system settings (e.g., light or dark mode) or their user agent settings. The `light-dark()` function enables providing either two color values where any `<color>` value is accepted or two image values where any `<image>` value is accepted. The `light-dark()` function returns the first value if the used color scheme is `light` or if no preference is set and the second value if the used color scheme is `dark`.

To enable support for the `light-dark()` color function, the {{CSSXref("color-scheme")}} must have a value of `light dark`, usually set on the {{CSSXref(":root")}} [pseudo-class](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes).

```css
:root {
  color-scheme: light dark;
}
body {
  color: light-dark(#333b3c, #efefec);
  background-color: light-dark(#efedea, #223a2c);
}
```

## Formal syntax

{{CSSSyntax}}

## Examples

### Setting colors based on a color scheme

By default, in supporting browsers, the color returned by the `light-dark()` color function depends on the user preference set through an operating system's settings (e.g., light or dark mode) or from a user agent setting. You can also change this setting in the browser's {{glossary("developer tools")}}.

#### HTML

We include three sections to enable targeting light colors, dark colors, and the colors selected based on the user's preferred color scheme.

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
  <p>This section will be dark due to the <code>color-scheme: dark;</code>.</p>
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
```

In addition to enabling the `light-dark()` function, the `color-scheme` property enables overriding a user's color scheme for document sections. Forcing a page section to only use a light or dark color scheme can be done by setting the `color-scheme` property to `light` or `dark`.

> [!NOTE]
> Generally this should not be done, we are using it here for demonstration purposes. If the user has made a preference, you generally should not override their preferences.

```css
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

### Setting gradient background based on a color scheme

This example uses the same HTML code as the previous example but includes a `<div>` instead of a `<p>`.

```html hidden
<h1><code>light-dark()</code> CSS function with images</h1>
<p class="supports">
  Your browser does not support <code>light-dark()</code> with images.
</p>
<div class="wrapper">
  <section>
    <h2>Automatic</h2>
    <div></div>
  </section>
  <section class="light">
    <h2>Light</h2>
    <div></div>
  </section>
  <section class="dark">
    <h2>Dark</h2>
    <div></div>
  </section>
</div>
```

#### CSS

```css-nolint hidden
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
.wrapper {
  display: flex;
  justify-content: space-around;
  padding: 0.8rem;
}
.light {
  /* forces light color-scheme */
  color-scheme: light;
}
.dark {
  /* forces dark color-scheme */
  color-scheme: dark;
}
section {
  width: 25%;
  padding: 5px;
  color: light-dark(
    var(--light-code),
    var(--dark-code)
  );
  border: 2px solid light-dark(var(--light-code), var(--dark-code));
}
@supports (background-image: light-dark(url("light.png"), url("dark.png"))) {
  .supports {display:none;}
}
```

Firstly, we define light and dark `linear-gradient()` values as custom properties.

```css
:root {
  /*  light dark gradients  */
  --light-grad: linear-gradient(135deg, var(--light-bg) 20%, var(--light-code));
  --dark-grad: linear-gradient(45deg, var(--dark-bg) 30%, var(--dark-code));
}
```

```css hidden
section div {
  width: 80%;
  aspect-ratio: 1/1;
  margin: auto;
  border: 1px solid light-dark(var(--light-code), var(--dark-code));
}
@supports not (
  background-image: light-dark(url("light.png"), url("dark.png"))
) {
  section div {
    width: 60%;
  }
}
```

Then we use the custom properties with `light-dark()` to set the `background-image` property based on the active color scheme.

```css-nolint
section div {
  background-image: light-dark(
    var(--light-grad),
    var(--dark-grad)
  );
}
```

#### Result

{{EmbedLiveSample("setting_gradient_background_based_on_a_color_scheme", "100%", 350)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSXref("color-scheme")}}
- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;image&gt;")}}
- [CSS colors](/en-US/docs/Web/CSS/Guides/Colors) module
- [`prefers-contrast`](/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast) {{cssxref("@media")}} feature
- [`contrast()`](/en-US/docs/Web/CSS/Reference/Values/filter-function/contrast)
- [WCAG: color contrast](/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS custom properties](/en-US/docs/Web/CSS/Reference/Properties/--*) and {{cssxref("var")}}
