---
title: <overflow-position>
slug: Web/CSS/overflow-position
page-type: css-type
browser-compat: css.types.overflow-position
---

{{CSSRef}}

The **`<overflow-position>`** {{glossary("enumerated")}} value type defines how an alignment subject that is larger than its alignment container will overflow that container. For example, if centered items are wider than their container, the overflow may be displayed beyond the viewport's start edge, which can't be scrolled to. The `<overflow-position>` value defines whether the alignment mode should be overridden to ensure the content is visible (`safe`) or if the alignment mode must be adhered to (`unsafe`).

This data type is valid for the {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} and {{cssxref("justify-self")}} properties as well as the {{cssxref("place-content")}}, {{cssxref("place-items")}}, and {{cssxref("place-self")}} shorthand properties.
If omitted, the default overflow alignment is a blend of `safe` and `unsafe`.

## Syntax

```plain
<overflow-position> = unsafe | safe
```

## Values

The following keyword values are represented by the `<overflow-position>` grammar term:

- `safe`

  - : If the size of the {{glossary("alignment subject")}} overflows the {{glossary("alignment container")}}, the alignment subject is instead aligned as if the alignment mode were `start`.

- `unsafe`
  - : Regardless of the relative sizes of the alignment subject and alignment container, the given alignment value is honored.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Properties that use this data type: {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-content")}} {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-content")}}, {{cssxref("place-items")}}, and {{cssxref("place-self")}}
- Other box alignment data types: {{cssxref("content-distribution")}}, {{cssxref("content-position")}}, {{cssxref("baseline-position")}}, and {{cssxref("self-position")}}
- [CSS box alignment](/en-US/docs/Web/CSS/CSS_box_alignment) module
- [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) module
- [CSS grid layout](/en-US/docs/Web/CSS/CSS_grid_layout) module
