---
title: HTMLAnchorElement
slug: Web/API/HTMLAnchorElement
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
browser-compat: api.HTMLAnchorElement
---
{{APIRef("HTML DOM")}}

The **`HTMLAnchorElement`** interface represents hyperlink elements and provides special properties and methods (beyond those of the regular {{domxref("HTMLElement")}} object interface that they inherit from) for manipulating the layout and presentation of such elements. This interface corresponds to [`<a>`](/en-US/docs/Web/HTML/Element/a) element; not to be confused with [`<link>`](/en-US/docs/Web/HTML/Element/link), which is represented by [`HTMLLinkElement`](/en-US/docs/Web/API/HTMLLinkElement))

{{InheritanceDiagram}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLElement.accessKey")}}
  - : Is a {{domxref("DOMString")}} representing a single character that switches input focus to the hyperlink.
- {{domxref("HTMLAnchorElement.download")}} {{experimental_inline}}
  - : Is a {{domxref("DOMString")}} indicating that the linked resource is intended to be downloaded rather than displayed in the browser. The value represent the proposed name of the file. If the name is not a valid filename of the underlying OS, browser will adapt it.
- {{domxref("HTMLAnchorElement.hash")}}
  - : Is a {{domxref("USVString")}} representing the fragment identifier, including the leading hash mark ('`#`'), if any, in the referenced URL.
- {{domxref("HTMLAnchorElement.host")}}
  - : Is a {{domxref("USVString")}} representing the hostname and port (if it's not the default port) in the referenced URL.
- {{domxref("HTMLAnchorElement.hostname")}}
  - : Is a {{domxref("USVString")}} representing the hostname in the referenced URL.
- {{domxref("HTMLAnchorElement.href")}}
  - : Is a {{domxref("USVString")}} that is the result of parsing the {{htmlattrxref("href", "a")}} HTML attribute relative to the document, containing a valid URL of a linked resource.
- {{domxref("HTMLAnchorElement.hreflang")}}
  - : Is a {{domxref("DOMString")}} that reflects the {{htmlattrxref("hreflang", "a")}} HTML attribute, indicating the language of the linked resource.
- {{domxref("HTMLAnchorElement.origin")}} {{readonlyInline}}
  - : Returns a {{domxref("USVString")}} containing the origin of the URL, that is its scheme, its domain and its port.
- {{domxref("HTMLAnchorElement.password")}}
  - : Is a {{domxref("USVString")}} containing the password specified before the domain name.
- {{domxref("HTMLAnchorElement.pathname")}}
  - : Is a {{domxref("USVString")}} containing an initial `'/'` followed by the path of the URL, not including the query string or fragment.
- {{domxref("HTMLAnchorElement.port")}}
  - : Is a {{domxref("USVString")}} representing the port component, if any, of the referenced URL.
- {{domxref("HTMLAnchorElement.protocol")}}
  - : Is a {{domxref("USVString")}} representing the protocol component, including trailing colon ('`:`'), of the referenced URL.
- {{domxref("HTMLAnchorElement.referrerPolicy")}} {{experimental_inline}}
  - : Is a {{domxref("DOMString")}} that reflects the {{htmlattrxref("referrerpolicy", "a")}} HTML attribute indicating which referrer to use.
- {{domxref("HTMLAnchorElement.rel")}}
  - : Is a {{domxref("DOMString")}} that reflects the {{htmlattrxref("rel", "a")}} HTML attribute, specifying the relationship of the target object to the linked object.
- {{domxref("HTMLAnchorElement.relList")}} {{readonlyInline}}
  - : Returns a {{domxref("DOMTokenList")}} that reflects the {{htmlattrxref("rel", "a")}} HTML attribute, as a list of tokens.
- {{domxref("HTMLAnchorElement.search")}}
  - : Is a {{domxref("USVString")}} representing the search element, including leading question mark ('`?`'), if any, of the referenced URL.
- {{domxref("HTMLElement.tabIndex")}}
  - : Is a `long` containing the position of the element in the tabbing navigation order for the current document.
- {{domxref("HTMLAnchorElement.target")}}
  - : Is a {{domxref("DOMString")}} that reflects the {{htmlattrxref("target", "a")}} HTML attribute, indicating where to display the linked resource.
- {{domxref("HTMLAnchorElement.text")}}
  - : Is a {{domxref("DOMString")}} being a synonym for the {{domxref("Node.textContent")}} property.
- {{domxref("HTMLAnchorElement.type")}}
  - : Is a {{domxref("DOMString")}} that reflects the {{htmlattrxref("type", "a")}} HTML attribute, indicating the MIME type of the linked resource.
- {{domxref("HTMLAnchorElement.username")}}
  - : Is a {{domxref("USVString")}} containing the username specified before the domain name.

### Obsolete properties

- {{domxref("HTMLAnchorElement.charset")}} {{deprecated_inline}}
  - : Is a {{domxref("DOMString")}} representing the character encoding of the linked resource.
- {{domxref("HTMLAnchorElement.coords")}} {{deprecated_inline}}
  - : Is a {{domxref("DOMString")}} representing a comma-separated list of coordinates.
- {{domxref("HTMLAnchorElement.name")}} {{deprecated_inline}}
  - : Is a {{domxref("DOMString")}} representing the anchor name.
- {{domxref("HTMLAnchorElement.rev")}} {{deprecated_inline}}

  - : Is a {{domxref("DOMString")}} representing that the {{htmlattrxref("rev", "a")}} HTML attribute, specifying the relationship of the link object to the target object.

    > **Note:** Currently the W3C HTML 5.2 spec states that `rev` is no longer obsolete, whereas the WHATWG living standard still has it labeled obsolete. Until this discrepancy is resolved, you should still assume it is obsolete.

- {{domxref("HTMLAnchorElement.shape")}} {{deprecated_inline}}
  - : Is a {{domxref("DOMString")}} representing the shape of the active area.

## Methods

_Inherits methods from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLElement.blur")}}
  - : Removes the keyboard focus from the current element.
- {{domxref("HTMLElement.focus")}}
  - : Gives the keyboard focus to the current element.
- {{domxref("HTMLAnchorElement.toString()")}}
  - : Returns a {{domxref("USVString")}} containing the whole URL. It is a synonym for {{domxref("HTMLAnchorElement.href")}}, though it can't be used to modify the value.

The `blur()` and `focus()` methods are inherited from {{domxref("HTMLElement")}} from HTML5 on, but were defined on `HTMLAnchorElement` in DOM Level 2 HTML and earlier specifications.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("a")}}
