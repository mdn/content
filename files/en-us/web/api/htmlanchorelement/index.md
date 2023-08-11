---
title: HTMLAnchorElement
slug: Web/API/HTMLAnchorElement
page-type: web-api-interface
browser-compat: api.HTMLAnchorElement
---

{{APIRef("HTML DOM")}}

The **`HTMLAnchorElement`** interface represents hyperlink elements and provides special properties and methods (beyond those of the regular {{domxref("HTMLElement")}} object interface that they inherit from) for manipulating the layout and presentation of such elements. This interface corresponds to [`<a>`](/en-US/docs/Web/HTML/Element/a) element; not to be confused with [`<link>`](/en-US/docs/Web/HTML/Element/link), which is represented by [`HTMLLinkElement`](/en-US/docs/Web/API/HTMLLinkElement))

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLElement.accessKey")}}
  - : A string representing a single character that switches input focus to the hyperlink.
- {{domxref("HTMLAnchorElement.download")}}
  - : A string indicating that the linked resource is intended to be downloaded rather than displayed in the browser. The value represent the proposed name of the file. If the name is not a valid filename of the underlying OS, browser will adapt it.
- {{domxref("HTMLAnchorElement.hash")}}
  - : A string representing the fragment identifier, including the leading hash mark ('`#`'), if any, in the referenced URL.
- {{domxref("HTMLAnchorElement.host")}}
  - : A string representing the hostname and port (if it's not the default port) in the referenced URL.
- {{domxref("HTMLAnchorElement.hostname")}}
  - : A string representing the hostname in the referenced URL.
- {{domxref("HTMLAnchorElement.href")}}
  - : A string that is the result of parsing the [`href`](/en-US/docs/Web/HTML/Element/a#href) HTML attribute relative to the document, containing a valid URL of a linked resource.
- {{domxref("HTMLAnchorElement.hreflang")}}
  - : A string that reflects the [`hreflang`](/en-US/docs/Web/HTML/Element/a#hreflang) HTML attribute, indicating the language of the linked resource.
- {{domxref("HTMLAnchorElement.origin")}} {{ReadOnlyInline}}
  - : Returns a string containing the origin of the URL, that is its scheme, its domain and its port.
- {{domxref("HTMLAnchorElement.password")}}
  - : A string containing the password specified before the domain name.
- {{domxref("HTMLAnchorElement.pathname")}}
  - : A string containing an initial `'/'` followed by the path of the URL, not including the query string or fragment.
- {{domxref("HTMLAnchorElement.port")}}
  - : A string representing the port component, if any, of the referenced URL.
- {{domxref("HTMLAnchorElement.protocol")}}
  - : A string representing the protocol component, including trailing colon ('`:`'), of the referenced URL.
- {{domxref("HTMLAnchorElement.referrerPolicy")}}
  - : A string that reflects the [`referrerpolicy`](/en-US/docs/Web/HTML/Element/a#referrerpolicy) HTML attribute indicating which referrer to use.
- {{domxref("HTMLAnchorElement.rel")}}
  - : A string that reflects the [`rel`](/en-US/docs/Web/HTML/Element/a#rel) HTML attribute, specifying the relationship of the target object to the linked object.
- {{domxref("HTMLAnchorElement.relList")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("DOMTokenList")}} that reflects the [`rel`](/en-US/docs/Web/HTML/Element/a#rel) HTML attribute, as a list of tokens.
- {{domxref("HTMLAnchorElement.search")}}
  - : A string representing the search element, including leading question mark ('`?`'), if any, of the referenced URL.
- {{domxref("HTMLElement.tabIndex")}}
  - : A `long` containing the position of the element in the tabbing navigation order for the current document.
- {{domxref("HTMLAnchorElement.target")}}
  - : A string that reflects the [`target`](/en-US/docs/Web/HTML/Element/a#target) HTML attribute, indicating where to display the linked resource.
- {{domxref("HTMLAnchorElement.text")}}
  - : A string being a synonym for the {{domxref("Node.textContent")}} property.
- {{domxref("HTMLAnchorElement.type")}}
  - : A string that reflects the [`type`](/en-US/docs/Web/HTML/Element/a#type) HTML attribute, indicating the MIME type of the linked resource.
- {{domxref("HTMLAnchorElement.username")}}
  - : A string containing the username specified before the domain name.

### Obsolete properties

- {{domxref("HTMLAnchorElement.charset")}} {{deprecated_inline}}
  - : A string representing the character encoding of the linked resource.
- {{domxref("HTMLAnchorElement.coords")}} {{deprecated_inline}}
  - : A string representing a comma-separated list of coordinates.
- {{domxref("HTMLAnchorElement.name")}} {{deprecated_inline}}
  - : A string representing the anchor name.
- {{domxref("HTMLAnchorElement.rev")}} {{deprecated_inline}}

  - : A string representing that the [`rev`](/en-US/docs/Web/HTML/Element/a#rev) HTML attribute, specifying the relationship of the link object to the target object.

    > **Note:** Currently the W3C HTML 5.2 spec states that `rev` is no longer obsolete, whereas the WHATWG living standard still has it labeled obsolete. Until this discrepancy is resolved, you should still assume it is obsolete.

- {{domxref("HTMLAnchorElement.shape")}} {{deprecated_inline}}
  - : A string representing the shape of the active area.

## Instance methods

_Inherits methods from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLElement.blur")}}
  - : Removes the keyboard focus from the current element.
- {{domxref("HTMLElement.focus")}}
  - : Gives the keyboard focus to the current element.
- {{domxref("HTMLAnchorElement.toString()")}}
  - : Returns a string containing the whole URL. It is a synonym for {{domxref("HTMLAnchorElement.href")}}, though it can't be used to modify the value.

The `blur()` and `focus()` methods are inherited from {{domxref("HTMLElement")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("a")}}
