---
title: "Element: scrollLeft property"
short-title: scrollLeft
slug: Web/API/Element/scrollLeft
page-type: web-api-instance-property
browser-compat: api.Element.scrollLeft
---

{{APIRef("DOM")}}

The **`Element.scrollLeft`** property gets or sets the number of pixels by which an element's content is scrolled from its left edge. This value is subpixel precise in modern browsers, meaning that it isn't necessarily a whole number.

## Value

A double-precision floating-point value indicating the number of pixels by which the element is currently scrolled horizontally from the origin, where a positive value means the element is scrolled to the right (to reveal more content to the right). If the element isn't scrolled at all left or right, then `scrollLeft` is 0. If the document is not the active document, the returned value is 0. If the document is rendered on a subpixel-precise device, then the returned value is also subpixel-precise and may contain a decimal component.

It's possible for `scrollLeft` to be negative if the element can be scrolled to the left from the initial containing block. For example, if the element's {{cssxref("direction")}} is `rtl` (right-to-left) and content grows to the left, then `scrollLeft` is `0` when the scrollbar is at its rightmost position (at the start of the scrolled content), and then increasingly negative as you scroll towards the end of the content.

Safari responds to overscrolling by updating `scrollLeft` beyond the maximum scroll position (unless the default "bounce" effect is disabled, such as by setting {{cssxref("overscroll-behavior")}} to `none`), while Chrome and Firefox do not.

The `scrollLeft` property can be set, which causes the element to scroll to the specified horizontal position, in the same way as using {{domxref("Element.scroll()")}} with `behavior: "auto"`.

## Examples

### HTML

```html
<div id="container">
  <div id="content">Click the button to slide right!</div>
</div>

<button id="slide" type="button">Slide right</button>
```

### CSS

```css
#container {
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  overflow-x: scroll;
}

#content {
  width: 250px;
  background-color: #ccc;
}
```

### JavaScript

```js
const button = document.getElementById("slide");

button.onclick = () => {
  document.getElementById("container").scrollLeft += 20;
};
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.scrollTop")}}
- {{domxref("Element.scrollTo()")}}
