---
title: contrast-color()
slug: Web/CSS/color_value/contrast-color
page-type: css-function
status:
  - experimental
browser-compat: css.types.color.contrast-color
sidebar: cssref
---

{{SeeCompatTable}}

The **`contrast-color()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) takes a {{cssxref("color_value","color")}} value and returns a contrasting color. The function commonly ensures [the WCAG AA minimum contrast](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum). The browsers may use different and better algorithms.

`contrast-color()` makes it easy, for example, to specify a text color and automatically generate a contrasting background color, or vice versa. It avoids the need to maintain background-text color pairs.

## Syntax

```css
contrast-color(red)
contrast-color(var(--backgroundColor))
```

### Parameters

- `color`
  - : Any valid {{cssxref("&lt;color&gt;")}} value.

### Return value

A {{cssxref("named-color")}} of either `white` or `black`.

## Description

The `contrast-color()` function returns a value of `white` or `black`, depending on which value has the greatest contrast with the input color. If both `white` and `black` have the same contrast with the input color, `white` is returned.

> [!WARNING]
> The `4.5:1` contrast is not capable of producing clearly readable text in all cases, for example, black text on a royal bluish (`#2275d3`) background. So there is no guarantee that the values returned using the `contrast-color()` function will produce an accessible result. Mid-tone background colors generally don't provide enough contrast. It is recommended, therefore, to use light or dark colors with the `contrast-color()` function.

## Examples

### Contrasting text for a button

In the following example, the browser automatically applies a contrasting color to the submit {{htmlelement("button")}} text when you change its background color.

```html hidden
<label>
  Select background color of the button:
  <input type="color" id="colorPicker" value="#660066" />
</label>
<br />
<button>Submit</button>
```

```css
:root {
  --button-color: lightblue;
}

button {
  background-color: var(--button-color);

  /* Set contrasting text color automatically */
  color: contrast-color(var(--button-color));
}
```

```css hidden
body {
  padding: 1rem;
}

button {
  margin: 3rem;
  padding: 1rem;
  width: 150px;
  font-size: 2rem;
  border-radius: 1rem;
}

@supports not (color: contrast-color(red)) {
  body::before {
    content: "Your browser doesn't support the contrast-color() function.";
    background-color: wheat;
    display: block;
    width: 100%;
    text-align: center;
  }

  body > * {
    display: none;
  }
}
```

```js hidden
const colorPicker = document.getElementById("colorPicker");
const root = document.documentElement;

function updateColor(color) {
  root.style.setProperty("--button-color", colorPicker.value);
}

colorPicker.addEventListener("change", updateColor);
updateColor();
```

{{EmbedLiveSample("Contrasting text for a button", "", 250)}}

### Light and dark mode usage

In the following example, the [`prefers-color-scheme`](/en-US/docs/Web/CSS/@media/prefers-color-scheme) [media query](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) is used to set a background color based on operating system or browser color scheme settings. The `contrast-color()` function is used to set the text color automatically.

Try changing the browser or OS dark mode setting to see the effect.

```html hidden
<pre>
    Q: How does CSS transform light into energy?
  Ans: Using <a href="/en-US/docs/Web/CSS/font-synthesis">font-synthesis</a>.
</pre>
```

```css
:root {
  --background-color: navy;
}

@media (prefers-color-scheme: light) {
  :root {
    --background-color: wheat;
  }
}

body,
a {
  background-color: var(--background-color);
  color: contrast-color(var(--background-color));
}
```

```css hidden
body {
  padding: 2rem;
  font-size: 1.2rem;
}

pre {
  margin-top: 3rem;
}

@supports not (color: contrast-color(red)) {
  body::before {
    content: "Your browser doesn't support the contrast-color() function.";
    background-color: wheat;
    display: block;
    width: 100%;
    text-align: center;
  }

  body {
    background-color: white;
  }

  body > * {
    display: none;
  }
}
```

{{EmbedLiveSample("Light and dark mode usage", "", 250)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`contrast()`](/en-US/docs/Web/CSS/filter-function/contrast)
- [CSS colors](/en-US/docs/Web/CSS/CSS_colors) module
- [CSS custom properties](/en-US/docs/Web/CSS/--*) and {{cssxref("var")}}
- [`prefers-contrast`](/en-US/docs/Web/CSS/@media/prefers-contrast) and [`prefers-color-scheme`](/en-US/docs/Web/CSS/@media/prefers-color-scheme) {{cssxref("@media")}} features
- [WCAG: color contrast](/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [How to have the browser pick a contrasting color in CSS](https://webkit.org/blog/16929/contrast-color/) on webkit.org (2025)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) on webaim.org (2025)
