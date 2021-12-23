---
title: Document.origin
slug: Web/API/Document/origin
tags:
  - API
  - DOM
  - Document
  - Experimental
  - Interface
  - Property
  - Read-only
  - Deprecated
browser-compat: api.Document.origin
---
{{APIRef("DOM")}}{{deprecated_header}}

> **Note:** Use `self.origin` instead.

The **`Document.origin`** read-only property returns the
document's origin. In most cases, this property is equivalent to
`document.defaultView.location.origin`.

## Syntax

```js
var origin = document.origin;
```

## Examples

```js
var origin = document.origin;
// On this page, returns:'https://developer.mozilla.org'

var origin = document.origin;
// On "about:blank", returns:'null'

var origin = document.origin;
// On "data:text/html,<b>foo</b>", returns:'null'
```

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URLUtils.origin")}} property.
