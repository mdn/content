---
title: min-width
slug: Web/CSS/min-width
page-type: css-property
browser-compat: css.properties.min-width
---

{{CSSRef}}

The **`min-width`** [CSS](/en-US/docs/Web/CSS) property sets the minimum width of an element. It prevents the [used value](/en-US/docs/Web/CSS/used_value) of the {{cssxref("width")}} property from becoming smaller than the value specified for `min-width`.

{{EmbedInteractiveExample("pages/css/min-width.html")}}

The element's width is set to the value of `min-width` whenever `min-width` is larger than {{Cssxref("max-width")}} or {{Cssxref("width")}}.

## Syntax

```css
/* <length> value */
min-width: 3.5em;

/* <percentage> value */
min-width: 10%;

/* Keyword values */
min-width: max-content;
min-width: min-content;
min-width: fit-content(20em);

/* Global values */
min-width: inherit;
min-width: initial;
min-width: revert;
min-width: revert-layer;
min-width: unset;
```

### Values

- {{cssxref("&lt;length&gt;")}}
  - : Defines the `min-width` as an absolute value.
- {{cssxref("&lt;percentage&gt;")}}
  - : Defines the `min-width` as a percentage of the containing block's width.
- `auto`
  - : The browser will calculate and select a `min-width` for the specified element.
- `max-content`
  - : The intrinsic preferred `min-width`.
- `min-content`
  - : The intrinsic minimum `min-width`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Uses the `fit-content` formula with the available space replaced by the specified argument, i.e. `min(max-content, max(min-content, argument))`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting minimum element width

```css
table {
  min-width: 75%;
}

form {
  min-width: 0;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("width")}}, {{Cssxref("max-width")}}
- The [box model](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model), {{Cssxref("box-sizing")}}
