---
title: DocumentFragment.querySelectorAll()
slug: Web/API/DocumentFragment/querySelectorAll
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - DocumentFragment
  - Method
  - Reference
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
querySelectorAll(selectors)
```

### Parameters

- `selectors`
  - : A string containing one or more CSS selectors separated by
    commas.

### Return value

A non-live {{domxref("NodeList")}} containing one {{domxref("Element")}} object for
each element that matches at least one of the specified selectors or an empty
{{domxref("NodeList")}} in case of no matches.

## Examples

This example returns a list of all `div` elements within the
`DocumentFragment` with a class of either "`note`" or
"`alert`":

```js
const matches = documentfrag.querySelectorAll('div.note, div.alert');
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("DocumentFragment")}} interface it belongs to.
