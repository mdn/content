---
title: contrast-color()
slug: Web/CSS/color_value/contrast-color
page-type: css-function
status:
  - experimental
browser-compat: css.types.color.contrast-color
---

{{CSSRef}}{{SeeCompatTable}}

The **`contrast-color()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) takes a {{cssxref("color_value","color")}} value and returns a [guaranteed](https://www.w3.org/TR/WCAG21/#contrast-minimum) contrasting color.

`contrast-color()` makes it easy, for example, to specify a text color when background colors are created dynamically, or vice versa. It avoids the need to maintain background-text color pairs.

## Syntax

```css
contrast-color(red)
contrast-color(var(--backgroundColor))
```

### Parameters

- `color`
  - : Any valid {{cssxref("&lt;color&gt;")}} value.

### Return value

Either `white` or `black` color value.

## Description

The function produces only `white` or `black` value, depending on which value produces maximum contrast with the input color. If both white and black colors produce the same contrast, then the `white` value is returned.

> [!WARNING]
> There is no guarantee that the values returned using the `contrast-color()` function will produce an accessible result. Mid-tone background colors generally don't provide enough contrast. It is recommended therefore to use light or dark colors with the `contrast-color()` function.

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

In the following example, the [`prefers-color-scheme`](/en-US/docs/Web/CSS/@media/prefers-color-scheme) [media query](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) has been used to set a background color based on operating system or browser color scheme settings. The `contrast-color()` function is used to automatically set the text color.

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
