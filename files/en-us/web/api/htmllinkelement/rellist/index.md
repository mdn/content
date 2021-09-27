---
title: HTMLLinkElement.relList
slug: Web/API/HTMLLinkElement/relList
tags:
  - API
  - HTML DOM
  - HTMLLinkElement
  - Property
  - Read-only
  - Reference
browser-compat: api.HTMLLinkElement.relList
---
{{ APIRef("HTML DOM") }}

The **`HTMLLinkElement.relList`** read-only property reflects
the {{htmlattrxref("rel", "link")}} attribute. It is a live {{domxref("DOMTokenList")}}
containing the set of [link types](/en-US/docs/Web/HTML/Link_types)
indicating the relationship between the resource represented by the
{{HTMLElement("link")}} element and the current document.

The property itself is read-only, meaning you can substitute the
{{domxref("DOMTokenList")}} by another one, but the content of the returned list can be
changed.

## Syntax

```js
var relstr = linkElt.relList;
```

## Example

```js
var links = document.getElementsByTagName("link");
var length = links.length;
for (var i = 0; i < length; i++) {
  var list = links[i].relList;
  var listLength = list.length;
  console.log("New link found.");
  for (var j = 0; j < listLength; j++) {
    console.log(list[j]);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The equivalent property on {{HTMLElement("a")}} and {{HTMLElement("area")}},
  {{domxref("HTMLAnchorElement.relList")}} and {{domxref("HTMLAreaElement.relList")}}.
- The very same list but as a space-separated tokens in a {{domxref("DOMString")}}:
  {{domxref("HTMLLinkElement.rel")}}
