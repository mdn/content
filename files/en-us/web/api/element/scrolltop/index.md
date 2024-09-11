---
title: "Element: scrollTop property"
short-title: scrollTop
slug: Web/API/Element/scrollTop
page-type: web-api-instance-property
browser-compat: api.Element.scrollTop
---

{{APIRef("DOM")}}

The **`Element.scrollTop`** property gets or sets the number of pixels by which an element's content is scrolled from its top edge. This value is subpixel precise in modern browsers, meaning that it isn't necessarily a whole number.

## Value

A double-precision floating-point value indicating the number of pixels by which the element is currently scrolled vertically from the origin, where a positive value means the element is scrolled down (to reveal more content to the bottom). If the element isn't scrolled at all up or down, then `scrollTop` is 0. If the document is not the active document, the returned value is 0. If the document is rendered on a subpixel-precise device, then the returned value is also subpixel-precise and may contain a decimal component.

It's possible for `scrollTop` to be negative if the element can be scrolled up from the initial containing block. For example, if the element's {{cssxref("flex-direction")}} is `column-reverse` and content grows upwards, then `scrollTop` is `0` when the scrollbar is at its bottommost position (at the start of the scrolled content), and then increasingly negative as you scroll towards the end of the content.

Safari responds to overscrolling by updating `scrollTop` beyond the maximum scroll position (unless the default "bounce" effect is disabled, such as by setting {{cssxref("overscroll-behavior")}} to `none`), while Chrome and Firefox do not. For example, `scrollTop` may be negative on Safari just by continuing to scroll up when the element is already at the top.

The `scrollTop` property can be set, which causes the element to scroll to the specified vertical position, in the same way as using {{domxref("Element.scroll()")}} with `behavior: "auto"`.

## Examples

### Scrolling an element

In this example, try scrolling the container with the dashed border, and see how the value of `scrollTop` changes.

#### HTML

```html
<div id="container">
  <p>
    Far out in the uncharted backwaters of the unfashionable end of the western
    spiral arm of the Galaxy lies a small unregarded yellow sun. Orbiting this
    at a distance of roughly ninety-two million miles is an utterly
    insignificant little blue green planet whose ape-descended life forms are so
    amazingly primitive that they still think digital watches are a pretty neat
    idea.
  </p>
</div>

<div id="output">scrollTop: 0</div>
```

#### CSS

```css
#container {
  overflow: scroll;
  height: 150px;
  width: 150px;
  border: 5px dashed orange;
}

#output {
  padding: 1rem 0;
}
```

#### JavaScript

```js
const container = document.querySelector("#container");
const output = document.querySelector("#output");

container.addEventListener("scroll", (event) => {
  output.textContent = `scrollTop: ${container.scrollTop}`;
});
```

#### Result

{{EmbedLiveSample("Scrolling_an_element", 400, 250)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.scrollLeft")}}
- {{domxref("Element.scrollTo()")}}
