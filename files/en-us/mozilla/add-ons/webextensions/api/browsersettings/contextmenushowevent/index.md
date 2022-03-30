---
title: browserSettings.contextMenuShowEvent
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/contextMenuShowEvent
tags:
  - API
  - Add-ons
  - Extensions
  - Property
  - Reference
  - WebExtensions
  - browserSettings
  - contextMenuShowEvent
browser-compat: webextensions.api.browserSettings.contextMenuShowEvent
---
{{AddonSidebar()}}

A {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} object which determines whether the browser's context menu is shown on the mouseup event or on the mousedown event.

Its underlying value is a string that may be either "mouseup" or "mousedown".

The default value is "mouseup" on Windows, and "mousedown" on macOS and Linux. Assigning to it on Windows has no effect - the setting is only designed to allow the context menu to be opened on mouseup instead of mousedown, not the inverse.

## Browser compatibility

{{Compat}}

## Examples

Set the setting to "mouseup":

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.contextMenuShowEvent.set({value: "mouseup"}).
  then(logResult);
```

{{WebExtExamples}}
