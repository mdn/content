---
title: Document.enableStyleSheetsForSet()
slug: Web/API/Document/enableStyleSheetsForSet
tags:
  - API
  - CSSOM
  - DOM
  - Method
  - NeedsMarkupWork
  - NeedsSpecTable
  - Reference
  - Deprecated
browser-compat: api.Document.enableStyleSheetsForSet
---
{{APIRef("DOM")}}{{deprecated_header}}

Enables the style sheets matching the specified name in the current style sheet set,
and disables all other style sheets (except those without a title, which are always
enabled).

## Syntax

```js
document.enableStyleSheetsForSet(name);
```

### Parameters

- _name_
  - : The name of the style sheets to enable. All style sheets with a title that match
    this name will be enabled, while all others that have a title will be disabled.
    Specify an empty string for the _name_ parameter to disable all alternate and
    preferred style sheets (but not the persistent style sheets; that is, those with no
    `title` attribute).

## Notes

- Title matches are case-sensitive.
- Calling this method with a `null` _name_ has no effect; if you
  want to disable all alternate and preferred style sheets, you **must**
  pass "", the empty string.
- Stylesheets that don't have a title are never affected by this method.
- This method never affects the values of {{domxref("document.lastStyleSheetSet")}} or
  {{domxref("document.preferredStyleSheetSet")}}.

## Example

    document.enableStyleSheetsForSet("Some style sheet set name");

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Stylesheet")}}
- {{domxref("Document.styleSheets")}}
- {{domxref("document.lastStyleSheetSet")}}
- {{domxref("document.preferredStyleSheetSet")}}
- {{domxref("document.selectedStyleSheetSet")}}
- {{domxref("document.enableStyleSheetsForSet()")}}
- [Correctly
  Using Titles With External Stylesheets](/en-US/docs/Archive/Web_Standards/Correctly_Using_Titles_With_External_Stylesheets)
