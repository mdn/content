---
title: "Test your skills: CSS and JavaScript accessibility"
short-title: CSS and JavaScript
slug: Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript
page-type: learn-module-assessment
sidebar: learnsidebar
---

The aim of this skill test is to help you assess whether you've understood our [CSS and JavaScript accessibility best practices](/en-US/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript) article.

> [!NOTE]
> If you get stuck with any of the tasks, you can reach out to us in one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## CSS accessibility 1

In the first task you are presented with a list of links. However, their accessibility is pretty bad — there is no way to really tell that they are links, or to tell which one the user is focused on. We'd like you to assume that the existing ruleset with the `a` selector is supplied by some CMS, and that you can't change it.

To complete the task:

1. Click **"Play"** in the code block below to edit the example in the MDN Playground.
2. Create new rules to make the links look and behave like links, and for the user to be able to tell which link they are focused on in the list.

> [!CALLOUT]
>
> You can also [download the starting point for this task](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/css/css-a11y1-download.html) to work in your own editor or in an online editor (such as [CodePen](https://codepen.io/) or [JSFiddle](https://jsfiddle.net/)).

If you make a mistake, you can clear your work using the _Reset_ button in the MDN Playground. If you get really stuck, you can view the solution below the live output.

<!-- Code shared across examples -->

```css hidden live-sample___css-js-ally-1 live-sample___css-js-ally-2 live-sample___css-js-ally-3
body {
  background-color: #fff;
  color: #333;
  font:
    1em / 1.4 Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif;
  padding: 1em;
  margin: 0;
}

* {
  box-sizing: border-box;
}
```

<!-- Example-specific code -->

```html live-sample___css-js-ally-1
<ul>
  <li><a href="">Animals</a></li>
  <li><a href="">Computers</a></li>
  <li><a href="">Diversity and inclusion</a></li>
  <li><a href="">Food</a></li>
  <li><a href="">Medicine</a></li>
  <li><a href="">Music</a></li>
</ul>
```

```css live-sample___css-js-ally-1
a {
  text-decoration: none;
  color: #666;
  outline: none;
}

/* Don't edit the above code! */

/* Add your code here */
```

{{ EmbedLiveSample("css-js-ally-1", "100%", 200) }}

<details>
<summary>Click here to show the solution</summary>

Your finished CSS could look something like this:

```css
/* ... */
/* Don't edit the above code! */

li a {
  text-decoration: underline;
  color: rgb(150, 0, 0);
}

li a:hover,
li a:focus {
  text-decoration: none;
  color: rgb(255, 0, 0);
}
```

</details>

## CSS accessibility 2

In this next task you are presented with a simple bit of content — just headings and paragraphs. There are accessibility issues with the colors and sizing of the text, and we'd like you to fix them.

To complete the task:

1. Click **"Play"** in the code block below to edit the example in the MDN Playground.
2. Think about what the problems are, and which guidelines state the acceptable values for color and sizing.
3. Update the CSS with new values for the color and font-size to fix the problem.
4. Test the code to make sure the problem is now fixed. Explain what tools or methods you used to select the new values and test the code.

> [!CALLOUT]
>
> You can also [download the starting point for this task](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/css/css-a11y2-download.html) to work in your own editor or in an online editor.

If you make a mistake, you can clear your work using the _Reset_ button in the MDN Playground. If you get really stuck, you can view the solution below the live output.
<!-- spellchecker: disable -->
```html live-sample___css-js-ally-2
<main>
  <h1>I am the eggman</h1>

  <p>
    Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.
    Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm
    hempen halter furl.
  </p>

  <h2>They are the eggman</h2>

  <p>
    Swab barque interloper chantey doubloon starboard grog black jack gangway
    rutters.
  </p>

  <h2>I am the walrus</h2>

  <p>
    Deadlights jack lad schooner scallywag dance the hempen jig carouser
    broadside cable strike colors.
  </p>
</main>
```

```css live-sample___css-js-ally-2
/* Edit the CSS to fix the a11y problems */

main {
  padding: 20px;
  background-color: red;
}

h1,
h2,
p {
  color: #999;
}

h1 {
  font-size: 2vw;
}

h2 {
  font-size: 1.5vw;
}

p {
  font-size: 1.2vw;
}
```

{{ EmbedLiveSample("css-js-ally-2", "100%", 240) }}

<details>
<summary>Click here to show the solution</summary>

1. The problems are:
   - The color contrast is not acceptable, as per WCAG criteria [1.4.3 (AA)](https://www.w3.org/TR/WCAG21/#contrast-minimum) and [1.4.6 (AAA)](https://www.w3.org/TR/WCAG21/#contrast-enhanced).
   - The text is sized using `vw` units, which means that it is not zoomable in most browsers. [WCAG 1.4.4 (AA)](https://www.w3.org/TR/WCAG21/#resize-text) states that text should be resizable.
2. To fix the code, you need to
   - Choose a better contrasting set of background and foreground colors.
   - Use some different units to size the text (such as `rem` or even `px`), or even implement something that uses a combination of `vw` and other units, if you want it resizable but still relative to the viewport size.
3. For testing:
   - You can test color contrast using a tool such as [aXe](https://www.deque.com/axe/), The [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/), or even a simple standalone web page tool like the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).
   - For text resizing, you'd need to load the example in a browser and try to resize it. Resizing `vw` unit-sized text works in Safari, but not in Firefox or Chromium-based browsers.

For the updated code, something like this would fix the color contrast:

```css
main {
  padding: 20px;
  background-color: red;
}

h1,
h2,
p {
  color: black;
}
```

And something like this would work for the font sizing:

```css
h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 2rem;
}

p {
  font-size: 1.2rem;
}
```

Or this, if you want to do something a bit cleverer that gives you resizable viewport-relative text:

```css
h1 {
  font-size: calc(1.5vw + 1rem);
}

h2 {
  font-size: calc(1.2vw + 0.7rem);
}

p {
  font-size: calc(1vw + 0.4rem);
}
```

</details>

## JavaScript accessibility 1

In our final accessibility task, you have some JavaScripting to do. We have an app that presents a list of animal names. Clicking one of the animal names causes a further description of that animal to appear in a box below the list.

But it is not very accessible — in its current state you can only operate it with the mouse. We'd like you to add some HTML and JavaScript to make it keyboard accessible too.

Click **"Play"** in the code block below to edit the example in the MDN Playground, and make the required changes.

> [!CALLOUT]
>
> You can also [download the starting point for this task](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/js/js/js1-download.html) to work in your own editor or in an online editor.

If you make a mistake, you can clear your work using the _Reset_ button in the MDN Playground. If you get really stuck, you can view the solution below the live output.

```html live-sample___css-js-ally-3
<section class="preview">
  <div class="animal-list">
    <h1>Animal summaries</h1>

    <p>
      The following list of animals can be clicked to display a description of
      that animal.
    </p>

    <ul>
      <li
        data-description="A type of wild mountain goat, with large recurved horns, found in Eurasia, North Africa, and East Africa.">
        Ibex
      </li>
      <li
        data-description="A medium-sized marine mammal, similar to a manatee, but with a Dolphin-like tail.">
        Dugong
      </li>
      <li
        data-description="A rare marsupial, which looks rather like a tiny kangaroo, measuring around 50 to 75 centimeters.">
        Quokka
      </li>
    </ul>
  </div>

  <div class="animal-description">
    <h2></h2>

    <p></p>
  </div>
</section>
```

```css hidden live-sample___css-js-ally-3
p {
  color: purple;
  margin: 0.5em 0;
}

li {
  cursor: pointer;
}
```

```js live-sample___css-js-ally-3
const listItems = document.querySelectorAll("li");
const descHeading = document.querySelector(".animal-description h2");
const descPara = document.querySelector(".animal-description p");

listItems.forEach(function (item) {
  item.addEventListener("mouseup", handleSelection);
});

function handleSelection(e) {
  const heading = e.target.textContent;
  const description = e.target.getAttribute("data-description");
  descHeading.textContent = heading;
  descPara.textContent = description;
}
```

{{ EmbedLiveSample("css-js-ally-3", "100%", 400) }}

<details>
<summary>Click here to show the solution</summary>

1. To begin with, you'll need to add `tabindex="0"` to the list items to make them focusable via the keyboard.
2. Then you'll need to add in another event listener inside the `forEach()` loop, to make the code respond to keys being pressed while the list items are selected. It is probably a good idea to make it respond to a specific key, such as "Enter", in which case something like the following is probably acceptable:

```js
item.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    handleSelection(e);
  }
});
```

</details>
