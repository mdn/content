---
title: scroll-snap-align
slug: Web/CSS/scroll-snap-align
page-type: css-property
browser-compat: css.properties.scroll-snap-align
---

{{CSSRef}}

The `scroll-snap-align` property specifies the box's snap position as an alignment of its [snap area](/en-US/docs/Glossary/Scroll_snap#snap_area) (as the {{glossary("alignment subject")}}) within its snap container's snap port (as the {{glossary("alignment container")}}).

{{InteractiveExample("CSS Demo: scroll-snap-align")}}

```css interactive-example-choice
scroll-snap-align: start;
```

```css interactive-example-choice
scroll-snap-align: end;
```

```css interactive-example-choice
scroll-snap-align: center;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div id="example-parent">
    <div>1</div>
    <div id="example-element">2</div>
    <div>3</div>
  </div>
  <div class="info">Scroll »</div>
</section>
```

```css interactive-example
.default-example {
  flex-wrap: wrap;
}

.default-example .info {
  width: 100%;
  padding: 0.5em 0;
  font-size: 90%;
}

#example-parent {
  text-align: left;
  width: 250px;
  height: 250px;
  overflow-x: scroll;
  display: flex;
  box-sizing: border-box;
  border: 1px solid black;
  scroll-snap-type: x mandatory;
}

#example-parent > div {
  flex: 0 0 66%;
  width: 250px;
  background-color: rebeccapurple;
  color: #fff;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#example-parent > div:nth-child(even) {
  background-color: #fff;
  color: rebeccapurple;
}
```

## Syntax

```css
/* Single keyword value */
scroll-snap-align: none;
scroll-snap-align: center;
scroll-snap-align: start;
scroll-snap-align: end;

/* Two keyword values */
scroll-snap-align: start end;
scroll-snap-align: end center;
scroll-snap-align: center start;

/* Global values */
scroll-snap-align: inherit;
scroll-snap-align: initial;
scroll-snap-align: revert;
scroll-snap-align: revert-layer;
scroll-snap-align: unset;
```

### Values

One or two values can be specified for the `scroll-snap-align` property. If one value is set, it is applied to both the block and inline axes. If two values are set, the first value controls the block axis and the second value controls the inline axis.

- `none`
  - : The box does not define a snap position in that axis.
- `start`
  - : The start alignment of this box's scroll [snap area](/en-US/docs/Glossary/Scroll_snap#snap_area), within the scroll container's [snapport](/en-US/docs/Glossary/Scroll_snap#snapport) is a snap position in this axis.
- `end`
  - : The end alignment of this box's scroll snap area, within the scroll container's snapport is a snap position in this axis.
- `center`
  - : The center alignment of this box's scroll snap area, within the scroll container's snapport is a snap position in this axis.

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
