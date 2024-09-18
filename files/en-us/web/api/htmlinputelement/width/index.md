---
title: "HTMLInputElement: width property"
short-title: width
slug: Web/API/HTMLInputElement/width
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.width
---

{{APIRef("HTML DOM")}}

The **`width`** property of the {{DOMxRef("HTMLInputElement")}} interface specifies the width of a control. It reflects the {{htmlelement("input")}} element's [`width`](/en-US/docs/Web/HTML/Element/input#width) attribute.

The `width` property is valid for the [`image`](/en-US/docs/Web/HTML/Element/input/image) type only. It defines the preferred horizontal size of the image button, in pixels. The property value is the width of the [content-box](/en-US/docs/Web/CSS/box-edge#content-box) of the rendered button. CSS box model properties impacting the size of the control take precedence.

If no `width` is set and no CSS width properties impact the control, the `width` will be the intrinsic width of the image. If the image didn't load, the value will be the maximum intrinsic width of the `alt` text. The `width` will be `0` if the width is not known; if no `width` is set, no CSS dimensions apply, no image loaded, and either the value of the {{DOMxRef("HTMLInputElement.alt", "alt")}} is the empty string or no `src` is set.

## Value

A number.

## Examples

```js
const inputElement = document.getElementById("imageButton");
console.log(inputElement.width);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("HTMLInputElement.height")}}
- {{DOMxRef("HTMLInputElement.src")}}
- {{DOMxRef("HTMLInputElement.alt")}}
- {{DOMXref("HTMLButtonElement")}}
- {{HTMLElement("button")}}
- {{HTMLElement("input")}}
- {{HTMLElement("img")}}
- CSS {{CSSXRef("inline-size")}} property
- CSS {{CSSXRef("width")}} property
- CSS {{CSSXRef("aspect-ratio")}} property
- [CSS box sizing](/en-US/docs/Web/CSS/CSS_box_sizing) module
