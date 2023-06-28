---
title: find.highlightResults()
slug: Mozilla/Add-ons/WebExtensions/API/find/highlightResults
page-type: webextension-api-function
browser-compat: webextensions.api.find.highlightResults
---

{{AddonSidebar()}}

Highlights the results of a previous call to {{WebExtAPIRef("find.find()")}}.

When an extension calls `find()`, the matches are not highlighted automatically, but they are stored by the browser. Call `highlightResults()` to highlight them.

Note that the stored results are global across all extensions, so for example, if extension A calls `find("apple")`, then extension B calls `find("banana")`, then if extension A calls `highlightResults()`, the results for "banana" will be highlighted.

## Syntax

```js-nolint
browser.find.highlightResults(
  options // optional object
)
```

### Parameters

- `options` {{optional_inline}}

  - : `object`. An object specifying additional options. It may take any of the following properties, all optional:

    - `tabId`
      - : `integer`. ID of the tab to highlight. Defaults to the active tab.
    - `rangeIndex`
      - : `integer`. Index of the range to highlight. Defaults to highlighting all ranges.
    - `noScroll`
      - : `boolean`. Don't scroll to highlighted item. Defaults to `true`.

### Return value

None.

## Browser compatibility

{{Compat}}

## Examples

Search the active tab for "banana", log the number of matches, and highlight them:

```js
function found(results) {
  console.log(`There were: ${results.count} matches.`);
  if (results.count > 0) {
    browser.find.highlightResults();
  }
}

browser.find.find("banana").then(found);
```
