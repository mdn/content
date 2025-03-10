---
title: "HTMLImageElement: crossOrigin property"
short-title: crossOrigin
slug: Web/API/HTMLImageElement/crossOrigin
page-type: web-api-instance-property
browser-compat: api.HTMLImageElement.crossOrigin
---

{{APIRef("HTML DOM")}}

The {{domxref("HTMLImageElement")}}
interface's **`crossOrigin`** attribute is a string which
specifies the Cross-Origin Resource Sharing ({{Glossary("CORS")}}) setting to use when
retrieving the image.

## Value

A string of a keyword specifying the CORS mode to use when fetching
the image resource. If you don't specify `crossOrigin`, the image is fetched
without CORS (the fetch `no-cors` mode).

Permitted values are:

- `anonymous`
  - : Requests by the {{HTMLElement("img")}} element have their
    {{domxref("Request.mode", "mode")}} set to `cors` and their {{domxref("Request.credentials", "credentials")}}
    mode set to `same-origin`. This means that CORS is enabled
    and credentials are sent _if_ the image is fetched from the same origin from
    which the document was loaded.
- `use-credentials`
  - : Requests by the {{domxref("HTMLImageElement")}} will use the `cors` mode
    and the `include` credentials mode; all image requests by the element will
    use CORS, regardless of what domain the fetch is from.

If `crossOrigin` is an empty string (`""`),
the `anonymous` mode is selected.

## Examples

In this example, a new {{HTMLElement("img")}} element is created and added to the
document, loading the image with the Anonymous state; the image will be loaded using
CORS and credentials will be used for all cross-origin loads.

### JavaScript

The code below demonstrates setting the `crossOrigin` property on an
`<img>` element to configure CORS access for the fetch of a
newly-created image.

```js
const imageUrl = "clock-demo-400px.png";
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

loadImage(imageUrl);
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
    1.125rem/1.5,
    Helvetica,
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
  font-family: Courier, monospace;
  width: 95%;
}
```

### Result

{{EmbedLiveSample("Examples", 600, 260)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLLinkElement.crossOrigin")}}
- {{domxref("HTMLMediaElement.crossOrigin")}}
- {{domxref("HTMLScriptElement.crossOrigin")}}
