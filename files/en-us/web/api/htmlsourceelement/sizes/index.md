---
title: "HTMLSourceElement: sizes property"
short-title: sizes
slug: Web/API/HTMLSourceElement/sizes
page-type: web-api-instance-property
browser-compat: api.HTMLSourceElement.sizes
---

{{APIRef("HTML DOM")}}

The **`sizes`** property of the {{domxref("HTMLSourceElement")}} interface is a string representing a list of one or more sizes, representing sizes between breakpoints, to which the resource applies.

It reflects the `sizes` attribute of the {{HTMLElement("source")}} element.

## Value

A string.

## Examples

```html
<source
  id="el"
  src="mediumVideo.mov"
  type="video/quicktime"
  sizes="(50em <= width <= 60px) 50em,
         (30em <= width < 50em) 30em" />
```

```js
const el = document.getElementById("el");
console.log(el.sizes); // Output: "(50em <= width <= 60px) 50em, (30em <= width < 50em) 30em"
el.sizes = "(50em <= width <= 60px) 100em, (30em <= width < 50em) 60em"; // Updates the sizes value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLImageElement.sizes")}}
- {{domxref("HTMLSourceElement.media")}}
- {{domxref("HTMLSourceElement.type")}}
- {{domxref("HTMLSourceElement.src")}}
- {{domxref("HTMLSourceElement.srcset")}}
- {{htmlelement("source")}}
- {{htmlelement("picture")}}
- {{htmlelement("audio")}}
- {{htmlelement("video")}}
