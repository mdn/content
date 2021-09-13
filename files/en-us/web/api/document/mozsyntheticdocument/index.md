---
title: Document.mozSyntheticDocument
slug: Web/API/Document/mozSyntheticDocument
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

## Syntax

```js
var isSynthetic = document.mozSyntheticDocument;
```

On return, `isSynthetic` is `true` if the document is a synthetic
one; otherwise it's `false`.

## Example

This can be useful if you have a contextual menu item you only want to display for
synthetic documents (or, conversely, for documents that aren't synthetic).

```js
var isSynthetic = document.mozSyntheticDocument;

if (isSynthetic) {
  /* insert your menu item here */
}
```

## Specifications

Not part of any specification.

## Browser compatibility

{{Compat}}
