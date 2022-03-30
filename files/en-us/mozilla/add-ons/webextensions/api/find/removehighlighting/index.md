---
title: find.removeHighlighting()
slug: Mozilla/Add-ons/WebExtensions/API/find/removeHighlighting
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - find
  - removeHighlighting
browser-compat: webextensions.api.find.removeHighlighting
---
{{AddonSidebar()}}

Remove any highlighting of a previous search that was applied by a previous call to {{WebExtAPIRef("find.highlightResults()")}}, or by the browser's native UI.

## Syntax

```js
browser.find.removeHighlighting()
```

### Parameters

None.

### Return value

None.

## Browser compatibility

{{Compat}}

## Examples

```js
browser.find.removeHighlighting();
```
