---
title: "HTMLMediaElement: src property"
short-title: src
slug: Web/API/HTMLMediaElement/src
page-type: web-api-instance-property
browser-compat: api.HTMLMediaElement.src
---

{{APIRef("HTML DOM")}}

The **`HTMLMediaElement.src`** property reflects the value of
the HTML media element's `src` attribute, which indicates the URL of a media
resource to use in the element.

> **Note:** The best way to know the URL of the media resource currently
> in active use in this element is to look at the value of the
> {{domxref("HTMLMediaElement.currentSrc", "currentSrc")}} attribute, which also takes
> into account selection of a best or preferred media resource from a list provided in
> an {{domxref("HTMLSourceElement")}} (which represents a {{HTMLElement("source")}}
> element).

## Value

A string object containing the URL of a media resource to use in the
element; this property reflects the value of the HTML element's `src`
attribute.

## Examples

```js
const obj = document.createElement("video");
console.log(obj.src); // ""
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLMediaElement")}}: Interface used to define the `HTMLMediaElement.src` property
