---
title: scroll-snap-stop
slug: Web/CSS/scroll-snap-stop
tags:
  - CSS
  - CSS Scroll Snap
  - Reference
  - Web
  - recipe:css-property
  - scroll-snap-stop
browser-compat: css.properties.scroll-snap-stop
---
{{CSSRef}}

The **`scroll-snap-stop`** [CSS](/en-US/docs/Web/CSS) property defines whether the scroll container is allowed to "pass over" possible snap positions.

```css
/* Keyword values */
scroll-snap-stop: normal;
scroll-snap-stop: always;

/* Global values */
scroll-snap-type: inherit;
scroll-snap-type: initial;
scroll-snap-type: unset;
```

## Syntax

### Values

- `normal`
  - : When the visual {{Glossary("viewport")}} of this element's scroll container is scrolled, it may "pass over" possible snap positions.
- `always`
  - : The scroll container must not "pass over" a possible snap position; and must snap to the first of this elements' snap positions.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Snapping in different axes

This example is duplicated from {{cssxref("scroll-snap-type")}} with minor variances.

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
  width: 256px;
  height: 256px;
  flex-flow: column nowrap;
}
/* definite scroll snap */
.mandatory-scroll-snapping > div {
  scroll-snap-stop: always;
}
.proximity-scroll-snapping > div {
  scroll-snap-stop: normal;
}
/* scroll-snap */
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

.container > div {
  text-align: center;
  scroll-snap-align: center;
  flex: none;
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
  width: 256px;
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
}
```

#### HTML

```html
<div class="container x mandatory-scroll-snapping" dir="ltr">
  <div>X Mand. LTR </div>
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
  <div>Y Mand. LTR</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div class="container y proximity-scroll-snapping" dir="ltr">
  <div>Y Prox. LTR</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div class="container x mandatory-scroll-snapping" dir="rtl">
  <div>X Mandatory RTL</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div class="container x proximity-scroll-snapping" dir="rtl">
  <div>X Proximity RTL</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div class="container y mandatory-scroll-snapping" dir="rtl">
  <div>Y Mand. RTL</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div class="container y proximity-scroll-snapping" dir="rtl">
  <div>Y Prox. RTL</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
```

#### Result

{{EmbedLiveSample("Snapping_in_different_axes", "100%", "1630")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Scroll Snap](/en-US/docs/Web/CSS/CSS_Scroll_Snap)
- [Well-Controlled Scrolling with CSS Scroll Snap](https://developers.google.com/web/updates/2018/07/css-scroll-snap)
