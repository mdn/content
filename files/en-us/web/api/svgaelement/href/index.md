---
title: "SVGAElement: href property"
short-title: href
slug: Web/API/SVGAElement/href
page-type: web-api-instance-property
browser-compat: api.SVGAElement.href
---

{{APIRef("SVG")}}

The **`href`** read-only property of the {{domxref("SVGAElement")}} returns an {{domxref("SVGAnimatedString")}} object reflecting the value of the href attribute, and, in certain cases, the {{SVGAttr("xlink:href")}} {{deprecated_inline}} attribute. It specifies the target URI associated with the link.

This property enables access to the URI set for a link within an SVG document.

## Value

A {{domxref("SVGAnimatedString")}} indicating the value of the href attribute. Additionally, for elements defined to support it, it reflects the value of the {{SVGAttr("xlink:href")}} {{deprecated_inline}} attribute when the href attribute is not set.

## Examples

```js
// Select an SVG <a> element
const svgLink = document.querySelector("a");

// Access the href property
console.log(svgLink.href.baseVal); // Logs the base URI
console.log(svgLink.href.animVal); // Logs the animated URI if applicable

// Example: Reflecting xlink:href
const deprecatedLink = document.querySelector("a");
console.log(deprecatedLink.href.baseVal); // Reflects 'xlink:href' if 'href' is not set
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ SVGAttr("href") }}
