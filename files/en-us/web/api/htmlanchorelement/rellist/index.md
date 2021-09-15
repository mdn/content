---
title: HTMLAnchorElement.relList
slug: Web/API/HTMLAnchorElement/relList
tags:
  - API
  - HTML DOM
  - HTMLAnchorElement
  - Property
  - Reference
  - relList
browser-compat: api.HTMLAnchorElement.relList
---
{{APIRef("HTML DOM")}}

The **`HTMLAnchorElement.relList`** read-only property reflects
the {{htmlattrxref("rel", "a")}} attribute. It is a live {{domxref("DOMTokenList")}}
containing the set of [link types](/en-US/docs/Web/HTML/Link_types)
indicating the relationship between the resource represented by the {{HTMLElement("a")}}
element and the current document.

The property itself is read-only, meaning you can't substitute the
{{domxref("DOMTokenList")}} with another one, but its contents can still be changed.

## Syntax

```js
var relstr = anchorElt.relList;
```

## Example

```js
var anchors = document.getElementsByTagName("a");
var length = anchors.length;
for (var i = 0; i < length; i++) {
  var list = anchors[i].relList;
  var listLength = list.length;
  console.log("New anchor node found with", listLength, "link types in relList.");
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

- The equivalent property on {{HTMLElement("area")}} and {{HTMLElement("link")}},
  {{domxref("HTMLAreaElement.relList")}} and {{domxref("HTMLLinkElement.relList")}}.
- The very same list but as a space-separated tokens in a {{domxref("DOMString")}}:
  {{domxref("HTMLAnchorElement.rel")}}
