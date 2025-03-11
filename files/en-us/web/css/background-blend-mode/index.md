---
title: background-blend-mode
slug: Web/CSS/background-blend-mode
page-type: css-property
browser-compat: css.properties.background-blend-mode
---

{{CSSRef}}

The **`background-blend-mode`** [CSS](/en-US/docs/Web/CSS) property sets how an element's background images should blend with each other and with the element's background color.

{{InteractiveExample("CSS Demo: background-blend-mode")}}

```css interactive-example-choice
background-blend-mode: normal;
```

```css interactive-example-choice
background-blend-mode: multiply;
```

```css interactive-example-choice
background-blend-mode: hard-light;
```

```css interactive-example-choice
background-blend-mode: difference;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element"></div>
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: green;
  background-image: url("/shared-assets/images/examples/balloon.jpg");
  width: 250px;
  height: 305px;
}
```

Blending modes should be defined in the same order as the {{cssxref("background-image")}} property. If the blending modes' and background images' list lengths are not equal, it will be repeated and/or truncated until lengths match.

## Syntax

```css
/* One value */
background-blend-mode: normal;

/* Two values, one per background */
background-blend-mode: darken, luminosity;

/* Global values */
background-blend-mode: inherit;
background-blend-mode: initial;
background-blend-mode: revert;
background-blend-mode: revert-layer;
background-blend-mode: unset;
```

### Values

- {{cssxref("&lt;blend-mode&gt;")}}
  - : The blending mode to be applied. There can be several values, separated by commas.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic example

```css
.item {
  width: 300px;
  height: 300px;
  background: url("image1.png"), url("image2.png");
  background-blend-mode: screen;
}
```

### Try out different blend modes

```html hidden
<div id="div"></div>
<select id="select">
  <option>normal</option>
  <option>multiply</option>
  <option selected>screen</option>
  <option>overlay</option>
  <option>darken</option>
  <option>lighten</option>
  <option>color-dodge</option>
  <option>color-burn</option>
  <option>hard-light</option>
  <option>soft-light</option>
  <option>difference</option>
  <option>exclusion</option>
  <option>hue</option>
  <option>saturation</option>
  <option>color</option>
  <option>luminosity</option>
</select>
```

```css hidden
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: screen;
}
```

```js hidden
document.getElementById("select").onchange = (event) => {
  document.getElementById("div").style.backgroundBlendMode =
    document.getElementById("select").selectedOptions[0].innerHTML;
};
console.log(document.getElementById("div"));
```

{{ EmbedLiveSample('Examples', "330", "350") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("&lt;blend-mode&gt;")}}
- {{cssxref("mix-blend-mode")}}
