---
title: HTMLLinkElement
slug: Web/API/HTMLLinkElement
page-type: web-api-interface
browser-compat: api.HTMLLinkElement
---

{{ APIRef("HTML DOM") }}

The **`HTMLLinkElement`** interface represents reference information for external resources and the relationship of those resources to a document and vice versa (corresponds to [`<link>`](/en-US/docs/Web/HTML/Element/link) element; not to be confused with [`<a>`](/en-US/docs/Web/HTML/Element/a), which is represented by [`HTMLAnchorElement`](/en-US/docs/Web/API/HTMLAnchorElement)). This object inherits all of the properties and methods of the {{domxref("HTMLElement")}} interface.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLLinkElement.as")}}
  - : A string representing the type of content being loaded by the HTML link when [`rel="preload"`](/en-US/docs/Web/HTML/Attributes/rel/preload) or [`rel="modulepreload"`](/en-US/docs/Web/HTML/Attributes/rel/modulepreload).
- {{domxref("HTMLLinkElement.blocking")}}
  - : A string indicating that certain operations should be blocked on the fetching of an external resource. It reflects the `blocking` attribute of the {{HTMLElement("link")}} element.
- {{domxref("HTMLLinkElement.crossOrigin")}}
  - : A string that corresponds to the CORS setting for this link element. See [CORS settings attributes](/en-US/docs/Web/HTML/Attributes/crossorigin) for details.
- {{domxref("HTMLLinkElement.disabled")}}
  - : A boolean value which represents whether the link is disabled; currently only used with style sheet links.
- {{domxref("HTMLLinkElement.fetchPriority")}}
  - : An optional string representing a hint given to the browser on how it should prioritize fetching of a preload relative to other resources of the same type. If this value is provided, it must be one of the possible permitted values: `high` to fetch at a higher priority, `low` to fetch at a lower priority, or `auto` to indicate no preference (which is the default).
- {{domxref("HTMLLinkElement.href")}}
  - : A string representing the URI for the target resource.
- {{domxref("HTMLLinkElement.hreflang")}}
  - : A string representing the language code for the linked resource.
- {{domxref("HTMLLinkElement.integrity")}}
  - : A string that contains inline metadata that a browser can use to verify that a fetched resource has been delivered without unexpected manipulation. It reflects the `integrity` attribute of the {{HTMLElement("link")}} element.
- {{domxref("HTMLLinkElement.media")}}
  - : A string representing a list of one or more media formats to which the resource applies. It reflects the `media` attribute of the {{HTMLElement("link")}} element.
- {{domxref("HTMLLinkElement.referrerPolicy")}}
  - : A string that reflects the [`referrerpolicy`](/en-US/docs/Web/HTML/Element/link#referrerpolicy) HTML attribute indicating which referrer to use.
- {{domxref("HTMLLinkElement.rel")}}
  - : A string representing the forward relationship of the linked resource from the document to the resource.
- {{domxref("HTMLLinkElement.relList")}} {{ReadOnlyInline}}
  - : A {{domxref("DOMTokenList")}} that reflects the [`rel`](/en-US/docs/Web/HTML/Element/link#rel) HTML attribute, as a list of tokens.
- {{domxref("HTMLLinkElement.sizes")}} {{ReadOnlyInline}}
  - : A {{domxref("DOMTokenList")}} that reflects the [`sizes`](/en-US/docs/Web/HTML/Element/link#sizes) HTML attribute, as a list of tokens.
- {{domxref("HTMLLinkElement.sheet")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("StyleSheet")}} object associated with the given element, or `null` if there is none.
- {{domxref("HTMLLinkElement.type")}}
  - : A string representing the MIME type of the linked resource.

### Obsolete properties

- {{domxref("HTMLLinkElement.charset")}} {{deprecated_inline}}
  - : A string representing the character encoding for the target resource.
- {{domxref("HTMLLinkElement.rev")}} {{deprecated_inline}}

  - : A string representing the reverse relationship of the linked resource from the resource to the document.

    > [!NOTE]
    > Currently the W3C HTML 5.2 spec states that `rev` is no longer obsolete, whereas the WHATWG living standard still has it labeled obsolete. Until this discrepancy is resolved, you should still assume it is obsolete.

- {{domxref("HTMLLinkElement.target")}} {{deprecated_inline}}
  - : A string representing the name of the target frame to which the resource applies.

## Instance methods

_No specific method; inherits methods from its parent, {{domxref("HTMLElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("link")}}.
