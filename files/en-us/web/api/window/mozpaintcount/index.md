---
title: Window.mozPaintCount
slug: Web/API/Window/mozPaintCount
tags:
  - API
  - API:Mozilla Extensions
  - Deprecated
  - HTML DOM
  - NeedsExample
  - NeedsMarkupWork
  - NeedsSpecTable
  - Non-standard
  - Property
  - Reference
  - Window
browser-compat: api.Window.mozPaintCount
---
{{APIRef()}}{{Non-standard_Header}}{{deprecated_header}}

Returns the number of times the current document has been painted to the screen in this
window.

## Syntax

```js
var paintCount = window.mozPaintCount;
```

- `paintCount` stores the `window.mozPaintCount`
  property value.
- The `window.mozPaintCount` value is a `long long`, and starts
  at zero when the document is first created, incrementing by one each time the document
  is painted.

## Specifications

Not part of any W3C technical
specification or recommendation.

## Browser compatibility

{{Compat}}
