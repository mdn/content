---
title: "HTMLImageElement: border property"
short-title: border
slug: Web/API/HTMLImageElement/border
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.HTMLImageElement.border
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

The _deprecated_ **`border`** property of the {{domxref("HTMLImageElement")}} interface specifies the number of pixels thick the border surrounding the image should be. A value of 0, the default, indicates that no border should be drawn. It reflects the `<img>` element's [`border`](/en-US/docs/Web/HTML/Reference/Elements/img#border) content attribute.

You should instead use the CSS property {{cssxref("border")}} or its longhand properties to not only set the thickness of the border but also to potentially apply a wide variety of other styling options to it.

## Value

A string containing an integer value specifying the thickness of the border that should surround the image, in CSS pixels. A value of `0`, or an empty string, indicates that there should be no border drawn. The default value of `border` is `0`.

When set to the `null` value, that `null` value is converted to the empty string (`""`), so `elt.border = null` is equivalent to `elt.border = ""`.

## Examples

### Setting the border attribute

```js
const img = new Image();
img.src = "example.png";
img.border = "1";
```

Instead of doing this, consider:

```js
const img = new Image();
img.src = "example.png";
img.style.borderWidth = "1px";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
