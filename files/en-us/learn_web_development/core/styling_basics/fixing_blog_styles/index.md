---
title: "Challenge: Fixing blog page styles"
short-title: "Challenge: Fixing blog styles"
slug: Learn_web_development/Core/Styling_basics/Fixing_blog_styles
page-type: learn-module-assessment
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}

In this challenge we give you a basic blog page example that is partially styled. We need you to fix some problems with the existing CSS and add some styles to finish it off. Along the way we will test your knowledge of selectors, the box model, and conflicts/cascade.

## Starting point

To begin, click the **Play** button in one of the code panels below to open the provided example in the MDN Playground. You'll then follow the instructions in the [Project brief](#project_brief) section to style the page appropriately.

```html live-sample___blog-start live-sample___blog-finish
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Sizing a blog page challenge</title>
    <link href="style.css" rel="stylesheet" />
  </head>
  <body>
    <header>
      <h1>A most excellent blog</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <section id="introduction" class="highlight">
        <h2>Our newest post</h2>
        <p>
          Laoreet lorem curae lectus blandit conubia vel semper laoreet congue
          at taciti.
          <a href="#">Phasellus hac consectetur iaculis dui</a> sapien iaculis
          hac ultricies per luctus. Suscipit mattis lacus semper in porta
          phasellus sollicitudin ipsum fermentum phasellus sapien. Inceptos
          etiam placerat porttitor finibus auctor at platea hendrerit aenean
          laoreet elit lorem odio.
        </p>
      </section>
      <section>
        <h2>Exciting content</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin
          tortor purus <a href="#">platea sit eu id</a> nisi litora libero.
          Neque vulputate consequat ac amet augue blandit maximus aliquet
          congue. Pharetra vestibulum posuere ornare
          <a href="#">faucibus fusce dictumst</a> orci aenean eu facilisis ut
          volutpat commodo senectus purus himenaeos fames primis convallis nisi.
        </p>
        <ul>
          <li>Lorem ipsum dolor</li>
          <li>Neque vulputate consequat</li>
          <li>Phasellus fermentum malesuada</li>
          <li>Curabitur semper venenatis</li>
          <li>Duis lectus porta mattis</li>
        </ul>
        <p>
          Phasellus fermentum malesuada phasellus netus dictum aenean placerat
          egestas amet.
          <a href="#">Ornare taciti semper dolor tristique</a> morbi. Sem leo
          tincidunt aliquet semper eu lectus scelerisque quis. Sagittis vivamus
          mollis nisi mollis enim fermentum laoreet.
        </p>
        <h2>More exciting content</h2>
        <p>
          Curabitur semper venenatis lectus viverra ex dictumst nulla maximus.
          Primis iaculis elementum conubia feugiat venenatis dolor augue ac
          blandit nullam ac <a href="#">phasellus turpis</a> feugiat mollis.
          Duis lectus porta mattis imperdiet vivamus augue litora lectus arcu.
          Justo torquent pharetra volutpat ad blandit bibendum
          <a href="#">accumsan nec elit cras</a> luctus primis ipsum gravida
          class congue.
        </p>
        <p>
          Vehicula etiam elementum finibus enim duis feugiat commodo adipiscing
          tortor <a href="#">tempor elit</a>. Et mollis consectetur habitant
          turpis tortor consectetur adipiscing vulputate dolor lectus iaculis
          convallis adipiscing. Nam hendrerit
          <a href="#">dignissim condimentum ullamcorper diam</a> morbi eget
          consectetur odio in sagittis.
        </p>
      </section>
      <section id="summary" class="highlight">
        <h2>Summary</h2>
        <p>
          Et arcu tortor lorem ac primis ac suspendisse lectus nulla. Habitant
          fermentum <a href="#">leo facilisis lobortis</a> risus lobortis
          maximus gravida. Euismod fames maecenas imperdiet senectus
          <a href="#">nec nisi amet pellentesque felis</a> vitae vestibulum
          integer nec tellus. Eros posuere lacinia et tellus quis fames mattis
          quisque mauris placerat rhoncus pretium sed consectetur
          <a href="#">convallis</a>.
        </p>
      </section>
    </main>
    <footer class="highlight">
      <p>©️ 2025 Nobody</p>
    </footer>
  </body>
</html>
```

```css live-sample___blog-start
/* Basic type and text */

body {
  font: 1.2em / 1.5 system-ui;
  width: clamp(480px, 70%, 1000px);
  margin: 0 auto;
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.5em;
}

a {
  color: red;
}

a:hover {
  text-decoration: none;
}

/* Nav menu */

ul {
  display: flex;
  padding: 0;
  list-style-type: none;
  justify-content: space-between;
  gap: 10px;
}

li {
  flex: 1;
}

a {
  text-decoration: none;
  color: black;
  background-color: yellowgreen;
  text-align: center;
  padding: 10px;
}

a:hover {
  background-color: goldenrod;
}

/* Intro and summary */

.highlight {
  margin-top: 0;
  background-color: darkslategray;
  color: cornsilk;
}

.highlight a {
  color: purple;
}

/* Footer */

footer {
  margin-top: 20px;
  background-color: goldenrod;
  text-shadow: 1px 1px 1px black;
}
```

{{embedlivesample("blog-start", "100%", 500)}}

## Project brief

The basic blog example you've been given isn't finished, and the existing code has some problems. Follow the steps below to complete the project.

1. We want every element on this page to use the alternative box model. Add a rule to the stylesheet that does this.

2. There is a problem with the rules for the nav menu — the styles are mostly OK, but they are affecting the other unordered list and content links, making them look bad! Can you adjust the selectors for these rules so that they only target the nav menu?

3. Actually, there is another problem with the nav menu — the `<a>` elements are not spanning the full width of their `<li>` element parents like they are meant to. Can you adjust the way they are displaying so that they span the full width?

4. For both the nav menu links and the regular content links, we are setting a different style on hover so that mouse users can see which link they are hovering over. This presents an accessibility issue for keyboard users, who won't be able to see those styles. Can you alter the selectors in the relevant rules so that these styles are also applied when a keyboard user tabs to the links?

5. We want the introduction, summary, and footer to have `20px` of padding on all sides. Make this happen by adding a single declaration somewhere in the stylesheet.

6. Add a rule that selects the first line of every paragraph that appears right after a second-level heading, and turns it bold.

7. As a follow-on from the previous question, can you think of a way to bold the first line in every paragraph following a second-level heading, but only when the parent element is not the introduction, summary, or footer? You can do this in a few different ways, some more concise than others.

8. Further down, you'll see that we are using `.highlight a` to select the `<a>` elements inside the introduction and summary, and coloring them `purple` inside the associated rule. But this is no good — the color contrast is terrible. Assuming you are not allowed to change or remove that rule, can you add another rule above it in the source order that colors the `<a>` elements `yellow`? Being above it in the source order, it will have to have a higher specificity.

9. You'll see that we are trying to select the `<footer>` at the bottom of the stylesheet and give it a text shadow, some margin to move it away from the summary, and a different background color to make it stand out. However, it is not getting the desired margin and background color styles because the `.highlight` rule has a higher specificity, so its declarations win. Can you alter the selector to make sure those styles get applied?

## Hints and tips

- Use the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) to catch unintended mistakes in your CSS — mistakes you might have otherwise missed — so that you can fix them.
- You don't need to alter the HTML in any way.

## Example

The finished project should look like this:

{{embedlivesample("blog-finish", "100%", 500)}}

<details>
<summary>Click here to show the solution</summary>

The finished CSS looks like so:

```css live-sample___blog-finish
/* Basic type and text */

/* 1. Set alternative box model on all elements */
* {
  box-sizing: border-box;
}

body {
  font: 1.2em / 1.5 system-ui;
  width: clamp(480px, 70%, 1000px);
  margin: 0 auto;
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.5em;
}

a {
  color: red;
}

/* 4. Set :hover styles to also apply on :focus */
a:hover,
a:focus {
  text-decoration: none;
}

/* 6, 7. bold ::first-line of each <p> adjacent to an <h2>
Use :not() selector to specify only those inside a
<section> that doesn't have the highlight class */
section:not(.highlight) h2 + p::first-line {
  font-weight: bold;
}

/*

6, 7. OR set it on all first, then remove it from those
inside a <section class="highlight"> afterwards

section h2 + p::first-line {
  font-weight: bold;
}

.highlight h2 + p::first-line {
  font-weight: normal;
}

*/

/* Nav menu */

/* 2. Set scope of nav styles to only
elements that are descendants of <nav> */

nav ul {
  display: flex;
  padding: 0;
  list-style-type: none;
  justify-content: space-between;
  gap: 10px;
}

nav li {
  flex: 1;
}

nav a {
  text-decoration: none;
  color: black;
  background-color: yellowgreen;
  /* 3. Set <a> elements to display: block so they span
  100% of parent width by default */
  display: block;
  text-align: center;
  padding: 10px;
}

/* 4. Set :hover styles to also apply on :focus */
nav a:hover,
nav a:focus {
  background-color: goldenrod;
}

/* Intro and summary */

.highlight {
  margin-top: 0;
  background-color: darkslategray;
  color: cornsilk;
  /* 5. highlight class is set on introduction, summary, and footer.
  This is where to set the padding for all of them */
  padding: 20px;
}

/* 8. ID selectors have a higher specificity than class selectors, so will
override styles even when earlier in the source order */
#introduction a,
#summary a {
  color: yellow;
}

.highlight a {
  color: purple;
}

/* Footer */

/* 9. Adding .highlight to the selector increases
the specificity so now this rule's styles win */
footer.highlight {
  margin-top: 20px;
  background-color: goldenrod;
  text-shadow: 1px 1px 1px black;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}
