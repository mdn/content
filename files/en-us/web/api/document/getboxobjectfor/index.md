---
title: Document.getBoxObjectFor()
slug: Web/API/Document/getBoxObjectFor
tags:
  - API
  - DOM
  - Method
  - Reference
  - Deprecated
browser-compat: api.Document.getBoxObjectFor
---
{{ApiRef("DOM")}} {{deprecated_header}}

Returns a `boxObject` (x, y, width, height) for a specified element.

> **Note:** This method is obsolete. You should use the
> {{domxref("element.getBoundingClientRect()")}} method instead.

## Syntax

```js
getBoxObjectFor(element)
```

### Parameters

- _element_ is a {{domxref("element","DOMElement")}}.

### Return value

A `nsIBoxObject`.

## Examples

```js
var myDiv = document.getElementById("myDiv"),
    boxObj = document.getBoxObjectFor (myDiv);

alert (
  "x:" + boxObj.x +
  ", y:" + boxObj.y +
  ", Width:" + boxObj.width +
  ", Height:" + boxObj.height
);
```

## Notes

Specified in nsIXULDocument.idl

## Browser compatibility

{{Compat}}
