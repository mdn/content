---
title: theme.getCurrent()
slug: Mozilla/Add-ons/WebExtensions/API/theme/getCurrent
page-type: webextension-api-function
browser-compat: webextensions.api.theme.getCurrent
---

{{AddonSidebar}}

Gets the current theme as a {{WebExtAPIRef("theme.Theme", "Theme")}} object.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let getting = browser.theme.getCurrent(
  windowId    // integer
)
```

### Parameters

- `windowId` {{optional_inline}}
  - : `integer`. The ID of a window. If this is provided, the theme resolved is the one applied to that window. If it is omitted, the theme resolved is the one applied to the most recently focused window.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). The promise is fulfilled with a {{WebExtAPIRef("theme.Theme")}} object representing the theme applied to the given window. If no extension-supplied theme has been applied to the given window, it is fulfilled with an empty object.

## Examples

Gets the properties `frame` and `toolbar` colors of the current theme:

```js
function getStyle(themeInfo) {
  if (themeInfo.colors) {
    console.log(`accent color: ${themeInfo.colors.frame}`);
    console.log(`toolbar: ${themeInfo.colors.toolbar}`);
  }
}

async function getCurrentThemeInfo() {
  const themeInfo = await browser.theme.getCurrent();
  getStyle(themeInfo);
}

getCurrentThemeInfo();
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
