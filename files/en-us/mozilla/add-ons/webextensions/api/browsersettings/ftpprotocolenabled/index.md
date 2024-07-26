---
title: browserSettings.ftpProtocolEnabled
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/ftpProtocolEnabled
page-type: webextension-api-property
browser-compat: webextensions.api.browserSettings.ftpProtocolEnabled
---

{{AddonSidebar}}

A {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} object that determines whether the FTP protocol is enabled in the browser.

The underlying value is a boolean.

> [!NOTE]
> From Firefox version 88 this setting is read-only.

## Browser compatibility

{{Compat}}

## Examples

Toggle the setting:

```js
function toggleAllowFtp() {
  function toggle(current) {
    console.log(`Current value: ${current.value}`);
    browser.browserSettings.ftpProtocolEnabled.set({ value: !current.value });
  }

  browser.browserSettings.ftpProtocolEnabled.get({}).then(toggle);
}

browser.browserAction.onClicked.addListener(() => {
  toggleAllowFtp();
});
```

{{WebExtExamples}}
