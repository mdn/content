---
title: "Test your skills: WAI-ARIA"
short-title: "Test your skills: WAI-ARIA"
slug: Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA
page-type: learn-module-assessment
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/WAI-ARIA_basics","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}

The aim of this skill test is to help you assess whether you've understood our [WAI-ARIA basics](/en-US/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) article.

> [!NOTE]
> To get help, read our [Test your skills](/en-US/docs/Learn_web_development#test_your_skills) usage guide. You can also reach out to us using one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## WAI-ARIA 1

In our first ARIA task, we present you with a section of non-semantic markup, which is visually meant to be a list. Assuming you are not able to change the elements used, how can you allow screen reader users to understand what it is?

To complete the task, add some WAI-ARIA semantics to make screen readers recognize the `<div>` elements as an unordered list.

<!-- Code shared across examples -->

```css hidden live-sample___aria-1 live-sample___aria-2 live-sample___aria-3
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

```html live-sample___aria-1
<p>My favorite animals:</p>

<div>
  <div>Pig</div>
  <div>Gazelle</div>
  <div>Llama</div>
  <div>Majestic moose</div>
  <div>Hedgehog</div>
</div>
```

```css live-sample___aria-1
div > div {
  padding-left: 20px;
  position: relative;
}

div > div::before {
  content: " ";
  width: 8px;
  height: 8px;
  background-color: black;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 8px;
}
```

{{ EmbedLiveSample("aria-1", "100%", 250) }}

<details>
<summary>Click here to show the solution</summary>

Your finished HTML should look something like this:

```html
<div role="list">
  <div role="listitem">Pig</div>
  <div role="listitem">Gazelle</div>
  <div role="listitem">Llama</div>
  <div role="listitem">Majestic moose</div>
  <div role="listitem">Hedgehog</div>
</div>
```

</details>

## WAI-ARIA 2

In our second WAI-ARIA task, we present a basic search form, and we want you to add in a couple of WAI-ARIA features to improve its accessibility.

To complete the task:

1. Add an attribute to allow the search form to be called out as a separate landmark on the page by screen readers, to make it easily findable.
2. Give the search input a suitable label, without explicitly adding a visible text label to the DOM.

```html live-sample___aria-2
<form>
  <input type="search" name="search" />
</form>
```

{{ EmbedLiveSample("aria-2", "100%", 100) }}

<details>
<summary>Click here to show the solution</summary>

Your finished HTML should look something like this:

```html
<form role="search">
  <input
    type="search"
    name="search"
    aria-label="Search for your favorite content on our site" />
</form>
```

</details>

## WAI-ARIA 3

For this final WAI-ARIA task, we return to an example we previously saw in the [CSS and JavaScript skill test](/en-US/docs/Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript).
As before, we have an app that presents a list of animal names. Clicking one of the animal names causes a further description of that animal to appear in a box below the list. Here, we are starting with a mouse- and keyboard-accessible version.

The problem we have now is that when the DOM changes to show a new description, screen readers cannot see what has changed. Can you update it so that description changes are announced by the screen reader?

```html live-sample___aria-3
<section class="preview">
  <div class="animal-list">
    <h1>Animal summaries</h1>

    <p>
      The following list of animals can be clicked to display a description of
      that animal.
    </p>

    <ul>
      <li
        tabindex="0"
        data-description="A type of wild mountain goat, with large recurved horns, found in Eurasia, North Africa, and East Africa.">
        Ibex
      </li>
      <li
        tabindex="0"
        data-description="A medium-sized marine mammal, similar to a manatee, but with a Dolphin-like tail.">
        Dugong
      </li>
      <li
        tabindex="0"
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

```css hidden live-sample___aria-3
p {
  color: purple;
  margin: 0.5em 0;
}

* {
  box-sizing: border-box;
}

li {
  cursor: pointer;
}
```

```js hidden live-sample___aria-3
const listItems = document.querySelectorAll("li");
const descHeading = document.querySelector(".animal-description h2");
const descPara = document.querySelector(".animal-description p");

listItems.forEach((item) => {
  item.addEventListener("mouseup", handleSelection);
  item.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      handleSelection(e);
    }
  });
});

function handleSelection(e) {
  const heading = e.target.textContent;
  const description = e.target.getAttribute("data-description");
  descHeading.textContent = heading;
  descPara.textContent = description;
}
```

{{ EmbedLiveSample("aria-3", "100%", 400) }}

<details>
<summary>Click here to show the solution</summary>

There are two ways to solve the problem outlined in this task:

- Add an `aria-live=""` attribute to the animal-description `<div>` to turn it into a live region, so when its content changes, the updated content will be read out by a screen reader. The best value is probably `assertive`, which makes the screen reader read out the updated content as soon as it changed. `polite` means that the screen reader will wait until other descriptions have finished before it starts reading out the changed content.
- Add a `role="alert"` attribute to the animal-description `<div>`, to make it have alert box semantics. This has the same effect on the screen reader as setting `aria-live="assertive"` on it.

</details>

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/WAI-ARIA_basics","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}
