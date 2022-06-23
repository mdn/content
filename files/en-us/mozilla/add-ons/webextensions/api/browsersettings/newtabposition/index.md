---
title: browserSettings.newTabPosition
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/newTabPosition
tags:
  - API
  - Add-ons
  - Extensions
  - Property
  - Reference
  - WebExtensions
  - browserSettings
  - newTabPosition
browser-compat: webextensions.api.browserSettings.newTabPosition
---
{{AddonSidebar()}}

A {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} object that can be used to control the position of newly opened tabs relative to already open tabs.

The underlying value is a string that can take one of three values:

- "afterCurrent": Open all new tabs next to the current tab.
- "relatedAfterCurrent": The default. Open new tabs next to the current tab if they are related to the current tab (for example, if they were opened via a link in the current tab). Otherwise, open new tabs at the end of the tabstrip.
- "atEnd": Open all tabs at the end of the tabstrip.

## Browser compatibility

{{Compat}}

## Examples

This code sets the value to "afterCurrent" and then logs the new value:

```js
async function setAfterCurrent() {
  let result = await browser.browserSettings.newTabPosition.set({value: "afterCurrent"});
  console.log(`Result: ${result}`);
  let newValue = await browser.browserSettings.newTabPosition.get({});
  console.log(`New value: ${newValue.value}`);
}
```

{{WebExtExamples}}
