---
title: Inset properties
slug: Glossary/Inset_properties
page-type: glossary-definition
---

{{GlossarySidebar}}

In CSS, **inset properties** control positioned elements' location by specifying offsets from the elements' default positions. There are physical, logical, and shorthand inset properties.

The inset properties include the {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("bottom")}}, and {{cssxref("right")}} physical properties, their {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, and {{cssxref("inset-inline-end")}} flow-relative {{glossary("logical properties", "logical property")}} equivalents, and the {{cssxref("inset-block")}}, {{cssxref("inset-inline")}}, and {{cssxref("inset")}} shorthands.

**Physical properties** reference specific physical sides of an element. Logical properties use directional keywords relative to the block and inline axes. **Block axis** refers to the axis that defines the stacking order of elements in a block layout. The **inline axis** is perpendicular to the block axis, representing the direction along which inline content like text flows within a block. The mapping depends on the element's {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

The interpretation of inset properties depends on the value of the {{cssxref("position")}} property. When `position: absolute` is set, they represent insets from the [containing block](/en-US/docs/Web/CSS/CSS_display/Containing_block) or [anchor element](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using). With `position: relative`, they represent insets from the box's default margin edge position. With `sticky`, they represent insets from the {{glossary("scroll container")}} edge. The `fixed` value is similar to `absolute`, except the element is positioned and sized relative to its fixed positioning containing block, which is often the viewport.

## See also

- [Layout and the containing block](/en-US/docs/Web/CSS/CSS_display/Containing_block)
- [CSS positioned layout](/en-US/docs/Web/CSS/CSS_positioned_layout) module
- [CSS logical properties and values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values) module
- [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module
