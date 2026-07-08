---
title: "Element: scrollBy() method"
short-title: scrollBy()
slug: Web/API/Element/scrollBy
page-type: web-api-instance-method
browser-compat: api.Element.scrollBy
---

{{APIRef("CSSOM view API")}}

The **`scrollBy()`** method of the {{domxref("Element")}} interface scrolls an element by the given amount.

## Syntax

```js-nolint
scrollBy(xCoord, yCoord)
scrollBy(options)
```

### Parameters

- `xCoord`
  - : The horizontal pixel value that you want to scroll by.
- `yCoord`
  - : The vertical pixel value that you want to scroll by.
- `options`
  - : An object containing the following properties:
    - `top` {{optional_inline}}
      - : Specifies the number of pixels along the Y axis to scroll the window or element.
    - `left` {{optional_inline}}
      - : Specifies the number of pixels along the X axis to scroll the window or element.
    - `behavior` {{optional_inline}}
      - : Determines whether scrolling is instant or animates smoothly. This option is a string that must take one of the following values:
        - `smooth`: The scrolling animates smoothly.
        - `instant`: The scrolling happens instantly in a single jump.
        - `auto`: The scroll behavior is determined by the computed value of the {{cssxref("scroll-behavior")}} CSS property on the element.

        If omitted, `behavior` defaults to `auto`.

### Return value

A {{jsxref("Promise")}} that fulfills with an object containing the following property:

- `interrupted`
  - : A boolean value indicating whether the scrolling operation was interrupted (`true`) or not (`false`). Such an interruption typically happens when a programmatic scroll is ongoing, and another programmatic scroll is initiated on the same element before the first one finishes.

## Examples

### Basic usage

```js
// scroll an element
element.scrollBy(300, 300);
```

Using `options`:

```js
element.scrollBy({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

### Responding to the end of the scroll

Our [element methods demo](https://mdn.github.io/dom-examples/scroll-promises/element-methods/) ([see source code](https://github.com/mdn/dom-examples/tree/main/scroll-promises/element-methods)) demonstrates how the promise return value of `scrollBy()` can be used to respond to the end of a scrolling operation. This technique is mostly useful in cases where the scrolling occurs smoothly over time (achieved by setting the [`behavior`](#behavior) option to `smooth`, or by setting the scrolling element's {{cssxref("scroll-behavior")}} property to `smooth`).

#### HTML

Our HTML includes a {{htmlelement("section")}} element containing several paragraphs of content and a {{htmlelement("div")}} element toolbar containing {{htmlelement("button")}} elements that trigger various scrolling operations on the `<section>`.

```html
<div>
  <button class="scroll">scroll() to 1000</button>
  <button class="scroll-to">scrollTo() top</button>
  <button class="scroll-by">scrollBy() 200</button>
  <button class="scroll-into-view">Scroll last &lt;p&gt; into view</button>
</div>

<section>...</section>
```

#### CSS

We give the `<section>` element a fixed {{cssxref("height")}} and an {{cssxref("overflow-y")}} value of `scroll` so that it scrolls vertically, and set its {{cssxref("scroll-behavior")}} property to `smooth` so that any scroll operations are animated smoothly over time rather than instantly.

```css
section {
  border: 1px solid black;
  padding: 20px;
  margin-top: 60px;
  height: 500px;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
```

We also create two class selectors; when a `fade-out` or `fade-in` class is applied to an element, an {{cssxref("animation")}} is applied so that it smoothly fades out or in, respectively. We also define {{cssxref("@keyframes")}} blocks to define the required {{cssxref("opacity")}} changes for those animations.

```css
.fade-out {
  animation: fade-out 0.3s linear both;
}

.fade-in {
  animation: fade-in 0.3s linear both;
}

@keyframes fade-out {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
```

The rest of the CSS is not shown, for brevity.

#### JavaScript

We start by grabbing references to the `<button>` that runs the `scrollBy()` operation, the toolbar `<div>`, and the scrolling `<section>`:

```js
const scrollByBtn = document.querySelector(".scroll-by");
const toolbar = document.querySelector("div");
const section = document.querySelector("section");
```

Next, we define a function called `isInterrupted()`, designed to run in response to a scroll operation finishing, which takes a boolean `interrupted` value as a parameter. It logs a message to the console to say that scrolling is finished and indicate whether the operation was interrupted (`interrupted` is `true`) or not. In addition, if `interrupted` is `true`, it calls an `alert()` to clearly indicate the interruption.

```js
function isInterrupted(interrupted) {
  console.log(`Scroll finished;${interrupted ? " " : " not "}interrupted`);
  if (interrupted) {
    alert("Scroll interrupted!");
  }
}
```

When the button is clicked, we immediately apply the `fade-out` class to the toolbar, causing it to fade out. We then run `scrollBy(0, 200)` on the `<section>` to scroll its content down by 200 pixels, `await`ing its promise resolution as we do so and storing the `result` in a constant. When the promise has resolved, we call `isInterrupted()` to report that the scroll operation has finished and whether it was interrupted. Finally, we apply the `fade-in` class to the toolbar, causing it to fade back in again.

```js
scrollByBtn.addEventListener("click", async () => {
  toolbar.className = "fade-out";
  const result = await section.scrollBy(0, 200);
  isInterrupted(result.interrupted);
  toolbar.className = "fade-in";
});
```

The code not relevant to `scrollBy()` is not shown, for brevity.

#### Result

Click the buttons to see the scrolling behavior. Note how the toolbar fades out when a button is pressed, and fades in again once the smooth scrolling is finished. Also try pressing one button and then quickly pressing another button before the first scrolling operation has finished. Note how, in these cases, the scrolling is reported as interrupted.

{{EmbedGHLiveSample("dom-examples/scroll-promises/element-methods/", "100%", 620)}}

You can also [load the demo in a separate tab](https://mdn.github.io/dom-examples/scroll-promises/element-methods/) and view the [source code](https://github.com/mdn/dom-examples/tree/main/scroll-promises/element-methods).

#### Aside on feature detection

If you run this example in a browser that doesn't support promise-returning scroll operations, the scroll operations are still smooth, but the toolbar doesn't fade out and then fade back in once the operation is finished. The feature detection is handled by a function called `supportsScrollPromises()`, which runs a scroll operation and tests whether its return value is a promise:

```js
function supportsScrollPromises() {
  const test = section.scroll(0, 0);
  return test instanceof Promise;
}
```

Check out the [source code](https://github.com/mdn/dom-examples/blob/main/scroll-promises/element-methods/index.js) to see how the feature detection is used.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
