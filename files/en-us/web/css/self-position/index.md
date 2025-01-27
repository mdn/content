---
title: <self-position>
slug: Web/CSS/self-position
page-type: css-type
browser-compat: css.types.self-position
---

{{CSSRef}}

The **`<self-position>`** {{glossary("enumerated")}} value data type is used by the {{cssxref("justify-self")}} and {{cssxref("align-self")}} properties, and the {{cssxref("place-self")}} shorthand, to align the box within its alignment container. It is also used by the {{cssxref("justify-items")}} and {{cssxref("align-items")}} properties, and the {{cssxref("place-items")}} shorthand, to specify default values for `justify-self` and `align-self`.

## Syntax

```plain
<self-position> = center | start | end | self-start | self-end | flex-start | flex-end
```

## Values

The following keyword values are represented by the `<self-position>` grammar term:

- `center`
  - : Centers the {{glossary("alignment subject")}} within its {{glossary("alignment container")}}.
- `start`
  - : Aligns the alignment subject flush with the alignment container's start edge.
- `end`
  - : Aligns the alignment subject flush with the alignment container's end edge.
- `self-start`
  - : Aligns the alignment subject flush with the edge of the alignment container corresponding to the alignment subject's start side.
- `self-end`
  - : Aligns the alignment subject flush with the edge of the alignment container corresponding to the alignment subject's end side.
- `flex-start`
  - : In flex layout, aligns the alignment subject flush with the edge of the alignment container corresponding to the flex container's main-start or cross-start side, as appropriate. It is identical to `start` for layout modes other than flex layout.
- `flex-end`
  - : In flex layout, aligns the alignment subject flush with the edge of the alignment container corresponding to the flex container's main-end or cross-end side, as appropriate. Identical to `end` for layout modes other than flex layout.

> [!NOTE]
> The `left` and `right` keywords are excluded from `<self-position>`, despite being valid positional alignment values for the `justify-*` properties ({{cssxref("justify-content")}}, {{cssxref("justify-self")}}, and {{cssxref("justify-items")}}), because they are not allowed in the `align-*` properties ({{cssxref("align-content")}}, {{cssxref("align-self")}}, and {{cssxref("align-items")}}). They are instead explicitly included in the `justify-*` properties' grammars.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Properties that use this data type: {{cssxref("align-self")}}, {{cssxref("justify-self")}}, {{cssxref("place-self")}}, {{cssxref("align-items")}}, {{cssxref("justify-items")}}, {{cssxref("place-items")}}
- Other box alignment data types: {{cssxref("baseline-position")}}, {{cssxref("content-distribution")}}, {{cssxref("overflow-position")}}, and {{cssxref("content-position")}}
- [CSS box alignment](/en-US/docs/Web/CSS/CSS_box_alignment) module
- [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) module
- [CSS grid layout](/en-US/docs/Web/CSS/CSS_grid_layout) module
