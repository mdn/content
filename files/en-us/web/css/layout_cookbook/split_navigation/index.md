---
title: Split navigation
slug: Web/CSS/Layout_cookbook/Split_Navigation
page-type: guide
---

{{CSSRef}}

The **split navigation** is a navigation pattern where one or more elements are separated from the rest of the navigation items.

![Items separated into two groups.](split-navigation.png)

## Requirements

A common navigation pattern is to have one element pushed away from the others. We can use flexbox to achieve this, without needing to make the two sets of items into two separate flex containers.

## Recipe

Click "Play" in the code blocks below to edit the example in the MDN Playground:

```html live-sample___split-navigation-example
<nav>
  <ul class="main-nav">
    <li><a href="">About</a></li>
    <li><a href="">Products</a></li>
    <li><a href="">Our Team</a></li>
    <li class="push"><a href="">Contact</a></li>
  </ul>
</nav>
```

```css live-sample___split-navigation-example
.main-nav {
  margin: 0;
  padding: 0;
  list-style: none;
  font: 1.2em sans-serif;

  display: flex;
}

.main-nav a {
  padding: 0.5em 1em;
  display: block;
}

.push {
  margin-left: auto;
}
```

{{EmbedLiveSample("split-navigation-example")}}

## Choices made

This pattern combines auto margins with flexbox to split the items.

An auto margin absorbs all available space in the direction it is applied. This is how centering a block with auto margins works — you have a margin on each side of the block trying to take up all of the space, thus pushing the block into the middle.

In this case the left auto margin takes up any available space and pushes the item over to the right. You could apply the class `push` to any item in the list.

## See also

- [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) module
- {{cssxref("display")}} property
- {{cssxref("margin")}} property
