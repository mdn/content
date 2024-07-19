---
title: "Element: getBoundingClientRect() method"
short-title: getBoundingClientRect()
slug: Web/API/Element/getBoundingClientRect
page-type: web-api-instance-method
browser-compat: api.Element.getBoundingClientRect
---

{{APIRef("DOM")}}

The **`Element.getBoundingClientRect()`** method returns a
{{domxref("DOMRect")}} object providing information about the size of an element and its
position relative to the [viewport](/en-US/docs/Glossary/Viewport).

## Syntax

```js-nolint
getBoundingClientRect()
```

### Parameters

None.

### Return value

The returned value is a {{domxref("DOMRect")}} object which is the smallest rectangle
which contains the entire element, including its padding and border-width. The
`left`, `top`, `right`, `bottom`,
`x`, `y`, `width`, and `height` properties
describe the position and size of the overall rectangle in pixels. Properties other than
`width` and `height` are relative to the top-left of the viewport.

![DOMRect object that is the smallest rectangle containing the entire element.](element-box-diagram.png)

The `width` and `height` properties of the {{domxref("DOMRect")}}
object returned by the method include the `padding` and
`border-width`, not only the content width/height. In the standard box model,
this would be equal to the `width` or `height` property of the
element + `padding` + `border-width`. But
if [`box-sizing: border-box`](/en-US/docs/Web/CSS/box-sizing) is
set for the element this would be directly equal to its `width` or
`height`.

The returned value can be thought of as the union of the rectangles returned by
{{domxref("Element.getClientRects", "getClientRects()")}} for the element, i.e., the CSS
border-boxes associated with the element.

Empty border-boxes are completely ignored. If all the element's border-boxes are empty,
then a rectangle is returned with a `width` and `height` of zero
and where the `top` and `left` are the top-left of the border-box
for the first CSS box (in content order) for the element.

The amount of scrolling that has been done of the viewport area (or any other
scrollable element) is taken into account when computing the bounding rectangle. This
means that the rectangle's boundary edges (`top`, `right`,
`bottom`, `left`) change their values every time the scrolling
position changes (because their values are relative to the viewport and not absolute).

If you need the bounding rectangle relative to the top-left corner of the document,
just add the current scrolling position to the `top` and `left`
properties (these can be obtained using {{domxref("window.scrollY")}} and
{{domxref("window.scrollX")}}) to get a bounding rectangle which is independent from the
current scrolling position.

## Examples

### Basic

This simple example retrieves the `DOMRect` object representing the bounding
client rect of a simple `<div>` element, and prints out its properties
below it.

```html
<div></div>
```

```css
div {
  width: 400px;
  height: 200px;
  padding: 20px;
  margin: 50px auto;
  background: purple;
}
```

```js
let elem = document.querySelector("div");
let rect = elem.getBoundingClientRect();
for (const key in rect) {
  if (typeof rect[key] !== "function") {
    let para = document.createElement("p");
    para.textContent = `${key} : ${rect[key]}`;
    document.body.appendChild(para);
  }
}
```

{{EmbedLiveSample('Basic', '100%', 640)}}

Notice how the `width`/`height` are equal to its
`width`/`height` + `padding`.

Also note how the values of `x`/`left`,
`y`/`top`, `right`, and `bottom` are equal
to the absolute distance from the relevant edge of the viewport to that side of the
element, in each case.

### Scrolling

This example demonstrates how bounding client rect is changing when document is scrolled.

```html
<div id="example"></div>
<div id="controls"></div>
```

```css
div#example {
  width: 400px;
  height: 200px;
  padding: 20px;
  margin: 50px auto;
  background: purple;
}

body {
  padding-bottom: 1000px;
}
p {
  margin: 0;
}
```

```js
function update() {
  const container = document.getElementById("controls");
  const elem = document.getElementById("example");
  const rect = elem.getBoundingClientRect();

  container.textContent = "";
  for (const key in rect) {
    if (typeof rect[key] !== "function") {
      let para = document.createElement("p");
      para.textContent = `${key} : ${rect[key]}`;
      container.appendChild(para);
    }
  }
}

document.addEventListener("scroll", update);
update();
```

{{EmbedLiveSample('Scrolling', '100%', 640)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.getClientRects", "getClientRects()")}}
- [MSDN: `getBoundingClientRect`](<https://msdn.microsoft.com/library/ms536433(VS.85).aspx>)
- [MSDN: `ClientRect`](<https://msdn.microsoft.com/library/hh826029(VS.85).aspx>), an earlier version of `DOMRect`
