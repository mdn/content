---
title: HTMLStyleElement.scoped
slug: Web/API/HTMLStyleElement/scoped
tags:
  - API
  - HTML DOM
  - HTMLStyleElement
  - Non-standard
  - Property
  - Reference
  - scoped
  - Deprecated
browser-compat: api.HTMLStyleElement.scoped
---
{{APIRef("HTML DOM")}}{{non-standard_header}}{{deprecated_header}}

The **`HTMLStyleElement.scoped`** property is a [`Boolean`](/en-US/docs/Web/API/Boolean) value indicating if the
element applies to the whole document (`false`) or only to the parent's
sub-tree (`true`).

By default it contains the value of the {{htmlattrxref("scoped", "style")}} content
attribute.

## Syntax

```js
value = style.scoped;
style.scoped = true;
```

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("style")}} HTML Element.
- The {{cssxref(":scope")}} CSS pseudo-class.
