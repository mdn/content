---
title: scroll-snap-stop
slug: Web/CSS/scroll-snap-stop
tags:
  - CSS
  - CSS Scroll Snap
  - CSS Property
  - Reference
  - Web
  - recipe:css-property
  - scroll-snap-stop
browser-compat: css.properties.scroll-snap-stop
---
{{CSSRef}}

The **`scroll-snap-stop`** [CSS](/en-US/docs/Web/CSS) property defines whether or not the scroll container is allowed to "pass over" possible snap positions.

## Syntax

```css
/* Keyword values */
scroll-snap-stop: normal;
scroll-snap-stop: always;

/* Global values */
scroll-snap-stop: inherit;
scroll-snap-stop: initial;
scroll-snap-stop: revert;
scroll-snap-stop: revert-layer;
scroll-snap-stop: unset;
```

### Values

- `normal`
  - : When the visual {{Glossary("viewport")}} of this element's scroll container is scrolled, it may "pass over" possible snap positions.
- `always`
  - : The scroll container must not "pass over" a possible snap position; and must snap to the first of this elements' snap positions.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting different snap stops

The example below demonstrates `scroll-snap-stop: always` in the blocks marked Mandatory and `scroll-snap-stop: normal` in the blocks marked Proximity.

#### HTML

```html
<div class="container x mandatory-scroll-snapping" dir="ltr">
  <div>X Mandatory LTR</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div class="container x proximity-scroll-snapping" dir="ltr">
  <div>X Proximity LTR</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div class="container y mandatory-scroll-snapping" dir="ltr">
  <div>Y Mandatory LTR</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div class="container y proximity-scroll-snapping" dir="ltr">
  <div>Y Proximity LTR</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
```

#### CSS

```css
/* setup */
:root, body {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column nowrap;
  font-family: monospace;
}

.container {
  display: flex;
  overflow: auto;
  outline: 1px dashed lightgray;
  flex: none;
}

.container.x {
  width: 100%;
  height: 128px;
  flex-flow: row nowrap;
}

.container.y {
  width: 384px;
  height: 256px;
  flex-flow: column nowrap;
}

/* setting up scroll-snap */
.x.mandatory-scroll-snapping {
  scroll-snap-type: x mandatory;
}

.y.mandatory-scroll-snapping {
  scroll-snap-type: y mandatory;
}

.x.proximity-scroll-snapping {
  scroll-snap-type: x proximity;
}

.y.proximity-scroll-snapping {
  scroll-snap-type: y proximity;
}

/* defining scroll-snap alignment */
.container > div {
  text-align: center;
  scroll-snap-align: center;
  flex: none;
}

/* defining scroll-snap stops */
.mandatory-scroll-snapping > div {
  scroll-snap-stop: always;
}
.proximity-scroll-snapping > div {
  scroll-snap-stop: normal;
}

.x.container > div {
  line-height: 128px;
  font-size: 64px;
  width: 100%;
  height: 128px;
}

.y.container > div {
  line-height: 256px;
  font-size: 128px;
  width: 100%;
  height: 256px;
}

/* appearance fixes */
.y.container > div:first-child {
  line-height: 1.3;
  font-size: 64px;
}

/* coloration */
.container > div:nth-child(even) {
  background-color: #87EA87;
}

.container > div:nth-child(odd) {
  background-color: #87CCEA;
```

#### Result

{{EmbedLiveSample("Snapping_in_different_axes", "100%", "800")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Scroll Snap](/en-US/docs/Web/CSS/CSS_Scroll_Snap)
- Other related CSS Scroll Snap properties:
  - [scroll-snap-align](/en-US/docs/Web/CSS/scroll-snap-align)
  - [scroll-snap-type](/en-US/docs/Web/CSS/scroll-snap-type)
  - [scroll-behavior](/en-US/docs/Web/CSS/scroll-behavior)
  - [scroll-margin](/en-US/docs/Web/CSS/scroll-margin)
  - [scroll-padding](/en-US/docs/Web/CSS/scroll-padding)
- [Well-controlled scrolling with CSS Scroll Snap](https://web.dev/css-scroll-snap/) on web.dev
