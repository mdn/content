---
title: "`<canvas>` HTML graphics canvas element"
short-title: <canvas>
slug: Web/HTML/Reference/Elements/canvas
page-type: html-element
browser-compat: html.elements.canvas
sidebar: htmlsidebar
---

Use the **HTML `<canvas>` element** with either the [canvas scripting API](/en-US/docs/Web/API/Canvas_API), [WebGL API](/en-US/docs/Web/API/WebGL_API), or [WebGPU API](/en-US/docs/Web/API/WebGPU_API) to draw graphics and animations.

## Attributes

This element's attributes include the [global attributes](/en-US/docs/Web/HTML/Reference/Global_attributes).

- `content`
  - : Enables opting the `<canvas>` element into rendering its descendants rather than treating them as [fallback content](#fallback_content). Possible values are:
    - `drawable`
      - : Descendants of the `<canvas>` element can be rendered on the canvas context using the [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API).
    - `fallback`
      - : Descendants of the `<canvas>` element are always treated as fallback content. This is the default value.
- `height`
  - : The height of the coordinate space in CSS pixels. Defaults to 150.
- `moz-opaque` {{non-standard_inline}} {{deprecated_inline}}
  - : Lets the canvas know whether translucency will be a factor. If the canvas knows there's no translucency, painting performance can be optimized. This is only supported by Mozilla-based browsers; use the standardized {{domxref("HTMLCanvasElement.getContext()", "canvas.getContext('2d', { alpha: false })")}} instead.
- `width`
  - : The width of the coordinate space in CSS pixels. Defaults to 300.

## Usage notes

### Fallback content

You should provide fallback content inside the `<canvas>` tags, which will be rendered both on older browsers that don't support canvas and in browsers with JavaScript disabled. Note that, when JavaScript is turned off, descendants of `<canvas>` elements with `content="drawable"` set will still be displayed as fallback content.

### Closing `</canvas>` tag

Unlike the {{HTMLElement("img")}} element, the `<canvas>` element **requires** the closing tag (`</canvas>`).

### Sizing the canvas using CSS versus HTML

The displayed size of the canvas can be changed using CSS, but if you do this the image is scaled during rendering to fit the styled size, which can make the final graphics rendering end up being distorted.

It is better to specify your canvas dimensions by setting the `width` and `height` attributes directly on the `<canvas>` elements, either directly in the HTML or by using JavaScript.

### Maximum canvas size

The exact maximum size of a `<canvas>` element depends on the browser and environment. While in most cases the maximum dimensions exceed 10,000 x 10,000 pixels, notably iOS devices limit the canvas size to only 4,096 x 4,096 pixels. See [canvas size limits in different browsers and devices](https://jhildenbiddle.github.io/canvas-size/#/?id=test-results).

> [!NOTE]
> Exceeding the maximum dimensions or area renders the canvas unusable — drawing commands will not work.

### Using an offscreen canvas

A canvas can be rendered using the {{domxref("OffscreenCanvas")}} API where the document and canvas are decoupled.
The benefit is that a [worker thread](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) can handle canvas rendering and the main thread of your web application is not blocked by canvas operations.
By parallelizing work, other UI elements of your web application will remain responsive even if you are running complex graphics on an offscreen canvas.
For more information, see the {{domxref("OffscreenCanvas")}} API documentation.

## Accessibility

Any content generated directly by a canvas context (including [text](/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text)) is just pixels — it is not exposed to accessibility tools (as semantic HTML is) and is therefore inaccessible. You can get around this problem by including meaningful content in your HTML as descendants of the `<canvas>` element and rendering it on the canvas using the [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API).

If HTML-in-Canvas is not suitable for your circumstances, you should avoid using canvas to display meaningful content altogether, and instead rely on semantic HTML.

## Examples

### HTML

This code snippet adds a canvas element to your HTML document. Fallback text is provided that will be rendered in cases where the browser is unable to read or render the canvas.

```html
<p>A 100-pixel green square:</p>
<canvas width="120" height="120">
  The square could not be rendered, sorry!
</canvas>
```

### JavaScript

Then in the JavaScript code, call {{domxref("HTMLCanvasElement.getContext()")}} to get a drawing context and start drawing onto the canvas:

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
// Add a rectangle at (10, 10) with size 100x100 pixels
ctx.fillRect(10, 10, 100, 100);
```

### Result

{{EmbedLiveSample('Examples', 600, 190)}}

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow content</a
        >,
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >phrasing content</a
        >,
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#embedded_content"
          >embedded content</a
        >, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        Transparent but with no
        <a
          href="/en-US/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interactive content</a
        >
        descendants except for {{HTMLElement("a")}} elements,
        {{HTMLElement("button")}} elements,
        {{HTMLElement("input")}} elements whose
        <a href="/en-US/docs/Web/HTML/Reference/Elements/input#type"><code>type</code></a> attribute is
        <code>checkbox</code>, <code>radio</code>, or <code>button</code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>None, both the starting and ending tag are mandatory.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Canvas API](/en-US/docs/Web/API/Canvas_API)
- [Canvas tutorial](/en-US/docs/Web/API/Canvas_API/Tutorial)
- [OffscreenCanvas](/en-US/docs/Web/API/OffscreenCanvas)
- [Canvas cheat sheet](https://simon.html5.org/dump/html5-canvas-cheat-sheet.html) (2009)
- [Canvas cheat sheet](https://websitesetup.org/wp-content/uploads/2015/11/Infopgraphic-CanvasCheatSheet-Final2.pdf) (pdf) (2015)
- [Safari HTML canvas guide](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/HTML-canvas-guide/Introduction/Introduction.html) via Apple (2013)
- [`CanvasRenderingContext2D` 2D drawing context for a canvas element](https://developer.apple.com/documentation/webkitjs/canvasrenderingcontext2d) via Apple.com
- [WebGL API](/en-US/docs/Web/API/WebGL_API)
- [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
- [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API)
- {{HTMLElement("img")}}
- [SVG](/en-US/docs/Web/SVG)
- [HTML video and audio](/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
