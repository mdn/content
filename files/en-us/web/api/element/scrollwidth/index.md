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
<div id="aDiv">FooBar-FooBar-FooBar-FooBar</div>
<button id="aButton">Check for overflow</button>
<pre id="aLog"></pre>
<div id="anotherDiv">FooBar-FooBar-FooBar-FooBar</div>
<button id="anotherButton">Check for overflow</button>
<pre id="anotherLog"></pre>
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

#aDiv {
  width: 100px;
}

#aLog {
  margin-bottom: 2em;
}
```

#### JavaScript

```js
const aButton = document.getElementById("aButton");
const anotherButton = document.getElementById("anotherButton");

const aDiv = document.getElementById("aDiv");
const anotherDiv = document.getElementById("anotherDiv");

const aLog = document.getElementById("aLog");
const anotherLog = document.getElementById("anotherLog");

// Check if the scrollWidth is bigger than the offsetWidth or not
function isOverflowing(element) {
  return element.scrollWidth > element.offsetWidth;
}

function checkOverflow(element) {
  if (isOverflowing(element)) {
    aLog.innerText = `Contents are overflowing, scrollWidth is ${element.scrollWidth}px`;
  } else {
    anotherLog.innerText = `No overflows, scrollWidth is ${element.scrollWidth}px`;
  }
}

aButton.addEventListener("click", () => {
  checkOverflow(aDiv);
});

anotherButton.addEventListener("click", () => {
  checkOverflow(anotherDiv);
});
```

#### Result

Click the buttons to check if the content is overflowing the containers.

{{EmbedLiveSample('Examples', '100%', 190)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.clientWidth")}}
- {{domxref("HTMLElement.offsetWidth")}}
- [Determining the dimensions of elements](/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
