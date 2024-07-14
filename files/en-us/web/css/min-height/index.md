---
title: min-height
slug: Web/CSS/min-height
page-type: css-property
browser-compat: css.properties.min-height
---

{{CSSRef}}

The **`min-height`** [CSS](/en-US/docs/Web/CSS) property sets the minimum height of an element. It prevents the [used value](/en-US/docs/Web/CSS/used_value) of the {{cssxref("height")}} property from becoming smaller than the value specified for `min-height`.

{{EmbedInteractiveExample("pages/css/min-height.html")}}

The element's height is set to the value of `min-height` whenever `min-height` is larger than {{cssxref("max-height")}} or {{cssxref("height")}}.

## Syntax

```css
/* <length> value */
min-height: 3.5em;
min-height: anchor-size(height);
min-height: anchor-size(--myAnchor block, 200px);

/* <percentage> value */
min-height: 10%;

/* Keyword values */
min-height: max-content;
min-height: min-content;
min-height: fit-content;
min-height: fit-content(20em);

/* Global values */
min-height: inherit;
min-height: initial;
min-height: revert;
min-height: revert-layer;
min-height: unset;
```

### Values

- {{cssxref("&lt;length&gt;")}}
  - : Defines the `min-height` as an absolute value.
- {{cssxref("&lt;percentage&gt;")}}
  - : Defines the `min-height` as a percentage of the containing block's height.
- `auto`
  - : The browser will calculate and select a `min-height` for the specified element.
- `max-content`
  - : The intrinsic preferred `min-height`.
- `min-content`
  - : The intrinsic minimum `min-height`.
- `fit-content`
  - : Use the available space, but not more than [max-content](/en-US/docs/Web/CSS/max-content), i.e `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Uses the `fit-content` formula with the available space replaced by the specified argument, i.e. `min(max-content, max(min-content, argument))`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting min-height

```css
table {
  min-height: 75%;
}

form {
  min-height: 0;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The box model](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model), {{cssxref("box-sizing")}}
- {{cssxref("height")}}, {{cssxref("max-height")}}
