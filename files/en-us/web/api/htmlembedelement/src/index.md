---
title: "HTMLEmbedElement: src property"
short-title: src
slug: Web/API/HTMLEmbedElement/src
page-type: web-api-instance-property
browser-compat: api.HTMLEmbedElement.src
---

{{APIRef("HTML DOM")}}

The **`src`** property of the {{domxref("HTMLEmbedElement")}} interface returns a string that indicates the URL of the resource being embedded.

It reflects the `src` attribute of the {{HTMLElement("embed")}} element.

## Value

A string.

## Examples

```html
<embed
  id="el"
  type="video/quicktime"
  src="movie.mov"
  width="640"
  height="480"
  title="Title of my video" />
```

```js
const el = document.getElementById("el");
console.log(el.src); // Output: "movie.mov"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
