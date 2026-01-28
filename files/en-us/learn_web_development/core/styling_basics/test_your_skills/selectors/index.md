---
title: "Test your skills: Selectors"
short-title: "Test: Selectors"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors
page-type: learn-module-assessment
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics")}}

The aim of this skill test is to help you assess whether you understand [CSS selectors](/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors).

To complete these tasks you should only edit the CSS, not the HTML.

> [!NOTE]
> To get help, read our [Test your skills](/en-US/docs/Learn_web_development#test_your_skills) usage guide. You can also reach out to us using one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## Task 1

To complete the task:

1. Make the `<h1>` headings blue.
2. Give `<h2>` headings a blue background and white text.
3. Cause text wrapped in a `<span>` to have a font-size of `200%`.

```html live-sample___selectors1-start live-sample___selectors1-finish
<div class="container">
  <h1>This is a heading</h1>
  <p>
    Veggies es <span>bonus vobis</span>, proinde vos postulo essum magis
    kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean
    garlic.
  </p>
  <h2>A level 2 heading</h2>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
</div>
```

```css live-sample___selectors1-start live-sample___selectors1-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
/* Add styles here */
```

The starting point of the task looks like this:

{{EmbedLiveSample("selectors1-start", "", "370px")}}

The finished task should look like this:

{{EmbedLiveSample("selectors1-finish", "", "400px")}}

<details>
<summary>Click here to show the solution</summary>

You need to target the `h1`, `h2` and `span` selectors to change their color or size.

```css live-sample___selectors1-finish
h1 {
  color: blue;
}

h2 {
  background-color: blue;
  color: white;
}

span {
  font-size: 200%;
}
```

</details>

## Task 2

To complete the task:

1. Give the element with an id of `special` a yellow background.
2. Give the element with a class of `alert` a `2px` solid grey border.
3. If the element with a class of `alert` also has a class of `stop`, make the background red.
4. If the element with a class of `alert` also has a class of `go`, make the background green.

```html live-sample___selectors2-start live-sample___selectors2-finish
<div class="container">
  <h1>This is a heading</h1>
  <p>
    Veggies es <span class="alert">bonus vobis</span>, proinde vos postulo
    <span class="alert stop">essum magis</span> kohlrabi welsh onion daikon
    amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <h2 id="special">A level 2 heading</h2>
  <p>Gumbo beet greens corn soko endive gumbo gourd.</p>
  <h2>Another level 2 heading</h2>
  <p>
    <span class="alert go">Parsley shallot</span> courgette tatsoi pea sprouts
    fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber
    earthnut pea peanut soko zucchini.
  </p>
</div>
```

```css live-sample___selectors2-start live-sample___selectors2-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
/* Add styles here */
```

The starting point of the task looks like this:

{{EmbedLiveSample("selectors2-start", "", "480px")}}

The finished task should look like this:

{{EmbedLiveSample("selectors2-finish", "", "480px")}}

<details>
<summary>Click here to show the solution</summary>

This tests that you understand the difference between class and id selectors and also how to target multiple classes on an item.

```css live-sample___selectors2-finish
#special {
  background-color: yellow;
}

.alert {
  border: 2px solid grey;
}

.alert.stop {
  background-color: red;
}

.alert.go {
  background-color: green;
}
```

</details>

## Task 3

To complete the task:

1. Style links, making the link-state orange, visited links green, and remove the underline on hover.
2. Make the first element inside the container `font-size: 150%` and the first line of that element red.
3. Stripe every other row in the table by selecting these rows and giving them a background color of `#333333` and foreground white.

```html live-sample___selectors3-start live-sample___selectors3-finish
<div class="container">
  <p>
    Veggies es <a href="http://example.com">bonus vobis</a>, proinde vos postulo
    essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon
    azuki bean garlic.
  </p>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
  <table>
    <tbody>
      <tr>
        <th>Fruits</th>
        <th>Vegetables</th>
      </tr>
      <tr>
        <td>Apple</td>
        <td>Potato</td>
      </tr>
      <tr>
        <td>Orange</td>
        <td>Carrot</td>
      </tr>
      <tr>
        <td>Tomato</td>
        <td>Parsnip</td>
      </tr>
      <tr>
        <td>Kiwi</td>
        <td>Onion</td>
      </tr>
      <tr>
        <td>Banana</td>
        <td>Beet</td>
      </tr>
    </tbody>
  </table>
</div>
```

```css live-sample___selectors3-start live-sample___selectors3-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
* {
  box-sizing: border-box;
}

table {
  border-collapse: collapse;
  width: 300px;
}

td,
th {
  padding: 0.2em;
  text-align: left;
}

/* Add styles here */
```

The starting point of the task looks like this:

{{EmbedLiveSample("selectors3-start", "", "440px")}}

The finished task should look like this:

{{EmbedLiveSample("selectors3-finish", "", "540px")}}

<details>
<summary>Click here to show the solution</summary>

Apply a pseudo-class (`:first-child`) and pseudo-element (`::first-line`) to the content.
Style the `:link`, `:visited`, and `:hover` states of the `a` element, and create striped table rows using the `:nth-child` pseudo-class.

```css live-sample___selectors3-finish
.container p:first-child {
  font-size: 150%;
}

.container p:first-child::first-line {
  color: red;
}

a:link {
  color: orange;
}

a:visited {
  color: green;
}

a:hover {
  text-decoration: none;
}

tr:nth-child(even) {
  background-color: #333333;
  color: white;
}
```

</details>

## Task 4

To complete the task:

1. Make any paragraph that directly follows an `<h2>` element red.
2. Style list items that are a direct child of the `<ul>` with a class of `list` as follows:
   - Remove their bullets.
   - Give them a `1px` grey bottom border.

```html live-sample___selectors4-start live-sample___selectors4-finish
<div class="container">
  <h2>This is a heading</h2>
  <p>This paragraph comes after the heading.</p>
  <p>This is the second paragraph.</p>

  <h2>Another heading</h2>
  <p>This paragraph comes after the heading.</p>
  <ul class="list">
    <li>One</li>
    <li>
      Two
      <ul>
        <li>2.1</li>
        <li>2.2</li>
      </ul>
    </li>
    <li>Three</li>
  </ul>
</div>
```

```css live-sample___selectors4-start live-sample___selectors4-finish
body {
  font: 1.2em / 1.5 sans-serif;
}

/* Add styles here */
```

The starting point of the task looks like this:

{{EmbedLiveSample("selectors4-start", "", "500px")}}

The finished task should look like this:

{{EmbedLiveSample("selectors4-finish", "", "500px")}}

<details>
<summary>Click here to show the solution</summary>

This task checks that you understand how to use different combinators.
Here's an appropriate solution:

```css live-sample___selectors4-finish
h2 + p {
  color: red;
}

.list > li {
  list-style: none;
  border-bottom: 1px solid #cccccc;
}
```

</details>

## Task 5

To complete the task, provide solutions for the following challenges using attribute selectors:

1. Target the `<a>` element with a `title` attribute and make the border pink (`border-color: pink`).
2. Target the `<a>` element with an `href` attribute that contains the word `contact` somewhere in its value and make the border orange (`border-color: orange`).
3. Target the `<a>` element with an `href` value starting with `https` and give it a green border (`border-color: green`).

```html live-sample___selectors5-start live-sample___selectors5-finish
<ul>
  <li><a href="https://example.com">Link 1</a></li>
  <li><a href="http://example.com" title="Visit example.com">Link 2</a></li>
  <li><a href="/contact">Link 3</a></li>
  <li><a href="../contact/index.html">Link 4</a></li>
</ul>
```

```css live-sample___selectors5-start live-sample___selectors5-finish
body {
  font: 1.2em / 1.5 sans-serif;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin-bottom: 0.5em;
}

a {
  display: block;
  padding: 0.5em;
}

a {
  border: 5px solid grey;
}

/* Add styles here */
```

The starting point of the task looks like this:

{{EmbedLiveSample("selectors5-start", "", "300px")}}

The finished task should look like this:

{{EmbedLiveSample("selectors5-finish", "", "300px")}}

<details>
<summary>Click here to show the solution</summary>

- To select elements with a title attribute we can add title inside the square brackets (`a[title]`), which will select the second link, which is the only one with a title attribute.

- Target the `<a>` element with an `href` attribute which contains the word "contact" anywhere in its value and make the border orange (`border-color: orange`).
  There are two things we want to match here, the href value `/contact` and also `../contact`. So we need to match the string "contact" anywhere in the value using `*=`. This will select the third and fourth links.

- Target the `<a>` element with an href value starting with `https` and give it a green border (`border-color: green`).
  Look for an `href` value which starts with "https", so use `^=` to only select the first link.

```css live-sample___selectors5-finish
a[title] {
  border-color: pink;
}
a[href*="contact"] {
  border-color: orange;
}
a[href^="https"] {
  border-color: green;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics")}}
