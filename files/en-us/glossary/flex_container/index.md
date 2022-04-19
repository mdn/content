---
title: Flex Container
slug: Glossary/Flex_Container
tags:
  - CSS
  - Glossary
  - flex container
  - flexbox
---
A {{glossary("flexbox")}} layout is defined using the `flex` or `inline-flex` values of the `display` property on the parent item. This element then becomes a **flex container**, and each one of its children becomes a {{glossary("flex item")}}.

A value of `flex` causes the element to become a block level flex container, and `inline-flex` an inline level flex container. These values create a **flex formatting context** for the element, which is similar to a block formatting context in that floats will not intrude into the container, and the margins on the container will not collapse with those of the items.

## See also

### Property reference

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("flex")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-flow")}}
- {{cssxref("flex-wrap")}}
- {{cssxref("justify-content")}}

### Further reading

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- CSS Flexbox Guide: _[Mastering wrapping of flex items](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)_
- Firefox Developer Tools > How to: *[CSS Flexbox Inspector: Examine Flexbox layouts](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html)*
