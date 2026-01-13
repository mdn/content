---
title: "Test your skills: Flexbox"
short-title: "Test: Flexbox"
slug: Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox
page-type: learn-module-assessment
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Flexbox", "Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout")}}

The aim of this skill test is to help you assess whether you understand how [flexbox and flex items](/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox) behave. Below are four sets of design problems you can solve using flexbox. Your task is to fix the problems.

> [!NOTE]
> To get help, read our [Test your skills](/en-US/docs/Learn_web_development#test_your_skills) usage guide. You can also reach out to us using one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## Interactive challenge

First of all, we are giving you a fun, interactive flexbox challenge created by our [learning partner](/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home).

Watch the embedded scrim, and complete all the tasks on the timeline (the little ghost icons) by following the instructions and editing the code. When you are done, you can resume watching the scrim to check how the teacher's solution matches up with yours.

<mdn-scrim-inline url="https://scrimba.com/frontend-path-c0j/~03a" scrimtitle="Flexbox alignment challenges" survey="true"></scrim-inline>

## Task 1

In this task, we use some list items to create the navigation for a site. To complete the task, use flexbox to lay out the list items as a row, with an equal amount of space between each item.

Your final result should look like this finished rendering:

{{EmbedLiveSample("flexbox1-finish", "", "100px")}}

```html live-sample___flexbox1-start live-sample___flexbox1-finish
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About Us</a></li>
    <li><a href="/products">Our Products</a></li>
    <li><a href="/contact">Contact Us</a></li>
  </ul>
</nav>
```

```css live-sample___flexbox1-start live-sample___flexbox1-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
nav ul {
  max-width: 750px;
  list-style: none;
  padding: 0;
  margin: 0;
}
nav a:link,
nav a:visited {
  background-color: #4d7298;
  border: 2px solid #77a6b6;
  border-radius: 0.5em;
  color: white;
  padding: 0.5em;
  display: inline-block;
  text-decoration: none;
}

nav ul {
  /* Add styles here */
}
```

This is the starting state of the task:

{{EmbedLiveSample("flexbox1-start", "", "240px")}}

<details>
<summary>Click here to show the solution</summary>

You can apply `display: flex` and control spacing using the `justify-content` property:

```css live-sample___flexbox1-finish
nav ul {
  display: flex;
  justify-content: space-between;
}
```

</details>

## Task 2

In this task, the list items are all different sizes, but we want them to be displayed as three equal-sized columns, no matter what content is in each item.

Your final result should look like the following finished rendering:

{{EmbedLiveSample("flexbox2-finish", "", "300px")}}

**Bonus question:** Can you now make the first item twice the size of the other items?

```html live-sample___flexbox2-start live-sample___flexbox2-finish
<ul>
  <li>I am small</li>
  <li>I have more content than the very small item.</li>
  <li>
    I have lots of content. So much content that I don't know where it is all
    going to go. I'm glad that CSS is pretty good at dealing with situations
    where we end up with more words than expected!
  </li>
</ul>
```

```css live-sample___flexbox2-start live-sample___flexbox2-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
ul {
  max-width: 750px;
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  background-color: #4d7298;
  border: 2px solid #77a6b6;
  border-radius: 0.5em;
  color: white;
  padding: 0.5em;
}

ul {
  /* Add styles here */
}

li {
  /* Add styles here */
}
```

This is the starting state of the task:

{{EmbedLiveSample("flexbox2-start", "", "240px")}}

<details>
<summary>Click here to show the solution</summary>

It's best to use shorthands, so in this scenario `flex: 1` is probably the best answer, and so the most optimal result would be:

```css live-sample___flexbox2-finish
ul {
  display: flex;
}

li {
  flex: 1;
}
```

For the bonus question, add a selector that targets the first element and sets `flex: 2;` (or `flex: 2 0 0;` or `flex-grow: 2`):

```css
li:first-child {
  flex: 2;
}
```

</details>

## Task 3

In this task, we'd like you to arrange the list items into rows as shown in the finished rendering below:

{{EmbedLiveSample("flexbox3-finish", "", "260px")}}

```html live-sample___flexbox3-start live-sample___flexbox3-finish
<ul>
  <li>Turnip</li>
  <li>greens</li>
  <li>yarrow</li>
  <li>ricebean</li>
  <li>rutabaga</li>
  <li>endive</li>
  <li>cauliflower</li>
  <li>sea lettuce</li>
  <li>kohlrabi</li>
  <li>amaranth</li>
</ul>
```

```css live-sample___flexbox3-start live-sample___flexbox3-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
ul {
  width: 450px;
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  background-color: #4d7298;
  border: 2px solid #77a6b6;
  border-radius: 0.5em;
  color: white;
  padding: 0.5em;
  margin: 0.5em;
}

ul {
  /* Add styles here */
}

li {
  /* Add styles here */
}
```

This is the starting state of the task:

{{EmbedLiveSample("flexbox3-start", "", "260px")}}

<details>
<summary>Click here to show the solution</summary>

This task requires an understanding of the `flex-wrap` property to wrap flex lines. In addition, to ensure that you end up with something that looks like the example, you need to set `flex: auto` on the child (or `flex: 1 1 auto;`).

```css live-sample___flexbox3-finish
ul {
  display: flex;
  flex-wrap: wrap;
}

li {
  flex: auto;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Flexbox", "Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout")}}
