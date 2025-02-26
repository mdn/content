---
title: browserSettings.cacheEnabled
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/cacheEnabled
page-type: webextension-api-property
browser-compat: webextensions.api.browserSettings.cacheEnabled
---

{{AddonSidebar}}

A {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} object that can be used to globally enable or disable the browser cache.

The underlying value is a boolean.

## Browser compatibility

{{Compat}}

## Examples

Getting the current value of this setting:

```js
function logResult(result) {
  console.log(`Current value: ${result.value}`);
  console.log(`Current level of control: ${result.levelOfControl}`);
}

browser.browserSettings.cacheEnabled.get({}).then(logResult);
```

Disabling the browser cache:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.cacheEnabled.set({ value: false }).then(logResult);
```

{{WebExtExamples}}
