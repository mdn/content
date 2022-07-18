---
title: right
slug: Web/CSS/right
tags:
  - CSS
  - CSS Positioning
  - CSS Property
  - Layout
  - Reference
  - Web
  - recipe:css-property
browser-compat: css.properties.right
---
{{CSSRef}}

The **`right`** [CSS](/en-US/docs/Web/CSS) property participates in specifying the horizontal position of a [positioned element](/en-US/docs/Web/CSS/position). It has no effect on non-positioned elements.

{{EmbedInteractiveExample("pages/css/right.html")}}

## Syntax

```css
/* <length> values */
right: 3px;
right: 2.4em;

/* <percentage>s of the width of the containing block */
right: 10%;

/* Keyword value */
right: auto;

/* Global values */
right: inherit;
right: initial;
right: revert;
right: revert-layer;
right: unset;
```

### Values

- {{cssxref("&lt;length&gt;")}}

  - : A negative, null, or positive {{cssxref("&lt;length&gt;")}} that represents:

    - for _absolutely positioned elements_, the distance to the right edge of the containing block.
    - for _relatively positioned elements_, the distance that the element is moved to the left of its normal position.

- {{cssxref("&lt;percentage&gt;")}}
  - : A {{cssxref("&lt;percentage&gt;")}} of the containing block's width.
- `auto`

  - : Specifies that:

    - for _absolutely positioned elements_, the position of the element is based on the {{Cssxref("left")}} property, while `width: auto` is treated as a width based on the content; or if `left` is also `auto`, the element is positioned where it should horizontally be positioned if it were a static element.
    - for _relatively positioned elements_, the distance of the element from its normal position is based on the {{Cssxref("left")}} property; or if `left` is also `auto`, the element is not moved horizontally at all.

- `inherit`
  - : Specifies that the value is the same as the computed value from its parent element (which might not be its containing block). This computed value is then handled as if it were a {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, or the `auto` keyword.

## Description

The effect of `right` depends on how the element is positioned (i.e., the value of the {{cssxref("position")}} property):

- When `position` is set to `absolute` or `fixed`, the `right` property specifies the distance between the element's right edge and the right edge of its containing block.
- When `position` is set to `relative`, the `right` property specifies the distance the element's right edge is moved to the left from its normal position.
- When `position` is set to `sticky`, the `right` property is used to compute the sticky-constraint rectangle.
- When `position` is set to `static`, the `right` property has _no effect_.

When both {{cssxref("left")}} and `right` are defined, if not prevented from doing so by other properties, the element will stretch to satisfy both. If the element cannot stretch to satisfy both — for example, if a `width` is declared — the position of the element is _over-constrained_. When this is the case, the `left` value has precedence when the container is left-to-right; the `right` value has precedence when the container is right-to-left.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Absolute and relative positioning using right

#### HTML

```html
<div id="relative">Relatively positioned</div>
<div id="absolute">Absolutely positioned</div>
```

#### CSS

```css
#relative {
  width: 100px;
  height: 100px;
  background-color: #FFC7E4;
  position: relative;
  top: 20px;
  left: 20px;
}

#absolute {
  width: 100px;
  height: 100px;
  background-color: #FFD7C2;
  position: absolute;
  bottom: 10px;
  right: 20px;
}
```

#### Result

{{ EmbedLiveSample('Absolute_and_relative_positioning_using_right', 500, 220) }}

### Declaring both left and right

When both `left` and `right` are declared, the element will stretch to meet both, unless other constraints prevent it from doing so. If the element will not stretch or shrink to meet both. When the position of the element is _overspecified_, the precedence is based on the container's direction: The `left` will take precedence if the container's direction is left-to-right. The `right` will take precedence if the container's direction is right-to-left.

#### HTML

```html
<div id="parent">Parent
    <div id="noWidth">No width</div>
    <div id="width">width: 100px</div>
</div>
```

#### CSS

```css
div {
  outline: 1px solid #CCCCCC;
}
#parent {
  width: 200px;
  height: 200px;
  background-color: #FFC7E4;
  position: relative;
}
/* declare both a left and a right */
#width,
#noWidth {
  background-color: #C2FFD7;
  position: absolute;
  left: 0;
  right: 0;
}
/* declare a width */
#width {
  width: 100px;
  top: 60px;
}
```

#### Result

{{ EmbedLiveSample('Declaring_both_left_and_right', 500, 220) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("inset")}}, the shorthand for all related properties: {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}}, and {{cssxref("right")}}
- The mapped logical properties: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, and {{cssxref("inset-inline-end")}} and the shorthands {{cssxref("inset-block")}} and {{cssxref("inset-inline")}}
- {{cssxref("position")}}
