---
title: "HTMLImageElement: align property"
short-title: align
slug: Web/API/HTMLImageElement/align
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.HTMLImageElement.align
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

The _deprecated_ **`align`** property of the {{domxref("HTMLImageElement")}} interface is a string which indicates how to position the image relative to its container. It reflects the `<img>` element's [`align`](/en-US/docs/Web/HTML/Reference/Elements/img#align) content attribute.

You should instead use the CSS property {{cssxref("vertical-align")}}, which does in fact also work on images despite its name. You can also use the {{cssxref("float")}} property to float the image to the left or right margin.

## Value

A string. For the permitted values, see the HTML [`<img>`](/en-US/docs/Web/HTML/Reference/Elements/img#align) reference.

## Examples

### Setting the align attribute

```js
const img = new Image();
img.src = "example.png";
img.align = "top";
```

Instead of doing this, consider:

```js
const img = new Image();
img.src = "example.png";
img.style.verticalAlign = "top";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
