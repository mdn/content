---
title: Document.mozSyntheticDocument
slug: Web/API/Document/mozSyntheticDocument
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - Non-standard
  - Property
  - Reference
browser-compat: api.Document.mozSyntheticDocument
---
{{ ApiRef("DOM") }}{{ non-standard_header() }}

The **`Document.mozSyntheticDocument`** property indicates
whether or not the document is a synthetic one; that is, a document representing a
standalone image, video, audio, or the like.

## Value

A boolean value that is `true` if the document is synthetic, or `false` otherwise.

## Examples

This can be useful if you have a contextual menu item you only want to display for
synthetic documents (or, conversely, for documents that aren't synthetic).

```js
const isSynthetic = document.mozSyntheticDocument;

if (isSynthetic) {
  /* insert your menu item here */
}
```

## Specifications

Not part of any specification.

## Browser compatibility

{{Compat}}
