---
title: <content-distribution>
slug: Web/CSS/content-distribution
page-type: css-type
browser-compat: css.types.content-distribution
---

{{CSSRef}}

The **`<content-distribution>`** {{glossary("enumerated")}} value type is used by {{cssxref("justify-content")}} and {{cssxref("align-content")}} properties, and the {{cssxref("place-content")}} shorthand, to distribute a container's extra space among its {{glossary("alignment subject", "alignment subjects")}}.

## Syntax

```plain
<content-distribution> = space-between | space-around | space-evenly | stretch
```

## Values

The following keyword values are represented by the `<content-distribution>` grammar term:

- `space-between`

  - : Evenly distributes the {{glossary("alignment subject")}} within the {{glossary("alignment container")}}. The first item is placed flush with the start edge of the alignment container, the last item subject is placed flush with the end edge of the alignment container, and the remaining items are evenly distributed so that the spacing between any two adjacent items is the same. The default fallback alignment for `space-between` is `safe flex-start` for flex layout, and `start` otherwise. If there is only one item, the item will be flush with the start edge.

- `space-around`

  - : The items are evenly distributed in the container, with a half-size space on either end. The spacing between any two adjacent items is the same, and the spacing before the first and after the last items is half the size of the other spacing. The default fallback alignment for `space-around` is `safe center`. If the container has only one child, the item will be centered.

- `space-evenly`

  - : The items are evenly distributed in the container, with a full-size space on either end. The spacing between any two adjacent items, before the first item, and after the last item, are all the same. The default fallback alignment for `space-evenly` is `safe center`. If the container has only one child, the item will be centered.

- `stretch`

  - : If the combined size of the items is less than the size of the container, any items that can grow will have their size increased equally (not proportionally), while still respecting the constraints imposed by {{cssxref("max-height")}}, {{cssxref("max-width")}}, or equivalent functionality, so that the combined size of the items exactly fills the container. The default fallback alignment for `stretch` is `flex-start` in flexbox, and `start` in other layout modes. If there is only one item, and that item can grow, it will grow to fill the container.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Properties that use this data type: {{cssxref("align-content")}}, {{cssxref("justify-content")}}, {{cssxref("place-content")}}
- Other box alignment data types: {{cssxref("baseline-position")}}, {{cssxref("content-position")}}, {{cssxref("overflow-position")}}, and {{cssxref("self-position")}}
- [CSS box alignment](/en-US/docs/Web/CSS/CSS_box_alignment) module
- [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) module
- [CSS grid layout](/en-US/docs/Web/CSS/CSS_grid_layout) module
