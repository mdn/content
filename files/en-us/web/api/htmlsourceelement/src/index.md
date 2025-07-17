---
title: "HTMLSourceElement: src property"
short-title: src
slug: Web/API/HTMLSourceElement/src
page-type: web-api-instance-property
browser-compat: api.HTMLSourceElement.src
---

{{APIRef("HTML DOM")}}

The **`src`** property of the {{domxref("HTMLSourceElement")}} interface is a string indicating the URL of a media resource to use as the source for the element.

It reflects the `src` attribute of the {{HTMLElement("source")}} element nested in an {{htmlelement("audio")}} or {{htmlelement("video")}} element. It has no meaning and is ignored when it is nested in a {{htmlelement("picture")}} element.

## Value

A string; the URL of a source resource to use in the element.

## Examples

```html
<source
  id="el"
  src="large.webp"
  type="video/webp"
  media="screen and (600px <= width <= 800px)" />
```

```js
const el = document.getElementById("el");
console.log(el.src); // Output: "large.webp"
el.src = "medium.webp"; // Updates the src value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLSourceElement.type")}}
- {{domxref("HTMLSourceElement.srcset")}}
- {{domxref("HTMLSourceElement.media")}}
- {{domxref("HTMLSourceElement.sizes")}}
- {{htmlelement("source")}}
- {{htmlelement("audio")}}
- {{htmlelement("video")}}
