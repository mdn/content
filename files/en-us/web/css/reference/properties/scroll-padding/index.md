---
title: scroll-padding
slug: Web/CSS/Reference/Properties/scroll-padding
page-type: css-shorthand-property
browser-compat: css.properties.scroll-padding
sidebar: cssref
---

The **`scroll-padding`** [shorthand property](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties) sets scroll padding on all sides of an element at once. It specifies offsets that define the optimal viewing region of a scrollport within a {{glossary("scroll container")}}.

{{InteractiveExample("CSS Demo: scroll-padding")}}

```css interactive-example-choice
scroll-padding: 0;
```

```css interactive-example-choice
scroll-padding: 20px;
```

```css interactive-example-choice
scroll-padding: 20%;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="scroller" id="example-element">
    <div>1</div>
    <div>2</div>
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
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
}

.scroller > div:nth-child(even) {
  background-color: white;
  color: rebeccapurple;
}
```

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{CSSXref("scroll-padding-bottom")}}
- {{CSSXref("scroll-padding-left")}}
- {{CSSXref("scroll-padding-right")}}
- {{CSSXref("scroll-padding-top")}}

## Syntax

```css
/* Keyword values */
scroll-padding: auto;

/* <length> values */
scroll-padding: 10px;
scroll-padding: 1em 0.5em 1em 1em;
scroll-padding: 10%;

/* Global values */
scroll-padding: inherit;
scroll-padding: initial;
scroll-padding: revert;
scroll-padding: revert-layer;
scroll-padding: unset;
```

### Values

- {{cssxref("&lt;length-percentage&gt;")}}
  - : An inwards offset from the corresponding edge of the scrollport, as a valid {{cssxref("&lt;length&gt;")}} or a {{cssxref("&lt;percentage&gt;")}}.
- `auto`
  - : The offset is determined by the user agent. This will generally be `0px`, but the user agent is free to detect and do something else if a non-zero value is more appropriate.

## Description

The `scroll-padding` property is shortand for the {{CSSXref("scroll-padding-top")}}, {{CSSXref("scroll-padding-right")}}, {{CSSXref("scroll-padding-bottom")}}, and {{CSSXref("scroll-padding-left")}} properties, which set the top, right, bottom, and left scroll padding of a scroll container, respectively and in that order.

Useful when creating scroll-snap containers, the `scroll-padding` property enables defining offsets for the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to create insets in the scrollport to make room for objects that might obscure the content, such as fixed-positioned toolbars or sidebars, or to put more breathing room between a targeted element and the edges of the scrollport.

While defined in the [CSS scroll snap](/en-US/docs/Web/CSS/Guides/Scroll_snap) module, this property applies to all scroll containers, no matter the value of the {{cssxref("scroll-snap-type")}} property.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("scroll-snap-type")}}
- [Basic concepts of scroll-snap](/en-US/docs/Web/CSS/Guides/Scroll_snap/Basic_concepts)
- [CSS scroll snap](/en-US/docs/Web/CSS/Guides/Scroll_snap) module
- [CSS overflow](/en-US/docs/Web/CSS/Guides/Overflow) module
- [CSS scroll-driven animation](/en-US/docs/Web/CSS/Guides/Scroll-driven_animation) module
