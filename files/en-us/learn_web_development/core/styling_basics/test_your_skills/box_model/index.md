---
title: "Test your skills: The box model"
short-title: "Test: Box model"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model
page-type: learn-module-assessment
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics")}}

The aim of this skill test is to help you assess whether you understand the [CSS box model](/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model).

> [!NOTE]
> To get help, read our [Test your skills](/en-US/docs/Learn_web_development#test_your_skills) usage guide. You can also reach out to us using one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## Interactive challenge

First of all, we are giving you a fun, interactive challenge involving margin shorthand, created by our [learning partner](/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home).

Watch the embedded scrim, and complete the tasks on the timeline (the little ghost icons) by following the instructions and editing the code. When you are done, you can resume watching the scrim to check how the teacher's solution matches up with yours.

<mdn-scrim-inline url="https://scrimba.com/learn-html-and-css-c0p/~01s" scrimtitle="Margin shorthand" survey="true"></scrim-inline>

## Task 1

In this task, there are two boxes below, one is using the standard box model, the other the alternate box model. We'd like you to change the width of the second box by adding declarations to the `.alternate` class, so that it matches the visual width of the first box.

Your final result should look like the following finished rendering:

{{EmbedLiveSample("box-model1-finish", "", "540px")}}

```html live-sample___box-model1-start live-sample___box-model1-finish
<div class="box">I use the standard box model.</div>
<div class="box alternate">I use the alternate box model.</div>
```

```css live-sample___box-model1-start live-sample___box-model1-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
.box {
  border: 5px solid rebeccapurple;
  background-color: lightgray;
  padding: 40px;
  margin: 40px;
  width: 300px;
  height: 150px;
}

.alternate {
  box-sizing: border-box;
}
```

This is the starting state of the task:

{{EmbedLiveSample("box-model1-start", "", "540px")}}

<details>
<summary>Click here to show the solution</summary>

You will need to increase the width of the second block, to add the size of the padding and border:

```css live-sample___box-model1-finish
.alternate {
  box-sizing: border-box;
  width: 390px;
}
```

</details>

## Task 2

To complete this task, add the following features to the provided box:

- A `5px`, black, dotted border.
- A top margin of `20px`.
- A right margin of `1em`.
- A bottom margin of `40px`.
- A left margin of `2em`.
- Padding on all sides of `1em`.

Your final result should look like the following finished rendering:

{{EmbedLiveSample("box-model2-finish")}}

```html live-sample___box-model2-start live-sample___box-model2-finish
<div class="box">I use the standard box model.</div>
```

```css live-sample___box-model2-start live-sample___box-model2-finish
body {
  font: 1.2em / 1.5 sans-serif;
}

.box {
}
```

This is the starting state of the task:

{{EmbedLiveSample("box-model2-start")}}

<details>
<summary>Click here to show the solution</summary>

This task involves using the margin, border and padding properties correctly.
You might choose to use the longhand properties ({{cssxref("margin-top")}}, {{cssxref("margin-right")}}, etc.), however when setting a margin and padding on all sides, the shorthand is probably the better choice:

```css live-sample___box-model2-finish
.box {
  border: 5px dotted black;
  margin: 20px 1em 40px 2em;
  padding: 1em;
}
```

</details>

## Task 3

In this task, the inline element has a margin, padding and border. However, the lines above and below are overlapping it.

To complete this task, update the CSS to cause the size of the margin, padding, and border to be respected by the other lines, while still keeping the element inline.

Your final result should look like the following finished rendering:

{{EmbedLiveSample("box-model3-finish")}}

```html live-sample___box-model3-start live-sample___box-model3-finish
<div class="box">
  <p>
    Veggies es bonus vobis, <span>proinde vos postulo</span> essum magis
    kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean
    garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
</div>
```

```css live-sample___box-model3-start live-sample___box-model3-finish
body {
  font: 1.2em / 1.5 sans-serif;
}

.box span {
  background-color: pink;
  border: 5px solid black;
  padding: 1em;
}
```

This is the starting state of the task:

{{EmbedLiveSample("box-model3-start")}}

<details>
<summary>Click here to show the solution</summary>

Solving this task requires that you understand when to use different {{cssxref("display")}} values.
After adding `display: inline-block`, the block direction margin, border and padding will cause the other lines to be pushed away from the element:

```css live-sample___box-model3-finish
.box span {
  background-color: pink;
  border: 5px solid black;
  padding: 1em;
  display: inline-block;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics")}}
