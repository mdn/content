---
title: browserSettings.openUrlbarResultsInNewTabs
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/openUrlbarResultsInNewTabs
page-type: webextension-api-property
browser-compat: webextensions.api.browserSettings.openUrlbarResultsInNewTabs
---

{{AddonSidebar()}}

A {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} object whose underlying value is a boolean.

When the user focuses the address bar and starts typing, the browser offers autocomplete suggestions: a dropdown list of web pages based on the user's incomplete input and their browsing history.

If set to `true`, then when the user selects one of these items, the item is opened in a new tab. If set to `false` (the default) the item is opened in the current tab.

## Browser compatibility

{{Compat}}

## Examples

Set the setting to `true`:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.openUrlbarResultsInNewTabs
  .set({ value: true })
  .then(logResult);
```

{{WebExtExamples}}
