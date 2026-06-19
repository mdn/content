---
title: "Element: scrollIntoView() method"
short-title: scrollIntoView()
slug: Web/API/Element/scrollIntoView
page-type: web-api-instance-method
browser-compat: api.Element.scrollIntoView
---

{{APIRef("DOM")}}

The {{domxref("Element")}} interface's
**`scrollIntoView()`** method scrolls the element's ancestor
containers such that the element on which `scrollIntoView()` is called is
visible to the user.

## Syntax

```js-nolint
scrollIntoView()
scrollIntoView(alignToTop)
scrollIntoView(options)
```

### Parameters

- `alignToTop` {{optional_inline}}
  - : A boolean value:
    - If `true`, the top of the element will be aligned to the top of the
      visible area of the scrollable ancestor. Corresponds to
      `scrollIntoViewOptions: {block: "start", inline: "nearest"}`. This is
      the default value.
    - If `false`, the bottom of the element will be aligned to the bottom
      of the visible area of the scrollable ancestor. Corresponds to
      `scrollIntoViewOptions: {block: "end", inline: "nearest"}`.

- `options` {{optional_inline}}
  - : An object with the following properties:
    - `behavior` {{optional_inline}}
      - : Determines whether scrolling is instant or animates smoothly. This option is a string that must take one of the following values:
        - `smooth`: The scrolling animates smoothly.
        - `instant`: The scrolling happens instantly in a single jump.
        - `auto`: The scroll behavior is determined by the computed value of the {{cssxref("scroll-behavior")}} CSS property on the element.

        If omitted, `behavior` defaults to `auto`.

    - `block` {{optional_inline}}
      - : Defines the vertical alignment of the element within the scrollable ancestor container. Its value can be one of the following:
        - `start`: Aligns the element's top edge with the top of the scrollable container, making the element appear at the start of the visible area vertically.
        - `center`: Aligns the element vertically at the center of the scrollable container, positioning it in the middle of the visible area.
        - `end`: Aligns the element's bottom edge with the bottom of the scrollable container, placing the element at the end of the visible area vertically.
        - `nearest`: Scrolls the element to the nearest edge in the vertical direction. If the element is closer to the top edge of the scrollable container, it will align to the top; if it's closer to the bottom edge, it will align to the bottom. This minimizes the scrolling distance.

        The default is `start`.

    - `container` {{optional_inline}}
      - : Defines the scrollable ancestor container. Its value can be one of the following:
        - `all`: All scrollable containers are impacted (including the viewport).
        - `nearest`: Only the nearest scrollable container is impacted by the scroll.

        The default is `all`.

    - `inline` {{optional_inline}}
      - : Defines the horizontal alignment of the element within the scrollable ancestor container. Its value can be one of the following:
        - `start`: Aligns the element's left edge with the left of the scrollable container, making the element appear at the start of the visible area horizontally.
        - `center`: Aligns the element horizontally at the center of the scrollable container, positioning it in the middle of the visible area.
        - `end`: Aligns the element's right edge with the right of the scrollable container, placing the element at the end of the visible area horizontally.
        - `nearest`: Scrolls the element to the nearest edge in the horizontal direction. If the element is closer to the left edge of the scrollable container, it will align to the left; if it's closer to the right edge, it will align to the right. This minimizes the scrolling distance.

        The default is `nearest`.

### Return value

A {{jsxref("Promise")}} that fulfills with an object containing the following property:

- `interrupted`
  - : A boolean value indicating whether the scrolling operation was interrupted (`true`) or not (`false`).

## Examples

### Basic usage

```js
const element = document.getElementById("box");

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({ block: "end" });
element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
```

### Controlling top/bottom alignment

By default, the element is aligned to the top (or bottom) edge of the scrollable ancestor. To define a custom spacing, use {{cssxref("scroll-margin-top")}} or {{cssxref("scroll-margin-bottom")}}. This is often useful when there's a fixed header on the page.

#### HTML

```html live-sample___scroll-with-padding
<body>
  <header class="navbar">Navbar</header>
  <main class="content">
    <button id="go-to-bottom">Go to bottom</button>
    <button id="go-to-top">Go to top</button>
  </main>
</body>
```

#### CSS

```css live-sample___scroll-with-padding
.navbar {
  height: 50px;
  position: sticky;
  top: 0;
  border-bottom: 1.5px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  height: 2000px;
  position: relative;
}
#go-to-bottom {
  position: absolute;
  top: 10px;
  /* Without this, the button will be aligned to the top of the page
  instead of bottom of navbar when scrolled */
  scroll-margin-top: 60px;
}
#go-to-top {
  position: absolute;
  bottom: 10px;
  scroll-margin-bottom: 0;
}
```

#### JavaScript

```js live-sample___scroll-with-padding
const goToTop = document.getElementById("go-to-top");
const goToBottom = document.getElementById("go-to-bottom");
goToBottom.addEventListener("click", () => {
  goToTop.scrollIntoView({ behavior: "instant", block: "end" });
});
goToTop.addEventListener("click", () => {
  goToBottom.scrollIntoView({ behavior: "instant", block: "start" });
});
```

#### Result

{{EmbedLiveSample("scroll-with-padding", "700", "300")}}

### Responding to the end of the scroll

Our [element methods demo](https://mdn.github.io/dom-examples/scroll-promises/element-methods/) ([see source code](https://github.com/mdn/dom-examples/tree/main/scroll-promises/element-methods)) demonstrates how the promise return value of `scrollIntoView()` can be used to respond to the end of a scrolling operation. This technique is mostly useful in cases where the scrolling occurs smoothly over time (achieved by setting the [`behavior`](#behavior) option to `smooth`, or by setting the scrolling element's {{cssxref("scroll-behavior")}} property to `smooth`).

#### HTML

Our HTML includes a {{htmlelement("section")}} element containing several paragraphs of content and a {{htmlelement("div")}} element toolbar containing {{htmlelement("button")}} elements that trigger various scrolling operations on the `<section>`. The last paragraph has got an `id` of `end`.

```html
<div>
  <button class="scroll">scroll() to 1000</button>
  <button class="scrollto">scrollTo() top</button>
  <button class="scrollby">scrollBy() 200</button>
  <button class="scrollintoview">Scroll last &lt;p&gt; into view</button>
</div>

<section>
  ...

  <p id="end">...</p>
</section>
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

We start by grabbing references to the `<button>` that runs the `scrollIntoView()` operation, the toolbar `<div>`, and the paragraph with an `id` of `end`:

```js
const scrollIntoViewBtn = document.querySelector(".scrollintoview");
const toolbar = document.querySelector("div");
const end = document.querySelector("#end");
```

When the button is clicked, we immediately apply the `fade-out` class to the toolbar, causing it to fade out. We then run `scrollIntoView()` on the `<p>` to cause the `<section>` to scroll until it is in view, `await`ing its promise resolution as we do so. When the promise has resolved, we log a message to say that the scroll operation has finished, and apply the `fade-in` class to the toolbar, causing it to fade back in again.

```js
scrollIntoViewBtn.addEventListener("click", async () => {
  toolbar.className = "fade-out";
  await end.scrollIntoView();
  console.log("Scroll finished");
  toolbar.className = "fade-in";
});
```

The code not relevant to `scrollIntoView()` is not shown, for brevity.

#### Result

Load our [element methods demo](https://mdn.github.io/dom-examples/scroll-promises/element-methods/) ([see source code](https://github.com/mdn/dom-examples/tree/main/scroll-promises/element-methods)) in a new tab and click the buttons to see the scrolling behavior. Note how the toolbar fades out when a button is pressed, and fades in again once the smooth scrolling is finished.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.scrollIntoViewIfNeeded()")}} {{non-standard_inline}}
