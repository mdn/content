---
title: contrast-color()
slug: Web/CSS/color_value/contrast-color
page-type: css-function
status:
  - experimental
browser-compat: css.types.color.contrast-color
---

{{CSSRef}}{{SeeCompatTable}}

The **`contrast-color()`** functional notation takes a {{cssxref("color_value","color")}} value and returns a [guaranteed](https://www.w3.org/TR/WCAG21/#contrast-minimum) contrasting color. The function makes it easy to specify text color when background colors are created dynamically. It saves developers from maintaining background-text color pairs. It is not limited to deriving text colors; you can use it for deriving colors of anything, such as border, background, etc.

The function produces only `white` or `black` value, depending on which value produces maximum contrast with the input color. If both white and black colors produce the same contrast, then the `white` value is returned.

> [!WARNING]
> There is no guarantee that the resulting colors obtained using the `contrast-color()` function will always be accessible. For example, generally, mid-tone background colors don't result in enough contrast. It is recommended to use clearly-light or clearly-dark colors with the `contrast-color()` function.

## Syntax

```css
contrast-color(red)
contrast-color(var(--backgroundColor))
```

### Values

- `color`
  - : Any valid {{cssxref("&lt;color&gt;")}}.

### Examples

#### Contrasting text for a button

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [How to have the browser pick a contrasting color in CSS](https://webkit.org/blog/16929/contrast-color/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- {{cssxref("color_value", "&lt;color>")}} data type
- [WCAG: color contrast](/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS colors](/en-US/docs/Web/CSS/CSS_colors) module
- [`prefers-contrast`](/en-US/docs/Web/CSS/@media/prefers-contrast) and [`prefers-color-scheme`](/en-US/docs/Web/CSS/@media/prefers-color-scheme) {{cssxref("@media")}} features
- [`contrast()`](/en-US/docs/Web/CSS/filter-function/contrast)
- [CSS custom properties](/en-US/docs/Web/CSS/--*) and {{cssxref("var")}}
