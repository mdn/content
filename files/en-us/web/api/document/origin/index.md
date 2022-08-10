---
title: Document.origin
slug: Web/API/Document/origin
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - Document
  - Interface
  - Property
  - Read-only
  - Deprecated
  - Non-standard
browser-compat: api.Document.origin
---
{{APIRef("DOM")}}{{deprecated_header}}{{Non-standard_header}}

> **Note:** Use `self.origin` instead.

The **`Document.origin`** read-only property returns the
document's origin. In most cases, this property is equivalent to
`document.defaultView.location.origin`.

## Value

A string containing the document's origin.

## Examples

```js
console.log(document.origin);
// On this page, logs: 'https://developer.mozilla.org'

console.log(document.origin);
// On "about:blank", logs: 'null'

console.log(document.origin);
// On "data:text/html,<p>foo</p>", logs: 'null'
```

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URLUtils.origin")}} property.
