---
title: scroll-margin
slug: Web/CSS/scroll-margin
page-type: css-shorthand-property
browser-compat: css.properties.scroll-margin
---

{{CSSRef}}

The **`scroll-margin`** [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) sets all of the scroll margins of an element at once, assigning values much like the [`margin`](/en-US/docs/Web/CSS/margin) property does for margins of an element.

{{EmbedInteractiveExample("pages/css/scroll-margin.html")}}

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`scroll-margin-bottom`](/en-US/docs/Web/CSS/scroll-margin-bottom)
- [`scroll-margin-left`](/en-US/docs/Web/CSS/scroll-margin-left)
- [`scroll-margin-right`](/en-US/docs/Web/CSS/scroll-margin-right)
- [`scroll-margin-top`](/en-US/docs/Web/CSS/scroll-margin-top)

## Syntax

```css
/* <length> values */
scroll-margin: 10px;
scroll-margin: 1em 0.5em 1em 1em;

/* Global values */
scroll-margin: inherit;
scroll-margin: initial;
scroll-margin: revert;
scroll-margin: revert-layer;
scroll-margin: unset;
```

### Values

- {{cssxref("&lt;length&gt;")}}
  - : An outset from the corresponding edge of the scroll container.

## Description

You can see the effect of `scroll-margin` by scrolling to a point partway between two of the "pages" of the example's content. The value specified for `scroll-margin` determines how much of the page that's primarily outside the [snapport](/en-US/docs/Glossary/Scroll_snap#snapport) should remain visible.

Thus, the `scroll-margin` values represent outsets defining the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic demonstration

This example implements something very similar to the interactive example above, except that here we'll explain to you how it's implemented.

The aim here is to create four horizontally-scrolling blocks, the second and third of which snap into place, near but not quite at the left of each block.

#### HTML

The HTML includes a scroller with four children:

```html
<div class="scroller">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

#### CSS

Let's walk through the CSS. The outer container is styled like this:

```css
.scroller {
  text-align: left;
  width: 250px;
  height: 250px;
  overflow-x: scroll;
  display: flex;
  box-sizing: border-box;
  border: 1px solid #000;
  scroll-snap-type: x mandatory;
}
```

The main parts relevant to the scroll snapping are `overflow-x: scroll`, which makes sure the contents will scroll and not be hidden, and `scroll-snap-type: x mandatory`, which dictates that scroll snapping must occur along the horizontal axis, and the scrolling will always come to rest on a snap point.

The child elements are styled as follows:

```css
.scroller > div {
  flex: 0 0 250px;
  width: 250px;
  background-color: #663399;
  color: #fff;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
}

.scroller > div:nth-child(2n) {
  background-color: #fff;
  color: #663399;
}
```

The most relevant part here is `scroll-snap-align: start`, which specifies that the left-hand edges (the "starts" along the x axis, in our case) are the designated snap points.

Last of all we specify the scroll margin-values, a different one for the second and third child elements:

```css
.scroller > div:nth-child(2) {
  scroll-margin: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin: 2rem;
}
```

This means that when scrolling past the middle child elements, the scrolling will snap to `1rem` outside the left edge of the second `<div>`, and `2rems` outside the left edge of the third `<div>`.

> [!NOTE]
> Here we are setting `scroll-margin` on all sides at once, but only the start edge is really relevant. It would work just as well here to only set a scroll margin on that one edge, for example with `scroll-margin-inline-start: 1rem`, or `scroll-margin: 0 0 0 1rem`.

#### Result

Try it for yourself:

{{EmbedLiveSample('Basic_demonstration', '100%', 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS scroll snap](/en-US/docs/Web/CSS/CSS_scroll_snap)
- [Well-controlled scrolling with CSS scroll snap](https://web.dev/articles/css-scroll-snap)
