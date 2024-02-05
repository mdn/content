---
title: browserSettings.zoomFullPage
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/zoomFullPage
page-type: webextension-api-property
browser-compat: webextensions.api.browserSettings.zoomFullPage
---

{{AddonSidebar}}

A {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} object whose underlying value is a boolean.

By default zoom applies to all the content of a web page. Using the [Zoom Text Only setting](https://support.mozilla.org/en-US/kb/font-size-and-zoom-increase-size-of-web-pages#w_how-to-only-change-the-size-of-the-text/en-US/docs/) users can choose to zoom only the text on a page. This settings enables web extensions to control this setting and determine whether zoom is applied to the entire page or to text only.

The settings are:

- `true`: zoom applies to all the content of a web page (default).
- `false`: zoom applies to web page text only.

## Browser compatibility

{{Compat}}

## Examples

Set the setting to `false`:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.zoomFullPage.set({ value: false }).then(logResult);
```

{{WebExtExamples}}
