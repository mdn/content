---
title: How to add a shadow to an element
slug: Learn_web_development/Howto/Solve_CSS_problems/Add_a_shadow
page-type: learn-faq
---

{{LearnSidebar}}

In this guide you can find out how to add a shadow to any box on your page.

## Adding box shadows

Shadows are a common design feature that can help elements stand out on your page. In CSS, shadows on the boxes of elements are created using the {{cssxref("box-shadow")}} property (if you want to add a shadow to the text itself, you need {{cssxref("text-shadow")}}).

The `box-shadow` property takes a number of values:

- The offset on the x-axis
- The offset on the y-axis
- A blur radius
- A spread radius
- A color
- The `inset` keyword

In the example below we have set the X and Y axes to 5px, the blur to 10px and the spread to 2px. I am using a semi-transparent black as my color. Play with the different values to see how they change the shadow.

```html live-sample___box-shadow-button
<div class="wrapper">
  <button class="shadow">box-shadow</button>
</div>
```

```css hidden live-sample___box-shadow-button
.wrapper {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  padding: 5px 10px;
  border: 0;
  border-radius: 5px;
  font-weight: bold;
  font-size: 140%;
  background-color: #db1f48;
  color: #fff;
}
```

```css live-sample___box-shadow-button
.shadow {
  box-shadow: 5px 5px 10px 2px rgb(0 0 0 / 0.8);
}
```

{{EmbedLiveSample("box-shadow-button")}}

> [!NOTE]
> We are not using `inset` in this example, this means that the shadow is the default drop shadow with the box on top of the shadow. Inset shadows appear inside the box as if the content were pushed back into the page.

## See also

- The [Box shadow generator](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator)
- [Learn CSS: Advanced styling effects](/en-US/docs/Learn_web_development/Core/Styling_basics/Advanced_styling_effects)
