---
title: "Document: compatMode property"
short-title: compatMode
slug: Web/API/Document/compatMode
page-type: web-api-instance-property
browser-compat: api.Document.compatMode
---

{{ ApiRef("DOM") }}

The **`Document.compatMode`** read-only property indicates
whether the document is rendered in [Quirks mode](/en-US/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode) or
Standards mode.

## Value

A string that is one of the following:

- `"BackCompat"` if the document is in quirks mode.
- `"CSS1Compat"` if the document is in no-quirks (also known as
  "standards") mode or limited-quirks (also known as "almost standards") mode.

> [!NOTE]
> All these modes are now standardized, so the older "standards"
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
