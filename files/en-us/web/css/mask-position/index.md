---
title: mask-position
slug: Web/CSS/mask-position
page-type: css-property
browser-compat: css.properties.mask-position
---

{{CSSRef}}

The **`mask-position`** [CSS](/en-US/docs/Web/CSS) property sets the initial position, relative to the mask position layer set by {{cssxref("mask-origin")}}, for each defined mask image.

## Syntax

```css
/* Keyword values */
mask-position: top;
mask-position: bottom;
mask-position: left;
mask-position: right;
mask-position: center;

/* <position> values */
mask-position: 25% 75%;
mask-position: 0px 0px;
mask-position: 10% 8em;

/* Multiple values */
mask-position: top right;
mask-position:
  1rem 1rem,
  center;

/* Global values */
mask-position: inherit;
mask-position: initial;
mask-position: revert;
mask-position: revert-layer;
mask-position: unset;
```

One or more `<position>` values, separated by commas.

### Values

- {{cssxref("&lt;position&gt;")}}
  - : One to four values representing a 2D position regarding the edges of the element's box. Relative or absolute offsets can be given. Note that the position can be set outside of the element's box.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting mask position

Click "Play" in the live sample to open the code in the MDN Playground and change the `mask-position` value to any of the allowed values detailed above.

```html live-sample___mask-position-example
<div id="wrapper">
  <div class="masked"></div>
</div>
```

```css live-sample___mask-position-example
#wrapper {
  border: 1px solid black;
  width: 250px;
  height: 250px;
}

.masked {
  width: 250px;
  height: 250px;
  margin-bottom: 10px;
  background: blue linear-gradient(red, blue);

  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
  mask-repeat: no-repeat;
  mask-position: top right;
}
```

{{EmbedLiveSample("mask-position-example", "", "300px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Clipping and Masking in CSS](https://css-tricks.com/clipping-masking-css/)
