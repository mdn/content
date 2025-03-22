---
title: scroll-margin-block
slug: Web/CSS/scroll-margin-block
page-type: css-shorthand-property
browser-compat: css.properties.scroll-margin-block
---

{{CSSRef}}

The `scroll-margin-block` [shorthand property](/en-US/docs/Web/CSS/CSS_cascade/Shorthand_properties) sets the scroll margins of an element in the block dimension.

{{InteractiveExample("CSS Demo: scroll-margin-block")}}

```css interactive-example-choice
scroll-margin-block: 0;
```

```css interactive-example-choice
scroll-margin-block: 20px;
```

```css interactive-example-choice
scroll-margin-block: 2em;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="scroller">
    <div>1</div>
    <div id="example-element">2</div>
    <div>3</div>
  </div>
  <div class="info">Scroll »</div>
</section>
```

```css interactive-example
.default-example .info {
  inline-size: 100%;
  padding: 0.5em 0;
  font-size: 90%;
  writing-mode: vertical-rl;
}

.scroller {
  text-align: left;
  height: 250px;
  width: 270px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid black;
  scroll-snap-type: y mandatory;
}

.scroller > div {
  flex: 0 0 250px;
  background-color: rebeccapurple;
  color: #fff;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
}

.scroller > div:nth-child(even) {
  background-color: #fff;
  color: rebeccapurple;
}
```

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`scroll-margin-block-end`](/en-US/docs/Web/CSS/scroll-margin-block-end)
- [`scroll-margin-block-start`](/en-US/docs/Web/CSS/scroll-margin-block-start)

## Syntax

```css
/* <length> values */
scroll-margin-block: 10px;
scroll-margin-block: 1em 0.5em;

/* Global values */
scroll-margin-block: inherit;
scroll-margin-block: initial;
scroll-margin-block: revert;
scroll-margin-block: revert-layer;
scroll-margin-block: unset;
```

### Values

- {{CSSXref("&lt;length&gt;")}}
  - : An outset from the corresponding edge of the scroll container.

## Description

The scroll-margin values represent outsets defining the scroll snap area that is used for snapping this box to the [snapport](/en-US/docs/Glossary/Scroll_snap#snapport). The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS scroll snap](/en-US/docs/Web/CSS/CSS_scroll_snap)
- [Well-controlled scrolling with CSS scroll snap](https://web.dev/articles/css-scroll-snap)
