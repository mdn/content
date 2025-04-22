---
title: browserSettings.overrideContentColorScheme
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/overrideContentColorScheme
page-type: webextension-api-property
browser-compat: webextensions.api.browserSettings.overrideContentColorScheme
---

{{AddonSidebar}}

A {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} object whose underlying value is a string.

Firefox enables users to choose a theme for the browser UI. These themes apply either a light or dark theme to webpages. Using the `layout.css.prefers-color-scheme.content-override` preference, users can override the theme and choose to render webpages in a light or dark theme. This browser setting exposes that preference.

This object takes these values:

- "light": Applies a light theme to webpages.
- "dark": Applies a dark theme to webpages.
- "auto": Automatically applies a light or dark theme to webpages based on the browser's theme.

## Browser compatibility

{{Compat}}

## Examples

This example overrides the setting to use the dark theme for webpages:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.overrideContentColorScheme
  .set({ value: "dark" })
  .then(logResult);
```

{{WebExtExamples}}
