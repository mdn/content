---
title: "Element: scroll() method"
short-title: scroll()
slug: Web/API/Element/scroll
page-type: web-api-instance-method
browser-compat: api.Element.scroll
---

{{APIRef("CSSOM view API")}}

The **`scroll()`** method of the {{domxref("Element")}}
interface scrolls the element to a particular set of coordinates inside a given
element.

## Syntax

```js-nolint
scroll(xCoord, yCoord)
scroll(options)
```

### Parameters

- `xCoord`
  - : The pixel along the horizontal axis of the element that you want displayed in the upper left.
- `yCoord`
  - : The pixel along the vertical axis of the element that you want displayed in the upper left.
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
// Put the 1000th vertical pixel at the top of the element
element.scroll(0, 1000);
```

Using `options`:

```js
element.scroll({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

### Responding to the end of the scroll

Our [element methods demo](https://mdn.github.io/dom-examples/scroll-promises/element-methods/) ([see source code](https://github.com/mdn/dom-examples/tree/main/scroll-promises/element-methods)) demonstrates how the promise return value of `scroll()` can be used to respond to the end of a scrolling operation. This technique is mostly useful in cases where the scrolling occurs smoothly over time (achieved by setting the [`behavior`](#behavior) option to `smooth`, or by setting the scrolling element's {{cssxref("scroll-behavior")}} property to `smooth`).

#### HTML

Our HTML includes a {{htmlelement("section")}} element containing several paragraphs of content and a {{htmlelement("div")}} element toolbar containing {{htmlelement("button")}} elements that trigger various scrolling operations on the `<section>`.

```html
<div>
  <button class="scroll">scroll() to 1000</button>
  <button class="scrollto">scrollTo() top</button>
  <button class="scrollby">scrollBy() 200</button>
  <button class="scrollintoview">Scroll last &lt;p&gt; into view</button>
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

We also create two class selectors; when a `fade-out` or `fade-in` class is applied to an element, an {{cssxref("animation")}} is applied so that it smoothly fades
out or in, respectively. We also define {{cssxref("@keyframes")}} blocks to define the required {{cssxref("opacity")}} changes for those animations.

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

We start by grabbing references to the `<button>` that runs the `scroll()` operation, the toolbar `<div>`, and the scrolling `<section>`:

```js
const scrollBtn = document.querySelector(".scroll");
const toolbar = document.querySelector("div");
const section = document.querySelector("section");
```

When the button is clicked, we immediately apply the `fade-out` class to the toolbar, causing it to fade out. We then run `scroll(0, 1000)` on the `<section>` to scroll its content down 1000 pixels, `await`ing its promise resolution as we do so. When the promise has resolved, we log a message to say that the scroll operation has finished, and apply the `fade-in` class to the toolbar, causing it to fade back in again.

```js
scrollBtn.addEventListener("click", async () => {
  toolbar.className = "fade-out";
  await section.scroll(0, 1000);
  console.log("Scroll finished");
  toolbar.className = "fade-in";
});
```

The code not relevant to `scroll()` is not shown, for brevity.

#### Result

Load our [element methods demo](https://mdn.github.io/dom-examples/scroll-promises/element-methods/) ([see source code](https://github.com/mdn/dom-examples/tree/main/scroll-promises/element-methods)) in a new tab and click the buttons to see the scrolling behavior. Note how the toolbar fades out when a button is pressed, and fades in again once the smooth scrolling is finished.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
