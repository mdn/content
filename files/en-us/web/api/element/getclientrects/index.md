---
title: Element.getClientRects()
slug: Web/API/Element/getClientRects
page-type: web-api-instance-method
tags:
  - API
  - CSSOM View
  - Element
  - Method
  - Reference
  - clientHeight
  - getBoundingClientRect
  - getClientRects
  - offsetHeight
  - scrollHeight
browser-compat: api.Element.getClientRects
---
{{APIRef("DOM")}}

The **`getClientRects()`** method of the {{domxref("Element")}}
interface returns a collection of {{DOMxRef("DOMRect")}} objects that indicate the
bounding rectangles for each [CSS border box](/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) in a client.

Most elements only have one border box each, but a multiline [inline element](/en-US/docs/Web/HTML/Inline_elements) (such as a multiline
{{HTMLElement("span")}} element, by default) has a border box around each line.

## Syntax

```js
getClientRects()
```

### Parameters

None.

### Return value

The returned value is a collection of {{DOMxRef("DOMRect")}} objects, one for each CSS
border box associated with the element. Each {{DOMxRef("DOMRect")}} object contains
read-only `left`, `top`, `right` and
`bottom` properties describing the border box, in pixels, with the top-left
relative to the top-left of the viewport. For tables with captions, the caption is
included even though it's outside the border box of the table. When called on SVG
elements other than an outer-`<svg>`, the "viewport" that the resulting
rectangles are relative to is the viewport that the element's
outer-`<svg>` establishes (and to be clear, the rectangles are also
transformed by the outer-`<svg>`'s `viewBox` transform, if
any).

Originally, Microsoft intended this method to return a `TextRectangle`
object for each _line_ of text. However, the CSSOM working draft specifies that
it returns a {{DOMxRef("DOMRect")}} for each _border box_. For an inline element,
the two definitions are the same. But for a block element, Mozilla will return only a
single rectangle.

{{Fx_MinVersion_Note(3.5, "Firefox 3.5 adds <code>width</code> and <code>height</code>
  properties to the <code>TextRectangle</code> object.")}}

The amount of scrolling that has been done of the viewport area (or any other
scrollable element) is taken into account when computing the rectangles.

The returned rectangles do not include the bounds of any child elements that might
happen to overflow.

For HTML {{HtmlElement("area")}} elements, SVG elements that do not render anything
themselves, `display:none` elements, and generally any elements that are not
directly rendered, an empty list is returned.

Rectangles are returned even for CSS boxes that have empty border-boxes. The
`left`, `top`, `right`, and `bottom`
coordinates can still be meaningful.

Fractional pixel offsets are possible.

## Examples

These examples draw client rects in various colors. Note that the JavaScript function
that paints the client rects is connected to the markup via the class
`withClientRectsOverlay`.

### HTML

Example 1: This HTML creates three paragraphs with a `<span>` inside,
each embedded in a `<div>` block. Client rects are painted for the
paragraph in the second block, and for the `<span>` element in the
third block.

```html
<h3>A paragraph with a span inside</h3>
<p>Both the span and the paragraph have a border set. The
  client rects are in red. Note that the p has only one border
  box, while the span has multiple border boxes.</p>

<div>
  <strong>Original</strong>
  <p>
    <span>Paragraph that spans multiple lines</span>
  </p>
</div>

<div>
  <strong>p's rect</strong>
  <p class="withClientRectsOverlay">
    <span>Paragraph that spans multiple lines</span>
  </p>
</div>

<div>
  <strong>span's rect</strong>
  <p>
    <span class="withClientRectsOverlay">Paragraph that spans multiple lines</span>
  </p>
</div>
```

Example 2: This HTML creates three ordered lists. Client rects are painted for the
`<ol>` in the second block, and for each `<li>`
element in the third block.

```html
<h3>A list</h3>
<p>Note that the border box doesn't include the number, so
  neither do the client rects.</p>

<div>
  <strong>Original</strong>
  <ol>
    <li>Item 1</li>
    <li>Item 2</li>
  </ol>
</div>

<div>
  <strong>ol's rect</strong>
  <ol class="withClientRectsOverlay">
    <li>Item 1</li>
    <li>Item 2</li>
  </ol>
</div>

<div>
  <strong>each li's rect</strong>
  <ol>
    <li class="withClientRectsOverlay">Item 1</li>
    <li class="withClientRectsOverlay">Item 2</li>
  </ol>
</div>
```

Example 3: This HTML creates two tables with captions. Client rects are painted for the
`<table>` in the second block.

```html
<h3>A table with a caption</h3>
<p>Although the table's border box doesn't include the
  caption, the client rects do include the caption.</p>

<div>
  <strong>Original</strong>
  <table>
    <caption>caption</caption>
    <thead>
      <tr><th>thead</th></tr>
    </thead>
    <tbody>
      <tr><td>tbody</td></tr>
    </tbody>
  </table>
</div>

<div>
  <strong>table's rect</strong>
  <table class="withClientRectsOverlay">
    <caption>caption</caption>
    <thead>
      <tr><th>thead</th></tr>
    </thead>
    <tbody>
      <tr><td>tbody</td></tr>
    </tbody>
  </table>
</div>
```

### CSS

The CSS draws borders around the paragraph and the `<span>` inside
each `<div>` block for the first example, around the
`<ol>` and `<li>` for the second example, and around
`<table>`, `<th>`, and `<td>`
elements for the third example.

```css
strong {
  text-align: center;
}
div {
  display: inline-block;
  width: 150px;
}
div p, ol, table {
  border: 1px solid blue;
}
span, li, th, td {
  border: 1px solid green;
}
```

### JavaScript

The JavaScript code draws the client rects for all HTML elements that have CSS class
`withClientRectsOverlay` assigned.

```js
function addClientRectsOverlay(elt) {
  /* Absolutely position a div over each client rect so that its border width
     is the same as the rectangle's width.
     Note: the overlays will be out of place if the user resizes or zooms. */
  const rects = elt.getClientRects();
  for (const rect of rects) {
    const tableRectDiv = document.createElement('div');
    tableRectDiv.style.position = 'absolute';
    tableRectDiv.style.border = '1px solid red';
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    tableRectDiv.style.margin = tableRectDiv.style.padding = '0';
    tableRectDiv.style.top = `${rect.top + scrollTop}px`;
    tableRectDiv.style.left = `${rect.left + scrollLeft}px`;
    // We want rect.width to be the border width, so content width is 2px less.
    tableRectDiv.style.width = `${rect.width - 2}px`;
    tableRectDiv.style.height = `${rect.height - 2}px`;
    document.body.appendChild(tableRectDiv);
  }
}

(() => {
  /* Call function addClientRectsOverlay(elt) for all elements with
     assigned class "withClientRectsOverlay" */
  const elt = document.getElementsByClassName('withClientRectsOverlay');
  for (let i = 0; i < elt.length; i++) {
    addClientRectsOverlay(elt[i]);
  }
})();
```

### Result

{{EmbedLiveSample('Examples', 680, 650)}}

## Specifications

{{Specifications}}

### Notes

`getClientRects()` was first introduced in the MS IE DHTML object model.

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Element.getBoundingClientRect()")}}
