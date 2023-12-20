---
title: background-origin
slug: Web/CSS/background-origin
page-type: css-property
browser-compat: css.properties.background-origin
---

{{CSSRef}}

The **`background-origin`** [CSS](/en-US/docs/Web/CSS) property sets the background's origin: from the border start, inside the border, or inside the padding.

{{EmbedInteractiveExample("pages/css/background-origin.html")}}

Note that `background-origin` is ignored when {{cssxref("background-attachment")}} is `fixed`.

## Syntax

```css
/* Keyword values */
background-origin: border-box;
background-origin: padding-box;
background-origin: content-box;

/* Global values */
background-origin: inherit;
background-origin: initial;
background-origin: revert;
background-origin: revert-layer;
background-origin: unset;
```

The `background-origin` property is specified as one of the keyword values listed below.

### Values

- `border-box`
  - : The background is positioned relative to the border box.
- `padding-box`
  - : The background is positioned relative to the padding box.
- `content-box`
  - : The background is positioned relative to the content box.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting background origins

```css
.example {
  border: 10px double;
  padding: 10px;
  background: url("image.jpg");
  background-position: center left;
  background-origin: content-box;
}
```

```css
#example2 {
  border: 4px solid black;
  padding: 10px;
  background: url("image.gif");
  background-repeat: no-repeat;
  background-origin: border-box;
}
```

```css
div {
  background-image: url("logo.jpg"), url("mainback.png"); /* Applies two images to the background */
  background-position:
    top right,
    0px 0px;
  background-origin: content-box, padding-box;
}
```

### Using two gradients

In this example the box has a thick dotted border. The first gradient uses the `padding-box` as the `background-origin` and therefore the background sits inside the border. The second uses the `content-box` and so only displays behind the content.

```css
.box {
  margin: 10px 0;
  color: #fff;
  background: linear-gradient(
      90deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 29, 0.6) 60%,
      rgba(252, 176, 69, 1) 100%
    ), radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 28%);
  border: 20px dashed black;
  padding: 20px;
  width: 400px;
  background-origin: padding-box, content-box;
  background-repeat: no-repeat;
}
```

```html
<div class="box">Hello!</div>
```

{{EmbedLiveSample('Using_two_gradients', 420, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("background-clip")}}
