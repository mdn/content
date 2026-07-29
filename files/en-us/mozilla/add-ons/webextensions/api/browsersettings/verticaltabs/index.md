---
title: browserSettings.verticalTabs
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/verticalTabs
page-type: webextension-api-property
browser-compat: webextensions.api.browserSettings.verticalTabs
sidebar: addonsidebar
---

A {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} object that represents whether the browser has vertical tabs enabled. The object's underlying value is a boolean.

## Examples

Set the setting to `false`, reverting to horizontal tabs:

```js
browser.browserSettings.verticalTabs
  .set({ value: false })
  .then((result) => console.log(`Tabs setting was modified: ${result}`));
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
