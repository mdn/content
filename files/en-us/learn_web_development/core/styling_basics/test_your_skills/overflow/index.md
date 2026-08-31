---
title: "Test your skills: Overflow"
short-title: "Test: Overflow"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow
page-type: learn-module-assessment
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Size_decorate_content_panel", "Learn_web_development/Core/Styling_basics")}}

The aim of this skill test is to help you assess whether you understand [overflow in CSS and how to manage it](/en-US/docs/Learn_web_development/Core/Styling_basics/Overflow).

> [!NOTE]
> To get help, read our [Test your skills](/en-US/docs/Learn_web_development#test_your_skills) usage guide. You can also reach out to us using one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## Overflow 1

In this task, the content is overflowing the box because it has a fixed height.

To complete the task:

1. Update the CSS so that the box height is maintained and scrollbars appear only when there is enough text to cause an overflow.
2. Test your solution by removing some text from the HTML and checking that no scrollbar appears when there is only a small amount of text.

The starting point of the task looks like this:

{{EmbedLiveSample("overflow1-start", "", "450px")}}

Here's the underlying code for this starting point:

```html live-sample___overflow1-start live-sample___overflow1-finish
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

```css live-sample___overflow1-start live-sample___overflow1-finish
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

The updated styling should look like this:

{{EmbedLiveSample("overflow1-finish", "", "300px")}}

<details>
<summary>Click here to show the solution</summary>

You should add `overflow: auto` so that the box will only gain scrollbars when the content is too large:

```css live-sample___overflow1-finish
.box {
  overflow: auto;
}
```

</details>

## Overflow 2

In this task, there is an image in the box that is bigger than the dimensions of the box so that it overflows visibly. Update the CSS so that any image outside of the box is hidden.

The starting point of the task looks like this:

{{EmbedLiveSample("overflow2-start", "", "260px")}}

Here's the underlying code for this starting point:

```html live-sample___overflow2-start live-sample___overflow2-finish
<div class="box">
  <img
    alt="flowers"
    src="https://mdn.github.io/shared-assets/images/examples/flowers.jpg" />
</div>
```

```css live-sample___overflow2-start live-sample___overflow2-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
.box {
  border: 5px solid black;
  height: 200px;
  width: 300px;
}
```

The updated styling should look like this:

{{EmbedLiveSample("overflow2-finish", "", "260px")}}

<details>
<summary>Click here to show the solution</summary>

You should add `overflow: hidden` to the `.box` selector:

```css live-sample___overflow2-finish
.box {
  overflow: hidden;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Size_decorate_content_panel", "Learn_web_development/Core/Styling_basics")}}
