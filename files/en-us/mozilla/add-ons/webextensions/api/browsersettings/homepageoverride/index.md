---
title: browserSettings.homepageOverride
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/homepageOverride
page-type: webextension-api-property
browser-compat: webextensions.api.browserSettings.homepageOverride
---

{{AddonSidebar}}

A {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} object that can be used to get a string representing the URL currently set as the browser's homepage.

Note that this is a read-only setting. To change the homepage, see [chrome_settings_overrides](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides).

## Browser compatibility

{{Compat}}

## Examples

Get the current value of the homepage URL:

```js
browser.browserSettings.homepageOverride.get({}).then((result) => {
  console.log(result.value);
});
```

{{WebExtExamples}}
