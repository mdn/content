---
title: browserSettings.openSearchResultsInNewTabs
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/openSearchResultsInNewTabs
page-type: webextension-api-property
browser-compat: webextensions.api.browserSettings.openSearchResultsInNewTabs
---

{{AddonSidebar()}}

A {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} object whose underlying value is a boolean.

If set to `true`, then when the user selects a term in the browser's search box, the search results are displayed in a new tab. If set to `false` (the default) the search results are shown in the current tab.

Note that this does not affect the behavior when selecting items from the omnibox/awesomebar,only the dedicated search box.

## Browser compatibility

{{Compat}}

## Examples

Set the setting to `true`:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.openSearchResultsInNewTabs
  .set({ value: true })
  .then(logResult);
```

{{WebExtExamples}}
