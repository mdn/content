---
title: "Element: scrollWidth property"
short-title: scrollWidth
slug: Web/API/Element/scrollWidth
page-type: web-api-instance-property
browser-compat: api.Element.scrollWidth
---

{{APIRef("DOM")}}

The **`Element.scrollWidth`** read-only property is a
measurement of the width of an element's content, including content not visible on the
screen due to overflow.

The `scrollWidth` value is equal to the minimum width the element would
require in order to fit all the content in the viewport without using a horizontal
scrollbar. The width is measured in the same way as {{domxref("Element.clientWidth", "clientWidth")}}:
it includes the element's padding, but not its border, margin or
vertical scrollbar (if present). It can also include the width of pseudo-elements such
as {{cssxref("::before")}} or {{cssxref("::after")}}. If the element's content can fit
without a need for horizontal scrollbar, its `scrollWidth` is equal to
{{domxref("Element.clientWidth", "clientWidth")}}

> **Note:** This property will round the value to an integer. If you need a fractional value,
> use {{ domxref("element.getBoundingClientRect()") }}.

## Value

An integer.

## Examples

### Detecting overflowing content

In this example, we use the `scrollWidth` property to check if the content of an element is overflowing its boundaries. We have two `div` elements, the first with a width of `100px`, and the second without a fixed width. Their content is exactly the same, and we display a message about whether each one is overflowing its container.

#### HTML

```html
<div id="div1">FooBar-FooBar-FooBar-FooBar</div>
<button id="button1">Check for overflow</button>
<pre id="log1"></pre>
<div id="div2">FooBar-FooBar-FooBar-FooBar</div>
<button id="button2">Check for overflow</button>
<pre id="log2"></pre>
```

#### CSS

```css
div {
  padding: 0.15em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

button {
  margin: 0.15em 0 0.5em 0;
}

pre {
  margin: 0.5em 0;
}

#div1 {
  width: 100px;
}

#log1 {
  margin-bottom: 2em;
}
```

#### JavaScript

```js
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");

const log1 = document.getElementById("log1");
const log2 = document.getElementById("log2");

// Check if the scrollWidth is bigger than the offsetWidth or not
function isOverflowing(element) {
  return element.scrollWidth > element.offsetWidth;
}

function checkOverflow(element, log) {
  if (isOverflowing(element)) {
    log.innerText = `Content is overflowing, scrollWidth is ${element.scrollWidth}px`;
  } else {
    log.innerText = `No overflows, scrollWidth is ${element.scrollWidth}px`;
  }
}

button1.addEventListener("click", () => {
  checkOverflow(div1, log1);
});

button2.addEventListener("click", () => {
  checkOverflow(div2, log2);
});
```

#### Result

Click the buttons to check if the content is overflowing the containers.

{{EmbedLiveSample("detecting_overflowing_content", "100%", "190")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.clientWidth")}}
- {{domxref("HTMLElement.offsetWidth")}}
- [Determining the dimensions of elements](/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
