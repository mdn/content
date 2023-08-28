---
title: aspect-ratio
slug: Web/CSS/aspect-ratio
page-type: css-property
browser-compat: css.properties.aspect-ratio
---

{{CSSRef}}

The **`aspect-ratio`** [CSS](/en-US/docs/Web/CSS) property allows you to define the desired width-to-height ratio of an element's box. This means that even if the parent container or viewport size changes, the browser will adjust the element's dimensions to maintain the specified width-to-height ratio. The specified aspect ratio is used in the calculation of auto sizes and some other layout functions.

At least one of the box's sizes needs to be automatic in order for `aspect-ratio` to have any effect. If neither the width nor height is an automatic size, then the provided aspect ratio has no effect on the box's preferred sizes.

{{EmbedInteractiveExample("pages/css/aspect-ratio.html")}}

## Syntax

```css
aspect-ratio: 1 / 1;
aspect-ratio: 1;

/* fallback to 'auto' for replaced elements */
aspect-ratio: auto 3/4;
aspect-ratio: 9/6 auto;

/* Global values */
aspect-ratio: inherit;
aspect-ratio: initial;
aspect-ratio: revert;
aspect-ratio: revert-layer;
aspect-ratio: unset;
```

### Values

- `auto`

  - : [Replaced elements](/en-US/docs/Web/CSS/Replaced_element) with an intrinsic aspect ratio use _that_ aspect ratio, otherwise the box has no preferred aspect ratio. Size calculations involving intrinsic aspect ratio always work with the content box dimensions.

- {{cssxref("&lt;ratio&gt;")}}

  - : The box's preferred aspect ratio is the specified ratio of `width` / `height`. If `height` and the preceding slash character are omitted, `height` defaults to `1`. Size calculations involving preferred aspect ratio work with the dimensions of the box specified by `box-sizing`.

- `auto && ratio`

  - : If the element is a replaced element, like [`<img>`](/en-US/docs/Web/HTML/Element/img), then the preferred `ratio` is used till the content is loaded. After the content is loaded, the `auto` value comes in effect and the natural aspect ratio of the loaded content is used.

    If the element is a non-replaced element then the preferred `ratio` is used.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Exploring aspect-ratio effects with fixed width

In this example, the width of the `<div>` elements has been set to `100px` and height to `auto`. Since the width value is fixed here, the `aspect-ratio` property affects only the height of the `<div>` elements to maintain the specified width-to-height ratio.

```html hidden
<div>1/1</div>
<div>0.5</div>
<div>1</div>
<div>1/0.5</div>
<div>16/9</div>
```

```css hidden
div {
  display: inline-flex;
  background-color: lime;
  justify-content: center;
}
```

```css
div {
  width: 100px;
  height: auto;
}
div:nth-child(1) {
  aspect-ratio: 1/1;
}
div:nth-child(2) {
  aspect-ratio: 0.5;
}
div:nth-child(3) {
  aspect-ratio: 1;
}
div:nth-child(4) {
  aspect-ratio: 1/0.5;
}
div:nth-child(5) {
  aspect-ratio: 16/9;
}
```

{{EmbedLiveSample('Exploring aspect-ratio effects with fixed width', '100%', '300px')}}

### Fallback to natural aspect ratio

In this example we are using two images. The first image doesn't have source.

```html
<img src="" /> <img src="plumeria.jpg" />
```

```css hidden
img {
  display: inline;
  width: 200px;
  border: 2px dashed red;
  background-color: lime;
  vertical-align: top;
}
```

Following code sets `3/2` as preferred aspect ratio and `auto` value as a fallback.

```css
img {
  aspect-ratio: 3/2 auto;
}
```

Note how the first image without replaced content keeps the `3/2` aspect ratio. And the second image after the content is loaded uses the images natural aspect ratio.

{{EmbedLiveSample('Fallback to natural aspect ratio', '100%', '300px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Image aspect-ratio: preventing jank](/en-US/docs/Learn/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images)
- [Designing an aspect ratio unit for CSS](https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/)
- [Setting Height And Width On Images Is Important Again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/)
