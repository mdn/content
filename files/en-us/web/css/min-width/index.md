---
title: min-width
slug: Web/CSS/min-width
page-type: css-property
browser-compat: css.properties.min-width
---

{{CSSRef}}

The **`min-width`** [CSS](/en-US/docs/Web/CSS) property sets the minimum width of an element. It prevents the [used value](/en-US/docs/Web/CSS/CSS_cascade/used_value) of the {{cssxref("width")}} property from becoming smaller than the value specified for `min-width`.

{{EmbedInteractiveExample("pages/css/min-width.html")}}

The element's width is set to the value of `min-width` whenever `min-width` is larger than {{Cssxref("max-width")}} or {{Cssxref("width")}}.

## Syntax

```css
/* <length> value */
min-width: 3.5em;
min-width: anchor-size(width);
min-width: anchor-size(--myAnchor self-inline, 200%);

/* <percentage> value */
min-width: 10%;

/* Keyword values */
min-width: max-content;
min-width: min-content;
min-width: fit-content;
min-width: fit-content(20em);
min-width: stretch;

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

  - : The default value. The source of the automatic value for the specified element depends on its display value. For block boxes, inline boxes, inline blocks, and all table layout boxes `auto` resolves to `0`.

    For [flex items](/en-US/docs/Glossary/Flex_Item) and grid items, the minimum width value is either the specified suggested size, such as the value of the `width` property, the transferred size, calculated if the element has an `aspect-ratio` set and the height is a definite size, otherwise, the `min-content` size is used. If the flex or grid item is a {{glossary("scroll container")}}, or if a grid item spans more than one flexible column track, the automatic minimum size is `0`.

- `max-content`
  - : The intrinsic preferred `min-width`.
- `min-content`
  - : The intrinsic minimum `min-width`.
- `fit-content`
  - : Use the available space, but not more than [`max-content`](/en-US/docs/Web/CSS/max-content), i.e. `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Uses the `fit-content` formula with the available space replaced by the specified argument, i.e. `min(max-content, max(min-content, argument))`.
- `stretch`

  - : Limits the minimum width of the element's [margin box](/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) to the width of its [containing block](/en-US/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block). It attempts to make the margin box fill the available space in the containing block, so in a way behaving similar to `100%` but applying the resulting size to the margin box rather than the box determined by [box-sizing](/en-US/docs/Web/CSS/box-sizing).

    > [!NOTE]
    > To check aliases used by browsers for the `stretch` value and its implementation status, see the [Browser compatibility](#browser_compatibility) section.

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

- {{Cssxref("max-width")}}
- {{Cssxref("width")}}
- {{cssxref("min-inline-size")}}
- {{cssxref("min-block-size")}}
- {{cssxref("box-sizing")}}
- [Introduction to the CSS basic box model](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS box model](/en-US/docs/Web/CSS/CSS_box_model) module
