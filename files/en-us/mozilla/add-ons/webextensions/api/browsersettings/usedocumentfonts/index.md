---
title: browserSettings.useDocumentFonts
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/useDocumentFonts
page-type: webextension-api-property
browser-compat: webextensions.api.browserSettings.useDocumentFonts
---

{{AddonSidebar}}

A {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} object whose underlying value is a boolean.

By default, of course, web pages can specify the fonts they want using CSS properties like [`font-family`](/en-US/docs/Web/CSS/font-family). This setting enables an extension to instruct Firefox to ignore the fonts specified by the page, and only use system fonts.

Its underlying value is a boolean:

- `true`: use the fonts specified by the web page. This is the default.
- `false`: use the system fonts.

## Browser compatibility

{{Compat}}

## Examples

Set the setting to `false`:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.useDocumentFonts.set({ value: false }).then(logResult);
```

{{WebExtExamples}}
