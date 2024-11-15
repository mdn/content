---
title: "HTMLAreaElement: alt property"
short-title: alt
slug: Web/API/HTMLAreaElement/alt
page-type: web-api-instance-property
browser-compat: api.HTMLAreaElement.alt
---

{{APIRef("HTML DOM")}}

The **`alt`** property of the {{DOMxRef("HTMLAreaElement")}} interface specifies the text of the hyperlink, defining the textual label for an image map's link. It reflects the {{htmlelement("area")}} element's [`alt`](/en-US/docs/Web/HTML/Element/area#alt) attribute.

The `alt` value must be text that, when presented with the `alt` text of the other `<area>` hyperlinks within the same {{htmlelement("map")}}, along with the `alt` text of the {{htmlelement("img")}} itself, provides the user with the same kind of choice as the hyperlink would when used without its text but with its shape applied to the image.

If the {{htmlelement("area")}} is a link (contains an {{DOMxRef("HTMLAreaElement.href", "href")}} property), the `alt` property value should be a non-empty string giving the label for the link that would be appropriate if the image were unavailable. The `alt` attribute for a link `<area>` can only be empty if there is another `<area>` element in the same `<map>` that points to the same resource and has a non-blank `alt` attribute.

## Value

A string.

## Examples

```js
const areaElement = document.getElementById("imageArea");
console.log(areaElement.alt);
areaElement.alt = "A much better link description";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMXref("HTMLImageElement.alt")}}
- {{DOMXref("HTMLInputElement.alt")}}
- {{DOMXref("HTMLMapElement")}}
- {{HTMLElement("area")}}
- {{HTMLElement("map")}}
- {{HTMLElement("a")}}
- [Good alt text, bad alt text — Making your content perceivable](https://www.wcag.com/blog/good-alt-text-bad-alt-text-making-your-content-perceivable/) on WCAG.com (2021)
- [An alt decision tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) on W3C Web Accessibility Initiative (WAI)
