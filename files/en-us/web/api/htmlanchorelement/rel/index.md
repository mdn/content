---
title: HTMLAnchorElement.rel
slug: Web/API/HTMLAnchorElement/rel
tags:
  - API
  - HTML DOM
  - HTMLAnchorElement
  - Property
  - Reference
browser-compat: api.HTMLAnchorElement.rel
---
{{APIRef("HTML DOM")}}

The **`HTMLAnchorElement.rel`** property reflects the
{{htmlattrxref("rel", "a")}} attribute. It is a {{domxref("DOMString")}} containing a
space-separated list of [link types](/en-US/docs/Web/HTML/Link_types)
indicating the relationship between the resource represented by the {{HTMLElement("a")}}
element and the current document.

## Syntax

```js
var relstr = anchorElt.rel;
anchorElt.rel = relstr;
```

## Example

```js
var anchors = document.getElementsByTagName("a");
var length = anchors.length;
for (var i = 0; i < length; i++) {
  alert("Rel: " + anchors[i].rel);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The equivalent property on {{HTMLElement("area")}} and {{HTMLElement("link")}},
  {{domxref("HTMLAreaElement.rel")}} and {{domxref("HTMLLinkElement.rel")}}.
- The very same list but as tokens: {{domxref("HTMLAnchorElement.relList")}}
