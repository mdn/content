---
title: "HTMLInputElement: alt property"
short-title: alt
slug: Web/API/HTMLInputElement/alt
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.alt
---

{{APIRef("HTML DOM")}}

The **`alt`** property of the {{DOMxRef("HTMLInputElement")}} interface defines the textual label for the button for users and user agents who cannot use the image. It reflects the {{htmlelement("input")}} element's [`alt`](/en-US/docs/Web/HTML/Element/input#alt) attribute.

The `alt` property is valid for the [`image`](/en-US/docs/Web/HTML/Element/input/image) type only. It should be a non-empty string giving the label that would be appropriate for an equivalent button if the image was unavailable.

## Value

A string.

## Examples

```js
const inputElement = document.getElementById("imageButton");
console.log(inputElement.alt);
inputElement.alt = "A much better description";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMXref("HTMLImageElement.alt")}}
- {{DOMXref("HTMLButtonElement")}}
- {{HTMLElement("button")}}
- {{HTMLElement("input")}}
- {{HTMLElement("img")}}
- [Good alt text, bad alt text — Making your content perceivable](https://www.wcag.com/blog/good-alt-text-bad-alt-text-making-your-content-perceivable/) on WCAG.com (2021)
- [An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) on W3C Web Accessibility Initiative (WAI)
