---
title: How to center an item
short-title: Center an item
slug: Learn_web_development/Howto/Solve_CSS_problems/Center_an_item
page-type: learn-faq
sidebar: learn-how-to
---

In this guide you can find out how to center an item inside another element, both horizontally and vertically.

## Center a box

To center one box inside another using CSS you will need to use [CSS box alignment](/en-US/docs/Web/CSS/CSS_box_alignment) properties on the parent container. As these alignment properties do not yet have browser support for block and inline layout you will need to make the parent a [flex](/en-US/docs/Web/CSS/CSS_flexible_box_layout) or [grid](/en-US/docs/Web/CSS/CSS_grid_layout) container to turn on the ability to use alignment.

In the example below we have given the parent container `display: flex`; then set {{cssxref("justify-content")}} to center to align it horizontally, and {{cssxref("align-items")}} to center to align it vertically.

```html live-sample___center
<div class="wrapper">
  <div class="box">center me!</div>
</div>
```

```css live-sample___center
.wrapper {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box {
  background-color: rgb(69 164 181);
  border-radius: 5px;
  padding: 10px;
  color: #fff;
}
```

{{EmbedLiveSample("center", "", "220px")}}

> [!NOTE]
> You can use this technique to do any kind of alignment of one or more elements inside another. In the example above you can try changing the values to any valid values for {{cssxref("justify-content")}} and {{cssxref("align-items")}}.

## See also

- [Box alignment in flexbox](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box alignment in grid layout](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
