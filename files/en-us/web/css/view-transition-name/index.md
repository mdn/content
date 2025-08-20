---
title: view-transition-name
slug: Web/CSS/view-transition-name
page-type: css-property
browser-compat: css.properties.view-transition-name
sidebar: cssref
---

The **`view-transition-name`** [CSS](/en-US/docs/Web/CSS) property specifies the [view transition](/en-US/docs/Web/API/View_Transition_API) snapshot that selected elements will participate in. This enables you to animate those elements separately from the rest of the page, which uses the default cross-fade animation during a view transition. You can then define custom animation styles for these elements.

## Syntax

```css
/* <custom-ident> value examples */
view-transition-name: header;
view-transition-name: figure-caption;

/* Keyword value */
view-transition-name: none;
view-transition-name: match-element;

/* Global values */
view-transition-name: inherit;
view-transition-name: initial;
view-transition-name: revert;
view-transition-name: revert-layer;
view-transition-name: unset;
```

### Values

- {{cssxref("custom-ident")}}
  - : An identifying name that causes the selected element to participate in a separate snapshot from the root snapshot. The `<custom-ident>` cannot be `auto`, `match-element`, `none`, or a [CSS-wide keyword](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css-wide_keywords) value.
- `match-element`
  - : The browser automatically assigns a unique name to the selected element. This name is used to snapshot the element separately from all other elements on the page. (This name is internal and cannot be read from the DOM.)
- `none`
  - : The selected element will not participate in a separate snapshot, unless it has a parent element with a `view-transition-name` set, in which case it will be snapshotted as part of that element.

## Description

By default, when a view transition is applied to a web app, all changes to the UI that occur during that transition are snapshotted and animated together. This is the default — or `root` — snapshot (see [The view transition pseudo-element tree](/en-US/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree)). By default, this animation is a smooth cross-fade, which can be seen in action in the [View Transitions SPA demo](https://mdn.github.io/dom-examples/view-transitions/spa/).

If you want certain elements to be animated differently from the `root` snapshot during the view transition, you can do so by giving them a different `view-transition-name`, for example:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

You can then specify which animations you want for the before and after snapshots using the relevant view transition pseudo-elements — {{cssxref("::view-transition-old()")}} and {{cssxref("::view-transition-new()")}}. For example:

```css
::view-transition-old(figure-caption) {
  animation: 0.25s linear both shrink-x;
}

::view-transition-new(figure-caption) {
  animation: 0.25s 0.25s linear both grow-x;
}
```

If you don't want an element to be snapshotted separately, you can specify a `view-transition-name` value of `none`:

```css
.dont-animate-me {
  view-transition-name: none;
}
```

The `view-transition-name` `<custom-ident>` must be unique for each rendered element taking part in the view transition. If two rendered elements have the same `view-transition-name` at the same time, the {{domxref("ViewTransition.ready")}} {{JSxRef("Promise")}} will reject and the transition will be skipped.

### Specifying `view-transition-name` values automatically

Sometimes you will want to animate multiple UI elements separately in a view transition. This is often the case when you have a list of elements on a page and want to rearrange them in some way:

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>

  <!-- ... -->

  <li>Item 99</li>
</ul>
```

Giving each one a unique name can be inconvenient, especially as the number of elements gets larger:

```css-nolint
li:nth-child(1) {
  view-transition-name: item1;
}
li:nth-child(2) {
  view-transition-name: item2;
}
li:nth-child(3) {
  view-transition-name: item3;
}
li:nth-child(4) {
  view-transition-name: item4;
}

/* ... */

li:nth-child(99) {
  view-transition-name: item99;
}
```

To get around this problem, you can use the `match-element` value, which causes the browser to give each selected element a unique internal `view-transition-name`:

```css
li {
  view-transition-name: match-element;
}
```

Because `match-element` assigns automatic `view-transition-name` values based on element identity, it can only be used for same-document view transitions. The auto-generated internal identifiers are not transferrable across different elements or documents.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic `view-transition-name` usage

This example comes from the [View Transitions SPA demo](https://mdn.github.io/dom-examples/view-transitions/spa/), which is a basic image gallery. The [Basic SPA view transition](/en-US/docs/Web/API/View_Transition_API/Using#basic_spa_view_transition) provides a more detailed explanation of how this demo works.

Most of the UI changes are animated using the `root` transition snapshot. However, the `<figcaption>` is given a `view-transition-name` of `figure-caption` to allow it to be animated differently from the rest of the page:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

The following code applies a custom animation just to the `<figcaption>`:

```css
@keyframes grow-x {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes shrink-x {
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
}

::view-transition-group(figure-caption) {
  height: auto;
  right: 0;
  left: auto;
  transform-origin: right center;
}

::view-transition-old(figure-caption) {
  animation: 0.25s linear both shrink-x;
}

::view-transition-new(figure-caption) {
  animation: 0.25s 0.25s linear both grow-x;
}
```

We create a custom CSS animation and apply it to the `::view-transition-old(figure-caption)` and `::view-transition-new(figure-caption)` pseudo-elements. We also apply other styles to keep them both in the same place and to stop the default styling from interfering with our custom animations.

### Using the `match-element` value

This example contains a list of technologies–HTML, CSS, SVG, and JS–that are displayed in a sidebar next to a main content area, which starts out empty. Clicking a technology's heading animates its content into the adjoining content area that shows more details.

#### HTML

The {{htmlelement("main")}} element contains an [unordered list](/en-US/docs/Web/HTML/Reference/Elements/ul) and an {{htmlelement("article")}} element. The multiple child {{htmlelement("li")}} elements inside the list each contain an {{htmlelement("a")}} element inside a [heading](/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements).

```html
<main class="match-element-applied">
  <ul>
    <li>
      <h2><a href="#">HTML</a></h2>
      <h3>HyperText Markup Language</h3>
      <p>
        HyperText Markup Language (HTML) is the most basic building block of the
        web. It defines the meaning and structure of web content. HTML provides
        the fundamental building blocks for structuring web documents and apps.
      </p>
    </li>
    <li>
      <h2><a href="#">CSS</a></h2>
      <h3>Cascading Style Sheets</h3>
      <p>
        Cascading Style Sheets (CSS) is a stylesheet language used to describe
        the presentation of a document written in HTML or XML (including XML
        dialects such as SVG, MathML or XHTML). CSS describes how elements
        should be rendered on screen, on paper, in speech, or on other media.
      </p>
    </li>
    <li>
      <h2><a href="#">SVG</a></h2>
      <h3>Scalable Vector Graphics</h3>
      <p>
        Scalable Vector Graphics (SVG) is an XML-based markup language for
        describing two-dimensional based vector graphics.
      </p>
    </li>
    <li>
      <h2><a href="#">JS</a></h2>
      <h3>JavaScript</h3>
      <p>
        JavaScript (JS) is the web's native programming language. JavaScript is
        a lightweight, interpreted (or just-in-time compiled) programming
        language with first-class functions. While it is most well-known as the
        scripting language for web pages, many non-browser environments, such as
        Node.js, also use it.
      </p>
    </li>
  </ul>
  <article></article>
</main>
```

```html hidden
<form>
  <label for="match-element-checkbox">
    Apply <code>match-element</code> to list items?
  </label>
  <input type="checkbox" id="match-element-checkbox" checked />
</form>
```

#### CSS

We use [flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout) to lay out the `<li>` and the `<article>` side by side, and to make the list items share equal amount of space in the first column. The list takes up 35% of the container's width, while the `<article>` fills the remaining available horizontal space.

```css hidden
/* General styles and resets */
* {
  box-sizing: border-box;
  font-size: 0.9rem;
}

html {
  font-family: Arial, Helvetica, sans-serif;
  height: 100%;
}

body {
  margin: 0;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
li h2 {
  margin: 0;
}

ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

li {
  overflow: hidden;
  container-type: inline-size;
}

li p {
  display: none;
}

li.active-item p {
  display: block;
}

li:nth-child(1) {
  background-color: #cbc0d3;
  border: 20px solid #cbc0d3;
}

li:nth-child(2) {
  background-color: #efd3d7;
  border: 20px solid #efd3d7;
}

li:nth-child(3) {
  background-color: #feeafa;
  border: 20px solid #feeafa;
}

li:nth-child(4) {
  background-color: #dee2ff;
  border: 20px solid #dee2ff;
}

/* Links */

a {
  text-decoration: none;
  color: rgb(0 0 255 / 0.8);
}

a:hover,
a:focus {
  color: rgb(100 100 255);
}

/* Form and checkbox styles */
form {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
  background-color: white;
  padding: 10px;
  border: 1px solid black;
}
```

```css
main {
  container-type: inline-size;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 2cqw;
  position: relative;
}

ul {
  width: 35cqw;
  display: flex;
  flex-direction: column;
  gap: 1cqw;
}

article {
  flex: 1;
}

li {
  flex: 1;
}
```

We also define a rule that selects elements with the `active-item` class. When this class is applied to an element, the rule causes it to be positioned exactly over the top of the `<article>` element. This class will be applied to the list items via JavaScript when their links are clicked, which will initiate a view transition.

```css
.active-item {
  position: absolute;
  z-index: 1;
  translate: 37cqw;
  width: calc(100% - 37cqw);
  height: 100%;
}
```

By default, all elements in a view transition are animated together in a single cross-fade. In this example, however, we don't want this — we want each list item to have its own movement animation. We can achieve this by applying `view-transition-name: match-element` to every list item:

```css
.match-element-applied li {
  view-transition-name: match-element;
}
```

The `match-element-applied` class is applied to the `<main>` element by default, which is why the checkbox in the Result frame is initially selected. If you uncheck it, the class is removed and the default cross-fade animation comes into effect instead. You can toggle the checkbox to compare the default animation with the one applied when `view-transition-name: match-element` is used.

Next, we customize the animation by using the {{cssxref("::view-transition-group()")}} pseudo-element to apply an {{cssxref("animation-duration")}} to all the view transition groups (signified by the `*` identifier) and give all the old and new snapshots a {{cssxref("height")}} of `100%`. This works around differences in the aspect ratios of the old and new snapshots and makes the animations look smoother:

```css
::view-transition-group(*) {
  animation-duration: 0.5s;
}

html::view-transition-old(*),
html::view-transition-new(*) {
  height: 100%;
}
```

#### JavaScript

In this example, the `active-item` class is applied to the list items when their links are clicked; this is achieved via the `updateActiveItem()` function:

```js
const mainElem = document.querySelector("main");
let prevElem;
let checkboxElem = document.querySelector("input");

// View transition code
function updateActiveItem(event) {
  // Get the list item that contains the clicked link
  const clickedElem = event.target.parentElement.parentElement;

  // Set the active-item class on the list item
  clickedElem.className = "active-item";

  // Keep track of the previous item that was clicked, if any.
  // Remove the active-item class from the previous item so that only
  // one list item is placed over the <article> at any one time
  if (prevElem === clickedElem) {
    prevElem.className = "";
    prevElem = undefined;
  } else if (prevElem) {
    prevElem.className = "";
    prevElem = clickedElem;
  } else {
    prevElem = clickedElem;
  }
}

mainElem.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent iframe from scrolling when clicked
  // Do nothing unless a link is clicked inside the <main> element
  if (event.target.tagName !== "A") {
    return;
  }

  // Run updateActiveItem() on its own if view transitions are not supported
  if (!document.startViewTransition) {
    updateActiveItem(event);
  } else {
    // Run updateActiveItem() via startViewTransition()
    const transition = document.startViewTransition(() =>
      updateActiveItem(event),
    );
  }
});

// Toggle the class on <main> to control whether or not match-element is applied

checkboxElem.addEventListener("change", () => {
  mainElem.classList.toggle("match-element-applied");
});
```

Running the `updateActiveItem()` function via the `startViewTransition()` function animates the display of technology details smoothly.

#### Result

Click a technology heading in the sidebar and notice the animation effect of its content into the main content area.

There is also a checkbox, which is selected by default, so `view-transition-name: match-element` is applied. Uncheck the checkbox and click a heading again to see how the view-transition works without `view-transition-name: match-element`.

{{EmbedLiveSample("using_the-match-element_value", "", "400")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("view-transition-class")}}
- {{cssxref("::view-transition-group()")}}
- {{cssxref("::view-transition-old()")}}
- {{cssxref("::view-transition-new()")}}
- [View Transition API](/en-US/docs/Web/API/View_Transition_API)
- [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
