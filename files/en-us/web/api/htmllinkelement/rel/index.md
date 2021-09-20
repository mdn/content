---
title: HTMLLinkElement.rel
slug: Web/API/HTMLLinkElement/rel
tags:
  - API
  - HTML DOM
  - HTMLLinkElement
  - Property
  - Reference
browser-compat: api.HTMLLinkElement.rel
---
{{ APIRef("HTML DOM") }}

The **`HTMLLinkElement.rel`** property reflects the
{{htmlattrxref("rel", "link")}} attribute. It is a {{domxref("DOMString")}} containing a
space-separated list of [link types](/en-US/docs/Web/HTML/Link_types)
indicating the relationship between the resource represented by the
{{HTMLElement("link")}} element and the current document.

The most common use of this attribute is to specify a link to an external style sheet:
the property is set to `stylesheet`, and the {{htmlattrxref("href", "link")}}
attribute is set to the URL of an external style sheet to format the page.

## Syntax

```js
var relstr = linkElt.rel;
linkElt.rel = relstr;
```

## Example

```js
var links = document.getElementsByTagName('link');
var length = links.length;
for (var i = 0; i < length; i++) {
  alert(links[i]);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The equivalent property on {{HTMLElement("a")}} and {{HTMLElement("area")}},
  {{domxref("HTMLAnchorElement.rel")}} and {{domxref("HTMLAreaElement.rel")}}.
- The very same list but as tokens: {{domxref("HTMLLinkElement.relList")}}
