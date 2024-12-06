---
title: "Test your skills: Floats"
slug: Learn_web_development/Core/CSS_layout/Floats_skills
page-type: learn-module-assessment
---

{{LearnSidebar}}

The aim of this skill test is to assess whether you understand [floats in CSS](/en-US/docs/Learn_web_development/Core/CSS_layout/Floats) using the {{CSSxRef("float")}} and {{CSSxRef("clear")}} properties and values as well as other methods for clearing floats. You will be working through three small tasks that use different elements of the material you have just covered.

> [!NOTE]
> Click **"Play"** in the code blocks below to edit the examples in the MDN Playground.
> You can also copy the code (click the clipboard icon) and paste it into an online editor such as [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/).
> If you get stuck, you can reach out to us in one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## Task 1

In this task, you need to float the two elements with a class of `float1` and `float2` left and right, respectively. The text should then appear between the two boxes, as in the image below:

![Two blocks displaying left and right of some text.](float-task1.png)

Try to update the code below to recreate the finished example:

```html live-sample___float1
<div class="box">
  <div class="float float1">One</div>
  <div class="float float2">Two</div>
  <p>The two boxes should float to either side of this text.</p>
</div>
```

```css hidden live-sample___float1
body {
  font: 1.2em / 1.5 sans-serif;
}
* {
  box-sizing: border-box;
}
.box {
  padding: 0.5em;
}
.float {
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rebeccapurple;
  color: #fff;
  padding: 1em;
}
```

```css live-sample___float1
.float1 {
}

.float2 {
}
```

{{EmbedLiveSample("float1", "", "210px")}}

<details>
<summary>Click here to show the solution</summary>

You can use `float` for both boxes:

```css
.float1 {
  float: left;
}

.float2 {
  float: right;
}
```

</details>

## Task 2

In this task, the element with a class of `float` should be floated left. Then we want the first line of text to display next to that element, but the following line of text (which has a class of `below`) to display underneath it.

Your final result should look like the image below:

![A box displayed to the left of a line of text, with some more text below.](float-task2.png)

Try to update the code below to recreate the finished example:

```html live-sample___float2
<div class="box">
  <div class="float">Float</div>
  <p>This sentence appears next to the float.</p>
  <p class="below">Make this sentence appear below the float.</p>
</div>
```

```css hidden live-sample___float2
body {
  font: 1.2em / 1.5 sans-serif;
}
* {
  box-sizing: border-box;
}
.box {
  padding: 0.5em;
}
.float {
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rebeccapurple;
  color: #fff;
  padding: 1em;
}
```

```css live-sample___float2
.float {
}

.below {
}
```

{{EmbedLiveSample("float2", "", "300px")}}

<details>
<summary>Click here to show the solution</summary>

You need to flow the item left, then add `clear: left` to the class for the second paragraph:

```css
.float {
  float: left;
}

.below {
  clear: left;
}
```

</details>

## Task 3

In this task, we have a floated element. The box wrapping the float and text is displaying behind the float. Use the most up-to-date method available to cause the box background to extend to below the float, as in the image below:

![A block displayed to the right of some text both wrapped by a box with a background color.](float-task3.png)

Try to update the code below to recreate the finished example:

```html live-sample___float3
<div class="box">
  <div class="float">Float</div>
  <p>This sentence appears next to the float.</p>
</div>
```

```css hidden live-sample___float3
body {
  font: 1.2em / 1.5 sans-serif;
}
* {
  box-sizing: border-box;
}

.box {
  padding: 0.5em;
}

.float {
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207 232 220);
  padding: 1em;
  color: #fff;
}

.box {
  background-color: rebeccapurple;
  padding: 10px;
  color: #fff;
}
```

```css live-sample___float3
.float {
  float: right;
}

.box {
}
```

{{EmbedLiveSample("float3", "", "300px")}}

<details>
<summary>Click here to show the solution</summary>

Clear the box underneath the floated item by adding `display: flow-root` to the class for `.box`.
Other methods might be to use `overflow` or a clearfix hack, however the learning materials detail the `flow-root` method as the modern way to achieve this.

```css
.box {
  display: flow-root;
}
```

</details>

## See also

- [CSS styling basics](/en-US/docs/Learn_web_development/Core/Styling_basics)
