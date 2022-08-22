---
title: Element.scrollTop
slug: Web/API/Element/scrollTop
page-type: web-api-instance-property
tags:
  - API
  - CSSOM View
  - NeedsArtUpdate
  - NeedsMarkupWork
  - Property
  - Reference
browser-compat: api.Element.scrollTop
---
{{APIRef("DOM")}}

The **`Element.scrollTop`** property gets or sets the number of pixels that an element's content is scrolled vertically.

An element's `scrollTop` value is a measurement of the distance from the element's top to its topmost _visible_ content. When an element's content does not generate a vertical scrollbar, then its `scrollTop` value is `0`.

`scrollTop` can be set to any integer value, with certain caveats:

- If the element can't be scrolled (e.g. it has no overflow or if the element has a property of "**non-scrollable**"), `scrollTop` is `0`.
- `scrollTop` doesn't respond to negative values; instead, it sets itself back to `0`.
- If set to a value greater than the maximum available for the element, `scrollTop` settles itself to the maximum value.

When `scrollTop` is used on the root element (the `<html>` element), the `scrollY` of the window is returned. [This is a special case of `scrollTop`](https://www.w3.org/TR/2016/WD-cssom-view-1-20160317/#dom-element-scrolltop).

> **Warning:** On systems using display scaling, `scrollTop` may give you a decimal value.

## Value

A number.

## Examples

### Scrolling an element

In this example, try scrolling the inner container with the dashed border, and see how the value of `scrollTop` changes.

#### HTML

```html
<div id="container">
  <div id="scroller">
      <p>Far out in the uncharted backwaters of the unfashionable end
      of the western spiral arm of the Galaxy lies a small unregarded
      yellow sun. Orbiting this at a distance of roughly ninety-two million
      miles is an utterly insignificant little blue green planet whose
      ape-descended life forms are so amazingly primitive that they still
      think digital watches are a pretty neat idea.</p>
  </div>
</div>

<div id="output">scrollTop: 0</div>
```

#### CSS

```css
#scroller {
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
const scroller = document.querySelector("#scroller");
const output = document.querySelector("#output");

scroller.addEventListener("scroll", (event) => {
  output.textContent = `scrollTop: ${scroller.scrollTop}`;
});
```

#### Result

{{EmbedLiveSample("Scrolling_an_element", 400, 250)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [MSDN's Measuring Element Dimension and Location](<https://msdn.microsoft.com/library/hh781509(v=vs.85).aspx>)
- {{domxref("Element.scrollLeft")}}
- {{domxref("Element.scrollTo()")}}
