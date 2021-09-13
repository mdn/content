---
title: HTMLAreaElement.relList
slug: Web/API/HTMLAreaElement/relList
tags:
  - API
  - HTML DOM
  - HTMLAreaElement
  - Property
  - Reference
browser-compat: api.HTMLAreaElement.relList
---
{{APIRef("HTML DOM")}}

The **`HTMLAreaElement.relList`** read-only property reflects
the {{htmlattrxref("rel", "area")}} attribute. It is a live {{domxref("DOMTokenList")}}
containing the set of [link types](/en-US/docs/Web/HTML/Link_types)
indicating the relationship between the resource represented by the
{{HTMLElement("area")}} element and the current document.

The property itself is read-only, meaning you can't substitute the
{{domxref("DOMTokenList")}} by another one, but the content of the returned list can be
changed.

## Syntax

```js
var relstr = areaElt.relList;
```

## Example

```js
var areas = document.getElementsByTagName("area");
var length = areas.length;

for (var i = 0; i < length; i++) {
  var list = areas[i].relList;
  var listLength = list.length;
  console.log("New area found.");
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

- The equivalent property on {{HTMLElement("a")}} and {{HTMLElement("link")}},
  {{domxref("HTMLAnchorElement.relList")}} and {{domxref("HTMLLinkElement.relList")}}.
- The very same list but as a space-separated tokens in a {{domxref("DOMString")}}:
  {{domxref("HTMLAreaElement.rel")}}
