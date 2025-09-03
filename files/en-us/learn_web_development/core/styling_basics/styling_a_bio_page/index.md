---
title: "Challenge: Styling a biography page"
short-title: "Challenge: Biography page"
slug: Learn_web_development/Core/Styling_basics/Styling_a_bio_page
page-type: learn-module-assessment
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics")}}

In this challenge you will style a simple biography page, testing you on some of the skills you learned in the last couple of lessons including writing selectors, coloring backgrounds, and text styling. We will also invite you to look up some basic CSS features that we haven't covered, to test your research skills.

## Starting point

To begin, click the **Play** button in one of the code panels below to open the provided example in the MDN Playground. You'll then follow the instructions in subsequent sections to style the page appropriately.

```html live-sample___style-bio-start live-sample___style-bio-finish
<h1>Jane Doe</h1>
<div class="job-title">Web Developer</div>
<p>
  Far far away, behind the word mountains, far from the countries Vokalia and
  Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
  right at the coast of the Semantics, a large language ocean.
</p>

<p>
  A small river named Duden flows by their place and supplies it with the
  necessary regelialia. It is a paradisematic country, in which roasted parts of
  sentences fly into your mouth.
</p>

<h2>Contact information</h2>
<ul>
  <li>Email: <a href="mailto:jane@example.com">jane@example.com</a></li>
  <li>Web: <a href="http://example.com">http://example.com</a></li>
  <li>Tel: <a href="tel:12345678"">123 45678</a></li>
</ul>
```

```css live-sample___style-bio-start
html {
  background-color: white;
}

body {
  font: 1.2em / 1.5 system-ui;
}
```

{{EmbedLiveSample("style-bio-start", "100%", "400px")}}

## Project brief

Follow the instructions below to style the bio. Try looking up the CSS features you'll need in the [MDN CSS reference](/en-US/docs/Web/CSS/Reference).

### Box styles

1. Give the `<body>` element a padding of `20px` on all sides and a width of `500px`.
2. Give the `<body>` element a background color of `#efefef` (a light-gray {{cssxref("&lt;hex-color>")}} value).
3. Center the `<body>` element inside the viewport by setting top- and bottom-margins of `0`, and left- and right-margins of `auto`.
4. Give the `<ul>` used for the contact details a background color of `white`, and a 5px solid purple border on all sides. Give the `<ul>` padding of `30px` on all sides to push the content away from the border.
5. Give the `<ul>` a border radius of `20px`.

### Text styles

1. Make the level one heading dark gray, using the CSS color keyword `darkslategray`, and give the heading a `10px` dotted bottom border, which uses the CSS color keyword `purple`.
2. Make the level two heading italic.
3. Give the level one heading a font size of `2rem` and the level two heading a font size of `1.5rem`.
4. Select the `<div>` using a class selector, and give it a color of `darkslategray` and a bold font weight.
5. Make the links `green`.
6. Make the links `darkgreen` while hovered over with the mouse pointer or focused via the keyboard (you'll need to use a couple of {{cssxref("pseudo-classes")}} for this).
7. Make the links lose their underline while hovered or focused.

## Hints and tips

- Use the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) to catch unintended mistakes in your CSS — mistakes you might have otherwise missed — so that you can fix them.
- Try looking up some more advanced CSS features (again, the [MDN CSS reference](/en-US/docs/Web/CSS/Reference) will be useful here) and add some more styles to your solution. Get adventurous!
- Remember that there is no wrong answer here — at this stage in your learning you can afford to have a bit of fun.

## Example

Your finished example should end up looking something like this:

{{EmbedLiveSample("style-bio-finish", "100%", "400px")}}

<details>
<summary>Click here to show the solution</summary>

The CSS applied to the finished live sample looks like this:

```css live-sample___style-bio-finish
html {
  background-color: white;
}

body {
  font: 1.2em / 1.5 system-ui;
  padding: 20px;
  width: 500px;
  background-color: #efefef;
  margin: 0 auto;
}

h1 {
  color: darkslategray;
  border-bottom: 10px dotted purple;
  font-size: 2rem;
}

h2 {
  font-style: italic;
  font-size: 1.5rem;
}

.job-title {
  color: darkslategray;
  font-weight: bold;
}

ul {
  background-color: white;
  border: 5px solid purple;
  padding: 30px;
  border-radius: 20px;
}

a {
  color: green;
}

a:hover,
a:focus {
  color: darkgreen;
  text-decoration: none;
}
```

The CSS properties we used to solve the challenge are as follows — each one links to its property page on MDN, which will give you more examples of its use.

- {{cssxref("background-color")}}
- {{cssxref("border")}} or related longhand properties.
- {{cssxref("color")}}
- {{cssxref("font-size")}}
- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- {{cssxref("margin")}} or related longhand properties.
- {{cssxref("padding")}} or related longhand properties.
- {{cssxref("text-decoration")}}
- {{cssxref("width")}}

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics")}}
