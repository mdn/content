---
title: "Test your skills: Overflow"
short-title: Overflow
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow
page-type: learn-module-assessment
sidebar: learnsidebar
---

The aim of this skill test is to help you assess whether you understand [overflow in CSS and how to manage it](/en-US/docs/Learn_web_development/Core/Styling_basics/Overflow).

> [!NOTE]
> To get help, reach out to us using one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## Task 1

In this task, the content is overflowing the box because it has a fixed height.

To complete the task:

1. Click **"Play"** in the code block below to edit the example in the MDN Playground.
2. Update the CSS so that the height is maintained and the box will have scrollbars only if there is enough text to cause an overflow.
3. Test your solution by removing some of the text from the HTML and checking that if there is only a small amount of text that does not overflow, no scrollbar appears.

Your final result should look like the image below:

![A small box with a border and a vertical scrollbar.](mdn-overflow1.png)

> [!CALLOUT]
>
> You can also copy the code (click the clipboard icon) and paste it into your own editor or an online editor (such as [CodePen](https://codepen.io/) or [JSFiddle](https://jsfiddle.net/)) if you'd prefer to work there instead.

If you make a mistake, you can clear your work using the _Reset_ button in the MDN Playground. If you get really stuck, you can view the solution at the bottom of the section.

```html live-sample___overflow-scroll
<div class="box">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
</div>
```

```css live-sample___overflow-scroll
body {
  font: 1.2em / 1.5 sans-serif;
}

.box {
  border: 5px solid black;
  padding: 1em;
  height: 200px;
  width: 300px;
}
```

{{EmbedLiveSample("overflow-scroll", "", "450px")}}

<details>
<summary>Click here to show the solution</summary>

You should add `overflow: auto` so that the box will only gain scrollbars when the content is too large:

```css
.box {
  overflow: auto;
}
```

</details>

## Task 2

In this task, there is an image in the box that is bigger than the dimensions of the box so that it overflows visibly.

To complete the task:

1. Click **"Play"** in the code block below to edit the example in the MDN Playground.
2. Update the CSS so that any image outside of the box is hidden.

Your final result should look like the image below:

![A box with an image which fills the box but does not spill out the edges.](mdn-overflow2.png)

> [!CALLOUT]
>
> You can also copy the code (click the clipboard icon) and paste it into your own editor or an online editor (such as [CodePen](https://codepen.io/) or [JSFiddle](https://jsfiddle.net/)) if you'd prefer to work there instead.

If you make a mistake, you can clear your work using the _Reset_ button in the MDN Playground. If you get really stuck, you can view the solution at the bottom of the section.

```html live-sample___overflow-hidden
<div class="box">
  <img
    alt="flowers"
    src="https://mdn.github.io/shared-assets/images/examples/flowers.jpg" />
</div>
```

```css live-sample___overflow-hidden
body {
  font: 1.2em / 1.5 sans-serif;
}
.box {
  border: 5px solid black;
  height: 200px;
  width: 300px;
}
```

{{EmbedLiveSample("overflow-hidden", "", "300px")}}

<details>
<summary>Click here to show the solution</summary>

You should add `overflow: hidden` to the `.box` selector:

```css
.box {
  overflow: hidden;
}
```

</details>

## See also

- [CSS styling basics](/en-US/docs/Learn_web_development/Core/Styling_basics)
