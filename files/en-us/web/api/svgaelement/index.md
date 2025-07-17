---
title: SVGAElement
slug: Web/API/SVGAElement
page-type: web-api-interface
browser-compat: api.SVGAElement
---

{{APIRef("SVG")}}

The **`SVGAElement`** interface provides access to the properties of an {{SVGElement("a")}} element, as well as methods to manipulate them.

{{InheritanceDiagram}}

## Instance properties

_This interface also inherits properties from its parent, {{domxref("SVGGraphicsElement")}}._

- {{domxref("SVGAElement.download")}}
  - : See {{domxref("HTMLAnchorElement.download")}}.
- {{domxref("SVGAElement.hash")}}
  - : A string representing the fragment identifier, including the leading hash mark (`#`), if any, in the referenced URL.
- {{domxref("SVGAElement.host")}}
  - : A string representing the hostname and port (if it's not the default port) in the referenced URL.
- {{domxref("SVGAElement.hostname")}}
  - : A string representing the hostname in the referenced URL.
- {{domxref("SVGAElement.href")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} that reflects the {{SVGAttr("href")}} or {{SVGAttr("xlink:href")}} {{deprecated_inline}} attribute.
- {{domxref("SVGAElement.hreflang")}}
  - : A string that reflects the `hreflang` attribute, indicating the language of the linked resource.
- {{domxref("SVGAElement.origin")}} {{ReadOnlyInline}}
  - : Returns a string containing the origin of the URL, that is its scheme, its domain and its port.
- {{domxref("SVGAElement.pathname")}}
  - : A string containing an initial `/` followed by the path of the URL, not including the query string or fragment.
- {{domxref("SVGAElement.password")}}
  - : A string containing the password specified before the domain name.
- {{domxref("SVGAElement.ping")}}
  - : A string that reflects the ping attribute, containing a space-separated list of URLs to which, when the hyperlink is followed, {{HTTPMethod("POST")}} requests with the body `PING` will be sent by the browser (in the background). Typically used for tracking.
- {{domxref("SVGAElement.port")}}
  - : A string representing the port component, if any, of the referenced URL.
- {{domxref("SVGAElement.protocol")}}
  - : A string representing the protocol component, including trailing colon (`:`), of the referenced URL.
- {{domxref("SVGAElement.referrerPolicy")}}
  - : See {{domxref("HTMLAnchorElement.referrerPolicy")}}.
- {{domxref("SVGAElement.rel")}}
  - : See {{domxref("HTMLAnchorElement.rel")}}.
- {{domxref("SVGAElement.relList")}}
  - : See {{domxref("HTMLAnchorElement.relList")}}.
- {{domxref("SVGAElement.search")}}
  - : A string representing the search element, including leading question mark (`?`), if any, of the referenced URL.
- {{domxref("SVGAElement.target")}} {{ReadOnlyInline}}
  - : It corresponds to the {{SVGAttr("target")}} attribute of the given element.
- {{domxref("SVGAElement.text")}} {{deprecated_inline}}
  - : A string that is a synonym for the {{domxref("Node.textContent")}} property.
- {{domxref("SVGAElement.type")}}
  - : A string that reflects the `type` attribute, indicating the MIME type of the linked resource.
- {{domxref("SVGAElement.username")}}
  - : A string containing the username specified before the domain name.

## Instance methods

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
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGElement("a")}} element
