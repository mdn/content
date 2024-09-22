---
title: "HTMLInputElement: height property"
short-title: height
slug: Web/API/HTMLInputElement/height
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.height
---

{{APIRef("HTML DOM")}}

The **`height`** property of the {{DOMxRef("HTMLInputElement")}} interface specifies the height of a control. It reflects the {{htmlelement("input")}} element's [`height`](/en-US/docs/Web/HTML/Element/input#height) attribute.

The `height` property is valid for the [`image`](/en-US/docs/Web/HTML/Element/input/image) type only. It defines the vertical dimension of the image button, in pixels. If CSS sizing properties apply to the control, the value is the height of the content box of the rendered control, not the value of the `height` attribute. If no `height` is set and CSS does not impact the control's size, the `height` will be the intrinsic height of the image. If the image didn't load, the value will be the height of the `alt` text. The `height` will be `0` if the height is not known; if no `height` is set, CSS doesn't impact the height, the image didn't load, and either the value of the {{DOMxRef("HTMLInputElement.alt", "alt")}} is the empty string or no `src` is set.

## Value

A number.

## Examples

```js
const inputElement = document.getElementById("imageButton");
console.log(inputElement.height);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("HTMLInputElement.width")}}
- {{DOMxRef("HTMLInputElement.src")}}
- {{DOMxRef("HTMLInputElement.alt")}}
- {{DOMXref("HTMLButtonElement")}}
- {{HTMLElement("button")}}
- {{HTMLElement("input")}}
- {{HTMLElement("img")}}
- CSS {{CSSXRef("inline-size")}} property
- CSS {{CSSXRef("height")}} property
- CSS {{CSSXRef("aspect-ratio")}} property
- [CSS box sizing](/en-US/docs/Web/CSS/CSS_box_sizing) module
