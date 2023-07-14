---
title: theme.getCurrent()
slug: Mozilla/Add-ons/WebExtensions/API/theme/getCurrent
page-type: webextension-api-function
browser-compat: webextensions.api.theme.getCurrent
---

{{AddonSidebar()}}

Gets the currently used theme as a {{WebExtAPIRef("theme.Theme", "Theme")}} object. The arguments available in the color object are listed in the [properties of the color](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme#colors).

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let getting = browser.theme.getCurrent(
  windowId    // integer
)
```

### Parameters

- `windowId` {{optional_inline}}
  - : `integer`. The ID of a window. If this is provided, the theme applied on that window will be provided. If it is omitted the theme applied on the last focused window will be provided.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). The promise will be fulfilled with a {{WebExtAPIRef("theme.Theme")}} object representing the theme applied to the given window. If no extension-supplied theme has been applied to the given window, it will be fulfilled with an empty object.

## Browser compatibility

{{Compat}}

## Examples

Gets the properties `frame` and `toolbar` colors of the current theme

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
