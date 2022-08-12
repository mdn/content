---
title: browserSettings.newTabPageOverride
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/newTabPageOverride
tags:
  - API
  - Add-ons
  - Extensions
  - Property
  - Reference
  - WebExtensions
  - browserSettings
  - newTabPageOverride
browser-compat: webextensions.api.browserSettings.newTabPageOverride
---
{{AddonSidebar()}}

A {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} object that can be used to get a string representing the URL for the "new tab" page: that is, the page that's loaded when the user opens a new empty tab.

Note that this is a read-only setting.

## Browser compatibility

{{Compat}}

## Examples

Get the current value of the new tab URL:

```js
browser.browserSettings.newTabPageOverride.get({}).then((result) => {
  console.log(result.value);
});
```

{{WebExtExamples}}
