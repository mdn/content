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

An integer corresponding to the scrollWidth pixel value of the element.

## Examples

### Detecting overflowing content

In this example, we will use the `scrollWidth` property to check if the content of an element is overflowing its boundaries. We have two `div` elements, the first with a width of `100px`, and the second `div` without a fixed width. Their content is exactly the same, and we will use a button to check if the content is overflowing the container by logging a message.

#### HTML

```html
<div id="aDiv">FooBar-FooBar-FooBar-FooBar</div>
<button id="aButton">Check for overflow</button>
<div id="anotherDiv">FooBar-FooBar-FooBar-FooBar</div>
<button id="anotherButton">Check for overflow</button>
<pre id="log"></pre>
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
  margin: 0.15em 0 1em 0;
}

#aDiv {
  width: 100px;
}
```

#### JavaScript

```js
const aButton = document.getElementById("aButton");
const anotherButton = document.getElementById("anotherButton");

const aDiv = document.getElementById("aDiv");
const anotherDiv = document.getElementById("anotherDiv");

// Check if the scrollWidth is bigger than the offsetWidth or not
function isOverflowing(element) {
  return element.scrollWidth > element.offsetWidth;
}

function checkOverflow(element) {
  if (isOverflowing(element)) {
    log(`Contents are overflowing, scrollWidth is ${element.scrollWidth}px`);
  } else {
    log(`No overflows, scrollWidth is ${element.scrollWidth}px`);
  }
}

aButton.addEventListener("click", () => {
  checkOverflow(aDiv);
});

anotherButton.addEventListener("click", () => {
  checkOverflow(anotherDiv);
});
```

```css hidden
#log {
  height: 60px;
  overflow: scroll;
  padding: 0.25rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.getElementById("log");

function log(text) {
  logElement.innerText = `${logElement.innerText}> ${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### Result

Click the buttons to check if the content is overflowing the containers.

{{EmbedLiveSample('Examples', '100%', 210)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.clientWidth")}}
- {{domxref("HTMLElement.offsetWidth")}}
- [Determining the dimensions of elements](/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
