---
title: Document.compatMode
slug: Web/API/Document/compatMode
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - Document
  - Property
  - Reference
browser-compat: api.Document.compatMode
---
{{ ApiRef("DOM") }}

The **`Document.compatMode`** read-only property indicates
whether the document is rendered in [Quirks mode](/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) or
Standards mode.

## Value

An enumerated value that can be:

- "`BackCompat`" if the document is in quirks mode.
- "`CSS1Compat`" if the document is in no-quirks (also known as
  "standards") mode or limited-quirks (also known as "almost standards") mode.

> **Note:** All these modes are now standardized, so the older "standards"
> and "almost standards" names are nonsensical and no longer used in standards.

## Examples

```js
if (document.compatMode === "BackCompat") {
  // in Quirks mode
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
