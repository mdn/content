---
title: browserSettings.overrideContentColorScheme
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/overrideContentColorScheme
tags:
  - API
  - Add-ons
  - Extensions
  - Property
  - Reference
  - WebExtensions
  - browserSettings
  - overrideContentColorScheme
browser-compat: webextensions.api.browserSettings.overrideContentColorScheme
---
{{AddonSidebar()}}

A {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} object whose underlying value is a string.

Firefox enables users to choose a theme for the browser UI. These themes apply either a light or dark theme to webpages. Using the  `layout.css.prefers-color-scheme.content-override` preference, users can override the theme and choose to render webpages in a light or dark theme or follow the device's theme. This browser setting exposes that preference.

This object takes these values:

- "light": Applies a light theme to webpages.
- "dark": Applies a  dark theme to webpages.
- "system": Applies a light or dark theme to webpages based on the device's theme.
- "browser": Applies a light or dark theme to webpages based on the browser's theme.

## Browser compatibility

{{Compat}}

## Examples

This example overrides the setting to use the dark theme for webpages:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.overrideContentColorScheme.set({value: "dark"}).
  then(logResult);
```

{{WebExtExamples}}
