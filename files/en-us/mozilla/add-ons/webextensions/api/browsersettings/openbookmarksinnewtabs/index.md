---
title: browserSettings.openBookmarksInNewTabs
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/openBookmarksInNewTabs
tags:
  - API
  - Add-ons
  - Extensions
  - Property
  - Reference
  - WebExtensions
  - browserSettings
  - openBookmarksInNewTabs
browser-compat: webextensions.api.browserSettings.openBookmarksInNewTabs
---
{{AddonSidebar()}}

A {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} object whose underlying value is a boolean.

If set to `true`, then when the user selects a bookmark, it will be opened in a new tab. If set to `false` (the default) bookmarks are opened in the current tab.

## Browser compatibility

{{Compat}}

## Examples

Set the setting to `true`:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.openBookmarksInNewTabs.set({value: true}).
  then(logResult);
```

{{WebExtExamples}}
