---
title: HTMLAreaElement
slug: Web/API/HTMLAreaElement
page-type: web-api-interface
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
browser-compat: api.HTMLAreaElement
---
{{APIRef("HTML DOM")}}

The **`HTMLAreaElement`** interface provides special properties and methods (beyond those of the regular object {{domxref("HTMLElement")}} interface it also has available to it by inheritance) for manipulating the layout and presentation of {{HtmlElement("area")}} elements.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLElement.accessKey")}}
  - : A string containing a single character that switches input focus to the control.
- {{domxref("HTMLAreaElement.alt")}}
  - : A string that reflects the {{ htmlattrxref("alt", "area") }} HTML attribute, containing alternative text for the element.
- {{domxref("HTMLAreaElement.coords")}}
  - : A string that reflects the {{ htmlattrxref("coords", "area") }} HTML attribute, containing coordinates to define the hot-spot region.
- {{domxref("HTMLAreaElement.download")}} {{experimental_inline}}
  - : A string indicating that the linked resource is intended to be downloaded rather than displayed in the browser. The value represent the proposed name of the file. If the name is not a valid filename of the underlying OS, browser will adapt it.
- {{domxref("HTMLAreaElement.hash")}}
  - : A string containing the fragment identifier (including the leading hash mark (#)), if any, in the referenced URL.
- {{domxref("HTMLAreaElement.host")}}
  - : A string containing the hostname and port (if it's not the default port) in the referenced URL.
- {{domxref("HTMLAreaElement.hostname")}}
  - : A string containing the hostname in the referenced URL.
- {{domxref("HTMLAreaElement.href")}}
  - : A string containing that reflects the {{ htmlattrxref("href", "area") }} HTML attribute, containing a valid URL of a linked resource.
- {{domxref("HTMLAreaElement.noHref")}} {{deprecated_inline}}
  - : A boolean flag indicating if the area is inactive (`true`) or active (`false`).
- {{domxref("HTMLAreaElement.origin")}} {{ReadOnlyInline}}
  - : Returns a string containing the origin of the URL, that is its scheme, its domain and its port.
- {{domxref("HTMLAreaElement.password")}}
  - : A string containing the password specified before the domain name.
- {{domxref("HTMLAreaElement.pathname")}}
  - : A string containing the path name component, if any, of the referenced URL.
- {{domxref("HTMLAreaElement.port")}}
  - : A string containing the port component, if any, of the referenced URL.
- {{domxref("HTMLAreaElement.protocol")}}
  - : A string containing the protocol component (including trailing colon `':'`), of the referenced URL.
- {{domxref("HTMLAreaElement.referrerPolicy")}} {{experimental_inline}}
  - : A string that reflects the {{htmlattrxref("referrerpolicy", "area")}} HTML attribute indicating which referrer to use when fetching the linked resource.
- {{domxref("HTMLAreaElement.rel")}}
  - : A string that reflects the {{ htmlattrxref("rel", "area") }} HTML attribute, indicating relationships of the current document to the linked resource.
- {{domxref("HTMLAreaElement.relList")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("DOMTokenList")}} that reflects the {{ htmlattrxref("rel", "area") }} HTML attribute, indicating relationships of the current document to the linked resource, as a list of tokens.
- {{domxref("HTMLAreaElement.search")}}
  - : A string containing the search element (including leading question mark `'?'`), if any, of the referenced URL.
- {{domxref("HTMLAreaElement.shape")}}
  - : A string that reflects the {{ htmlattrxref("shape", "area") }} HTML attribute, indicating the shape of the hot-spot, limited to known values.
- {{domxref("HTMLElement.tabIndex")}}
  - : A `long` containing the element's position in the tabbing order.
- {{domxref("HTMLAreaElement.target")}}
  - : A string that reflects the {{ htmlattrxref("target", "area") }} HTML attribute, indicating the browsing context in which to open the linked resource.
- {{domxref("HTMLAreaElement.username")}}
  - : A string containing the username specified before the domain name.

## Methods

_Inherits methods from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLAreaElement.toString()")}}
  - : Returns a string containing the whole URL. It is a synonym for {{domxref("HTMLAreaElement.href")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML element implementing this interface: {{ HTMLElement("area") }}
