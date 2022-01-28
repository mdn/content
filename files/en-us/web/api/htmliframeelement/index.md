---
title: HTMLIFrameElement
slug: Web/API/HTMLIFrameElement
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
browser-compat: api.HTMLIFrameElement
---
{{APIRef("HTML DOM")}}

The **`HTMLIFrameElement`** interface provides special properties and methods (beyond those of the {{domxref("HTMLElement")}} interface it also has available to it by inheritance) for manipulating the layout and presentation of inline frame elements.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}_.

- {{domxref("HTMLIFrameElement.align")}} {{deprecated_inline}}
  - : A string that specifies the alignment of the frame with respect to the surrounding context.
- {{domxref("HTMLIFrameElement.allow")}} {{experimental_inline}}
  - : A list of origins the frame is allowed to display content from. This attribute also accepts the values `self` and `src` which represent the origin in the iframe's src attribute. The default value is `src`.
- {{domxref("HTMLIFrameElement.allowfullscreen")}} {{experimental_inline}}
  - : A boolean value indicating whether the inline frame is willing to be placed into full screen mode. See [Using full-screen mode](/en-US/docs/Web/API/Fullscreen_API) for details.
- {{domxref("HTMLIFrameElement.allowPaymentRequest")}} {{deprecated_inline}}
  - : A boolean value indicating whether the [Payment Request API](/en-US/docs/Web/API/Payment_Request_API) may be invoked inside a cross-origin iframe.
- {{domxref("HTMLIFrameElement.contentDocument")}} {{readonlyInline}}
  - : Returns a {{domxref("Document")}}, the active document in the inline frame's nested browsing context.
- {{domxref("HTMLIFrameElement.contentWindow")}} {{readonlyInline}}
  - : Returns a {{domxref("WindowProxy")}}, the window proxy for the nested browsing context.
- {{domxref("HTMLIFrameElement.csp")}}
  - : Specifies the Content Security Policy that an embedded document must agree to enforce upon itself.
- {{domxref("HTMLIFrameElement.frameBorder")}} {{deprecated_inline}}
  - : A string that indicates whether to create borders between frames.
- {{domxref("HTMLIFrameElement.height")}}
  - : A string that reflects the {{htmlattrxref("height", "iframe")}} HTML attribute, indicating the height of the frame.
- {{domxref("HTMLIFrameElement.longDesc")}} {{deprecated_inline}}
  - : A string that contains the URI of a long description of the frame.
- {{domxref("HTMLIFrameElement.marginHeight")}} {{deprecated_inline}}
  - : A string being the height of the frame margin.
- {{domxref("HTMLIFrameElement.marginWidth")}} {{deprecated_inline}}
  - : A string being the width of the frame margin.
- {{domxref("HTMLIFrameElement.name")}}
  - : A string that reflects the {{htmlattrxref("name", "iframe")}} HTML attribute, containing a name by which to refer to the frame.
- {{domxref("HTMLIFrameElement.featurePolicy")}} {{readonlyinline}}{{experimental_inline}}
  - : Returns the {{domxref("FeaturePolicy")}} interface which provides a simple API for introspecting the feature policies applied to a specific document.
- {{domxref("HTMLIFrameElement.referrerPolicy")}} {{experimental_inline}}
  - : A string that reflects the {{htmlattrxref("referrerPolicy", "iframe")}} HTML attribute indicating which referrer to use when fetching the linked resource.
- {{domxref("HTMLIFrameElement.sandbox")}}
  - : A {{domxref("DOMTokenList")}} that reflects the {{htmlattrxref("sandbox", "iframe")}} HTML attribute, indicating extra restrictions on the behavior of the nested content.
- {{domxref("HTMLIFrameElement.scrolling")}} {{deprecated_inline}}
  - : A string that indicates whether the browser should provide scrollbars for the frame.
- {{domxref("HTMLIFrameElement.src")}}
  - : A string that reflects the {{htmlattrxref("src", "iframe")}} HTML attribute, containing the address of the content to be embedded. Note that programmatically removing an `<iframe>`'s src attribute (e.g. via {{domxref("Element.removeAttribute()")}}) causes `about:blank` to be loaded in the frame in Firefox (from version 65), Chromium-based browsers, and Safari/iOS.
- {{domxref("HTMLIFrameElement.srcdoc")}}
  - : A string that represents the content to display in the frame.
- {{domxref("HTMLIFrameElement.width")}}
  - : A string that reflects the {{htmlattrxref("width", "iframe")}} HTML attribute, indicating the width of the frame.

## Methods

_Inherits properties from its parent, {{domxref("HTMLElement")}}_.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("iframe")}}
