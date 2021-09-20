---
title: HTMLAreaElement.rel
slug: Web/API/HTMLAreaElement/rel
tags:
  - API
  - HTML DOM
  - HTMLAreaElement
  - Property
  - Reference
browser-compat: api.HTMLAreaElement.rel
---
{{APIRef("HTML DOM")}}

The **`HTMLAreaElement.rel`** property reflects the
{{htmlattrxref("rel", "area")}} attribute. It is a {{domxref("DOMString")}} containing a
space-separated list of [link types](/en-US/docs/Web/HTML/Link_types)
indicating the relationship between the resource represented by the
{{HTMLElement("area")}} element and the current document.

## Syntax

```js
var relstr = areaElt.rel;
areaElt.rel = relstr;
```

## Example

```js
var areas = document.getElementsByTagName("area");
var length = areas.length;
for (var i = 0; i < length; i++) {
  alert("Rel: " + areas[i].rel);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The equivalent property on {{HTMLElement("a")}} and {{HTMLElement("link")}},
  {{domxref("HTMLAnchorElement.rel")}} and {{domxref("HTMLLinkElement.rel")}}.
- The very same list but as tokens: {{domxref("HTMLAreaElement.relList")}}
