---
title: devtools.panels.onThemeChanged
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/onThemeChanged
page-type: webextension-api-event
browser-compat: webextensions.api.devtools.panels.onThemeChanged
---

{{AddonSidebar()}}

Fired when the devtools theme changes.

## Syntax

```js-nolint
browser.devtools.panels.onThemeChanged.addListener(listener)
browser.devtools.panels.onThemeChanged.removeListener(listener)
browser.devtools.panels.onThemeChanged.hasListener(listener)
```

Events have three functions:

- `addListener(listener)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Check whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `listener`

  - : The function called when this event occurs. The function is passed this argument:

    - `themeName`
      - : `string`. Name of the new theme: this will be one of the permitted values for [`devtools.panels.themeName`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/themeName).

## Browser compatibility

{{Compat}}

## Examples

```js
browser.devtools.panels.onThemeChanged.addListener((newThemeName) => {
  console.log(`New theme: ${newThemeName}`);
});
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.devtools.panels`](https://developer.chrome.com/docs/extensions/reference/devtools_panels/) API.
