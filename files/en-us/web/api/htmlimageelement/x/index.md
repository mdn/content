---
title: "HTMLImageElement: x property"
short-title: x
slug: Web/API/HTMLImageElement/x
page-type: web-api-instance-property
browser-compat: api.HTMLImageElement.x
---

{{APIRef("HTML DOM")}}

The read-only **`x`** property of the {{domxref("HTMLImageElement")}} interface indicates the x-coordinate of the {{HTMLElement("img")}} element's left border edge relative to the root element's origin.

## Value

An integer value indicating the distance in pixels from the left edge of the element's nearest root element and the left edge of the {{HTMLElement("img")}} element's border box. The nearest root element is the outermost {{HTMLElement("html")}} element that contains the image. If the image is in an {{HTMLElement("iframe")}}, its `x` is relative to that frame.

In the diagram below, the left border edge is the left edge of the blue padding area. So the value returned by `x` would be the distance from that point to the left edge of the content area.

![Diagram showing the relationships between the various boxes associated with an element](boxmodel-3.png)

## Example

The example below demonstrates the use of the `HTMLImageElement` properties `x` and {{domxref("HTMLImageElement.y", "y")}}.

### HTML

```html
<img id="avatar" src="/shared-assets/images/examples/grapefruit-slice.jpg" />
<pre id="log"></pre>
```

### JavaScript

The JavaScript code that fetches the image and looks up its `x` and `y` values is below.

```js
const logBox = document.querySelector("pre");

const log = (msg) => {
  logBox.innerText += `${msg}\n`;
};

const image = document.getElementById("avatar");

log(`Image's global X: ${image.x}`);
log(`Image's global Y: ${image.y}`);
```

Finally, we can look up and display the values of the `HTMLImageElement`'s `x` and `y` properties.

### CSS

The CSS defining the image size:

```css
img {
  max-width: 4em;
}
```

### Result

The resulting image looks like this:

{{EmbedLiveSample("Example", 600, 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLImageElement.y")}}
