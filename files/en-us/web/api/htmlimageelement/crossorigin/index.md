---
title: "HTMLImageElement: crossOrigin property"
short-title: crossOrigin
slug: Web/API/HTMLImageElement/crossOrigin
page-type: web-api-instance-property
browser-compat: api.HTMLImageElement.crossOrigin
---

{{APIRef("HTML DOM")}}

The **`crossOrigin`** property of the {{domxref("HTMLImageElement")}} interface is a string which specifies the Cross-Origin Resource Sharing ({{Glossary("CORS")}}) setting to use when retrieving the image. It reflects the `<img>` element's [`crossorigin`](/en-US/docs/Web/HTML/Reference/Elements/img#crossorigin) content attribute.

## Value

A string. For the permitted values, see the HTML [`crossorigin`](/en-US/docs/Web/HTML/Reference/Attributes/crossorigin) attribute reference.

## Examples

### Setting the crossorigin attribute

In this example, a new {{HTMLElement("img")}} element is created and added to the document, loading the image with the Anonymous state; the image will be loaded using CORS and credentials will be used for all cross-origin loads.

#### JavaScript

The code below demonstrates setting the `crossOrigin` property on an `<img>` element to configure CORS access for the fetch of a newly-created image.

```js
const container = document.querySelector(".container");

function loadImage(url) {
  const image = new Image(200, 200);
  image.addEventListener("load", () => container.prepend(image));

  image.addEventListener("error", () => {
    const errMsg = document.createElement("output");
    errMsg.value = `Error loading image at ${url}`;
    container.append(errMsg);
  });

  image.crossOrigin = "anonymous";
  image.alt = "";
  image.src = url;
}

loadImage("/shared-assets/images/examples/balloon.jpg");
```

### HTML

```html
<div class="container">
  <p>
    Here's a paragraph. It's a very interesting paragraph. You are captivated by
    this paragraph. Keep reading this paragraph. Okay, now you can stop reading
    this paragraph. Thanks for reading me.
  </p>
</div>
```

### CSS

```css
body {
  font:
    1.125rem/1.5 "Helvetica",
    "Arial",
    sans-serif;
}

.container {
  display: flow-root;
  width: 37.5em;
  border: 1px solid #d2d2d2;
}

img {
  float: left;
  padding-right: 1.5em;
}

output {
  background: rgb(100 100 100 / 100%);
  font-family: "Courier New", monospace;
  width: 95%;
}
```

### Result

{{EmbedLiveSample("Setting the crossorigin attribute", 600, 260)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLLinkElement.crossOrigin")}}
- {{domxref("HTMLMediaElement.crossOrigin")}}
- {{domxref("HTMLScriptElement.crossOrigin")}}
