---
title: <content-position>
slug: Web/CSS/content-position
page-type: css-type
browser-compat: css.types.content-position
---

{{CSSRef}}

The **`<content-position>`** {{glossary("enumerated")}} value type is used by {{cssxref("justify-content")}} and {{cssxref("align-content")}} properties, and the {{cssxref("place-content")}} shorthand, to align the box's contents within itself.

## Syntax

```plain
<content-position> = center | start | end | flex-start | flex-end
```

## Values

The `<content-position>` enumerated value type is specified using one of the following key terms.

- `center`
  - : Centers the {{glossary("alignment subject")}} within its {{glossary("alignment container")}}.
- `start`
  - : Aligns the alignment subject flush with the alignment container's start edge.
- `end`
  - : Aligns the alignment subject flush with the alignment container's end edge.
- `flex-start`
  - : In flex layout, aligns the alignment subject flush with the edge of the alignment container corresponding to the flex container's main-start or cross-start side, as appropriate. It is identical to `start` for layout modes other than flex layout.
- `flex-end`
  - : In flex layout, aligns the alignment subject flush with the edge of the alignment container corresponding to the flex container's main-end or cross-end side, as appropriate. Identical to `end` for layout modes other than flex layout.

> [!NOTE]
> The `left` and `right` keywords are excluded from `<content-position>`, despite being valid positional alignment values for the `justify-*` properties ({{cssxref("justify-content")}}, {{cssxref("justify-self")}}, and {{cssxref("justify-items")}}), because they are not allowed in the `align-*` properties ({{cssxref("align-content")}}, {{cssxref("align-self")}}, and {{cssxref("align-items")}}). They are instead explicitly included in the `justify-*` properties' grammars.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Properties that use this data type: {{cssxref("align-content")}}, {{cssxref("justify-content")}}, {{cssxref("place-content")}}
- Other box alignment data types: {{cssxref("baseline-position")}}, {{cssxref("content-distribution")}}, {{cssxref("content-position")}}, {{cssxref("overflow-position")}}, and {{cssxref("self-position")}}
- [CSS box alignment](/en-US/docs/Web/CSS/CSS_box_alignment) module
- [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) module
- [CSS grid layout](/en-US/docs/Web/CSS/CSS_grid_layout) module
