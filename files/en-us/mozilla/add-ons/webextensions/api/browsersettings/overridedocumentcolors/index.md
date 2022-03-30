---
title: browserSettings.overrideDocumentColors
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/overrideDocumentColors
tags:
  - API
  - Add-ons
  - Extensions
  - Property
  - Reference
  - WebExtensions
  - browserSettings
  - overrideDocumentColors
browser-compat: webextensions.api.browserSettings.overrideDocumentColors
---
{{AddonSidebar()}}

A {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} object whose underlying value is a string.

Firefox enables the user to set their own colors for document backgrounds and text. By default these values are only applied when a high-contrast theme is selected (a high-contrast theme is a feature of some operating system UIs that increases the contrast for improved accessibility). However, users can also choose to apply these colors always or never. This browser setting exposes that preference.

Its underlying value is a string that may take any one of the following values:

- "high-contrast-only": Apply the user's choices only when a high-contrast theme is selected. This is the default.
- "never":  Never apply the user's choices.
- "always": Always apply the user's choices.

## Browser compatibility

{{Compat}}

## Examples

Set the setting to "always":

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.overrideDocumentColors.set({value: "always"}).
  then(logResult);
```

{{WebExtExamples}}
