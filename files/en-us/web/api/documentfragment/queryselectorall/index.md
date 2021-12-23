---
title: DocumentFragment.querySelectorAll()
slug: Web/API/DocumentFragment/querySelectorAll
tags:
  - API
  - DOM
  - DocumentFragment
  - Method
browser-compat: api.DocumentFragment.querySelectorAll
---
{{ApiRef("DOM")}}

The **`DocumentFragment.querySelectorAll()`** method returns a
{{domxref("NodeList")}} of elements within the {{domxref("DocumentFragment")}} (using
depth-first pre-order traversal of the document's nodes) that matches the specified
group of selectors.

If the selectors specified in parameter are invalid a {{domxref("DOMException")}} with
a `SYNTAX_ERR` value is raised.

## Syntax

```js
elementList = documentfragment.querySelectorAll(selectors);
```

### Parameters

- _selectors_
  - : Is a {{domxref("DOMString")}} containing one or more CSS selectors separated by
    commas.

## Examples

This example returns a list of all `div` elements within the
`DocumentFragment` with a class of either "`note`" or
"`alert`":

```js
var matches = documentfrag.querySelectorAll("div.note, div.alert");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("DocumentFragment")}} interface it belongs to.
