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
scrollIntoView(scrollIntoViewOptions)
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

- `scrollIntoViewOptions` {{optional_inline}}
  {{experimental_inline}}

  - : An Object with the following properties:

    - `behavior` {{optional_inline}}
      - : Determines whether scrolling is instant or animates smoothly. This option is a string which must take one of the following values:
        - `smooth`: scrolling should animate smoothly
        - `instant`: scrolling should happen instantly in a single jump
        - `auto`: scroll behavior is determined by the computed value of {{cssxref("scroll-behavior")}}
    - `block` {{optional_inline}}
      - : Defines the vertical alignment of the element within the scrollable ancestor container. This option is a string and accepts one of the following values:
        - `start`: Aligns the element's top edge with the top of the scrollable container, making the element appear at the start of the visible area vertically.
        - `center`: Aligns the element vertically at the center of the scrollable container, positioning it in the middle of the visible area.
        - `end`: Aligns the element's bottom edge with the bottom of the scrollable container, placing the element at the end of the visible area vertically.
        - `nearest`: Scrolls the element to the nearest edge in the vertical direction. If the element is closer to the top edge of the scrollable container, it will align to the top; if it's closer to the bottom
          edge, it will align to the bottom. This minimizes the scrolling distance.
        - Defaults to `start`.
    - `inline` {{optional_inline}}
      - : Defines the horizontal alignment of the element within the scrollable ancestor container. This option is a string and accepts one of the following values:
        - `start`: Aligns the element's left edge with the left of the scrollable container, making the element appear at the start of the visible area horizontally.
        - `center`: Aligns the element horizontally at the center of the scrollable container, positioning it in the middle of the visible area.
        - `end`: Aligns the element's right edge with the right of the scrollable container, placing the element at the end of the visible area horizontally.
        - `nearest`: Scrolls the element to the nearest edge in the horizontal direction. If the element is closer to the left edge of the scrollable container, it will align to the left; if it's closer to the right edge, it will align to the right. This minimizes the scrolling distance.
        - Defaults to `nearest`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Using scrollIntoView()

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

```html
<body>
  <header class="navbar">Navbar</header>
  <main class="content">
    <button id="go-to-bottom">Go to bottom</button>
    <button id="go-to-top">Go to top</button>
  </main>
</body>
```

#### CSS

```css
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

```js
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.scrollIntoViewIfNeeded()")}} {{non-standard_inline}}
