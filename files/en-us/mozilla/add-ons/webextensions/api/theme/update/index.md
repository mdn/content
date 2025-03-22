---
title: theme.update()
slug: Mozilla/Add-ons/WebExtensions/API/theme/update
page-type: webextension-api-function
browser-compat: webextensions.api.theme.update
---

{{AddonSidebar}}

Updates the browser theme according to the content of the {{WebExtAPIRef("theme.Theme", "Theme")}} object.

To use this method, an extension must request the "theme" [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in its [manifest.json](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) file.

## Syntax

```js-nolint
browser.theme.update(
  windowId,    // integer
  theme        // object
)
```

### Parameters

- `windowId` {{optional_inline}}
  - : `integer`. The ID of a window. If this is provided, the theme is applied only to that window. If it is omitted, the theme is applied to all windows.
- `theme`
  - : `object`. A {{WebExtAPIRef("theme.Theme", "Theme")}} object specifying values for the UI elements you want to modify.

## Examples

Sets the browser theme to use a sun graphic with a complementary background color:

```js
const sunTheme = {
  images: {
    theme_frame: "sun.jpg",
  },
  colors: {
    frame: "#CF723F",
    tab_background_text: "#111",
  },
};

browser.theme.update(sunTheme);
```

Set the theme for the focused window only:

```js
const day = {
  images: {
    theme_frame: "sun.jpg",
  },
  colors: {
    frame: "#CF723F",
    tab_background_text: "#111",
  },
};

browser.menus.create({
  id: "set-theme",
  title: "set theme",
  contexts: ["all"],
});

async function updateThemeForCurrentWindow() {
  let currentWindow = await browser.windows.getLastFocused();
  browser.theme.update(currentWindow.id, day);
}

browser.menus.onClicked.addListener(updateThemeForCurrentWindow);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
