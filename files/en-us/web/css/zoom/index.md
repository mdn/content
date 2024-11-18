---
title: zoom
slug: Web/CSS/zoom
page-type: css-property
browser-compat: css.properties.zoom
---

{{CSSRef}}

The **`zoom`** [CSS](/en-US/docs/Web/CSS) property can be used to control the magnification level of an element.
{{cssxref("transform-function/scale", "transform: scale()")}} can be used as an alternative to this property.

The `zoom` CSS property scales the targeted element, which can affect the page layout.
When scaling, the zoomed element scales from `top` and `center` when using the default {{CSSXRef("writing-mode")}}.

In contrast, an element scaled using {{cssxref("transform-function/scale", "scale()")}} will not cause layout recalculation or move other elements on the page.
If using `scale()` makes the contents larger than the containing element, then {{CSSXRef("overflow")}} comes into effect.
Additionally, elements adjusted using `scale()` transform from the `center` by default; this can be changed with the {{CSSXRef("transform-origin")}} CSS property.

## Syntax

```css
/* <percentage> values */
zoom: 50%;
zoom: 200%;

/* <number> values */
zoom: 1.1;
zoom: 0.7;

/* Non-standard keyword values */
zoom: normal;
zoom: reset;

/* Global values */
zoom: inherit;
zoom: initial;
zoom: revert;
zoom: revert-layer;
zoom: unset;
```

### Values

- {{cssxref("&lt;percentage&gt;")}}
  - : Zoom factor. `100%` is equivalent to `normal`. Values larger than `100%` zoom in. Values smaller than `100%` zoom out.
- {{cssxref("&lt;number&gt;")}}
  - : Zoom factor. Equivalent to the corresponding percentage (`1.0` = `100%` = `normal`). Values larger than `1.0` zoom in. Values smaller than `1.0` zoom out.

Two non-standard keyword values are not recommended. Check [browser compatibility](#browser_compatibility) data:

- `normal`
  - : Render the element at its normal size; equal to `zoom: 1`. Use the global {{cssxref("unset")}} keyword value instead.
- `reset`
  - : Resets the value to `zoom: 1` and prevents the element from being (de)magnified if the user applies non-pinch-based zooming (e.g. by pressing <kbd>Ctrl</kbd> \- <kbd>-</kbd> or <kbd>Ctrl</kbd> \+ <kbd>+</kbd> keyboard shortcuts) to the document.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Resizing paragraphs

In this example the paragraph elements are zoomed, on hovering a paragraph the `zoom` value is `unset`.

#### HTML

```html
<p class="small">Small</p>
<p class="normal">Normal</p>
<p class="big">Big</p>
```

#### CSS

```css hidden
body {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
}
```

```css
.small {
  zoom: 75%;
}
.normal {
  zoom: normal;
}
.big {
  zoom: 2.5;
}
p:hover {
  zoom: unset;
}
```

#### Result

{{EmbedLiveSample('resizing_paragraphs')}}

### Resizing elements

In this example the `div` elements are zoomed using the `normal`, `<percentage>`, and `<number>` values.

#### HTML

```html
<div id="a" class="circle"></div>
<div id="b" class="circle"></div>
<div id="c" class="circle"></div>
```

#### CSS

```css
div.circle {
  width: 25px;
  height: 25px;
  border-radius: 100%;
  vertical-align: middle;
  display: inline-block;
}
div#a {
  background-color: gold;
  zoom: normal; /* circle is 25px diameter */
}
div#b {
  background-color: green;
  zoom: 200%; /* circle is 50px diameter */
}
div#c {
  background-color: blue;
  zoom: 2.9; /* circle is 72.5px diameter */
}
```

#### Result

{{EmbedLiveSample('resizing_elements')}}

### Creating a zoom control

In this example a `select` field is used to change the zoom level of the element.

#### HTML

In this first block, of HTML, a `select` field is defined with the different `zoom` values to be used.

```html
<section class="controls">
  <label for="zoom"
    >Zoom level
    <select name="zoom" id="zoom">
      <option value="0.5">Extra Small</option>
      <option value="0.75">Small</option>
      <option value="normal" selected>Normal</option>
      <option value="1.5">Large</option>
      <option value="2">Extra Large</option>
    </select>
  </label>
</section>
```

In this second block a **not supported** message is added that will be hidden if the browser supports `zoom`.

```html
<p class="zoom-notice">CSS zoom is not supported</p>
```

The final block just defines the content that will be zoomed.

```html
<section class="content">
  <h1>This is the heading</h1>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat inventore
    ea eveniet, fugiat in consequatur molestiae nostrum repellendus nam
    provident repellat officiis facilis alias facere obcaecati quos sunt
    voluptas! Iste.
  </p>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat inventore
    ea eveniet, fugiat in consequatur molestiae nostrum repellendus nam
    provident repellat officiis facilis alias facere obcaecati quos sunt
    voluptas! Iste.
  </p>
</section>
```

#### CSS

In this first block, of CSS, we are setting the starting value for the `--zoom-level` using [custom properties](/en-US/docs/Web/CSS/--*) and then using that as the value for `zoom` on the content block.

```css
html {
  --zoom-level: normal;
}
.content {
  max-width: 60ch;
  margin: auto;
  zoom: var(--zoom-level);
}
```

```css hidden
.controls,
.zoom-notice {
  display: flex;
  justify-content: space-around;
}
.zoom-notice {
  color: red;
}
```

In this final CSS block we are checking to see if the browser supports `zoom` and if so setting the **not supported** message to `display: none;`.

```css
@supports (zoom: 1) {
  .zoom-notice {
    display: none;
  }
}
```

#### JavaScript

This JavaScript watches for a change in the select field and sets the new value for `--zoom-level` on the content `section`, e.g. `style="--zoom-level: 1.5;"`.

```js
const zoomControl = document.querySelector("#zoom");
const content = document.querySelector(".content");
const updateZoom = () => {
  content.style = `--zoom-level: ${zoomControl.value}`;
};
zoomControl.addEventListener("change", updateZoom);
```

#### Result

{{EmbedLiveSample('creating_a_zoom_control', '550', '280')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`zoom` entry in CSS-Tricks' CSS Almanac](https://css-tricks.com/almanac/properties/z/zoom/)
- {{cssxref("transform")}}
- {{cssxref("scale")}}
- {{cssxref("unset")}} keyword
- [Legacy `zoom` property](https://css-tricks.com/almanac/properties/z/zoom/) via CSS-Tricks (2013)
