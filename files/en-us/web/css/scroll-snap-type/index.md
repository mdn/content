---
title: scroll-snap-type
slug: Web/CSS/scroll-snap-type
page-type: css-property
browser-compat: css.properties.scroll-snap-type
---

{{CSSRef}}

The **`scroll-snap-type`** [CSS](/en-US/docs/Web/CSS) property is set on a {{glossary("scroll container")}}, opting it into scroll snapping by setting the direction and strictness of snap point enforcement within the [snap port](/en-US/docs/Glossary/Scroll_snap#snapport).

{{EmbedInteractiveExample("pages/css/scroll-snap-type.html")}}

If the content in the scroll port changes — for example, if content is added, moved, deleted, or resized — the scroll container will re-snap to the previously snapped content if that content is still present.

If the value of a scroll snap-related property, such as `scroll-snap-type` or {{cssxref("scroll-margin")}}, is changed, the scroll container will re-snap based on the current value of `scroll-snap-type`.

Specifying any precise animations or physics used to enforce those snap points is not covered by this property but instead left up to the user agent.

## Syntax

```css
/* No snapping */
scroll-snap-type: none;

/* Keyword values for snap axes */
scroll-snap-type: x;
scroll-snap-type: y;
scroll-snap-type: block;
scroll-snap-type: inline;
scroll-snap-type: both;

/* Optional keyword values for snap strictness */
/* mandatory | proximity */
scroll-snap-type: x mandatory;
scroll-snap-type: y proximity;
scroll-snap-type: both mandatory;

/* Global values */
scroll-snap-type: inherit;
scroll-snap-type: initial;
scroll-snap-type: revert;
scroll-snap-type: revert-layer;
scroll-snap-type: unset;
```

### Values

- `none`
  - : When the visual {{Glossary("viewport")}} of this scroll container is scrolled, it must ignore snap points.
- `x`
  - : The scroll container snaps to snap positions in its horizontal axis only.
- `y`
  - : The scroll container snaps to snap positions in its vertical axis only.
- `block`
  - : The scroll container snaps to snap positions in its block axis only.
- `inline`
  - : The scroll container snaps to snap positions in its inline axis only.
- `both`
  - : The scroll container snaps to snap positions in both of its axes independently (potentially snapping to different elements in each axis).
- `mandatory`
  - : The visual viewport of this scroll container must snap to a snap position if it isn't currently scrolled.
- `proximity`
  - : The visual viewport of this scroll container may snap to a snap position if it isn't currently scrolled. The user agent decides if it snaps or not based on scroll parameters. This is the default snap strictness if any snap axis is specified.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Snapping in different axes

#### HTML

```html
<main>
  <section class="x mandatory-scroll-snapping" dir="ltr">
    <div>X Mand. LTR</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </section>
  <section class="x proximity-scroll-snapping" dir="ltr">
    <div>X Prox. LTR</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </section>
  <section class="y mandatory-scroll-snapping" dir="ltr">
    <div>Y Mand. LTR</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </section>
  <section class="y proximity-scroll-snapping" dir="ltr">
    <div>Y Prox. LTR</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </section>
  <section class="x mandatory-scroll-snapping" dir="rtl">
    <div>X Mand. RTL</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </section>
  <section class="x proximity-scroll-snapping" dir="rtl">
    <div>X Prox. RTL</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </section>
  <section class="y mandatory-scroll-snapping" dir="rtl">
    <div>Y Mand. RTL</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </section>
  <section class="y proximity-scroll-snapping" dir="rtl">
    <div>Y Prox. RTL</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </section>
</main>
```

#### CSS

```css hidden
main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column nowrap;
  font-family: monospace;
}
section {
  display: flex;
  margin: 1em auto;
  outline: 1px dashed lightgray;
  flex: none;
  overflow: auto;
}
.x {
  width: 100%;
  height: 128px;
  flex-flow: row nowrap;
  overflow-y: hidden;
}
.y {
  width: 256px;
  height: 256px;
  flex-flow: column nowrap;
  overflow-x: hidden;
}
```

```css
/* scroll-snap */
.x.mandatory-scroll-snapping {
  scroll-snap-type: x mandatory;
}
.x.proximity-scroll-snapping {
  scroll-snap-type: x proximity;
}
.y.mandatory-scroll-snapping {
  scroll-snap-type: y mandatory;
}
.y.proximity-scroll-snapping {
  scroll-snap-type: y proximity;
}

div {
  text-align: center;
  scroll-snap-align: center;
  flex: none;
}
```

```css hidden
.x div {
  line-height: 128px;
  font-size: 64px;
  width: 100%;
  height: 128px;
}
.y div {
  line-height: 256px;
  font-size: 128px;
  width: 256px;
  height: 100%;
}

/* appearance fixes */
.y div:first-child {
  line-height: 1.3;
  font-size: 64px;
}

/* coloration */
div:nth-child(even) {
  background-color: #87ea87;
}
div:nth-child(odd) {
  background-color: #87ccea;
}
```

#### Results

{{EmbedLiveSample("snapping_in_different_axes", "100%", 1800)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other scroll port properties: {{cssxref("scroll-margin")}}, {{cssxref("scroll-padding")}}
- Scroll-child properties: {{cssxref("scroll-snap-align")}}, {{cssxref("scroll-margin")}}, {{cssxref("scroll-snap-stop")}}
- [Basic concepts of CSS scroll snap](/en-US/docs/Web/CSS/CSS_scroll_snap/Basic_concepts)
- [Using scroll snap events](/en-US/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
- [CSS scroll snap](/en-US/docs/Web/CSS/CSS_scroll_snap)
- [Well-controlled scrolling with CSS scroll snap](https://web.dev/articles/css-scroll-snap)
