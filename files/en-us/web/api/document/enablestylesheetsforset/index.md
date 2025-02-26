---
title: "Document: enableStyleSheetsForSet() method"
short-title: enableStyleSheetsForSet()
slug: Web/API/Document/enableStyleSheetsForSet
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.Document.enableStyleSheetsForSet
---

{{APIRef("DOM")}}{{deprecated_header}}{{Non-standard_header}}

Enables the style sheets matching the specified name in the current style sheet set,
and disables all other style sheets (except those without a title, which are always
enabled).

## Syntax

```js-nolint
enableStyleSheetsForSet(name)
```

### Parameters

- `name`
  - : The name of the style sheets to enable. All style sheets with a title that match
    this name will be enabled, while all others that have a title will be disabled.
    Specify an empty string for the _name_ parameter to disable all alternate and
    preferred style sheets (but not the persistent style sheets; that is, those with no
    `title` attribute).

### Return value

None ({{jsxref("undefined")}}).

## Notes

- Title matches are case-sensitive.
- Calling this method with a `null` _name_ has no effect; if you
  want to disable all alternate and preferred style sheets, you **must**
  pass "", the empty string.
- Stylesheets that don't have a title are never affected by this method.
- This method never affects the values of {{domxref("document.lastStyleSheetSet")}} or
  {{domxref("document.preferredStyleSheetSet")}}.

## Examples

```js
document.enableStyleSheetsForSet("Some style sheet set name");
```

## Specifications

Not part of any specification.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Stylesheet")}}
- {{domxref("Document.styleSheets")}}
- {{domxref("document.lastStyleSheetSet")}}
- {{domxref("document.preferredStyleSheetSet")}}
- {{domxref("document.selectedStyleSheetSet")}}
