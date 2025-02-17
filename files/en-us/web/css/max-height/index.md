---
title: max-height
slug: Web/CSS/max-height
page-type: css-property
browser-compat: css.properties.max-height
---

{{CSSRef}}

The **`max-height`** [CSS](/en-US/docs/Web/CSS) property sets the maximum height of an element. It prevents the [used value](/en-US/docs/Web/CSS/CSS_cascade/used_value) of the {{cssxref("height")}} property from becoming larger than the value specified for `max-height`.

{{EmbedInteractiveExample("pages/css/max-height.html")}}

`max-height` overrides {{cssxref("height")}}, but {{cssxref("min-height")}} overrides `max-height`.

## Syntax

```css
/* <length> value */
max-height: 3.5em;
max-height: anchor-size(height);
max-height: calc(anchor-size(--myAnchor self-block, 250px) + 2em);

/* <percentage> value */
max-height: 75%;

/* Keyword values */
max-height: none;
max-height: max-content;
max-height: min-content;
max-height: fit-content;
max-height: fit-content(20em);
max-height: stretch;

/* Global values */
max-height: inherit;
max-height: initial;
max-height: revert;
max-height: revert-layer;
max-height: unset;
```

### Values

- {{cssxref("&lt;length&gt;")}}
  - : Defines the `max-height` as an absolute value.
- {{cssxref("&lt;percentage&gt;")}}
  - : Defines the `max-height` as a percentage of the containing block's height.
- `none`
  - : No limit on the size of the box.
- `max-content`
  - : The intrinsic preferred `max-height`.
- `min-content`
  - : The intrinsic minimum `max-height`.
- `fit-content`
  - : Use the available space, but not more than [max-content](/en-US/docs/Web/CSS/max-content), i.e. `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Uses the `fit-content` formula with the available space replaced by the specified argument, i.e. `min(max-content, max(min-content, argument))`.
- `stretch`

  - : Limits the maximum height of the element's [margin box](/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) to the height of its [containing block](/en-US/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block). It attempts to make the margin box fill the available space in the containing block, so in a way behaving similar to `100%` but applying the resulting size to the margin box rather than the box determined by [box-sizing](/en-US/docs/Web/CSS/box-sizing).

    > [!NOTE]
    > To check aliases used by browsers for the `stretch` value and its implementation status, see the [Browser compatibility](#browser_compatibility) section.

## Accessibility

Ensure that elements set with a `max-height` are not truncated and/or do not obscure other content when the page is zoomed to increase text size.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting max-height using percentage and keyword values

```css
table {
  max-height: 75%;
}

form {
  max-height: none;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("min-height")}}
- {{Cssxref("height")}}
- {{cssxref("max-inline-size")}}
- {{cssxref("max-block-size")}}
- {{cssxref("box-sizing")}}
- [Introduction to the CSS basic box model](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS box model](/en-US/docs/Web/CSS/CSS_box_model) module
