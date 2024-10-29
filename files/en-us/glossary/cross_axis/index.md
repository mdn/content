---
title: Cross Axis
slug: Glossary/Cross_Axis
page-type: glossary-definition
---

{{GlossarySidebar}}

The **cross axis** in {{glossary("flexbox")}} runs perpendicular to the {{glossary("main axis")}}, therefore if your {{cssxref("flex-direction")}} is either `row` or `row-reverse` then the cross axis runs down the columns.

![The cross axis runs down the column](basics3.png)

If your main axis is `column` or `column-reverse` then the cross axis runs along the rows.

![The cross axis runs along the row.](basics4.png)

Alignment of items on the cross axis is achieved with the `align-items` property on the flex container or `align-self` property on individual items. In the case of a multi-line flex container, with additional space on the cross axis, you can use `align-content` to control the spacing of the rows.

## See also

### Property reference

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("flex-wrap")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex")}}
- {{cssxref("flex-basis")}}
- {{cssxref("flex-flow")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("justify-content")}}
- {{cssxref("order")}}

### Further reading

CSS flexbox guides:

- [Basic concepts of flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Mastering wrapping of flex items](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- Related glossary terms:
  - {{Glossary("Flex")}}
  - {{Glossary("Flex Container")}}
  - {{Glossary("Flex Item")}}
  - {{Glossary("Grid")}}
