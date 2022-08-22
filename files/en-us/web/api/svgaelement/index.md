---
title: SVGAElement
slug: Web/API/SVGAElement
page-type: web-api-interface
tags:
  - API
  - Reference
  - SVG
  - SVGAElement
browser-compat: api.SVGAElement
---
{{APIRef("SVG")}}

The **`SVGAElement`** interface provides access to the properties of an {{SVGElement("a")}} element, as well as methods to manipulate them.

{{InheritanceDiagram}}

## Properties

_This interface also inherits properties from its parent, {{domxref("SVGGraphicsElement")}}, and implements properties from {{domxref("HTMLHyperlinkElementUtils")}}._

- {{domxref("SVGAElement.download")}}
  - : See {{domxref("HTMLAnchorElement.download")}}.
- {{domxref("SVGAElement.href")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} that reflects the {{SVGAttr("href")}} or {{SVGAttr("xlink:href")}} attribute.
- {{domxref("SVGAElement.hreflang")}}
  - : A string that reflects the `hreflang` attribute, indicating the language of the linked resource.
- {{domxref("SVGAElement.ping")}}
  - : A string that reflects the ping attribute, containing a space-separated list of URLs to which, when the hyperlink is followed, {{HTTPMethod("POST")}} requests with the body `PING` will be sent by the browser (in the background). Typically used for tracking.
- {{domxref("SVGAElement.referrerPolicy")}}
  - : See {{domxref("HTMLAnchorElement.referrerPolicy")}}.
- {{domxref("SVGAElement.rel")}}
  - : See {{domxref("HTMLAnchorElement.rel")}}.
- {{domxref("SVGAElement.relList")}}
  - : See {{domxref("HTMLAnchorElement.relList")}}.
- {{domxref("SVGAElement.target")}} {{ReadOnlyInline}}
  - : It corresponds to the {{SVGAttr("target")}} attribute of the given element.
- {{domxref("SVGAElement.text")}}
  - : A string being a synonym for the {{domxref("Node.textContent")}} property.
- {{domxref("SVGAElement.type")}}
  - : A string that reflects the `type` attribute, indicating the MIME type of the linked resource.

## Methods

_This interface has no methods but inherits methods from its parent, {{domxref("SVGGraphicsElement")}}._

## Example

In the example below, the {{SVGAttr("target")}} attribute of the {{SVGElement("a")}} element is set to `_blank` and when the link is clicked, it logs to notify whether the condition is met or not.

```js
const linkRef = document.querySelector("a");
linkRef.target = "_self";

linkRef.onclick = () => {
  if (linkRef.target === "_blank") {
    console.log("BLANK!");
    linkRef.target = "_self";
  } else {
    console.log("SORRY! not _blank");
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGElement("a")}} element
