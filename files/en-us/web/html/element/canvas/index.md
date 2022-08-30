---
title: '<canvas>: The Graphics Canvas element'
slug: Web/HTML/Element/canvas
tags:
  - Canvas
  - Element
  - HTML
  - HTML scripting
  - Reference
  - Web
browser-compat: html.elements.canvas
---

{{HTMLRef}}

Use the **HTML `<canvas>` element** with either the [canvas scripting API](/en-US/docs/Web/API/Canvas_API) or the [WebGL API](/en-US/docs/Web/API/WebGL_API) to draw graphics and animations.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Flow content</a
        >,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#embedded_content"
          >embedded content</a
        >, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        Transparent but with no
        <a
          href="/en-US/docs/Web/Guide/HTML/Content_categories#interactive_content"
          >interactive content</a
        >
        descendants except for {{HTMLElement("a")}} elements,
        {{HTMLElement("button")}} elements,
        {{HTMLElement("input")}} elements whose
        {{htmlattrxref("type", "input")}} attribute is
        <code>checkbox</code>, <code>radio</code>, or <code>button</code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >No corresponding role</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>Any</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLCanvasElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

This element's attributes include the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("height")}}
  - : The height of the coordinate space in CSS pixels. Defaults to 150.
- {{htmlattrdef("moz-opaque")}} {{non-standard_inline}} {{deprecated_inline}}
  - : Lets the canvas know whether or not translucency will be a factor. If the canvas knows there's no translucency, painting performance can be optimized. This is only supported by Mozilla-based browsers; use the standardized {{domxref("HTMLCanvasElement.getContext()", "canvas.getContext('2d', { alpha: false })")}} instead.
- {{htmlattrdef("width")}}
  - : The width of the coordinate space in CSS pixels. Defaults to 300.

## Usage notes

### Alternative content

You should provide alternate content inside the `<canvas>` block. That content will be rendered both on older browsers that don't support canvas and in browsers with JavaScript disabled.

### Required \</canvas> tag

Unlike the {{HTMLElement("img")}} element, the {{HTMLElement("canvas")}} element **requires** the closing tag (`</canvas>`).

### Sizing the canvas using CSS versus HTML

The displayed size of the canvas can be changed using CSS, but if you do this the image is scaled during rendering to fit the styled size, which can make the final graphics rendering end up being distorted.

It is better to specify your canvas dimensions by setting the `width` and `height` attributes directly on the `<canvas>` elements, either directly in the HTML or by using JavaScript.

### Maximum canvas size

The maximum size of a `<canvas>` element is very large, but the exact size depends on the browser. The following is some data we've collected from various tests and other sources (e.g. [Stack Overflow](https://stackoverflow.com/questions/6081483/maximum-size-of-a-canvas-element)):

| Browser | Maximum height | Maximum width | Maximum area                               |
| ------- | -------------- | ------------- | ------------------------------------------ |
| Chrome  | 32,767 pixels  | 32,767 pixels | 268,435,456 pixels (i.e., 16,384 x 16,384) |
| Firefox | 32,767 pixels  | 32,767 pixels | 472,907,776 pixels (i.e., 22,528 x 20,992) |
| Safari  | 32,767 pixels  | 32,767 pixels | 268,435,456 pixels (i.e., 16,384 x 16,384) |
| IE      | 8,192 pixels   | 8,192 pixels  | ?                                          |

> **Note:** Exceeding the maximum dimensions or area renders the canvas unusable — drawing commands will not work.

## Examples

### HTML

This code snippet adds a canvas element to your HTML document. A fallback text is provided if a browser is unable to render the canvas, or if can't read a canvas.

```html
<canvas width="300" height="300">
  An alternative text describing what your canvas displays.
</canvas>
```

### JavaScript

Then in the JavaScript code, call {{domxref("HTMLCanvasElement.getContext()")}} to get a drawing context and start drawing onto the canvas:

```js
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 100, 100);
```

### Result

{{EmbedLiveSample('Examples')}}

## Accessibility concerns

### Alternative content

The `<canvas>` element on its own is just a bitmap and does not provide information about any drawn objects. Canvas content is not exposed to accessibility tools as semantic HTML is. In general, you should avoid using canvas in an accessible website or app. The following guides can help to make it more accessible.

- [Canvas accessibility use cases](https://www.w3.org/WAI/PF/HTML/wiki/Canvas_Accessibility_Use_Cases)
- [Canvas element accessibility issues](https://www.w3.org/html/wg/wiki/AddedElementCanvas)
- [HTML Canvas Accessibility in Firefox 13 – by Steve Faulkner](https://www.tpgi.com/html5-canvas-accessibility-in-firefox-13/)
- [Best practices for interactive canvas elements](https://html.spec.whatwg.org/multipage/scripting.html#best-practices)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [MDN canvas portal](/en-US/docs/Web/API/Canvas_API)
- [Canvas tutorial](/en-US/docs/Web/API/Canvas_API/Tutorial)
- [Canvas-related demos](/en-US/docs/Web/Demos#canvas)
- [Canvas cheat sheet (2009)](https://simon.html5.org/dump/html5-canvas-cheat-sheet.html)
- [Canvas introduction by Apple (2013)](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/HTML-canvas-guide/Introduction/Introduction.html)
