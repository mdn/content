---
title: "`zoom` CSS property"
short-title: zoom
slug: Web/CSS/Reference/Properties/zoom
page-type: css-property
browser-compat: css.properties.zoom
sidebar: cssref
---

The **`zoom`** [CSS](/en-US/docs/Web/CSS) property can be used to control the magnification level of an element.

{{InteractiveExample("CSS Demo: zoom")}}

```css interactive-example-choice
zoom: 1;
```

```css interactive-example-choice
zoom: 1.3;
```

```css interactive-example-choice
zoom: 200%;
```

```css interactive-example-choice
zoom: 0.7;
```

```css interactive-example-choice
zoom: 50%;
```

```html interactive-example
<p id="example-element">I'm getting zoomed</p>
<p>I'm not zoomed</p>
```

```css interactive-example
p {
  font-family: sans-serif;
  background: orange;
  padding: 10px;
  color: black;
  width: fit-content;
}

#example-element {
  background: lime;
}
```

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

This property is specified as one of the following values:

- {{cssxref("&lt;percentage&gt;")}}
  - : A positive `<percentage>` value specifies a percentage zoom factor, with `100%` being equivalent to original size. Values larger than `100%` zoom in, while values smaller than `100%` zoom out. `0%` behaves as `100%`.
- {{cssxref("&lt;number&gt;")}}
  - : A positive `<number>` value specifies a numeric zoom factor, with `1` being equivalent to original size. Values larger than `1` zoom in, while values smaller than `1` zoom out. `0` behaves as `1`.
- `normal` {{non-standard_inline}}
  - : Renders the element at its original size; equivalent to `1`.
- `reset` {{non-standard_inline}} {{deprecated_inline}}
  - : Resets the value to `1` and prevents the element from being zoomed if the user applies non-pinch-based zooming (for example, using the <kbd>Ctrl</kbd> - <kbd>-</kbd> or <kbd>Ctrl</kbd> + <kbd>+</kbd> keyboard shortcuts).

## Description

The `zoom` property can be used to scale the targeted element up and down in size, using a {{cssxref("&lt;percentage&gt;")}} or {{cssxref("&lt;number&gt;")}} scaling factor. A scaling factor of `1` or `100%` is equivalent to the element's original size. Smaller scaling factors will shrink the element, whereas larger scaling factors will grow the element.

For example:

- `zoom: 0.25` and `zoom: 25%` are equivalent, and will result in the element shrinking to a quarter of its original size.
- `zoom: 2` and `zoom: 200%` are equivalent, and will result in the element growing to double its original size.

Note that values of `0` and `0%` are equivalent to `1`/`100%` — they result in the element being rendered at its original size. Values smaller than `0`/`0%` are invalid.

> [!NOTE]
> The non-standard `normal` and `reset` values are not recommended. Use the standard global {{cssxref("unset")}} keyword value instead.

### Comparison with scale transforms

The {{cssxref("transform-function/scale", "transform: scale()")}} and {{cssxref("scale")}} transform features can be used as an alternative to the `zoom` property. They both scale elements up and down in size, but their effects differ slightly:

- Scale transforms are applied after the page rendering has completed, therefore they do not affect the position and layout of surrounding elements. The `zoom` property on the other hand is applied during the rendering process, therefore it does affect surrounding elements.
- As a result, changes to the `zoom` property will cause {{cssxref("overflow")}} if the content gets bigger than its container.
- The `zoom` property has no effect on {{cssxref("length")}} property values with computed values that are `auto` or a `<percentage>`.
- Scale transforms cause elements to scale from their center by default (this behavior can be changed using the {{CSSXRef("transform-origin")}} property). The `zoom` property always causes elements to scale for their top-left corner.

It is also worth noting that the two can be used together — an element with `zoom` applied can have a scale transform applied.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Resizing paragraphs

This example shows the effect of `zoom` on some paragraphs.

#### HTML

We include three {{htmlelement("p")}} elements, each with a different `class` set. We set a [`tabindex`](/en-US/docs/Web/HTML/Reference/Global_attributes/tabindex) on each one so that they can be focused via the keyboard:

```html
<p class="small" tabindex="0">Small</p>
<p class="normal" tabindex="0">Normal</p>
<p class="big" tabindex="0">Big</p>
```

#### CSS

We set a {{cssxref("border")}} on the paragraphs so it is easy to see where their boundaries are, then set a successively larger `zoom` scaling factor on each paragraph. Finally, we set paragraph {{cssxref(":hover")}} and {{cssxref(":focus")}} styles so that hovering/focusing a paragraph will `unset` the applied `zoom` value:

```css hidden
body {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
}
```

```css
p {
  border: 1px dashed;
}
.small {
  zoom: 75%;
}
.normal {
  zoom: 1;
}
.big {
  zoom: 2.5;
}
p:hover,
p:focus {
  zoom: unset;
}
```

#### Result

{{EmbedLiveSample('resizing_paragraphs')}}

### Creating a zoom control

In this example we create a drop-down menu to allow the zoom level of some content to be changed.

#### HTML

A {{htmlelement("select")}} element is used to create the drop-down menu. Its values are set to several different `zoom` values:

```html
<section class="controls">
  <label for="zoom"
    >Zoom level
    <select name="zoom" id="zoom">
      <option value="0.5">Extra Small</option>
      <option value="0.75">Small</option>
      <option value="1" selected>Normal</option>
      <option value="1.5">Large</option>
      <option value="2">Extra Large</option>
    </select>
  </label>
</section>
```

We then define the content to be zoomed:

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

We set the starting `zoom` value for the `.content` section to a `--zoom-level` [custom property](/en-US/docs/Web/CSS/Reference/Properties/--*) that conatins the value `1`:

```css
:root {
  --zoom-level: 1;
}
.content {
  max-width: 60ch;
  margin: auto;
  zoom: var(--zoom-level);
}
```

```css hidden
.controls {
  display: flex;
  justify-content: space-around;
}
```

#### JavaScript

The JavaScript watches for a `change` event on the `<select>` element. When this occurs, we set the `--zoom-level` custom property to equal the selected value:

```js
const zoomControl = document.querySelector("#zoom");
const updateZoom = () => {
  document.documentElement.style = `--zoom-level: ${zoomControl.value}`;
};
zoomControl.addEventListener("change", updateZoom);
```

### Animating zoom

This example demonstrates how an element can be smoothly zoomed by combining `zoom` with a transition.

#### HTML

We include a single paragraph:

```html live-sample___zoom-transition
<p tabindex="0">Zoom transition</p>
```

#### CSS

We set a {{cssxref("transition")}} on the paragraph so that when its state changes, changes to its `zoom` property value will be smoothly animated over 1 second. We then change its `zoom` value to `1.5` on hover and focus:

```css hidden live-sample___zoom-transition
p {
  font-family: sans-serif;
  background: orange;
  padding: 10px;
  width: fit-content;
}
```

```css live-sample___zoom-transition
p {
  transition: zoom 1s;
}

p:hover,
p:focus {
  zoom: 1.5;
}
```

#### Result

{{EmbedLiveSample('zoom-transition', '100%', '120')}}

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
