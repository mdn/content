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
scrollbar. The width is measured in the same way as {{domxref("Element.clientWidth",
  "clientWidth")}}: it includes the element's padding, but not its border, margin or
vertical scrollbar (if present). It can also include the width of pseudo-elements such
as {{cssxref("::before")}} or {{cssxref("::after")}}. If the element's content can fit
without a need for horizontal scrollbar, its `scrollWidth` is equal to
{{domxref("Element.clientWidth", "clientWidth")}}

> **Note:** This property will round the value to an integer. If you need a fractional value,
> use {{ domxref("element.getBoundingClientRect()") }}.

## Value

A number.

## Examples

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Example</title>
    <style>
      div {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      #aDiv {
        width: 100px;
      }

      button {
        margin-bottom: 2em;
      }
    </style>
  </head>

  <body>
    <div id="aDiv">FooBar-FooBar-FooBar-FooBar</div>
    <button id="aButton">Check for overflow</button>

    <div id="anotherDiv">FooBar-FooBar-FooBar-FooBar</div>
    <button id="anotherButton">Check for overflow</button>
  </body>
  <script>
    const buttonOne = document.getElementById("aButton");
    const buttonTwo = document.getElementById("anotherButton");
    const divOne = document.getElementById("aDiv");
    const divTwo = document.getElementById("anotherDiv");

    //check to determine if an overflow is happening
    function isOverflowing(element) {
      return element.scrollWidth > element.offsetWidth;
    }

    function alertOverflow(element) {
      if (isOverflowing(element)) {
        alert("Contents are overflowing the container.");
      } else {
        alert("No overflows!");
      }
    }

    buttonOne.addEventListener("click", () => {
      alertOverflow(divOne);
    });

    buttonTwo.addEventListener("click", () => {
      alertOverflow(divTwo);
    });
  </script>
</html>
```

### Result

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.clientWidth")}}
- {{domxref("HTMLElement.offsetWidth")}}
- [Determining the dimensions of elements](/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
