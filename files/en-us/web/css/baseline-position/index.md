---
title: <baseline-position>
slug: Web/CSS/baseline-position
page-type: css-type
browser-compat: css.types.baseline-position
---

{{CSSRef}}

The **`<baseline-position>`** {{glossary("enumerated")}} value type represents the `baseline` keyword values and `first` and `last` modifiers, used for the {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} and {{cssxref("justify-self")}} properties as well as the {{cssxref("place-content")}}, {{cssxref("place-items")}}, and {{cssxref("place-self")}} shorthand properties.

The `first` and `last` values give a box a baseline alignment preference, defaulting to `first` if the modifier is omitted.

## Syntax

```plain
<baseline-position> = [ first | last ]? && baseline
```

## Values

The `<baseline-position>` enumerated value type is specified using an optional `first` or `last` modifier with the `baseline` value. If a box does not belong to a shared alignment context, then the fallback alignment is used. The fallback alignment is also used to align the baseline-sharing group within its {{glossary("alignment container")}}.

- `baseline`

  - : Computes to `first baseline`, as defined below.

- `first baseline`

  - : Aligns the alignment baseline of the box's first baseline set with the corresponding baseline of its baseline-sharing group. The fallback alignment is `safe self-start` for self-alignment or `safe start` for content distribution.

- `last baseline`
  - : Aligns the alignment baseline of the box's last baseline set with the corresponding baseline of its baseline-sharing group. The fallback alignment is `safe self-end` for self-alignment or `safe end` for content distribution.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Properties that use this data type: {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-content")}}, {{cssxref("place-items")}}, and {{cssxref("place-self")}}
- Other box alignment data types: {{cssxref("content-distribution")}}, {{cssxref("content-position")}}, {{cssxref("overflow-position")}}, and {{cssxref("self-position")}}
- [CSS box alignment](/en-US/docs/Web/CSS/CSS_box_alignment) module
- [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) module
- [CSS grid layout](/en-US/docs/Web/CSS/CSS_grid_layout) module
