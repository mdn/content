---
title: How to add a shadow to text
short-title: Add a shadow to text
slug: Learn_web_development/Howto/Solve_CSS_problems/Add_a_text_shadow
page-type: learn-faq
sidebar: learn-how-to
---

In this guide, you'll learn how to add a shadow to any text on your page.

## Adding shadows to text

Our [guide to adding a shadow to boxes](/en-US/docs/Learn_web_development/Howto/Solve_CSS_problems/Add_a_shadow) explains how to add a shadow to any element on your page. However, that technique only adds shadows to the element's surrounding box. To add a drop shadow to the text itself, you need a different CSS property: {{cssxref("text-shadow")}}.

The `text-shadow` property takes a number of values:

- The offset on the x-axis
- The offset on the y-axis
- A blur radius
- A color

In the example below, we have set the x-axis offset to `2px`, the y-axis offset to `4px`, the blur radius to `4px`, and the color to a semi-transparent blue. Play with the different values to see how they change the shadow effect.

```html live-sample___text-shadow
<div class="wrapper">
  <h1>Adding a shadow to text</h1>
</div>
```

```css live-sample___text-shadow
h1 {
  color: royalblue;
  text-shadow: 2px 4px 4px rgb(46 91 173 / 0.6);
}
```

{{EmbedLiveSample("Text_shadow")}}

> [!NOTE]
> When adding text shadows, you might unintentionally make the text difficult to read. Ensure that your choices offer sufficient [color contrast](/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) to keep your text readable.
