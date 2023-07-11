---
title: theme.update()
slug: Mozilla/Add-ons/WebExtensions/API/theme/update
page-type: webextension-api-function
browser-compat: webextensions.api.theme.update
---

{{AddonSidebar()}}

Updates the browser theme according to the content of given {{WebExtAPIRef("theme.Theme", "Theme")}} object.

## Syntax

```js-nolint
browser.theme.update(
  windowId,    // integer
  theme        // object
)
```

### Parameters

- `windowId` {{optional_inline}}
  - : `integer`. The ID of a window. If this is provided, the theme is applied only to that window. If it is omitted the theme is applied to all windows.
- `theme`
  - : `object`. A {{WebExtAPIRef("theme.Theme", "Theme")}} object specifying values for the UI elements you want to modify.

## Browser compatibility

{{Compat}}

## Examples

Sets the browser theme to use a sun graphic with complementary background color:

```js
const suntheme = {
  images: {
    theme_frame: "sun.jpg",
  },
  colors: {
    frame: "#CF723F",
    tab_background_text: "#111",
  },
};

browser.theme.update(suntheme);
```

Set the theme for just the currently focused window:

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
