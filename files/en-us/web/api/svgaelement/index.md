---
title: SVGAElement
slug: Web/API/SVGAElement
tags:
  - API
  - Reference
  - SVG
  - SVGAElement
browser-compat: api.SVGAElement
---
{{APIRef("SVG")}}

The **`SVGAElement`** interface provides access to the properties of {{SVGElement("a")}} element, as well as methods to manipulate them.

## Properties

_This interface also inherits properties from its parent, {{domxref("SVGGraphicsElement")}}, and implements properties from {{domxref("HTMLHyperlinkElementUtils")}}._

- {{domxref("SVGAElement.download")}}
  - : See {{domxref("HTMLAnchorElement.download")}}.
- {{domxref("SVGAElement.href")}} {{ReadOnlyInline}}
  - : Is an {{domxref("SVGAnimatedString")}} that reflects the {{SVGAttr("href")}} or {{SVGAttr("xlink:href")}} attribute.
- {{domxref("SVGAElement.hreflang")}}
  - : Is a {{domxref("DOMString")}} that reflects the `hreflang` attribute, indicating the language of the linked resource.
- {{domxref("SVGAElement.ping")}}
  - : Is a {{domxref("DOMString")}} that reflects the ping attribute, containing a space-separated list of URLs to which, when the hyperlink is followed, {{HTTPMethod("POST")}} requests with the body `PING` will be sent by the browser (in the background). Typically used for tracking.
- {{domxref("SVGAElement.referrerPolicy")}}
  - : See {{domxref("HTMLAnchorElement.referrerPolicy")}}.
- {{domxref("SVGAElement.rel")}}
  - : See {{domxref("HTMLAnchorElement.rel")}}.
- {{domxref("SVGAElement.relList")}}
  - : See {{domxref("HTMLAnchorElement.relList")}}.
- {{domxref("SVGAElement.target")}} {{readonlyInline}}
  - : It corresponds to the {{SVGAttr("target")}} attribute of the given element.
- {{domxref("SVGAElement.text")}}
  - : Is a {{domxref("DOMString")}} being a synonym for the {{domxref("Node.textContent")}} property.
- {{domxref("SVGAElement.type")}}
  - : Is a {{domxref("DOMString")}} that reflects the `type` attribute, indicating the MIME type of the linked resource.

## Methods

_This interface has no methods but inherits methods from its parent, {{domxref("SVGGraphicsElement")}}._

## Example

In the example below, the {{SVGAttr("target")}} attribute of the {{SVGElement("a")}} element is set to `_blank` and when the link is clicked, it logs to notify whether the condition is met or not.

```js
var linkRef = document.querySelector("a");
linkRef.target = "_self";

linkRef.onclick = function(){
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
